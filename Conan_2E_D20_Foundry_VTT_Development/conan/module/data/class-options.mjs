// Selectable class benefits and replacement paths from the master workbook.

import { CONAN_CLASS_FEATURES, CONAN_DRUM_FEATS, CONAN_SORCERY_STYLES } from "./generated-master-data.mjs";

function optionKey(name) {
  return String(name ?? "")
    .replace(/[^A-Za-z0-9]+(.)/g, (_match, next) => next.toUpperCase())
    .replace(/^[A-Z]/, (letter) => letter.toLowerCase());
}

function optionMap(names) {
  return Object.fromEntries(names.map((name) => [optionKey(name), name]));
}

function classFeatureOptions(classKey, prefix) {
  return optionMap(CONAN_CLASS_FEATURES
    .filter((feature) => feature.classKey === classKey && feature.name.startsWith(prefix))
    .map((feature) => feature.name.slice(prefix.length)));
}

const FORMATION_OPTIONS = optionMap([
  "Heavy Cavalry", "Improved Heavy Cavalry", "Heavy Infantry", "Improved Heavy Infantry",
  "Light Cavalry", "Improved Light Cavalry", "Skirmisher", "Improved Skirmisher",
  "Fighting Spirit", "Improved Fighting Spirit", "Advancing Infantry", "Improved Advancing Infantry",
  "Hoplite", "Improved Hoplite", "Hurler", "Improved Hurler", "Tortoise Heavy Infantry",
  "Improved Tortoise Heavy Infantry", "Volley Support", "Improved Volley Support"
]);

const BORDERER_COMBAT_STYLE_OPTIONS = optionMap([
  "Archery", "Trapping", "Two-Weapon Combat", "Argossean Trident Style", "Crossbowman",
  "Mountaineering", "Pugilism", "Spearman", "Stygian Tomb Avenger Style", "Woodsman",
  "Zingarian Sneak Attack Style", "Zingarian Whip Style"
]);

const BORDERER_BONUS_FEAT_OPTIONS = optionMap([
  "Toughness", "Great Fortitude", "Lightning Reflexes", "Dodge", "Improved Initiative",
  "Self-Sufficient", "Stealthy", "Quick Draw", "Alertness", "Run"
]);

const NOMAD_BONUS_FEAT_OPTIONS = optionMap([
  "Far Shot", "Great Fortitude", "Leadership", "Lightning Reflexes", "Horde",
  "Improved Precise Shot", "Mounted Archery", "Mounted Combat", "Point Blank Shot",
  "Precise Shot", "Rapid Shot", "Ride-By Attack", "Shot on the Run", "Self-Sufficient",
  "Spirited Charge", "Stealthy", "Toughness",
  "Weapon Focus (Sabre, Scimitar, Tulwar, Light Lance, or Any Bow)"
]);

const SOLDIER_BONUS_FEAT_OPTIONS = optionMap([
  "Blind-Fight", "Brawl", "Combat Expertise", "Improved Disarm", "Improved Feint", "Improved Trip",
  "Whirlwind Attack", "Combat Reflexes", "Dodge", "Archer's Bane", "Mobility", "Endurance",
  "Diehard", "Fleet-Footed", "Gunderland Pike-and-Shield Fighting", "Improved Critical",
  "Greater Critical", "Improved Unarmed Strike", "Improved Grapple", "Crushing Grip",
  "Improved Initiative", "Mounted Combat", "Mounted Archery", "Ride-By Attack", "Spirited Charge",
  "Trample", "Parry", "Intricate Swordplay", "Reflexive Parry", "Point Blank Shot", "Far Shot",
  "Precise Shot", "Improved Precise Shot", "Ranged Finesse", "Rapid Shot", "Shot on the Run",
  "Power Attack", "Cleave", "Great Cleave", "Improved Bull Rush", "Improved Overrun",
  "Improved Sunder", "Greater Sunder", "Monster Slayer", "Quick Draw", "Run", "Steely Gaze",
  "Menacing Aura", "Striking Cobra", "Stunning Attack", "Improved Two-Weapon Combat",
  "Two-Weapon Defence", "Weapon Focus", "Weapon Specialisation", "Greater Weapon Focus",
  "Greater Weapon Specialisation", "Zingaran Surprise"
]);

