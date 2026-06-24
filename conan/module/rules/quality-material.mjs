import { clampNumber } from "../helpers/utils.mjs";

export const WEAPON_QUALITY_RULES = {
  poor: { attack: -1, ap: -1, hardness: { add: -1 }, hp: { multiplier: 1 }, cost: 0.5, note: "Breaks on a natural 1 when attacking or parrying metal equipment." },
  average: { attack: 0, ap: 0, hardness: { add: 0 }, hp: { multiplier: 1 }, cost: 1, note: "No change." },
  superior: { attack: 0, ap: 1, hardness: { add: 1 }, hp: { multiplier: 1 }, cost: 2, note: "+1 AP and +1 Hardness." },
  mastercrafted: { attack: 1, ap: 2, hardness: { multiplier: 1.5 }, hp: { multiplier: 2 }, cost: 5, minimumCostSp: 50, note: "+1 attack, +2 AP, Hardness x1.5, Hit Points x2." }
};

export const WEAPON_MATERIAL_RULES = {
  primitive: { ap: -2, hardness: { multiplier: 0.5 }, hp: { multiplier: 1 }, cost: 0.5, note: "Breaks if damage is reduced to 0 by metal armour." },
  bronze: { ap: -1, hardness: { add: -1 }, hp: { multiplier: 0.75 }, cost: 0.75, note: "-1 AP, -1 Hardness, Hit Points x0.75." },
  iron: { ap: 0, hardness: { add: 0 }, hp: { multiplier: 1 }, cost: 1, note: "No change." },
  steel: { ap: 1, hardness: { add: 2 }, hp: { multiplier: 1.25 }, cost: 2, note: "+1 AP, +2 Hardness, Hit Points x1.25." },
  starmetal: { ap: 2, hardness: { multiplier: 2 }, hp: { multiplier: 2 }, cost: 10, note: "Counts as an unnatural or sorcerous material when that matters." }
};

export const ARMOR_QUALITY_RULES = {
  poor: { dr: -1, maxDex: -1, armorPenalty: -1, weight: 1.1, damageThreshold: 15, cost: 0.5, note: "Damaged by 15+ damage instead of 20+." },
  average: { dr: 0, maxDex: 0, armorPenalty: 0, weight: 1, damageThreshold: 20, cost: 1, note: "No change." },
  superior: { dr: 0, maxDex: 1, armorPenalty: 0, weight: 0.9, damageThreshold: 25, cost: 3, note: "Better fit, lighter weight, and greater durability." },
  mastercrafted: { dr: 1, maxDex: 1, armorPenalty: 1, weight: 0.8, damageThreshold: 30, cost: 5, note: "+1 DR, +1 Max Dex, improved ACP, and lighter weight." }
};

