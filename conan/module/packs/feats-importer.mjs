// Feats compendium importer.
// Builds feat item entries from packs/feats-source.txt.

import { createPackItems, deletePackFolders, ensurePackFolders, getFolderId, lockPack, unlockPack } from "./utils.mjs";

const REPEATABLE_FEATS = new Set([
  "Adept",
  "Exotic Weapon Proficiency",
  "Improved Critical",
  "Simple Weapon Proficiency",
  "Skill Focus",
  "Sorcerer's Boon",
  "Weapon Focus",
  "Weapon Specialisation",
  "Greater Weapon Focus",
  "Greater Weapon Specialisation"
]);

const SOLDIER_BONUS_FEATS = new Set([
  "Blind-Fight",
  "Brawl",
  "Combat Expertise",
  "Improved Disarm",
  "Improved Feint",
  "Improved Trip",
  "Whirlwind Attack",
  "Combat Reflexes",
  "Dodge",
  "Archer's Bane",
  "Mobility",
  "Endurance",
  "Diehard",
  "Fleet-Footed",
  "Gunderland Pike-and-Shield Fighting",
  "Improved Critical",
  "Greater Critical",
  "Improved Unarmed Strike",
  "Improved Grapple",
  "Crushing Grip",
  "Improved Initiative",
  "Mounted Combat",
  "Mounted Archery",
  "Ride-By Attack",
  "Spirited Charge",
  "Trample",
  "Parry",
  "Intricate Swordplay",
  "Reflexive Parry",
  "Point Blank Shot",
  "Far Shot",
  "Precise Shot",
  "Improved Precise Shot",
  "Ranged Finesse",
  "Rapid Shot",
  "Shot On The Run",
  "Power Attack",
  "Cleave",
  "Great Cleave",
  "Improved Bull Rush",
  "Improved Overrun",
  "Improved Sunder",
  "Greater Sunder",
  "Monster Slayer",
  "Quick Draw",
  "Run",
  "Steely Gaze",
  "Menacing Aura",
  "Striking Cobra",
  "Stunning Attack",
  "Improved Two-Weapon Combat",
  "Two-Weapon Defence",
  "Weapon Focus",
  "Weapon Specialisation",
  "Greater Weapon Focus",
  "Greater Weapon Specialisation",
  "Zingaran Surprise"
]);

function cleanSourceText(text) {
  return String(text ?? "")
    .replaceAll("Ã¢â‚¬â„¢", "'")
    .replaceAll("Ã¢â‚¬Ëœ", "'")
    .replaceAll("Ã¢â‚¬Å“", '"')
    .replaceAll("Ã¢â‚¬\u009d", '"')
    .replaceAll("Ã¢â‚¬â€œ", "-")
    .replaceAll("Ã¢â‚¬â€", "-")
    .replaceAll("Ã‚Â½", "1/2")
    .replaceAll("Â½", "1/2")
    .replaceAll("’", "'")
    .replaceAll("‘", "'")
    .replaceAll("“", '"')
    .replaceAll("”", '"')
    .replaceAll("â€™", "'")
    .replaceAll("â€“", "-")
    .replaceAll("â€”", "-")
    .replaceAll("\r", "");
}

function htmlify(text) {
  const escaped = String(text ?? "")
    .trim()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return escaped
    ? escaped
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br>")}</p>`)
      .join("\n")
    : "";
}

function buildFeatDescription(parsed) {
  return htmlify([
    parsed.description,
    parsed.prerequisites ? `Prerequisites: ${parsed.prerequisites}` : "",
    parsed.benefit ? `Benefit: ${parsed.benefit}` : "",
    parsed.normal ? `Normal: ${parsed.normal}` : "",
    parsed.special ? `Special: ${parsed.special}` : ""
  ].filter(Boolean).join("\n\n"));
}

function normalizeBlockText(text) {
  return String(text ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !/^\d+$/.test(line) && line !== "Feats")
    .join("\n")
    .replace(/\n(?=[a-z,;)])/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeFeatName(name) {
  return String(name ?? "")
    .replace(/\s+/g, " ")
    .replace(/^Feats\s+/, "")
    .replace(/\s+\(([^)]+)\)$/g, " ($1)")
    .trim();
}

function findDetailedFeatStarts(text) {
  const detailedStart = text.search(/\nAkbitanan\s*\nSmith\s*\(General\)/);
  const detailedText = detailedStart === -1 ? text : text.slice(detailedStart);
  const headingPattern = /(?:^|\n)([A-Z][A-Za-z0-9'’\-, ]+(?:\n(?:[A-Z][A-Za-z0-9'’\-, ]+|\([^)]+\))){0,3})\s*\((General|Sorcery)\)/g;
  const starts = [];

  for (const match of detailedText.matchAll(headingPattern)) {
    const name = normalizeFeatName(match[1]);
    if (!name || name.length > 80) continue;
    if (/^(Benefit|Normal|Special|Prerequisite|Prerequisites)$/i.test(name)) continue;
    starts.push({
      name,
      category: match[2],
      index: detailedStart === -1 ? match.index : detailedStart + match.index,
      bodyStart: (detailedStart === -1 ? 0 : detailedStart) + match.index + match[0].length
    });
  }

  return starts;
}

