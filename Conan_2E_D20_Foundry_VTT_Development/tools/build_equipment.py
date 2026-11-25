"""Convert an audited equipment ODS to native Foundry Item and Folder source documents."""

import argparse
import hashlib
import json
import re
from collections import Counter
from fractions import Fraction
from html import escape
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile


NS = {
    "table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
}
TABLE = "{" + NS["table"] + "}"
TEXT = "{" + NS["text"] + "}"


def paragraph_text(element):
    parts = [element.text or ""]
    for child in element:
        if child.tag == TEXT + "s":
            parts.append(" " * int(child.get(TEXT + "c", 1)))
        elif child.tag == TEXT + "line-break":
            parts.append("\n")
        elif child.tag == TEXT + "tab":
            parts.append("\t")
        else:
            parts.append(paragraph_text(child))
        parts.append(child.tail or "")
    return "".join(parts)


def read_sheets(path):
    with ZipFile(path) as ods:
        spreadsheet = ET.fromstring(ods.read("content.xml")).find(".//office:spreadsheet", NS)
    sheets = {}
    for table in spreadsheet.findall("table:table", NS):
        records = []
        row_number = 1
        for row in table.iter(TABLE + "table-row"):
            cells = []
            column = 0
            for cell in row:
                if cell.tag not in {TABLE + "table-cell", TABLE + "covered-table-cell"}:
                    continue
                value = "\n".join(paragraph_text(p) for p in cell.findall("text:p", NS)).strip()
                width = int(cell.get(TABLE + "number-columns-repeated", 1))
                if value:
                    cells.extend([""] * (column - len(cells)))
                    cells.extend([value] * width)
                column += width
            height = int(row.get(TABLE + "number-rows-repeated", 1))
            if cells:
                records.extend((n, cells) for n in range(row_number, row_number + height))
            row_number += height
        sheets[table.get(TABLE + "name")] = records
    return sheets


# The current table header determines the layout. Some tabs restart their tables
# after several pages of rules and audit notes, sometimes with different columns.
PACKS = {
    "Clothing & Equipment": "equipment", "Weapons": "weapons", "Armour": "armor",
    "Weapon & Armor Modifications": "equipment-modifications",
    "Alchemical Items": "alchemical-items", "Herbs & Poisons": "herbs-poisons",
    "War Machines": "war-machines", "Unusual Items": "unusual-items",
    "Vehicles": "vehicles", "Ship Parts": "ship-parts", "Animals & Mounts": "animals-mounts",
}
NAME_COLUMNS = ("Item", "Weapon", "Armour", "Name", "Machine", "Vehicle", "Part / Component", "Animal / Mount")
FRACTIONS = dict(zip("¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞",
                     ("1/4", "1/2", "3/4", "1/7", "1/9", "1/10", "1/3", "2/3", "1/5",
                      "2/5", "3/5", "4/5", "1/6", "5/6", "1/8", "3/8", "5/8", "7/8")))


def compact(value):
    return " ".join(value.split())


def weight_in_pounds(value):
    """Only an explicit item mass contributes to encumbrance, never a capacity or range."""
    text = value.lower()
    for glyph, fraction in FRACTIONS.items():
        text = text.replace(glyph, " " + fraction)
    text = re.sub(r"(?<=\d)-(?=\d+/)", " ", text.strip())
    match = re.match(r"((?:\d+\s+)?\d+/\d+|\d+(?:\.\d+)?)\s*(lb[s]?|oz)\b\.?(.*)$", text)
    if not match:
        return 0
    number, unit, suffix = match.groups()
    # A second mass with its own number signals alternatives. For a container,
    # the first mass is its tare, and the text after the semicolon is capacity.
    if re.search(r"\bor more\b|\d\s*lbs?\b", suffix):
        return 0
    pounds = sum(Fraction(part) for part in number.split())
    return float(pounds / (16 if unit == "oz" else 1))


def first_integer(value):
    match = re.match(r"^[+−-]?\d+", value.replace("−", "-"))
    return int(match[0]) if match else 0


