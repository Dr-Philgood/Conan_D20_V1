// Weapons compendium importer.
// Builds weapon item entries from packs/weapons-source.json.

import { createPackItems, deletePackFolders, ensurePackFolders, getFolderId, lockPack, unlockPack } from "./utils.mjs";

const DEFAULT_WEAPON_SYSTEM = {
  description: "",
  category: "",
  attackType: "melee",
  damage: "1d6",
  critical: "x2",
  damageType: "",
  qualities: "",
  quality: "average",
  material: "iron",
  hitpoints: 0,
  hardness: 0,
  handedness: "one",
  rangeIncrement: 0,
  armorPiercing: 0,
  finesse: false,
  attackBonus: 0,
  equipped: true,
  weight: 0,
  cost: ""
};

const DESCRIPTION_HEADINGS = [
  "Arbalest",
  "Axe",
  "Bardiche",
  "Battleaxe",
  "Bill",
  "Bow, Hunting",
  "Bow, Hyrkanian",
  "Bow, Shemite",
  "Bow, Stygian",
  "Broadsword",
  "Club",
  "Club, War",
  "Crossbow",
  "Cutlass",
  "Dagger",
  "Gauntlet",
  "Greatsword",
  "Hatchet",
  "Javelin",
  "Knife",
  "Knife, Ghanata",
  "Knife, Yuetshi",
  "Knife, Zhaibar",
  "Lance, Heavy",
  "Lance, Light",
  "Longbow, Bossonian",
  "Mace, Heavy or Light",
  "Pike",
  "Pollaxe",
  "Pommel",
  "Poniard",
  "Sabre",
  "Scimitar",
  "Sling",
  "Spear, Hunting",
  "Spear, War",
  "Staff",
  "Stiletto",
  "Sword, Arming",
  "Sword, Short",
  "Sword, War",
  "Tulwar",
  "Unarmed Strike",
  "Warhammer",
  "Whip"
];

const BOW_DESCRIPTION_NAMES = new Set([
  "Bow, Hunting",
  "Bow, Hyrkanian",
  "Bow, Shemite",
  "Bow, Stygian",
  "Longbow, Bossonian",
  "Horsebow"
]);

const DESCRIPTION_ALIASES = new Map([
  ["Club,War", "Club, War"],
  ["Long Darts", "Long Dart (5)"],
  ["Mace, Heavy or Light", ["Mace, Heavy", "Mace, Light"]]
]);

const ADDITIONAL_DESCRIPTION_HEADINGS = [
  "Aquilonian Shieldknife",
  "Bladespear",
  "Cudgel",
  "Discus",
  "Flail",
  "Halberd",
  "Half-Spear",
  "Hook",
  "Horsebow",
  "Hyborian Pick",
  "Katar",
  "Knuckledusters",
  "Kusani Axe",
  "Kushknife",
  "Light Axe",
  "Long Darts",
  "Long Arrows",
  "Machete",
  "Maul",
  "Pommel Spike",
  "Stygian Scimitar",
  "Swordfist",
  "Trident",
  "War Gauntlet",
  "Warmace"
];

const ALL_DESCRIPTION_HEADINGS = [...DESCRIPTION_HEADINGS, ...ADDITIONAL_DESCRIPTION_HEADINGS];

const TABLE_LINE_PATTERNS = [
  /^Equipment$/i,
  /^\d+$/,
  /^Weapon Cost Damage Critical$/i,
  /^Armour$/i,
  /^Piercing$/i,
  /^Range$/i,
  /^Increment Hardness$/i,
  /^Hit$/i,
  /^Points Weight Type$/i,
  /^(Simple|Martial|Exotic) Weapons$/i,
  /^(Light|One-Handed|Two-Handed|Ranged) (Melee )?Weapons?$/i,
  /^Unarmed Attacks$/i,
  /^\* ?See the weapon description/i,
  /^F Finesse weapon/i,
  /^R Reach weapon/i,
  /^\*\* The Armour Piercing score/i
];

