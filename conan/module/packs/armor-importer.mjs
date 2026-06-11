// Armor compendium importer.
// Builds armor item entries from packs/armor-source.json and packs/armor-descriptions.txt.

import { createPackItems, deletePackFolders, ensurePackFolders, getFolderId, lockPack, unlockPack } from "./utils.mjs";

const DEFAULT_ARMOR_SYSTEM = {
  description: "",
  category: "",
  quality: "average",
  material: "iron",
  damageReduction: 0,
  maxDexBonus: "",
  armorPenalty: 0,
  sorceryFailure: 0,
  speed: "",
  shieldBonus: 0,
  damage: "",
  critical: "",
  armorPiercing: 0,
  hardness: 0,
  hitpoints: 0,
  damageType: "",
  equipped: true,
  weight: 0,
  cost: ""
};

const ARMOR_DESCRIPTION_HEADINGS = [
  "Breastplate",
  "Brigandine Coat",
  "Great Helm",
  "Leather Jerkin",
  "Mail Shirt",
  "Mail Hauberk",
  "Plate Armour",
  "Quilted Jerkin",
  "Scale Corselet",
  "Scale Hauberk",
  "Steel Cap",
  "Visored Helm",
  "Aspis",
  "Buckler",
  "Duellist Cape",
  "Grille",
  "Hyperborean Hide",
  "Laminated Wood",
  "Large Shield",
  "Pit Straps",
  "Plated Kit",
  "Scarab",
  "Suede Coat",
  "Targe",
  "Warhood",
  "Wicker Tabard"
];

const ARMOR_MATERIAL_BY_NAME = {
  "Leather Jerkin": "curedLeather",
  "Quilted Jerkin": "layeredCloth",
  "Suede Coat": "curedLeather",
  "Wicker Tabard": "seasonedWood",
  "Hyperborean Hide": "exoticHide",
  "Laminated Wood": "seasonedWood",
  "Pit Straps": "hardenedLeather"
};

function getDefaultArmorMaterial(rawArmor) {
  if (rawArmor.category === "Shields") return "";
  return ARMOR_MATERIAL_BY_NAME[rawArmor.name] ?? "iron";
}

function getDefaultArmorQuality(rawArmor) {
  if (rawArmor.category === "Shields") return "";
  return "average";
}

function htmlify(text) {
  const escaped = String(text ?? "")
    .trim()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return escaped ? `<p>${escaped.replace(/\r?\n/g, "<br>")}</p>` : "";
}

export function parseArmorDescriptions(descriptionText) {
  const text = String(descriptionText ?? "");
  const positions = [];

  for (const heading of ARMOR_DESCRIPTION_HEADINGS) {
    const pattern = new RegExp(`(^|\\n)${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:`, "g");
    for (const match of text.matchAll(pattern)) {
      positions.push({
        heading,
        index: match.index + match[1].length,
        bodyStart: match.index + match[0].length
      });
    }
  }

  positions.sort((a, b) => a.index - b.index);

  const descriptions = new Map();
  for (let index = 0; index < positions.length; index += 1) {
    const current = positions[index];
    const next = positions[index + 1];
    const description = text
      .slice(current.bodyStart, next?.index ?? undefined)
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    if (description) descriptions.set(current.heading, description);
  }

  return descriptions;
}

function normalizeArmor(rawArmor) {
  const system = {
    ...DEFAULT_ARMOR_SYSTEM,
    ...rawArmor.system,
    description: htmlify(rawArmor.description ?? rawArmor.system?.description),
    category: rawArmor.category ?? rawArmor.system?.category ?? DEFAULT_ARMOR_SYSTEM.category,
    quality: rawArmor.quality ?? rawArmor.system?.quality ?? getDefaultArmorQuality(rawArmor),
    material: rawArmor.material ?? rawArmor.system?.material ?? getDefaultArmorMaterial(rawArmor),
    damageReduction: Number(rawArmor.damageReduction ?? rawArmor.system?.damageReduction ?? DEFAULT_ARMOR_SYSTEM.damageReduction),
    maxDexBonus: rawArmor.maxDexBonus ?? rawArmor.system?.maxDexBonus ?? DEFAULT_ARMOR_SYSTEM.maxDexBonus,
    armorPenalty: Number(rawArmor.armorPenalty ?? rawArmor.system?.armorPenalty ?? DEFAULT_ARMOR_SYSTEM.armorPenalty),
    sorceryFailure: Number(rawArmor.sorceryFailure ?? rawArmor.system?.sorceryFailure ?? DEFAULT_ARMOR_SYSTEM.sorceryFailure),
    speed: rawArmor.speed ?? rawArmor.system?.speed ?? DEFAULT_ARMOR_SYSTEM.speed,
    shieldBonus: Number(rawArmor.shieldBonus ?? rawArmor.system?.shieldBonus ?? DEFAULT_ARMOR_SYSTEM.shieldBonus),
    damage: rawArmor.damage ?? rawArmor.system?.damage ?? DEFAULT_ARMOR_SYSTEM.damage,
    critical: rawArmor.critical ?? rawArmor.system?.critical ?? DEFAULT_ARMOR_SYSTEM.critical,
    armorPiercing: Number(rawArmor.armorPiercing ?? rawArmor.system?.armorPiercing ?? DEFAULT_ARMOR_SYSTEM.armorPiercing),
    hardness: Number(rawArmor.hardness ?? rawArmor.system?.hardness ?? DEFAULT_ARMOR_SYSTEM.hardness),
    hitpoints: Number(rawArmor.hitpoints ?? rawArmor.system?.hitpoints ?? DEFAULT_ARMOR_SYSTEM.hitpoints),
    damageType: rawArmor.damageType ?? rawArmor.system?.damageType ?? DEFAULT_ARMOR_SYSTEM.damageType,
    equipped: Boolean(rawArmor.equipped ?? rawArmor.system?.equipped ?? DEFAULT_ARMOR_SYSTEM.equipped),
    weight: Number(rawArmor.weight ?? rawArmor.system?.weight ?? DEFAULT_ARMOR_SYSTEM.weight),
    cost: rawArmor.cost ?? rawArmor.system?.cost ?? DEFAULT_ARMOR_SYSTEM.cost
  };

  return {
    name: rawArmor.name,
    type: "armor",
    img: rawArmor.img ?? "icons/equipment/chest/breastplate-layered-steel.webp",
    system
  };
}