const AXEMAN_BONUS_FEAT_OPTIONS = optionMap([
  "Alertness", "Athletic", "Blind-Fight", "Cleave", "Combat Expertise", "Combat Reflexes", "Deadly",
  "Dodge", "Endurance", "Fighting-Madness", "Great Cleave", "Hold Ground", "Improved Bull Rush",
  "Improved Critical", "Improved Initiative", "Improved Overrun", "Improved Sunder", "Parry",
  "Reflexive Parry", "Run", "Shield-Splitter", "Two-Weapon Combat", "Two-Weapon Defence",
  "Weapon Specialisation (Axe-Type)", "Whirlwind Attack"
]);

const DUELLIST_BONUS_FEAT_OPTIONS = optionMap([
  "Athletic", "Blind-Fight", "Carouser", "Combat Expertise", "Deadly", "Dodge", "Fleet-Footed",
  "Improved Disarm", "Improved Feint", "Improved Initiative", "Intricate Swordplay",
  "Keen-Eyed Fighter", "Lightning Reflexes", "Mobility", "Quick Draw", "Reflexive Parry", "Run",
  "Signature Flourish", "Steely Gaze", "Striking Cobra", "Two-Weapon Defence", "Weapon Focus",
  "Weapon Specialisation"
]);

const WARLORD_BONUS_FEAT_OPTIONS = optionMap([
  "Blind-Fight", "Combat Expertise", "Combat Reflexes", "Dodge", "Fleet-Footed",
  "Greater Weapon Focus", "Greater Weapon Specialisation", "Halberdier", "Hold Ground",
  "Improved Disarm", "Improved Feint", "Improved Initiative", "Intricate Swordplay",
  "Keen-Eyed Fighter", "Lightning Reflexes", "Mobility", "Mounted Combat", "Quick Draw",
  "Reflexive Parry", "Run", "Spearman", "Spirited Charge", "Steely Gaze", "Striking Cobra",
  "Trample", "Two-Weapon Defence", "War Cry", "Weapon Focus", "Weapon Specialisation",
  "Web of Death", "Whirlwind Attack"
]);

const PIT_FIGHTER_BONUS_FEAT_OPTIONS = optionMap([
  "Alertness", "Athletic", "Brawl", "Cleave", "Combat Expertise", "Combat Reflexes", "Deadly",
  "Diehard", "Dodge", "Improved Bull Rush", "Improved Critical", "Improved Disarm",
  "Improved Initiative", "Improved Overrun", "Improved Sunder", "Improved Trip", "Keen-Eyed Fighter",
  "Monster Slayer", "Parry", "Performer", "Power Attack", "Reflexive Parry", "Run",
  "Shield-Splitter", "Signature Flourish", "Stunning Attack", "Toughness", "Two-Weapon Combat",
  "Two-Weapon Defence", "War Cry", "Weapon Focus", "Weapon Specialisation", "Whirlwind Attack"
]);

const HOUSE_AGENT_BONUS_FEAT_OPTIONS = optionMap([
  "Alertness", "Blind-Fight", "Carouser", "Dabbler", "Deceitful", "Diligent", "Eyes of the Cat",
  "Fleet-Footed", "Grateful Patron", "Informants", "Investigator", "Knowledgeable", "Negotiator",
  "Nimble Fingers", "Performer", "Persuasive", "Poison Use", "Rapier Wit", "Shrewd Appraiser",
  "Silver Tongue", "Skill Focus", "Street-Smart", "Venomous Tongue"
]);

const NOBLE_SOCIAL_OPTIONS = optionMap([
  "Ally", "Comeliness", "Entertainer", "Family Ties", "Refuge", "Smear Others", "Secrets", "Wealth",
  "Born Officer", "Fighting School", "Soldiery Training", "Threaten"
]);

const NOBLE_REGIONAL_OPTIONS = classFeatureOptions("noble", "Special Regional Feature - ");
const SCHOLAR_STYLE_OPTIONS = optionMap(CONAN_SORCERY_STYLES);
const MONASTIC_WISDOM_OPTIONS = classFeatureOptions("scholar", "Monastic Meditation - ");
const SPELL_OR_MONASTIC_OPTIONS = { spell: "Spell (enter the spell below)", ...MONASTIC_WISDOM_OPTIONS };
const DRUM_FEAT_OPTIONS = optionMap(CONAN_DRUM_FEATS);