def item_rows(sheet, rows):
    headers = []
    heading = ""
    proficiency = ""
    weapon_groups = {"Unarmed Melee Weapons", "Light Melee Weapons", "One Handed Melee Weapons",
                     "Two Handed Melee Weapons", "Ranged Weapons", "Shields",
                     "Additional Published Weapon and Ammunition Profiles"}
    armor_groups = {"Light Armour", "Medium Armour", "Heavy Armour", "Helmets", "Shields",
                    "Additional Published Armour Profile", "Argos and Zingara: Unpriced Gladiator Armour"}
    for number, cells in rows:
        if cells[0] in {"Book", "Source Book"}:
            headers = cells
            continue
        if len(cells) == 1:
            title = cells[0]
            if sheet == "Weapons" and title in {"Simple Weapons", "Martial Weapons", "Exotic Weapons"}:
                proficiency = title.split()[0]
            if title in weapon_groups or title in armor_groups:
                heading = title
            continue
        if not headers or len(cells) < 3 or not cells[0] or not cells[1]:
            continue
        if sheet == "Animals & Mounts" and ("Rule Topic" in headers or len(cells) < 7):
            continue
        fields = {key: compact(val) for key, val in zip(headers, cells) if key}
        name_column = next((key for key in NAME_COLUMNS if fields.get(key)), None)
        if name_column:
            yield number, fields[name_column], fields, proficiency, heading


def stable_id(*parts):
    return hashlib.sha256("\0".join(parts).casefold().encode("utf-8")).hexdigest()[:16]


def description(details, sheet, row):
    def display(value):
        return escape(str(value))
    paragraphs = [f"<p><strong>{display(label)}</strong> {display(value)}</p>"
                  for label, value in details.items() if value and value not in {"—", "-", "--"}]
    paragraphs.append(f"<p><em>Equipment index · {display(sheet)}, row {row}</em></p>")
    return "".join(paragraphs)


def named_fields(fields, *names):
    return {name: fields[name] for name in names if fields.get(name)}


WEAPON_RULES = {
    "Machete": "+2 on Survival checks to navigate jungle or heavy forest.",
    "Swordfist": "May use an applicable unarmed or short-sword feat for an attack. The benefits do not stack.",
    "Keris (Negative)": "Applies −1d6 to the magic attack roll when used for a death spell.",
    "Keris (Positive)": "Adds 1d6 to the magic attack roll when used for a death spell.",
    "Bladespear": "Switch between reach and ordinary melee use as a move action.",
    "Flail": "A proficient attack imposes −3 to the target’s Parry Defence.",
    "Whip": "+2 on opposed disarm rolls.",
    "Lance, Light": "A mounted charge doubles damage and gives +1 armour piercing.",
    "Katar (Player’s Guide profile)": "Some variants add 1d6 damage while open. The GM determines eligibility.",
}


def weapon(name, fields, proficiency, heading):
    qualities = fields["Special"]
    ammo = bool(re.search(r"\b(arrows|bolts|bullets)\b", name, re.I))
    if ammo:
        details = named_fields(fields, "Weight", "Hardness", "Hit Points", "Common Regions")
        details["Inventory unit"] = "One bundle of the size shown in the item name. Use the firing weapon’s damage."
        return "gear", "Ammunition", {"quantity": 1}, details
    if heading.startswith("Additional"):
        proficiency = re.match(r"(Simple|Martial|Exotic)\b", qualities, re.I)[1].title()
        heading = "Light Melee Weapons" if "light" in qualities.lower() else "One Handed Melee Weapons"
    group = f"{proficiency} · {heading}"
    thrown = name in {"Discus", "Javelin", "Long Darts (5)"}
    attack = ("thrown" if thrown else "ranged") if heading == "Ranged Weapons" else "melee"
    two_handed = heading == "Two Handed Melee Weapons" or (attack == "ranged" and name != "Sling")
    traits = re.sub(r"(?:,?\s*see description)|(?:\s*\(see A150\))", "", qualities, flags=re.I).strip(" ,;-")
    stats = {
        "damage": fields["Damage"].lower(), "critical": fields["Critical Multiplier"],
        "attackType": attack, "handedness": "two" if two_handed else "one",
        "armorPiercing": first_integer(fields["Armor Piercing"]),
        "rangeIncrement": first_integer(fields["Range Increment"]),
        "hardness": first_integer(fields["Hardness"]), "hitpoints": first_integer(fields["Hit Points"]),
        "damageType": fields["Type"], "qualities": traits, "commonRegions": fields.get("Common Regions", ""),
        "finesse": "finesse" in traits.lower() and "in two hands" not in traits.lower(),
    }
    details = {"Game rules": WEAPON_RULES.get(name, ""), "Qualities": traits}
    if attack == "melee" and stats["rangeIncrement"]:
        details["Alternate attack"] = f"Thrown, {stats['rangeIncrement']} ft. range increment."
    details.update(named_fields(fields, "Weight", "Common Regions"))
    return "weapon", group, stats, details


