// Optional class benefit choices from supplemental class rules.

const FORMATION_OPTIONS = {
  heavyCavalry: "Heavy Cavalry",
  improvedHeavyCavalry: "Improved Heavy Cavalry",
  heavyInfantry: "Heavy Infantry",
  improvedHeavyInfantry: "Improved Heavy Infantry",
  lightCavalry: "Light Cavalry",
  improvedLightCavalry: "Improved Light Cavalry",
  skirmisher: "Skirmisher",
  improvedSkirmisher: "Improved Skirmisher",
  fightingSpirit: "Fighting Spirit",
  improvedFightingSpirit: "Improved Fighting Spirit",
  advancingInfantry: "Advancing Infantry",
  improvedAdvancingInfantry: "Improved Advancing Infantry",
  hoplite: "Hoplite",
  improvedHoplite: "Improved Hoplite",
  hurler: "Hurler",
  improvedHurler: "Improved Hurler",
  tortoiseHeavyInfantry: "Tortoise Heavy Infantry",
  improvedTortoiseHeavyInfantry: "Improved Tortoise Heavy Infantry",
  volleySupport: "Volley Support",
  improvedVolleySupport: "Improved Volley Support"
};

const BORDERER_COMBAT_STYLE_OPTIONS = {
  archery: "Archery",
  twoWeaponCombat: "Two-Weapon Combat",
  trapping: "Trapping",
  crossbowman: "Crossbowman",
  mountaineering: "Mountaineering",
  pugilism: "Pugilism",
  spearman: "Spearman",
  woodsman: "Woodsman"
};

const NOBLE_SOCIAL_OPTIONS = {
  ally: "Ally",
  comeliness: "Comeliness",
  familyTies: "Family Ties",
  refuge: "Refuge",
  smearOthers: "Smear Others",
  secrets: "Secrets",
  wealth: "Wealth",
  bornOfficer: "Born Officer",
  fightingSchool: "Fighting School",
  soldieryTraining: "Soldiery Training",
  threaten: "Threaten"
};

const TEMPTRESS_SELF_DEFENCE_OPTIONS = {
  anatomyKnowledge: "Anatomy Knowledge",
  avoidance: "Avoidance",
  flexibility: "Flexibility"
};

const THIEF_SPECIAL_OPTIONS = {
  cripplingStrike: "Crippling Strike",
  defensiveRoll: "Defensive Roll",
  feat: "Feat",
  improvedEvasion: "Improved Evasion",
  opportunist: "Opportunist",
  skillMastery: "Skill Mastery",
  slipperyMind: "Slippery Mind"
};

const FAVOURED_TERRAIN_OPTIONS = {
  plains: "Plains",
  desert: "Desert",
  forest: "Forest",
  hills: "Hills",
  mountains: "Mountains",
  marsh: "Marsh",
  tundra: "Tundra",
  underground: "Underground",
  urban: "Urban",
  water: "Water",
  region: "Specific Region"
};

const PIRATE_CODE_OPTIONS = {
  barachanSmokeAndRockets: "Barachan Smoke and Rockets",
  blackCoastDrums: "Black Coast Drums",
  vilayetSeaFlags: "Vilayet Sea Flags",
  zingaransigns: "Zingaran Signs",
  other: "Other Code"
};

const SCHOLAR_BACKGROUND_OPTIONS = {
  acolyte: "Acolyte",
  independent: "Independent",
  layPriest: "Lay Priest",
  pact: "Pact"
};

const SORCERY_STYLE_OPTIONS = {
  counterspells: "Counterspells",
  curses: "Curses",
  divination: "Divination",
  hypnotism: "Hypnotism",
  natureMagic: "Nature Magic",
  necromancy: "Necromancy",
  orientalMagic: "Oriental Magic",
  prestidigitation: "Prestidigitation",
  summoning: "Summoning"
};

const TEMPTRESS_SECRET_ART_OPTIONS = {
  sneakAttack: "Sneak Attack",
  sorcery: "Sorcery",
  politics: "Politics"
};

const MARTIAL_DISCIPLINE_OPTIONS = {
  crane: "Crane",
  dragon: "Dragon",
  panther: "Panther",
  serpent: "Serpent",
  tiger: "Tiger",
  other: "Other Discipline"
};

const PIT_FIGHTER_STYLE_OPTIONS = {
  bloodyMess: "Bloody Mess",
  crowdFavourite: "Crowd Favourite",
  dirtyTrick: "Dirty Trick",
  ferociousDisplay: "Ferocious Display",
  other: "Other Technique"
};

const GENERIC_BONUS_FEAT_OPTIONS = {
  feat: "Choose Feat"
};

function choice(key, minLevel, label, options, noteLabel = "Notes") {
  return { key, minLevel, label, options, noteLabel, required: true };
}

function levelChoices(classKey, featureKey, levels, label, options, noteLabel = "Notes") {
  return levels.map((level) => choice(`${classKey}-${featureKey}-${level}`, level, `${label}, Level ${level}`, options, noteLabel));
}