const TEMPTRESS_SELF_DEFENCE_OPTIONS = optionMap(["Anatomy Knowledge", "Avoidance", "Flexibility"]);
const TEMPTRESS_SECRET_ART_OPTIONS = optionMap(["Sneak Attack", "Sorcery", "Politics"]);
const THIEF_SPECIAL_OPTIONS = optionMap([
  "Crippling Strike", "Defensive Roll", "Feat", "Improved Evasion", "Opportunist", "Skill Mastery", "Slippery Mind"
]);
const FAVOURED_TERRAIN_OPTIONS = optionMap([
  "Plains", "Desert", "Forest", "Hills", "Mountains", "Marsh", "Tundra", "Underground", "Urban", "Water", "Specific Region"
]);
const PIRATE_CODE_OPTIONS = optionMap([
  "Barachan Smoke and Rockets", "Black Coast Drums", "Vilayet Sea Flags", "Zingaran Signs", "Other Code"
]);
const SCHOLAR_BACKGROUND_OPTIONS = optionMap(["Acolyte", "Independent", "Lay Priest", "Pact"]);
const MARTIAL_DISCIPLINE_OPTIONS = optionMap([
  "Fell Hand", "Flesh of Mountains", "Iron-Banded", "Mighty Blows", "Thousand Blows"
]);
const PIT_FIGHTER_STYLE_OPTIONS = optionMap([
  "Beast Battler", "Improved Beast Battler", "Mankiller", "Improved Mankiller",
  "Spiker", "Improved Spiker", "Subduing", "Improved Subduing"
]);
const PIT_FIGHTER_MASTERY_OPTIONS = optionMap([
  "Arterial Strike", "Bonebreaker", "Critical Mastery", "Fast Healer", "Prolonging Wound", "Weapon Mastery"
]);
const AGENT_OF_CROWN_ABILITY_OPTIONS = optionMap(["Informant", "Promotion", "Street Fight", "Streetwise"]);
const HOUSE_AGENT_ABILITY_OPTIONS = optionMap([
  "Blackmail", "Contact", "Friends in High Places", "Streetwise", "Word on the Street"
]);
const MERCHANT_PRINCE_CONTACT_OPTIONS = optionMap([
  "Barony", "Criminal", "Foreign", "Guardian", "Guild", "Naval", "Patrol", "Priesthood", "Royalty", "Royal House"
]);

function choice(key, minLevel, label, options, noteLabel = "Notes", settings = {}) {
  return { key, minLevel, label, options, noteLabel, required: true, ...settings };
}

function dependentChoice(key, minLevel, label, options, dependsOn, noteLabel = "Notes") {
  return choice(key, minLevel, label, options, noteLabel, { dependsOn });
}

function levelChoices(classKey, featureKey, levels, label, options, noteLabel = "Notes") {
  return levels.map((level) => choice(`${classKey}-${featureKey}-${level}`, level, `${label}, Level ${level}`, options, noteLabel));
}