function parseFeatBlock(block) {
  const labels = new Set(["Prerequisite", "Prerequisites", "Benefit", "Normal", "Special"]);
  const parsed = {
    description: [],
    prerequisites: [],
    benefit: [],
    normal: [],
    special: []
  };
  let current = "description";

  for (const rawLine of normalizeBlockText(block).split("\n")) {
    const match = rawLine.match(/^(Prerequisites?|Benefit|Normal|Special):\s*(.*)$/i);
    if (match) {
      const label = match[1].replace(/s$/i, "");
      current = label.toLowerCase();
      if (label === "Prerequisite") current = "prerequisites";
      if (match[2]) parsed[current].push(match[2].trim());
      continue;
    }

    if (!labels.has(rawLine)) parsed[current].push(rawLine);
  }

  return {
    description: parsed.description.join("\n").trim(),
    prerequisites: parsed.prerequisites.join(" ").trim(),
    benefit: parsed.benefit.join("\n").trim(),
    normal: parsed.normal.join("\n").trim(),
    special: parsed.special.join("\n").trim()
  };
}

export function buildFeatItems(sourceText) {
  const text = cleanSourceText(sourceText);
  const starts = findDetailedFeatStarts(text);

  return starts.map((start, index) => {
    const end = starts[index + 1]?.index ?? text.length;
    const parsed = parseFeatBlock(text.slice(start.bodyStart, end));
    const name = normalizeFeatName(start.name);

    return {
      name,
      type: "feat",
      img: "icons/svg/book.svg",
      system: {
        description: buildFeatDescription(parsed),
        category: start.category,
        prerequisites: parsed.prerequisites,
        benefit: htmlify(parsed.benefit),
        normal: htmlify(parsed.normal),
        special: htmlify(parsed.special),
        source: `${start.category} Feat`,
        soldierBonus: SOLDIER_BONUS_FEATS.has(name),
        repeatable: REPEATABLE_FEATS.has(name),
        active: true
      }
    };
  });
}

async function ensureFeatCategoryFolders(pack, items) {
  return ensurePackFolders(pack, items.map((item) => item.system.category || "General"));
}

function featItemKey(item) {
  return `${item.name}|${item.system.category}`;
}

export async function importFeatsPack({ clear = false } = {}) {
  const pack = game.packs.get("conan.feats");
  if (!pack) {
    ui.notifications?.warn("Conan | Feats compendium pack was not found.");
    return { created: 0, skipped: 0 };
  }

  await unlockPack(pack);

  try {
    const response = await fetch("systems/conan/packs/feats-source.txt");
    const sourceText = await response.text();
    const items = buildFeatItems(sourceText);

    if (clear) {
      const existing = await pack.getDocuments();
      await Item.deleteDocuments(existing.map((item) => item.id), { pack: pack.collection });
      await deletePackFolders(pack);
    }

    const folderMap = await ensureFeatCategoryFolders(pack, items);
    const itemsWithFolders = items.map((item) => ({
      ...item,
      folder: folderMap.get(item.system.category || "General")?.id ?? null
    }));

    const existing = await pack.getDocuments();
    const existingByKey = new Map(existing.map((item) => [featItemKey(item), item]));
    const toCreate = itemsWithFolders.filter((item) => !existingByKey.has(featItemKey(item)));

    await createPackItems(toCreate, pack);

    for (const itemData of itemsWithFolders) {
      const existingItem = existingByKey.get(featItemKey(itemData));
      const existingFolderId = getFolderId(existingItem?.folder);
      const updateData = {};
      if (existingItem && itemData.folder && existingFolderId !== itemData.folder) updateData.folder = itemData.folder;
      if (existingItem && itemData.system.description !== existingItem.system.description) updateData["system.description"] = itemData.system.description;
      if (existingItem && itemData.system.category !== existingItem.system.category) updateData["system.category"] = itemData.system.category;
      if (existingItem && itemData.system.benefit !== existingItem.system.benefit) updateData["system.benefit"] = itemData.system.benefit;
      if (existingItem && itemData.system.prerequisites !== existingItem.system.prerequisites) updateData["system.prerequisites"] = itemData.system.prerequisites;
      if (existingItem && itemData.system.normal !== existingItem.system.normal) updateData["system.normal"] = itemData.system.normal;
      if (existingItem && itemData.system.special !== existingItem.system.special) updateData["system.special"] = itemData.system.special;
      if (existingItem && itemData.system.source !== existingItem.system.source) updateData["system.source"] = itemData.system.source;
      if (existingItem && itemData.system.soldierBonus !== existingItem.system.soldierBonus) updateData["system.soldierBonus"] = itemData.system.soldierBonus;
      if (existingItem && itemData.system.repeatable !== existingItem.system.repeatable) updateData["system.repeatable"] = itemData.system.repeatable;
      if (existingItem && itemData.system.active !== existingItem.system.active) updateData["system.active"] = itemData.system.active;
      if (existingItem && Object.keys(updateData).length) await existingItem.update(updateData);
    }

    return { created: toCreate.length, skipped: itemsWithFolders.length - toCreate.length };
  } finally {
    await lockPack(pack);
  }
}

export function registerFeatsPackImporter() {
  game.conan ??= {};
  game.conan.importFeatsPack = importFeatsPack;

  const autoImport = async () => {
    if (!game.user?.isGM) return;
    const pack = game.packs.get("conan.feats");
    if (!pack) return;
    try {
      const existing = await pack.getDocuments();
      const needsDescriptionRefresh = existing.some((item) => !item.system?.description || !item.system?.benefit);
      if (existing.length === 0 || needsDescriptionRefresh) {
        const result = await importFeatsPack();
        console.log(`Conan | Feats compendium refreshed: ${result.created} created, ${result.skipped} updated or skipped.`);
      } else {
        await lockPack(pack);
      }
    } catch (error) {
      console.error("Conan | Feats compendium import failed.", error);
      ui.notifications?.error("Conan | Feats compendium import failed. Check the console for details.");
    }
  };

  if (game.ready) setTimeout(autoImport, 0);
  else Hooks.once("ready", autoImport);
}