export const ARMOR_MATERIAL_RULES = {
  primitive: { dr: -1, maxDex: 0, armorPenalty: 0, weight: 1, damageThreshold: 15, cost: 0.5, note: "Usually hide, bone, wood, quilted, or crude scale." },
  primitiveHide: { dr: -1, maxDex: 0, armorPenalty: 0, weight: 1, damageThreshold: 15, cost: 0.5, note: "Raw or crude hide; damaged by 15+ damage instead of 20+." },
  commonLeather: { dr: 0, maxDex: -1, armorPenalty: -1, weight: 1.1, damageThreshold: 18, cost: 0.75, note: "Basic leather; heavier and less carefully fitted than cured armour." },
  curedLeather: { dr: 0, maxDex: 0, armorPenalty: 0, weight: 1, damageThreshold: 20, cost: 1, note: "Properly cured leather; no material change." },
  hardenedLeather: { dr: 1, maxDex: 0, armorPenalty: 0, weight: 0.9, damageThreshold: 25, cost: 2, note: "Boiled or hardened leather; +1 DR and lighter weight." },
  exoticHide: { dr: 1, maxDex: 1, armorPenalty: 1, weight: 0.75, damageThreshold: 30, cost: 10, note: "Rare beast-hide or sorcerous hide; +1 DR, +1 Max Dex, improved ACP, and much lighter weight." },
  primitiveWood: { dr: -1, maxDex: 0, armorPenalty: 0, weight: 1, damageThreshold: 15, cost: 0.5, note: "Green, crude, or loosely bound wood; damaged by 15+ damage instead of 20+." },
  commonWood: { dr: 0, maxDex: -1, armorPenalty: -1, weight: 1.1, damageThreshold: 18, cost: 0.75, note: "Basic wooden, reed, or bark armour; less flexible than seasoned construction." },
  seasonedWood: { dr: 0, maxDex: 0, armorPenalty: 0, weight: 1, damageThreshold: 20, cost: 1, note: "Dried and treated wood; no material change." },
  ironwood: { dr: 1, maxDex: 0, armorPenalty: 0, weight: 0.9, damageThreshold: 25, cost: 2, note: "Dense treated wood; +1 DR and lighter weight." },
  exoticWood: { dr: 1, maxDex: 1, armorPenalty: 1, weight: 0.75, damageThreshold: 30, cost: 10, note: "Rare wood such as blackwood, petrified wood, or witchwood; +1 DR, +1 Max Dex, improved ACP, and much lighter weight." },
  primitiveCloth: { dr: -1, maxDex: 0, armorPenalty: 0, weight: 1, damageThreshold: 15, cost: 0.5, note: "Crude padding or loose cloth; damaged by 15+ damage instead of 20+." },
  commonCloth: { dr: 0, maxDex: -1, armorPenalty: -1, weight: 1.1, damageThreshold: 18, cost: 0.75, note: "Basic padding; bulkier and less carefully stitched than layered cloth." },
  layeredCloth: { dr: 0, maxDex: 0, armorPenalty: 0, weight: 1, damageThreshold: 20, cost: 1, note: "Dense layered textile; no material change." },
  reinforcedCloth: { dr: 1, maxDex: 0, armorPenalty: 0, weight: 0.9, damageThreshold: 25, cost: 2, note: "Reinforced stitching, lacquer, or dense padding; +1 DR and lighter weight." },
  exoticWeave: { dr: 1, maxDex: 1, armorPenalty: 1, weight: 0.75, damageThreshold: 30, cost: 10, note: "Rare weave such as silk padding, spider-silk, or sorcerous wrappings; +1 DR, +1 Max Dex, improved ACP, and much lighter weight." },
  bronze: { dr: 0, maxDex: -1, armorPenalty: -1, weight: 1.2, damageThreshold: 18, cost: 0.75, note: "Heavier and less flexible than iron." },
  iron: { dr: 0, maxDex: 0, armorPenalty: 0, weight: 1, damageThreshold: 20, cost: 1, note: "No change." },
  steel: { dr: 1, maxDex: 0, armorPenalty: 0, weight: 0.9, damageThreshold: 25, cost: 2, note: "+1 DR and lighter weight." },
  starmetal: { dr: 1, maxDex: 1, armorPenalty: 1, weight: 0.75, damageThreshold: 30, cost: 10, note: "+1 DR, +1 Max Dex, improved ACP, and much lighter weight." }
};

function applyHardnessRule(base, rule = {}) {
  const baseValue = clampNumber(base);
  if (baseValue <= 0) return 0;
  const multiplied = Math.floor(baseValue * (rule.multiplier ?? 1));
  return Math.max(1, multiplied + clampNumber(rule.add));
}

function applyHitPointRule(base, rule = {}) {
  const baseValue = clampNumber(base);
  if (baseValue <= 0) return 0;
  return Math.max(1, Math.floor(baseValue * (rule.multiplier ?? 1)));
}

function combineArmorDamageThreshold(...values) {
  return Math.max(
    1,
    20 + values
      .filter((value) => Number.isFinite(value))
      .reduce((sum, value) => sum + (value - 20), 0)
  );
}

function normalizeQuality(value) {
  return value === "masterwork" ? "mastercrafted" : value;
}