const CHOICE_DEFINITIONS = {
  barbarian: [
    choice("barbarian-versatility-alternative", 1, "Versatility Alternative", optionMap(["Versatility", "Cultural Weapon"]), "Cultural weapon"),
    choice("barbarian-crimson-mist-alternative", 2, "Crimson Mist Alternative", optionMap(["Crimson Mist", "Fighting Frenzy"]))
  ],
  borderer: [
    ...levelChoices("borderer", "favoured-terrain", [1, 7, 13, 19], "Favoured Terrain", FAVOURED_TERRAIN_OPTIONS, "Terrain or region"),
    choice("borderer-combat-style", 2, "Combat Style", BORDERER_COMBAT_STYLE_OPTIONS),
    ...levelChoices("borderer", "bonus-feat", [10, 14, 18], "Bonus Feat", BORDERER_BONUS_FEAT_OPTIONS, "Feat details"),
    choice("borderer-guide-alternative", 7, "Guide Alternative", optionMap(["Guide", "Terrain Tactics"]), "Favoured terrain used")
  ],
  martialDisciple: [
    choice("martial-disciple-discipline", 2, "Martial Discipline", MARTIAL_DISCIPLINE_OPTIONS),
    choice("martial-disciple-improved-technique", 7, "Improved Martial Discipline Technique", optionMap(["Choose Technique"]), "Technique"),
    choice("martial-disciple-greater-technique", 14, "Greater Martial Discipline Technique", optionMap(["Choose Technique"]), "Technique"),
    choice("martial-disciple-master-technique", 20, "Master Martial Discipline Technique", optionMap(["Choose Technique"]), "Technique")
  ],
  noble: [
    choice("noble-wealth-alternative", 1, "Wealth Alternative", optionMap(["Wealth", "Well-Equipped"])),
    ...levelChoices("noble", "social-ability", [4, 9, 14, 19], "Social Ability", NOBLE_SOCIAL_OPTIONS, "Details"),
    ...levelChoices("noble", "special-regional-feature", [2, 7, 12, 17], "Special Regional Feature", NOBLE_REGIONAL_OPTIONS, "Feature details")
  ],
  nomad: [
    choice("nomad-terrain-or-threat-1", 1, "Favoured Terrain or Common Threat, Level 1", optionMap(["Favoured Terrain", "Common Threat"]), "Terrain or threat"),
    choice("nomad-terrain-or-threat-9", 9, "Favoured Terrain or Common Threat, Level 9", optionMap(["Favoured Terrain", "Common Threat"]), "Terrain or threat"),
    ...levelChoices("nomad", "bonus-feat", [2, 7, 12, 17], "Bonus Feat", NOMAD_BONUS_FEAT_OPTIONS, "Feat details")
  ],
  pirate: [
    choice("pirate-code-2", 2, "Pirate Code", PIRATE_CODE_OPTIONS, "Code details"),
    choice("pirate-sneak-attack-alternative", 3, "Sneak Attack Alternative", optionMap(["Sneak Attack", "Parting Blow"])),
    choice("pirate-sneak-subdual-alternative", 3, "Sneak Subdual Alternative", optionMap(["Sneak Subdual", "Scrapper: Brawl", "Scrapper: Improved Unarmed Combat", "Scrapper: Toughness"]), "Details")
  ],
  scholar: [
    choice("scholar-background-1", 1, "Scholar Background", SCHOLAR_BACKGROUND_OPTIONS, "Master, pact, temple, or order"),
    ...levelChoices("scholar", "new-sorcery-style", [1, 2, 4, 8, 12, 16, 20], "New Sorcery Style", SCHOLAR_STYLE_OPTIONS, "Style notes"),
    ...levelChoices("scholar", "advanced-spell", [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "Advanced Spell or Monastic Wisdom", SPELL_OR_MONASTIC_OPTIONS, "Spell or wisdom details"),
    ...levelChoices("scholar", "bonus-spell", [3, 7, 11, 15, 19], "Bonus Spell or Monastic Wisdom", SPELL_OR_MONASTIC_OPTIONS, "Spell or wisdom details")
  ],
  soldier: [
    ...levelChoices("soldier", "bonus-feat", [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], "Bonus Feat", SOLDIER_BONUS_FEAT_OPTIONS, "Feat details"),
    ...levelChoices("soldier", "formation", [3, 7, 11, 15, 19], "Formation Combat", FORMATION_OPTIONS)
  ],
  temptress: [
    choice("temptress-performance-alternative", 2, "Compelling Performance Alternative", optionMap(["Compelling Performance", "Lewd Distraction"])),
    choice("temptress-defence-or-secret-art", 3, "Class Path", optionMap(["Secret Art", "Self-Defence"])),
    dependentChoice("temptress-secret-art-3", 3, "Secret Art", TEMPTRESS_SECRET_ART_OPTIONS, [{ key: "temptress-defence-or-secret-art", values: ["secretArt"] }], "Art details"),
    dependentChoice("temptress-self-defence", 3, "Self-Defence", TEMPTRESS_SELF_DEFENCE_OPTIONS, [{ key: "temptress-defence-or-secret-art", values: ["selfDefence"] }], "Technique details"),
    ...[
      [3, "temptress-politics-3"],
      [7, "temptress-politics-improved-7"],
      [11, "temptress-politics-advanced-11"],
      [17, "temptress-politics-perfected-17"]
    ].map(([level, key]) => dependentChoice(
      key,
      level,
      `Politics Social Ability, Level ${level}`,
      NOBLE_SOCIAL_OPTIONS,
      [{ key: "temptress-defence-or-secret-art", values: ["secretArt"] }, { key: "temptress-secret-art-3", values: ["politics"] }],
      "Political connection or details"
    ))
  ],
  thief: [
    ...[1, 4, 8, 12, 16, 20].map((level) => choice(`thief-sneak-attack-style-${level}`, level, `Sneak Attack Style, Level ${level}`, optionMap(["Sneak Attack Style", "Weapon Precision"]), "Weapon")),
    choice("thief-poison-use-alternative", 8, "Poison Use Alternative", optionMap(["Poison Use", "Poison Resistance"])),
    ...levelChoices("thief", "special-ability", [6, 10, 14, 18], "Special Ability", THIEF_SPECIAL_OPTIONS, "Details"),
    choice("thief-sneak-attack-alternative", 1, "Sneak Attack Alternative", optionMap(["Sneak Attack", "Dispatching Blow"]))
  ],
  agentOfTheCrown: [
    ...levelChoices("agent-of-the-crown", "ability", [1, 4, 7, 10], "Agent of the Crown Ability", AGENT_OF_CROWN_ABILITY_OPTIONS, "Ability details")
  ],
  axeman: [
    ...levelChoices("axeman", "bonus-feat", [2, 5, 8], "Bonus Feat", AXEMAN_BONUS_FEAT_OPTIONS, "Feat details")
  ],
  drummerInTheDark: [
    ...levelChoices("drummer-in-the-dark", "drum-bonus-feat", [2, 6, 10], "Bonus Drum Feat", DRUM_FEAT_OPTIONS, "Feat details")
  ],
  duellist: [
    ...levelChoices("duellist", "bonus-feat", [2, 4, 6, 8, 10], "Bonus Feat", DUELLIST_BONUS_FEAT_OPTIONS, "Feat details")
  ],
  gunderlandPikeman: [
    ...levelChoices("gunderland-pikeman", "bonus-feat", [3, 6, 9], "Bonus Feat", SOLDIER_BONUS_FEAT_OPTIONS, "Feat details")
  ],
  houseAgent: [
    ...levelChoices("house-agent", "bonus-feat", [1, 4, 7, 10], "Bonus Feat", HOUSE_AGENT_BONUS_FEAT_OPTIONS, "Feat details"),
    ...levelChoices("house-agent", "ability", [1, 3, 6, 9], "House Agent Ability", HOUSE_AGENT_ABILITY_OPTIONS, "Ability details")
  ],
  merchantPrince: [
    ...levelChoices("merchant-prince", "contact", [1, 3, 5, 7, 9], "Contact", MERCHANT_PRINCE_CONTACT_OPTIONS, "Contact details")
  ],
  pitFighter: [
    ...levelChoices("pit-fighter", "fighting-style", [1, 5, 9], "Fighting Style", PIT_FIGHTER_STYLE_OPTIONS, "Style details"),
    ...levelChoices("pit-fighter", "combat-mastery", [1, 4, 7, 10], "Combat Mastery", PIT_FIGHTER_MASTERY_OPTIONS, "Mastery details"),
    ...levelChoices("pit-fighter", "bonus-feat", [3, 6, 9], "Bonus Feat", PIT_FIGHTER_BONUS_FEAT_OPTIONS, "Feat details")
  ],
  savage: [
    choice("savage-simple-weapon-focus-1", 1, "Simple Weapon Focus", optionMap(["Choose Simple Weapon"]), "Weapon"),
    choice("savage-simple-weapon-master-3", 3, "Simple Weapon Master", optionMap(["Choose Simple Weapon"]), "Weapon"),
    choice("savage-dedication-3", 3, "Dedication I", optionMap(["Choose Dedication"]), "Dedication"),
    choice("savage-dedication-5", 5, "Dedication II", optionMap(["Choose Dedication"]), "Dedication")
  ],
  warlord: [
    ...levelChoices("warlord", "bonus-feat", [2, 4, 6, 8, 10], "Bonus Feat", WARLORD_BONUS_FEAT_OPTIONS, "Feat details"),
    ...levelChoices("warlord", "formation", [2, 5, 8], "Formation Combat", FORMATION_OPTIONS)
  ]
};

export function getClassChoiceDefinitions(classKey, level) {
  const currentLevel = Math.max(1, Number(level) || 1);
  return (CHOICE_DEFINITIONS[classKey] ?? []).filter((entry) => currentLevel >= entry.minLevel);
}

export function getClassChoiceRows(classKey, level, savedChoices = []) {
  const savedByKey = new Map((Array.isArray(savedChoices) ? savedChoices : []).map((entry) => [entry.key, entry]));

  return getClassChoiceDefinitions(classKey, level).map((definition) => {
    const saved = savedByKey.get(definition.key) ?? {};
    const optionKeys = Object.keys(definition.options ?? {});
    const value = optionKeys.includes(saved.value) ? saved.value : "";
    const visible = (definition.dependsOn ?? []).every((dependency) => dependency.values.includes(savedByKey.get(dependency.key)?.value));

    return {
      key: definition.key,
      label: definition.label,
      value,
      notes: typeof saved.notes === "string" ? saved.notes : "",
      options: definition.options ?? {},
      noteLabel: definition.noteLabel ?? "Notes",
      required: Boolean(definition.required),
      visible
    };
  });
}