const CAPTION_LINES = new Set([
  "Arbalest",
  "Arming",
  "Axe",
  "Bardiche",
  "Battleaxe",
  "Bill",
  "Bossonian",
  "Broad",
  "Club",
  "Crossbow",
  "Cutlass",
  "Dagger",
  "Gauntlet",
  "Ghanata",
  "Greatsword Tulwar",
  "Hatchet",
  "Heavy Lance",
  "Heavy Mace",
  "Hunting",
  "Hunting Bow",
  "Hunting Spear",
  "Hyrkanian",
  "Javelin",
  "Knife",
  "Light Lance",
  "Mace",
  "Pike",
  "Pollaxe",
  "Poniard",
  "Sabre",
  "Scimitar",
  "Shemite",
  "Short",
  "Sling",
  "Staff",
  "Stiletto",
  "Stygian",
  "Sword",
  "War",
  "War Club",
  "War Spear",
  "War Sword",
  "Warhammer",
  "Whip",
  "Yuetshi Knife",
  "Zhaibar",
  "Zhaibar Knife"
]);

function cleanWeaponDescriptionText(text) {
  return String(text ?? "")
    .replaceAll("â€™", "'")
    .replaceAll("â€˜", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replaceAll("â€“", "-")
    .replaceAll("â€”", "-")
    .replaceAll("Ã—", "x")
    .replaceAll("Â½", "1/2")
    .replaceAll("â€“1", "-1")
    .replaceAll("â€“2", "-2");
}

function removeEmbeddedTables(text) {
  return text
    .replace(/Strength Ratings for Bows[\s\S]*?decks\./, "decks.")
    .replace(/Exotic Weapons[\s\S]*?152\s+Equipment\s+is intended/, "is intended");
}

function isTableLine(line) {
  const trimmed = line.trim();
  return CAPTION_LINES.has(trimmed) || TABLE_LINE_PATTERNS.some((pattern) => pattern.test(trimmed));
}

function cleanDescriptionBlock(block) {
  return block
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !isTableLine(line))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractBowStrengthRules(text) {
  const start = text.indexOf("Strength Ratings for Bows");
  if (start === -1) return "";

  const endMarkers = ["\nMartial Weapons", "\r\nMartial Weapons"];
  const end = endMarkers
    .map((marker) => text.indexOf(marker, start))
    .filter((index) => index !== -1)
    .sort((a, b) => a - b)[0];

  return cleanDescriptionBlock(text.slice(start, end ?? undefined));
}

export function parseWeaponDescriptions(descriptionText) {
  const rawText = cleanWeaponDescriptionText(descriptionText);
  const bowStrengthRules = extractBowStrengthRules(rawText);
  const text = removeEmbeddedTables(rawText);
  const positions = [];

  for (const heading of ALL_DESCRIPTION_HEADINGS) {
    const variants = heading === "Club, War" ? [heading, "Club,War"] : [heading];
    for (const variant of variants) {
      const pattern = new RegExp(`(^|\\n)${variant.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:`, "g");
      for (const match of text.matchAll(pattern)) {
        positions.push({
          heading: DESCRIPTION_ALIASES.get(variant) ?? heading,
          index: match.index + match[1].length,
          bodyStart: match.index + match[0].length
        });
      }
    }
  }

  positions.sort((a, b) => a.index - b.index);

  const descriptions = new Map();
  for (let index = 0; index < positions.length; index += 1) {
    const current = positions[index];
    const next = positions[index + 1];
    const description = cleanDescriptionBlock(text.slice(current.bodyStart, next?.index ?? undefined));
    if (!description) continue;

    const targets = Array.isArray(current.heading) ? current.heading : [current.heading];
    for (const target of targets) descriptions.set(target, description);
  }

  const horsebowDescription = descriptions.get("Horsebow");
  const longArrowsDescription = descriptions.get("Long Arrows");
  if (horsebowDescription && longArrowsDescription) {
    descriptions.set("Horsebow", `${horsebowDescription}\n\nLong Arrows: ${longArrowsDescription}`);
  }

  if (bowStrengthRules) {
    for (const name of BOW_DESCRIPTION_NAMES) {
      const baseDescription = descriptions.get(name);
      if (baseDescription) descriptions.set(name, `${baseDescription}\n\n${bowStrengthRules}`);
    }
  }

  return descriptions;
}

function htmlify(text) {
  const escaped = String(text ?? "")
    .trim()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return escaped ? `<p>${escaped.replace(/\r?\n/g, "<br>")}</p>` : "";
}

function normalizeWeapon(rawWeapon) {
  const system = {
    ...DEFAULT_WEAPON_SYSTEM,
    ...rawWeapon.system,
    description: htmlify(rawWeapon.description ?? rawWeapon.system?.description),
    category: rawWeapon.category ?? rawWeapon.system?.category ?? DEFAULT_WEAPON_SYSTEM.category,
    attackType: rawWeapon.attackType ?? rawWeapon.system?.attackType ?? DEFAULT_WEAPON_SYSTEM.attackType,
    damage: rawWeapon.damage ?? rawWeapon.system?.damage ?? DEFAULT_WEAPON_SYSTEM.damage,
    critical: rawWeapon.critical ?? rawWeapon.system?.critical ?? DEFAULT_WEAPON_SYSTEM.critical,
    damageType: rawWeapon.damageType ?? rawWeapon.system?.damageType ?? DEFAULT_WEAPON_SYSTEM.damageType,
    qualities: rawWeapon.qualities ?? rawWeapon.system?.qualities ?? DEFAULT_WEAPON_SYSTEM.qualities,
    quality: rawWeapon.quality ?? rawWeapon.system?.quality ?? DEFAULT_WEAPON_SYSTEM.quality,
    material: rawWeapon.material ?? rawWeapon.system?.material ?? DEFAULT_WEAPON_SYSTEM.material,
    hitpoints: Number(rawWeapon.hitpoints ?? rawWeapon.system?.hitpoints ?? DEFAULT_WEAPON_SYSTEM.hitpoints),
    hardness: Number(rawWeapon.hardness ?? rawWeapon.system?.hardness ?? DEFAULT_WEAPON_SYSTEM.hardness),
    handedness: rawWeapon.handedness ?? rawWeapon.system?.handedness ?? DEFAULT_WEAPON_SYSTEM.handedness,
    rangeIncrement: Number(rawWeapon.rangeIncrement ?? rawWeapon.system?.rangeIncrement ?? DEFAULT_WEAPON_SYSTEM.rangeIncrement),
    armorPiercing: Number(rawWeapon.armorPiercing ?? rawWeapon.system?.armorPiercing ?? DEFAULT_WEAPON_SYSTEM.armorPiercing),
    finesse: Boolean(rawWeapon.finesse ?? rawWeapon.system?.finesse ?? DEFAULT_WEAPON_SYSTEM.finesse),
    attackBonus: Number(rawWeapon.attackBonus ?? rawWeapon.system?.attackBonus ?? DEFAULT_WEAPON_SYSTEM.attackBonus),
    equipped: Boolean(rawWeapon.equipped ?? rawWeapon.system?.equipped ?? DEFAULT_WEAPON_SYSTEM.equipped),
    weight: Number(rawWeapon.weight ?? rawWeapon.system?.weight ?? DEFAULT_WEAPON_SYSTEM.weight),
    cost: rawWeapon.cost ?? rawWeapon.system?.cost ?? DEFAULT_WEAPON_SYSTEM.cost
  };

  return {
    name: rawWeapon.name,
    type: "weapon",
    img: rawWeapon.img ?? "icons/svg/sword.svg",
    system
  };
}

export function buildWeaponItems(sourceData, descriptionText = "") {
  const weapons = Array.isArray(sourceData) ? sourceData : sourceData.weapons ?? [];
  const descriptions = parseWeaponDescriptions(descriptionText);

  return weapons
    .filter((weapon) => weapon?.name)
    .map((weapon) =>
      normalizeWeapon({
        ...weapon,
        description: weapon.description ?? weapon.system?.description ?? descriptions.get(weapon.name) ?? ""
      })
    );
}

async function ensureWeaponCategoryFolders(pack, items) {
  const categories = [...new Set(items.map((item) => item.system.category || "Weapons"))].sort();
  return ensurePackFolders(pack, categories);
}

function weaponKey(item) {
  return `${item.name}|${item.system.category}|${item.system.damage}|${item.system.critical}|${item.system.material}|${item.system.quality}`;
}

export async function importWeaponsPack({ clear = false } = {}) {
  const pack = game.packs.get("conan.weapons");
  if (!pack) {
    ui.notifications?.warn("Conan | Weapons compendium pack was not found.");
    return { created: 0, skipped: 0 };
  }

  await unlockPack(pack);

  try {
    const response = await fetch("systems/conan/packs/weapons-source.json");
    const sourceData = await response.json();
    let descriptionText = "";
    try {
      const descriptionResponse = await fetch("systems/conan/packs/weapon-descriptions.txt");
      if (descriptionResponse.ok) descriptionText = await descriptionResponse.text();
    } catch (_error) {
      descriptionText = "";
    }

    const items = buildWeaponItems(sourceData, descriptionText);

    if (clear) {
      const existing = await pack.getDocuments();
      await Item.deleteDocuments(existing.map((item) => item.id), { pack: pack.collection });
      await deletePackFolders(pack);
    }

    const folderMap = await ensureWeaponCategoryFolders(pack, items);
    const itemsWithFolders = items.map((item) => ({
      ...item,
      folder: folderMap.get(item.system.category || "Weapons")?.id ?? null
    }));

    const existing = await pack.getDocuments();
    const existingByKey = new Map(existing.map((item) => [weaponKey(item), item]));
    const toCreate = itemsWithFolders.filter((item) => !existingByKey.has(weaponKey(item)));

    await createPackItems(toCreate, pack);

    for (const itemData of itemsWithFolders) {
      const existingItem = existingByKey.get(weaponKey(itemData));
      const existingFolderId = getFolderId(existingItem?.folder);
      const updateData = {};
      if (existingItem && itemData.folder && existingFolderId !== itemData.folder) {
        updateData.folder = itemData.folder;
      }
      if (existingItem && itemData.system.description !== existingItem.system.description) {
        updateData["system.description"] = itemData.system.description;
      }
      if (existingItem && Object.keys(updateData).length) {
        await existingItem.update(updateData);
      }
    }

    return { created: toCreate.length, skipped: itemsWithFolders.length - toCreate.length };
  } finally {
    await lockPack(pack);
  }
}

export function registerWeaponsPackImporter() {
  game.conan ??= {};
  game.conan.importWeaponsPack = importWeaponsPack;

  const autoImport = async () => {
    if (!game.user?.isGM) return;
    const pack = game.packs.get("conan.weapons");
    if (!pack) return;
    try {
      const existing = await pack.getDocuments();
      if (existing.length === 0) {
        const result = await importWeaponsPack();
        console.log(`Conan | Weapons compendium populated: ${result.created} created.`);
      } else {
        await lockPack(pack);
      }
    } catch (error) {
      console.error("Conan | Weapons compendium import failed.", error);
      ui.notifications?.error("Conan | Weapons compendium import failed. Check the console for details.");
    }
  };

  if (game.ready) setTimeout(autoImport, 0);
  else Hooks.once("ready", autoImport);
}