function parseSignedNumber(value) {
  const match = String(value ?? "").match(/[+-]?\d+/);
  return match ? Number(match[0]) : null;
}

function formatSignedNumber(value) {
  const number = clampNumber(value);
  return number > 0 ? `+${number}` : `${number}`;
}

function parseSpCost(cost) {
  const match = String(cost ?? "").replaceAll(",", "").match(/^\+?\s*(\d+(?:\.\d+)?)\s*sp$/i);
  return match ? Number(match[1]) : null;
}

function formatSpCost(value, plus = false) {
  const amount = Math.ceil(value);
  return `${plus ? "+" : ""}${amount.toLocaleString("en-US")} sp`;
}

export function adjustedCost(cost, multiplier, minimumSp = 0) {
  const base = parseSpCost(cost);
  if (base === null) return "";
  const plus = String(cost ?? "").trim().startsWith("+");
  return formatSpCost(Math.max(base * multiplier, minimumSp), plus);
}

export function getWeaponQualityMaterialEffects(system) {
  const quality = WEAPON_QUALITY_RULES[normalizeQuality(system?.quality)] ?? WEAPON_QUALITY_RULES.average;
  const material = WEAPON_MATERIAL_RULES[system?.material] ?? WEAPON_MATERIAL_RULES.iron;
  const attackBonus = clampNumber(system?.attackBonus) + clampNumber(quality.attack);
  const armorPiercing = Math.max(0, clampNumber(system?.armorPiercing) + clampNumber(quality.ap) + clampNumber(material.ap));
  const qualityHardness = applyHardnessRule(system?.hardness, quality.hardness);
  const hardness = applyHardnessRule(qualityHardness, material.hardness);
  const qualityHp = applyHitPointRule(system?.hitpoints, quality.hp);
  const hitpoints = applyHitPointRule(qualityHp, material.hp);
  const costMultiplier = clampNumber(quality.cost, 1) * clampNumber(material.cost, 1);
  const adjustedCostValue = adjustedCost(system?.cost, costMultiplier, quality.minimumCostSp ?? 0);

  return {
    attackBonus,
    armorPiercing,
    hardness,
    hitpoints,
    costMultiplier,
    adjustedCost: adjustedCostValue,
    notes: [quality.note, material.note].filter(Boolean)
  };
}

export function getArmorQualityMaterialEffects(system) {
  if (system?.category === "Shields") {
    return {
      damageReduction: clampNumber(system?.damageReduction),
      maxDexBonus: system?.maxDexBonus ?? "",
      armorPenalty: clampNumber(system?.armorPenalty),
      weight: clampNumber(system?.weight),
      damageThreshold: 20,
      adjustedCost: "",
      costMultiplier: 1,
      notes: []
    };
  }

  const quality = ARMOR_QUALITY_RULES[normalizeQuality(system?.quality)] ?? ARMOR_QUALITY_RULES.average;
  const material = ARMOR_MATERIAL_RULES[system?.material] ?? ARMOR_MATERIAL_RULES.iron;
  const maxDex = parseSignedNumber(system?.maxDexBonus);
  const costMultiplier = clampNumber(quality.cost, 1) * clampNumber(material.cost, 1);

  return {
    damageReduction: Math.max(0, clampNumber(system?.damageReduction) + clampNumber(quality.dr) + clampNumber(material.dr)),
    maxDexBonus: maxDex === null ? system?.maxDexBonus ?? "" : formatSignedNumber(maxDex + clampNumber(quality.maxDex) + clampNumber(material.maxDex)),
    armorPenalty: clampNumber(system?.armorPenalty) + clampNumber(quality.armorPenalty) + clampNumber(material.armorPenalty),
    weight: Number((clampNumber(system?.weight) * clampNumber(quality.weight, 1) * clampNumber(material.weight, 1)).toFixed(1)),
    damageThreshold: combineArmorDamageThreshold(quality.damageThreshold, material.damageThreshold),
    costMultiplier,
    adjustedCost: adjustedCost(system?.cost, costMultiplier),
    notes: [quality.note, material.note].filter(Boolean)
  };
}
