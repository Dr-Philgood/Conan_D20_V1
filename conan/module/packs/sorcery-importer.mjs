// Sorcery compendium importer.
// Builds Sorcery item entries from the user-provided source text in packs/sorcery-source.txt.

import { createPackItems, deletePackFolders, ensurePackFolders, getFolderId, lockPack, unlockPack } from "./utils.mjs";

const STYLE_MAP = {
  Counterspells: ["Desperate Ward", "Greater Warding", "Incantation of Amalric’s Witchman", "Rune of Jhebbal Sag", "Ward Dwelling", "Ward by Will"],
  Curses: ["Lesser Ill-Fortune", "Weapon Curse", "Awful Rite of the Were-Beast", "Curse of Yizil", "Dance of the Changing Serpent", "Doom", "Draw Forth the Soul", "Gelid Bones", "Ill-Fortune", "Greater Ill-Fortune"],
  Divination: ["Astrological Prediction", "Not This Hour", "Blessing of Fate", "Dream of Wisdom", "Mind-Reading", "Psychometry", "Sorcerous News", "Greater Sorcerous News", "Visions", "Visions of Torment and Enlightenment"],
  Hypnotism: ["Entrance", "Terrible Fascination", "Dance of the Cobras", "Domination", "Dread Serpent", "Hypnotic Suggestion", "Mass Hypnotic Suggestion", "Ranged Hypnotism", "Savage Beast"],
  "Nature Magic": ["Summon Beast", "Greater Summon Beast", "Animal Intercessor", "Animal Ally", "Children of the Night", "Sorcerous Garden", "Spirit of the Land", "Command Weather"],
  Necromancy: ["Raise Corpse", "Chill of the Grave", "The Dead Speak", "Agonising Doom", "Black Plague", "Greater Black Plague", "Death Touch", "Draw Forth the Heart"],
  "Oriental Magic": ["Calm of the Adept", "Vanish", "Darting Serpent", "Willow Dance", "Shape-Shifter", "Warrior Trance", "Yimsha’s Carpet"],
  Prestidigitation: ["Conjuring", "Blast Wave", "Burst Barrier", "Conjure Item", "Telekinesis", "Greater Telekinesis", "Deflection"],
  Summoning: ["Master-Words and Signs", "Demonic Pact", "Master, Aid Me!", "Greater Demonic Pact", "Summon Demon", "Summon Elemental", "Channel Demon"]
};

const MIGHTY_SPELLS = new Set(["Command Weather", "Black Plague", "Greater Black Plague", "Summon Demon", "Summon Elemental"]);

const FIELD_NAMES = [
  "Power Point Cost", "Components", "Casting Time", "Range", "Target", "Effect", "Duration",
  "Saving Throw", "Prerequisite", "Prerequisites", "Magic Attack Roll", "Skill Check",
  "Material Component", "Material Components", "Material Component or Focus", "Focus",
  "Experience Point Cost", "Special Note"
];