const CHOICE_DEFINITIONS = {
  barbarian: [
    choice(
      "barbarian-versatility-alternative",
      1,
      "Versatility Alternative",
      {
        versatility: "Versatility",
        culturalWeapon: "Cultural Weapon"
      },
      "Cultural weapon"
    ),
    choice("barbarian-crimson-mist-alternative", 2, "Crimson Mist Alternative", {
        crimsonMist: "Crimson Mist",
        fightingFrenzy: "Fighting Frenzy"
      })
  ],
  borderer: [
    ...levelChoices("borderer", "favoured-terrain", [1, 7, 13, 19], "Favoured Terrain", FAVOURED_TERRAIN_OPTIONS, "Terrain or region"),
    choice("borderer-combat-style", 2, "Combat Style", BORDERER_COMBAT_STYLE_OPTIONS),
    choice("borderer-bonus-feat-10", 10, "Bonus Feat, Level 10", GENERIC_BONUS_FEAT_OPTIONS, "Feat"),
    choice("borderer-bonus-feat-14", 14, "Bonus Feat, Level 14", GENERIC_BONUS_FEAT_OPTIONS, "Feat"),
    choice("borderer-bonus-feat-18", 18, "Bonus Feat, Level 18", GENERIC_BONUS_FEAT_OPTIONS, "Feat"),
    choice("borderer-guide-alternative", 7, "Guide Alternative", {
        guide: "Guide",
        terrainTactics: "Terrain Tactics"
      },
      "Favoured terrain used"
    )
  ],
  martialDisciple: [
    choice("martial-disciple-discipline", 2, "Martial Discipline", MARTIAL_DISCIPLINE_OPTIONS),
    choice("martial-disciple-improved-technique", 7, "Improved Martial Discipline Technique", { technique: "Choose Technique" }, "Technique"),
    choice("martial-disciple-greater-technique", 14, "Greater Martial Discipline Technique", { technique: "Choose Technique" }, "Technique"),
    choice("martial-disciple-master-technique", 20, "Master Martial Discipline Technique", { technique: "Choose Technique" }, "Technique")
  ],
  noble: [
    choice("noble-wealth-alternative", 1, "Wealth Alternative", {
        wealth: "Wealth",
        wellEquipped: "Well-Equipped"
      }),
    ...levelChoices("noble", "social-ability", [4, 9, 14, 19], "Social Ability", NOBLE_SOCIAL_OPTIONS, "Details"),
    ...levelChoices("noble", "special-regional-feature", [2, 7, 12, 17], "Special Regional Feature", { feature: "Choose Regional Feature" }, "Feature")
  ],
  nomad: [
    choice("nomad-terrain-or-threat-1", 1, "Favoured Terrain or Common Threat, Level 1", {
        favouredTerrain: "Favoured Terrain",
        commonThreat: "Common Threat"
      },
      "Terrain or threat"
    ),
    choice("nomad-terrain-or-threat-9", 9, "Favoured Terrain or Common Threat, Level 9", {
        favouredTerrain: "Favoured Terrain",
        commonThreat: "Common Threat"
      },
      "Terrain or threat"
    ),
    ...levelChoices("nomad", "bonus-feat", [2, 7, 12, 17], "Bonus Feat", GENERIC_BONUS_FEAT_OPTIONS, "Feat")
  ],
  pirate: [
    choice("pirate-code-2", 2, "Pirate Code", PIRATE_CODE_OPTIONS, "Code details"),
    choice("pirate-sneak-attack-alternative", 3, "Sneak Attack Alternative", {
        sneakAttack: "Sneak Attack",
        partingBlow: "Parting Blow"
      }),
    choice("pirate-sneak-subdual-alternative", 3, "Sneak Subdual Alternative", {
        sneakSubdual: "Sneak Subdual",
        scrapperBrawl: "Scrapper: Brawl",
        scrapperImprovedUnarmedCombat: "Scrapper: Improved Unarmed Combat",
        scrapperToughness: "Scrapper: Toughness"
      })
  ],
  scholar: [
    choice("scholar-background-1", 1, "Scholar Background", SCHOLAR_BACKGROUND_OPTIONS, "Master, pact, temple, or order"),
    ...levelChoices("scholar", "new-sorcery-style", [1, 2, 4, 8, 12, 16, 20], "New Sorcery Style", SORCERY_STYLE_OPTIONS, "Style notes"),
    ...levelChoices("scholar", "advanced-spell", [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "Advanced Spell", { spell: "Choose Spell" }, "Spell"),
    ...levelChoices("scholar", "bonus-spell", [3, 7, 11, 15, 19], "Bonus Spell", { spell: "Choose Spell" }, "Spell")
  ],
  soldier: [
    ...levelChoices("soldier", "bonus-feat", [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], "Bonus Feat", GENERIC_BONUS_FEAT_OPTIONS, "Feat"),
    ...levelChoices("soldier", "formation", [3, 7, 11, 15, 19], "Formation Combat", FORMATION_OPTIONS)
  ],
  temptress: [
    choice("temptress-performance-alternative", 2, "Compelling Performance Alternative", {
        compellingPerformance: "Compelling Performance",
        lewdDistraction: "Lewd Distraction"
      }),
    choice("temptress-secret-art-3", 3, "Secret Art", TEMPTRESS_SECRET_ART_OPTIONS, "Art details"),
    ...[
      ["self-defence", 3, "Self-Defence"],
      ["improved-self-defence", 7, "Improved Self-Defence"],
      ["advanced-self-defence", 11, "Advanced Secret Art or Self-Defence"],
      ["perfected-self-defence", 17, "Perfected Self-Defence"]
    ].map(([key, level, label]) => choice(`temptress-${key}`, level, label, TEMPTRESS_SELF_DEFENCE_OPTIONS)),
    choice("temptress-politics-improved-7", 7, "Politics Choice, Level 7", { politics: "Choose Politics Benefit" }, "Politics benefit"),
    choice("temptress-politics-advanced-11", 11, "Politics Choice, Level 11", { politics: "Choose Politics Benefit" }, "Politics benefit"),
    choice("temptress-politics-perfected-17", 17, "Politics Choice, Level 17", { politics: "Choose Politics Benefit" }, "Politics benefit")
  ],
  thief: [
    ...[1, 4, 8, 12, 16, 20].map((level) => choice(`thief-sneak-attack-style-${level}`, level, `Sneak Attack Style, Level ${level}`, {
        sneakAttackStyle: "Sneak Attack Style",
        weaponPrecision: "Weapon Precision"
      },
      "Weapon"
    )),
    choice("thief-poison-use-alternative", 8, "Poison Use Alternative", {
        poisonUse: "Poison Use",
        poisonResistance: "Poison Resistance"
      }),
    ...levelChoices("thief", "special-ability", [6, 10, 14, 18], "Special Ability", THIEF_SPECIAL_OPTIONS, "Details"),
    choice("thief-sneak-attack-alternative", 1, "Sneak Attack Alternative", {
        sneakAttack: "Sneak Attack",
        dispatchingBlow: "Dispatching Blow"
      })
  ],
  axeman: [
    ...levelChoices("axeman", "bonus-feat", [2, 5, 8], "Bonus Feat", GENERIC_BONUS_FEAT_OPTIONS, "Feat")
  ],
  duellist: [
    ...levelChoices("duellist", "bonus-feat", [2, 4, 6, 8, 10], "Bonus Feat", GENERIC_BONUS_FEAT_OPTIONS, "Feat")
  ],
  pitFighter: [
    ...levelChoices("pit-fighter", "fighting-style", [1, 5, 9], "Fighting Style", PIT_FIGHTER_STYLE_OPTIONS, "Technique"),
    ...levelChoices("pit-fighter", "bonus-feat", [3, 6, 9], "Bonus Feat", GENERIC_BONUS_FEAT_OPTIONS, "Feat")
  ],
  savage: [
    choice("savage-simple-weapon-focus-1", 1, "Simple Weapon Focus", { weapon: "Choose Simple Weapon" }, "Weapon"),
    choice("savage-simple-weapon-master-3", 3, "Simple Weapon Master", { weapon: "Choose Simple Weapon" }, "Weapon"),
    choice("savage-dedication-3", 3, "Dedication I", { dedication: "Choose Dedication" }, "Dedication"),
    choice("savage-dedication-5", 5, "Dedication II", { dedication: "Choose Dedication" }, "Dedication")
  ],
  warlord: [
    ...levelChoices("warlord", "bonus-feat", [2, 4, 6, 8, 10], "Bonus Feat", GENERIC_BONUS_FEAT_OPTIONS, "Feat"),
    ...levelChoices("warlord", "formation", [2, 5, 8], "Formation Combat", FORMATION_OPTIONS)
  ]
};

export function getClassChoiceDefinitions(classKey, level) {
  const currentLevel = Math.max(1, Number(level) || 1);
  return (CHOICE_DEFINITIONS[classKey] ?? []).filter((choice) => currentLevel >= choice.minLevel);
}

export function getClassChoiceRows(classKey, level, savedChoices = []) {
  const savedByKey = new Map((Array.isArray(savedChoices) ? savedChoices : []).map((choice) => [choice.key, choice]));

  return getClassChoiceDefinitions(classKey, level).map((definition) => {
    const saved = savedByKey.get(definition.key) ?? {};
    const optionKeys = Object.keys(definition.options ?? {});
    const value = optionKeys.includes(saved.value) ? saved.value : "";

    return {
      key: definition.key,
      label: definition.label,
      value,
      notes: typeof saved.notes === "string" ? saved.notes : "",
      options: definition.options ?? {},
      noteLabel: definition.noteLabel ?? "Notes",
      required: Boolean(definition.required)
    };
  });
}