def armor(name, fields, heading, shield):
    if heading.startswith("Additional"):
        heading = "Heavy Armour" if "heavy armour" in fields.get("Description", "").lower() else "Armour"
    elif heading.startswith("Argos"):
        heading = "Gladiator Armour"
    stats = {
        "damageReduction": first_integer(fields.get("Damage Reduction", "")),
        "maxDexBonus": fields["Maximum Dex Bonus"] if re.fullmatch(r"[+-]?\d+", fields["Maximum Dex Bonus"]) else "",
        "armorPenalty": first_integer(fields["Armor Check Penalty"]),
        "sorceryFailure": first_integer(fields["Sorcery Failure"]),
        "speed": fields.get("Speed", ""), "shieldBonus": first_integer(fields.get("Shield Bonus", "")),
        "commonRegions": fields.get("Common Regions", ""),
    }
    details = named_fields(fields, "Damage Reduction", "Shield Bonus", "Maximum Dex Bonus", "Armor Check Penalty",
                           "Sorcery Failure", "Speed", "Weight", "Common Regions")
    if name in {"Great Helm", "Visored Helm"}:
        # This is a task-specific Perception penalty, not a general armor check penalty.
        stats["armorPenalty"] = 0
        details["Perception"] = "−2 on Listen and Spot tasks. Search is unaffected."
        if name == "Visored Helm":
            details["Visor"] = "Raised: DR 1 and Listen −2. Lowered: DR 2 and Listen/Spot −2. Set DR for the current position."
    if name == "Gladiator armoured sleeve":
        details["Parry Defence"] = "+1 armour bonus when used to parry."
    if shield:
        _, offense = shield
        stats.update(damage=offense["Damage"], critical=offense["Critical Multiplier"],
                     damageType=offense["Type"], armorPiercing=first_integer(offense["Armor Piercing"]),
                     hardness=first_integer(offense["Hardness"]), hitpoints=first_integer(offense["Hit Points"]))
        details["Shield attack profile"] = f"Weapons, row {shield[0]}."
    return "armor", heading, stats, details


def unusual_details(fields):
    category = fields["Category"]
    rules = fields["Effect / Rules"]
    if category.startswith("Lesser component"):
        use = re.search(r"Used in:\s*(.+?)(?:\.|$)", rules, re.I)
        check = re.search(r"(?:Craft\s*\([^)]+\)|Heal|Survival)\s*DC\s*\d+", fields["Requirements"], re.I)
        return {"Spell use": use[1] if use else "", "Skill check": check[0] if check else ""}
    # Cost/focus entries reference spells; the item itself grants no spell or effect.
    if any(token in category.lower() for token in ("material", "component", "spell-focus", "focus value")):
        return {"Associated spell or requirement": fields["Requirements"].split(";")[0]}
    if category in {"Security container", "Stygian incense/drug", "Sabatean lore tome"}:
        return {"Item type": category}
    return named_fields(fields, "Requirements", "Effect / Rules")


def gear(sheet, name, fields):
    category = fields.get("Category") or fields.get("Kind") or fields.get("Type") or sheet
    details = {}
    if sheet == "Clothing & Equipment":
        details = named_fields(fields, "Weight / Capacity")
        # Keep ordinary equipment descriptions and price qualifications on the item.
        # For specialised supplies retain their catalog identity and source reference.
        special = {"Specialized Martial Gear", "Medical kit", "Medical reference text",
                   "Tracking disguise — unpriced reference", "Local Escape Access"}
        reference_only = {"Caltrops", "Stygian Depilatory", "Sapper’s Kit", "Acid Etching Stylus",
                          "Blood-letting Kit", "Cording Mallet", "Leech Book", "Plague Gear",
                          "Animal claws attached to feet", "Assassination contract — source quotation"}
        if category not in special and name not in reference_only:
            details.update(named_fields(fields, "Rules / Description"))
    elif sheet == "Weapon & Armor Modifications":
        details = named_fields(fields, "Applies To", "Craft Check", "Weight Change (lb)", "Combat Statistics")
    elif sheet in {"Alchemical Items", "Herbs & Poisons"}:
        from equipment_effects import game_effects
        details = game_effects(sheet, fields)
    elif sheet == "War Machines":
        details = named_fields(fields, "Structure Dice / Points", "Hardness", "Size", "DV", "Attacks",
                               "Damage (normal / structural)", "Crew")
        if name != "Cauldron":
            details.update(named_fields(fields, "Range Increment / Length", "Rate / Crew Actions"))
    elif sheet == "Unusual Items":
        details = unusual_details(fields)
    elif sheet == "Vehicles":
        details = named_fields(fields, "Size / Dimensions", "Crew", "Capacity", "Speed / Movement", "Hardness / HP")
    elif sheet == "Ship Parts":
        details = named_fields(fields, "Craft DC", "Primary Effect")
    elif sheet == "Animals & Mounts":
        if "Item" in fields:
            category = "Mount Equipment & Services"
            details = named_fields(fields, "Weight", "Rules / Use")
        else:
            details = named_fields(fields, "Size / Type", "Hit Dice / HP", "Speed", "Combat Statistics",
                                   "Saves / Abilities", "Skills / Feats / Qualities", "Carrying Capacity / Travel")
    return "gear", category, {"quantity": 1}, details