function cleanSourceText(text) {
  return text
    .replaceAll("â€™", "’")
    .replaceAll("â€˜", "‘")
    .replaceAll("â€œ", "“")
    .replaceAll("â€\u009d", "”")
    .replaceAll("â€“", "–")
    .replaceAll("â€”", "—")
    .replaceAll("âˆ’", "−")
    .replaceAll("â€¦", "…")
    .replaceAll("\r", "");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function nameRegex(name) {
  const escapedParts = name.split(/\s+/).map(escapeRegex);
  return new RegExp(
    escapedParts.join("\\s+")
      .replaceAll("’", "[’']")
      .replaceAll("-", "[-–—]"),
    "gi"
  );
}

function normalizeText(text) {
  return String(text ?? "")
    .replace(/\n(?=[a-z,;)])/g, " ")
    .replace(/\n(?=\d+\s*(?:feet|ft|points|ranks|per|or)\b)/gi, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function htmlify(text) {
  const escaped = normalizeText(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return escaped
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph.replaceAll("\n", "<br>")}</p>`)
    .join("\n");
}

function fieldKey(label) {
  const key = label.toLowerCase();
  if (key === "prerequisites") return "prerequisite";
  if (key === "material components") return "material component";
  return key;
}

function findSpellStarts(text, spellNames) {
  const starts = [];
  let cursor = 0;

  for (const name of spellNames) {
    const matches = [...text.matchAll(nameRegex(name))].filter((match) => match.index >= cursor);
    const match = matches.find((candidate) => {
      const nextPowerPointCost = text.indexOf("Power Point Cost:", candidate.index);
      return nextPowerPointCost > candidate.index && nextPowerPointCost - candidate.index < 300;
    });

    if (match) {
      starts.push({ name, index: match.index });
      cursor = match.index + name.length;
      continue;
    }

    for (const candidate of matches) {
      const nextPowerPointCost = text.indexOf("Power Point Cost:", candidate.index);
      if (nextPowerPointCost > candidate.index && nextPowerPointCost - candidate.index < 700) {
        starts.push({ name, index: candidate.index });
        cursor = candidate.index + name.length;
        break;
      }
    }
  }

  return starts.sort((a, b) => a.index - b.index);
}

function parseFields(block, name) {
  const fieldPattern = new RegExp(`^(${FIELD_NAMES.map(escapeRegex).join("|")}):\\s*(.*)$`, "i");
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !/^\d+$/.test(line) && line !== "Sorcery");

  while (lines.length && lines[0].toLowerCase().startsWith(name.toLowerCase().slice(0, 10)) && !/Power Point Cost:/i.test(lines[0])) {
    lines.shift();
  }

  const parsed = {};
  const body = [];
  let current = null;

  for (const line of lines) {
    const match = line.match(fieldPattern);
    if (match) {
      current = fieldKey(match[1]);
      parsed[current] = match[2] || "";
      continue;
    }

    if (current && !body.length) parsed[current] = `${parsed[current]} ${line}`.trim();
    else body.push(line);

    if (current && body.length) current = null;
  }

  return { parsed, body: body.join("\n") };
}

export function buildSorceryItems(sourceText) {
  const text = cleanSourceText(sourceText);
  const spellNames = Object.values(STYLE_MAP).flat();
  const nameToStyle = new Map(Object.entries(STYLE_MAP).flatMap(([style, names]) => names.map((name) => [name, style])));
  const starts = findSpellStarts(text, spellNames);

  const styleItems = Object.entries(STYLE_MAP).map(([style, spells]) => ({
    name: style,
    type: "sorcery",
    system: {
      category: "style",
      style,
      source: "Sorcery Style",
      ppCost: "",
      castingTime: "",
      range: "",
      duration: "",
      components: "",
      difficulty: "",
      prepared: false,
      requirements: "",
      notes: htmlify(`Contains ${spells.length} listed spells.`),
      description: htmlify(spells.join("\n"))
    }
  }));

  const spellItems = starts.map((start, index) => {
    const end = starts[index + 1]?.index ?? text.length;
    const block = text.slice(start.index, end).trim();
    const { parsed, body } = parseFields(block, start.name);
    const subtype = /\(Basic/i.test(block)
      ? "Basic Spell"
      : /\(Defensive Blast\)/i.test(block)
        ? "Defensive Blast"
        : MIGHTY_SPELLS.has(start.name)
          ? "Mighty Spell"
          : "Spell";
    const requirements = [
      parsed.prerequisite,
      parsed["material component"],
      parsed["material component or focus"],
      parsed.focus,
      parsed["experience point cost"],
      parsed["special note"]
    ].filter(Boolean).join("\n");
    const notes = [
      parsed.target ? `Target: ${parsed.target}` : "",
      parsed.effect ? `Effect: ${parsed.effect}` : "",
      parsed["saving throw"] ? `Saving Throw: ${parsed["saving throw"]}` : ""
    ].filter(Boolean).join("\n");

    return {
      name: start.name,
      type: "sorcery",
      system: {
        category: "spell",
        style: nameToStyle.get(start.name) ?? "",
        source: subtype,
        ppCost: parsed["power point cost"] ?? "",
        castingTime: parsed["casting time"] ?? "",
        range: parsed.range ?? "",
        duration: parsed.duration ?? "",
        components: parsed.components ?? "",
        difficulty: [parsed["magic attack roll"], parsed["skill check"]].filter(Boolean).join("\n"),
        prepared: false,
        requirements: htmlify(requirements),
        notes: htmlify(notes),
        description: htmlify(body)
      }
    };
  });

  return [...styleItems, ...spellItems];
}

async function ensureSorceryStyleFolders(pack) {
  return ensurePackFolders(pack, Object.keys(STYLE_MAP));
}

function sorceryItemKey(item) {
  return `${item.name}|${item.system.category}|${item.system.style}`;
}

export async function importSorceryPack({ clear = false } = {}) {
  const pack = game.packs.get("conan.sorcery");
  if (!pack) {
    ui.notifications?.warn("Conan | Sorcery compendium pack was not found.");
    return { created: 0, skipped: 0 };
  }

  await unlockPack(pack);

  try {
    const response = await fetch("systems/conan/packs/sorcery-source.txt");
    const sourceText = await response.text();
    const items = buildSorceryItems(sourceText);

    if (clear) {
      const existing = await pack.getDocuments();
      await Item.deleteDocuments(existing.map((item) => item.id), { pack: pack.collection });
      await deletePackFolders(pack);
    }

    const folderMap = await ensureSorceryStyleFolders(pack);
    const itemsWithFolders = items.map((item) => ({
      ...item,
      folder: folderMap.get(item.system.style)?.id ?? null
    }));

    const existing = await pack.getDocuments();
    const existingByKey = new Map(existing.map((item) => [sorceryItemKey(item), item]));
    const toCreate = itemsWithFolders.filter((item) => !existingByKey.has(sorceryItemKey(item)));

    await createPackItems(toCreate, pack);

    for (const itemData of itemsWithFolders) {
      const existingItem = existingByKey.get(sorceryItemKey(itemData));
      const existingFolderId = getFolderId(existingItem?.folder);
      if (existingItem && itemData.folder && existingFolderId !== itemData.folder) {
        await existingItem.update({ folder: itemData.folder });
      }
    }

    return { created: toCreate.length, skipped: itemsWithFolders.length - toCreate.length };
  } finally {
    await lockPack(pack);
  }
}

export function registerSorceryPackImporter() {
  game.conan ??= {};
  game.conan.importSorceryPack = importSorceryPack;

  const autoImport = async () => {
    if (!game.user?.isGM) return;
    const pack = game.packs.get("conan.sorcery");
    if (!pack) return;
    try {
      const existing = await pack.getDocuments();
      if (existing.length === 0) {
        const result = await importSorceryPack();
        console.log(`Conan | Sorcery compendium populated: ${result.created} created.`);
      } else {
        await lockPack(pack);
      }
    } catch (error) {
      console.error("Conan | Sorcery compendium import failed.", error);
      ui.notifications?.error("Conan | Sorcery compendium import failed. Check the console for details.");
    }
  };

  if (game.ready) setTimeout(autoImport, 0);
  else Hooks.once("ready", autoImport);
}
