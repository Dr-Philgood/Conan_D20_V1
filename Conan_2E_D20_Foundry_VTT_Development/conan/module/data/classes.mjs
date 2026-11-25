// Class progression and skill data generated from the master workbook.
import {
  CONAN_CLASS_OPTIONS,
  CONAN_CLASS_PROGRESSIONS,
  CONAN_CLASS_SKILLS,
  CONAN_CUSTOM_CLASS_SKILL_GROUPS
} from "./generated-master-data.mjs";

export {
  CONAN_CLASS_OPTIONS,
  CONAN_CLASS_SKILLS,
  CONAN_CUSTOM_CLASS_SKILL_GROUPS
};

const CLASS_PROGRESSIONS = CONAN_CLASS_PROGRESSIONS;

export function createDefaultClassRow(classKey = "barbarian") {
  return {
    classKey,
    level: 1,
    hpRolled: 0,
    favored: false,
    choices: [],
    notes: ""
  };
}

export function getClassProgression(classKey, level) {
  const definition = CLASS_PROGRESSIONS[classKey];
  const normalizedLevel = Math.max(1, Math.min(getClassLevelCap(classKey), Number(level) || 1));

  if (!definition) {
    return {
      classLabel: CONAN_CLASS_OPTIONS[classKey] ?? classKey,
      classType: "",
      source: "",
      hitDie: 0,
      skillPointsPerLevel: 0,
      levelCap: 1,
      level: normalizedLevel,
      attackSequence: "+0",
      bab: 0,
      dodge: 0,
      parry: 0,
      magicAttack: 0,
      fort: 0,
      ref: 0,
      will: 0,
      features: []
    };
  }

  const row = definition.levels[String(normalizedLevel)] ?? {};
  return {
    classLabel: CONAN_CLASS_OPTIONS[classKey] ?? classKey,
    classType: definition.classType ?? "",
    source: definition.source ?? "",
    requirements: definition.requirements ?? "",
    proficiencies: definition.proficiencies ?? "",
    classSkillsText: definition.classSkillsText ?? "",
    hitDie: Number(definition.hitDie) || 0,
    skillPointsPerLevel: Number(definition.skillPointsPerLevel) || 0,
    levelCap: getClassLevelCap(classKey),
    level: normalizedLevel,
    attackSequence: row.attackSequence || `+${Number(row.bab) || 0}`,
    bab: Number(row.bab) || 0,
    dodge: Number(row.dodge) || 0,
    parry: Number(row.parry) || 0,
    magicAttack: Number(row.magicAttack) || 0,
    fort: Number(row.fort) || 0,
    ref: Number(row.ref) || 0,
    will: Number(row.will) || 0,
    features: Array.isArray(row.features) ? row.features : []
  };
}

export function getClassLevelCap(classKey) {
  const levels = CLASS_PROGRESSIONS[classKey]?.levels ?? {};
  return Math.max(1, ...Object.keys(levels).map((level) => Number(level) || 1));
}

export { CLASS_PROGRESSIONS };