def source_label(book, pages):
    if all(code.strip() in pages.split() for code in book.split(";")):
        return pages
    return f"{book} p. {pages}"


def build_items(sheets):
    shield_rows = {name: (row, fields) for row, name, fields, _, group in item_rows("Weapons", sheets["Weapons"])
                   if group == "Shields"}
    packs = {}
    for sheet, pack in PACKS.items():
        items = []
        for row, name, fields, proficiency, heading in item_rows(sheet, sheets[sheet]):
            book, pages = [fields.get(key) for key in ("Book", "Page")]
            book = book or fields["Source Book"]
            pages = pages or fields["Page(s)"]
            origin = {"sheet": sheet, "row": row, "book": book, "pages": pages}
            if sheet == "Weapons":
                if heading == "Shields":
                    continue
                subtype, category, stats, details = weapon(name, fields, proficiency, heading)
            elif sheet == "Armour":
                shield = shield_rows.pop(name) if "Shield Bonus" in fields else None
                subtype, category, stats, details = armor(name, fields, heading, shield)
                if shield:
                    origin["weaponRow"] = shield[0]
            else:
                subtype, category, stats, details = gear(sheet, name, fields)
            cost = next((fields[k] for k in ("Cost", "Cost / Value", "Cost (sp)") if k in fields), "")
            weight = fields.get("Weight", fields.get("Weight / Capacity", ""))
            stats.update(category=category, cost=cost, weight=weight_in_pounds(weight), equipped=False,
                         source=source_label(book, pages), description=description(details, sheet, row))
            doc_id = stable_id("conan", pack, name, category)
            items.append({"_id": doc_id, "_key": f"!items!{doc_id}", "name": name, "type": subtype,
                          "img": {"weapon": "icons/svg/sword.svg", "armor": "icons/svg/shield.svg",
                                  "gear": "icons/svg/item-bag.svg"}[subtype],
                          "system": stats, "flags": {"conan": {"equipmentIndex": origin}}})
        if len({item["_id"] for item in items}) != len(items):
            raise ValueError(f"Duplicate document ID in {sheet}")
        if not items:
            raise ValueError(f"No entries found in {sheet}")
        packs[pack] = items
    if shield_rows:
        raise ValueError(f"Unmatched shield profiles: {sorted(shield_rows)}")
    return packs


def write_sources(workbook, output):
    if output.exists() and any(output.iterdir()):
        raise ValueError(f"Use an empty directory for the generated sources: {output}")
    packs = build_items(read_sheets(workbook))
    for pack, items in packs.items():
        target = output / pack
        target.mkdir(parents=True, exist_ok=True)
        # Repeating categories get browseable Item folders; singletons remain searchable at the root.
        counts = Counter(item["system"]["category"] for item in items)
        folders = {}
        if len(items) >= 25 and len(counts) > 1:
            for category, count in counts.items():
                if count >= 3:
                    fid = stable_id("conan", pack, "folder", category)
                    folders[category] = {"_id": fid, "_key": f"!folders!{fid}", "name": category,
                                         "type": "Item", "folder": None, "sorting": "a"}
        for item in items:
            folder = folders.get(item["system"]["category"])
            if folder:
                item["folder"] = folder["_id"]
        for doc in [*items, *folders.values()]:
            (target / (doc["_id"] + ".json")).write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n",
                                                         encoding="utf-8")
        print(f"{pack}: {len(items)} items, {len(folders)} folders")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("workbook", type=Path)
    parser.add_argument("output", type=Path, help="Empty staging directory for Foundry CLI sources")
    args = parser.parse_args()
    write_sources(args.workbook, args.output)