export function buildArmorItems(sourceData, descriptionText = "") {
  const armor = Array.isArray(sourceData) ? sourceData : sourceData.armor ?? [];
  const descriptions = parseArmorDescriptions(descriptionText);

  return armor
    .filter((item) => item?.name)
    .map((item) => {
      const componentDescriptions = item.name
        .split(" and ")
        .map((componentName) => descriptions.get(componentName))
        .filter(Boolean);
      const composedDescription = componentDescriptions.length > 1 ? componentDescriptions.join("\n\n") : "";

      return normalizeArmor({
        ...item,
        description: item.description ?? item.system?.description ?? descriptions.get(item.name) ?? composedDescription
      });
    });
}

async function ensureArmorCategoryFolders(pack, items) {
  const categories = [...new Set(items.map((item) => item.system.category || "Armor"))].sort();
  return ensurePackFolders(pack, categories);
}

function armorKey(item) {
  return `${item.name}|${item.system.category}|${item.system.damageReduction}|${item.system.cost}`;
}

export async function importArmorPack({ clear = false } = {}) {
  const pack = game.packs.get("conan.armor");
  if (!pack) {
    ui.notifications?.warn("Conan | Armor compendium pack was not found.");
    return { created: 0, skipped: 0 };
  }

  await unlockPack(pack);

  try {
    const response = await fetch("systems/conan/packs/armor-source.json");
    const sourceData = await response.json();
    let descriptionText = "";
    try {
      const descriptionResponse = await fetch("systems/conan/packs/armor-descriptions.txt");
      if (descriptionResponse.ok) descriptionText = await descriptionResponse.text();
    } catch (_error) {
      descriptionText = "";
    }

    const items = buildArmorItems(sourceData, descriptionText);

    if (clear) {
      const existing = await pack.getDocuments();
      await Item.deleteDocuments(existing.map((item) => item.id), { pack: pack.collection });
      await deletePackFolders(pack);
    }

    const folderMap = await ensureArmorCategoryFolders(pack, items);
    const itemsWithFolders = items.map((item) => ({
      ...item,
      folder: folderMap.get(item.system.category || "Armor")?.id ?? null
    }));

    const existing = await pack.getDocuments();
    const existingByKey = new Map(existing.map((item) => [armorKey(item), item]));
    const toCreate = itemsWithFolders.filter((item) => !existingByKey.has(armorKey(item)));

    await createPackItems(toCreate, pack);

    for (const itemData of itemsWithFolders) {
      const existingItem = existingByKey.get(armorKey(itemData));
      const existingFolderId = getFolderId(existingItem?.folder);
      const updateData = {};
      if (existingItem && itemData.folder && existingFolderId !== itemData.folder) {
        updateData.folder = itemData.folder;
      }
      if (existingItem && itemData.system.description !== existingItem.system.description) {
        updateData["system.description"] = itemData.system.description;
      }
      if (existingItem && itemData.system.quality !== existingItem.system.quality) {
        updateData["system.quality"] = itemData.system.quality;
      }
      if (existingItem && itemData.system.material !== existingItem.system.material) {
        updateData["system.material"] = itemData.system.material;
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

export function registerArmorPackImporter() {
  game.conan ??= {};
  game.conan.importArmorPack = importArmorPack;

  const autoImport = async () => {
    if (!game.user?.isGM) return;
    const pack = game.packs.get("conan.armor");
    if (!pack) return;
    try {
      const existing = await pack.getDocuments();
      if (existing.length === 0) {
        const result = await importArmorPack();
        console.log(`Conan | Armor compendium populated: ${result.created} created.`);
      } else {
        await lockPack(pack);
      }
    } catch (error) {
      console.error("Conan | Armor compendium import failed.", error);
      ui.notifications?.error("Conan | Armor compendium import failed. Check the console for details.");
    }
  };

  if (game.ready) setTimeout(autoImport, 0);
  else Hooks.once("ready", autoImport);
}
