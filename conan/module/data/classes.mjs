// File: conan/module/data/classes.mjs

// Available base classes shown in the Classes tab selector.
export const CONAN_CLASS_OPTIONS = {
  barbarian: "Barbarian",
  borderer: "Borderer",
  martialDisciple: "Martial Disciple",
  noble: "Noble",
  nomad: "Nomad",
  pirate: "Pirate",
  scholar: "Scholar",
  soldier: "Soldier",
  temptress: "Temptress",
  thief: "Thief",
  axeman: "Axeman",
  duellist: "Duellist",
  pitFighter: "Pit Fighter",
  savage: "Savage",
  warlord: "Warlord",
  wrestler: "Wrestler"
};

// Class skill lists from the rulebook, mapped to this sheet's merged skill names.
// Examples: Listen/Spot/Search become Perception; Hide/Move Silently become Stealth.
export const CONAN_CLASS_SKILLS = {
  barbarian: [
    "bluff", "climb", "handleAnimal", "intimidate", "perception", "ride", "stealth", "survival", "swim"
  ],
  borderer: [
    "climb", "diplomacy", "handleAnimal", "knowledgeGeography", "knowledgeLocal", "knowledgeRumours",
    "perception", "ride", "stealth", "survival", "swim", "useRope"
  ],
  martialDisciple: [],
  noble: [
    "appraise", "bluff", "diplomacy", "handleAnimal", "intimidate", "knowledgeHistory", "knowledgeLocal",
    "knowledgeNobility", "knowledgeReligion", "knowledgeRumours", "knowledgeTactics", "perception",
    "ride", "senseMotive", "stealth", "survival"
  ],
  nomad: [
    "bluff", "climb", "diplomacy", "handleAnimal", "heal", "knowledgeLocal", "knowledgeRumours",
    "perception", "ride", "stealth", "survival"
  ],
  pirate: [
    "acrobatics", "appraise", "bluff", "climb", "diplomacy", "disguise", "intimidate",
    "knowledgeGeography", "knowledgeRumours", "perception", "stealth", "survival", "swim", "useRope"
  ],
  scholar: [
    "appraise", "bluff", "concentration", "decipherScript", "diplomacy", "forgery", "heal",
    "intimidate", "knowledgeArcana", "knowledgeGeography", "knowledgeHistory", "knowledgeLocal",
    "knowledgeNobility", "knowledgeReligion", "knowledgeRumours", "knowledgeTactics", "perception",
    "senseMotive", "stealth"
  ],
  soldier: [
    "climb", "intimidate", "knowledgeGeography", "knowledgeLocal", "knowledgeRumours",
    "knowledgeTactics", "perception", "ride"
  ],
  temptress: [
    "acrobatics", "appraise", "bluff", "diplomacy", "disguise", "forgery", "heal", "intimidate",
    "knowledgeLocal", "knowledgeNobility", "knowledgeRumours", "perception", "senseMotive",
    "sleightOfHand", "stealth", "swim", "useRope"
  ],
  thief: [
    "acrobatics", "appraise", "bluff", "climb", "decipherScript", "diplomacy", "disableDevice",
    "disguise", "forgery", "intimidate", "knowledgeArcana", "knowledgeLocal", "knowledgeNobility",
    "knowledgeRumours", "perception", "senseMotive", "sleightOfHand", "stealth", "useRope"
  ],
  axeman: [
    "acrobatics", "bluff", "climb", "handleAnimal", "intimidate", "perception", "ride",
    "senseMotive", "survival", "useRope"
  ],
  duellist: [
    "acrobatics", "bluff", "challenge", "climb", "diplomacy", "intimidate", "perception",
    "senseMotive"
  ],
  pitFighter: [
    "acrobatics", "bluff", "climb", "disguise", "handleAnimal", "heal", "intimidate",
    "perception", "senseMotive", "sleightOfHand", "survival", "swim", "useRope"
  ],
  savage: [
    "acrobatics", "climb", "handleAnimal", "heal", "intimidate", "perception", "senseMotive",
    "stealth", "survival", "swim"
  ],
  warlord: [
    "acrobatics", "bluff", "challenge", "climb", "diplomacy", "handleAnimal", "heal", "intimidate",
    "knowledgeArcana", "knowledgeGeography", "knowledgeHistory", "knowledgeLocal", "knowledgeNobility",
    "knowledgeReligion", "knowledgeRumours", "knowledgeTactics", "perception", "ride", "senseMotive",
    "sharpen", "survival"
  ],
  wrestler: [
    "acrobatics", "bluff", "challenge", "climb", "heal", "intimidate", "perception",
    "senseMotive", "survival", "useRope"
  ]
};

export const CONAN_CUSTOM_CLASS_SKILL_GROUPS = {
  barbarian: ["crafts", "performs", "professions"],
  borderer: ["crafts", "professions"],
  martialDisciple: [],
  noble: ["performs"],
  nomad: ["crafts"],
  pirate: ["crafts", "performs", "professions"],
  scholar: ["crafts", "performs", "professions"],
  soldier: ["crafts", "performs", "professions"],
  temptress: ["crafts", "performs", "professions"],
  thief: ["crafts", "performs", "professions"],
  axeman: ["crafts", "performs", "professions"],
  duellist: ["crafts", "performs", "professions"],
  pitFighter: ["performs", "professions"],
  savage: ["crafts"],
  warlord: ["performs", "professions"],
  wrestler: []
};

// Plain-object class row used when adding a new class entry to an actor.
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

// Helper for defining one level of class progression with sensible defaults.
function createProgressionRow({
  bab = 0,
  attackSequence = "",
  dodge = 0,
  parry = 0,
  magicAttack = 0,
  fort = 0,
  ref = 0,
  will = 0,
  features = []
} = {}) {
  return {
    bab,
    attackSequence,
    dodge,
    parry,
    magicAttack,
    fort,
    ref,
    will,
    features
  };
}

// Class progression table. Each class maps level numbers to derived stats/features.
const CLASS_PROGRESSIONS = {
  barbarian: {
    hitDie: 10,
    skillPointsPerLevel: 4,
    levels: {
      1: createProgressionRow({ bab: 1, attackSequence: "+1", fort: 2, ref: 2, features: ["Fearless", "Track", "Versatility (-2 penalty)"] }),
      2: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, fort: 3, ref: 3, features: ["Bite Sword", "Crimson Mist"] }),
      3: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 2, parry: 1, fort: 3, ref: 3, will: 1, features: ["Trap Sense +1", "Endurance"] }),
      4: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 3, parry: 1, magicAttack: 1, fort: 4, ref: 4, will: 1, features: ["Uncanny Dodge"] }),
      5: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 3, parry: 1, magicAttack: 1, fort: 4, ref: 4, will: 1, features: ["Mobility"] }),
      6: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 4, parry: 2, magicAttack: 1, fort: 5, ref: 5, will: 2, features: ["Trap Sense +2", "Diehard"] }),
      7: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 5, parry: 2, magicAttack: 1, fort: 5, ref: 5, will: 2, features: ["Versatility (no penalty)"] }),
      8: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 6, parry: 3, magicAttack: 2, fort: 6, ref: 6, will: 2, features: ["Improved Uncanny Dodge"] }),
      9: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 6, parry: 3, magicAttack: 2, fort: 6, ref: 6, will: 3, features: ["Trap Sense +3"] }),
      10: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 7, parry: 3, magicAttack: 2, fort: 7, ref: 7, will: 3, features: ["Improved Mobility", "Damage Reduction 1/-"] }),
      11: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 8, parry: 4, magicAttack: 2, fort: 7, ref: 7, will: 3, features: ["Greater Crimson Mist"] }),
      12: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 9, parry: 4, magicAttack: 3, fort: 8, ref: 8, will: 4, features: ["Trap Sense +4"] }),
      13: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 9, parry: 4, magicAttack: 3, fort: 8, ref: 8, will: 4, features: ["Damage Reduction 2/-"] }),
      14: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 10, parry: 5, magicAttack: 3, fort: 9, ref: 9, will: 4, features: ["Versatility (double threat range)"] }),
      15: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 11, parry: 5, magicAttack: 3, fort: 9, ref: 9, will: 5, features: ["Greater Mobility", "Trap Sense +5"] }),
      16: createProgressionRow({ bab: 16, attackSequence: "+16/+11/+6/+1", dodge: 12, parry: 6, magicAttack: 4, fort: 10, ref: 10, will: 5, features: ["Damage Reduction 3/-"] }),
      17: createProgressionRow({ bab: 17, attackSequence: "+17/+12/+7/+2", dodge: 12, parry: 6, magicAttack: 4, fort: 10, ref: 10, will: 5, features: ["Unconquerable"] }),
      18: createProgressionRow({ bab: 18, attackSequence: "+18/+13/+8/+3", dodge: 13, parry: 6, magicAttack: 4, fort: 11, ref: 11, will: 6, features: ["Trap Sense +6", "Wheel of Death"] }),
      19: createProgressionRow({ bab: 19, attackSequence: "+19/+14/+9/+4", dodge: 14, parry: 7, magicAttack: 4, fort: 11, ref: 11, will: 6, features: ["Damage Reduction 4/-"] }),
      20: createProgressionRow({ bab: 20, attackSequence: "+20/+15/+10/+5", dodge: 15, parry: 7, magicAttack: 5, fort: 12, ref: 12, will: 6, features: ["Versatility (triple threat range)"] })
    }
  },
  borderer: {
    hitDie: 10,
    skillPointsPerLevel: 6,
    levels: {
      1: createProgressionRow({ bab: 1, attackSequence: "+1", fort: 2, ref: 2, features: ["Track", "Favoured Terrain +1"] }),
      2: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 1, fort: 3, ref: 3, features: ["Combat Style"] }),
      3: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 1, fort: 3, ref: 3, will: 1, features: ["Endurance"] }),
      4: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 2, parry: 2, magicAttack: 1, fort: 4, ref: 4, will: 1, features: ["Favoured Terrain +2"] }),
      5: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 2, parry: 2, magicAttack: 1, fort: 4, ref: 4, will: 1, features: ["Improved Combat Style"] }),
      6: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 3, parry: 3, magicAttack: 1, fort: 5, ref: 5, will: 2, features: ["Diehard"] }),
      7: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 3, parry: 3, magicAttack: 1, fort: 5, ref: 5, will: 2, features: ["2nd Favoured Terrain +1", "Guide"] }),
      8: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 4, parry: 4, magicAttack: 2, fort: 6, ref: 6, will: 2, features: ["Favoured Terrain +3"] }),
      9: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 4, parry: 4, magicAttack: 2, fort: 6, ref: 6, will: 3, features: ["Swift Tracker"] }),
      10: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 5, parry: 5, magicAttack: 2, fort: 7, ref: 7, will: 3, features: ["Bonus Feat"] }),
      11: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 5, parry: 5, magicAttack: 2, fort: 7, ref: 7, will: 3, features: ["Combat Style Mastery"] }),
      12: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 6, parry: 6, magicAttack: 3, fort: 8, ref: 8, will: 4, features: ["2nd Favoured Terrain +2", "Favoured Terrain +4"] }),
      13: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 6, parry: 6, magicAttack: 3, fort: 8, ref: 8, will: 4, features: ["3rd Favoured Terrain +1", "Guide (fast movement)"] }),
      14: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 7, parry: 7, magicAttack: 3, fort: 9, ref: 9, will: 4, features: ["Bonus Feat"] }),
      15: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 7, parry: 7, magicAttack: 3, fort: 9, ref: 9, will: 5, features: ["Heroic Sacrifice"] }),
      16: createProgressionRow({ bab: 16, attackSequence: "+16/+11/+6/+1", dodge: 8, parry: 8, magicAttack: 4, fort: 10, ref: 10, will: 5, features: ["Favoured Terrain +5"] }),
      17: createProgressionRow({ bab: 17, attackSequence: "+17/+12/+7/+2", dodge: 8, parry: 8, magicAttack: 4, fort: 10, ref: 10, will: 5, features: ["2nd Favoured Terrain +3"] }),
      18: createProgressionRow({ bab: 18, attackSequence: "+18/+13/+8/+3", dodge: 9, parry: 9, magicAttack: 4, fort: 11, ref: 11, will: 6, features: ["Bonus Feat", "Swift Tracker (full speed)"] }),
      19: createProgressionRow({ bab: 19, attackSequence: "+19/+14/+9/+4", dodge: 9, parry: 9, magicAttack: 4, fort: 11, ref: 11, will: 6, features: ["3rd Favoured Terrain +2", "4th Favoured Terrain +1"] }),
      20: createProgressionRow({ bab: 20, attackSequence: "+20/+15/+10/+5", dodge: 10, parry: 10, magicAttack: 5, fort: 12, ref: 12, will: 6, features: ["Favoured Terrain +6", "Guide (mounts)"] })
    }
  },
  martialDisciple: {
    hitDie: 8,
    skillPointsPerLevel: 4,
    levels: {
      1: createProgressionRow({ features: ["Improved Unarmed Strike"], ref: 2, will: 2 }),
      2: createProgressionRow({ bab: 1, attackSequence: "+1", dodge: 1, parry: 1, magicAttack: 1, ref: 3, will: 3, features: ["Martial Discipline"] }),
      3: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 2, parry: 2, magicAttack: 1, fort: 1, ref: 3, will: 3, features: ["Acrobatics +5", "Disciplined Defence"] }),
      4: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 3, parry: 3, magicAttack: 2, fort: 1, ref: 4, will: 4, features: ["Uncanny Dodge"] }),
      5: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 3, parry: 3, magicAttack: 2, fort: 1, ref: 4, will: 4, features: ["Mobility"] }),
      6: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 4, parry: 4, magicAttack: 3, fort: 2, ref: 5, will: 5 }),
      7: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 5, parry: 5, magicAttack: 3, fort: 2, ref: 5, will: 5, features: ["Improved Martial Discipline"] }),
      8: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 6, parry: 6, magicAttack: 4, fort: 2, ref: 6, will: 6, features: ["Improved Uncanny Dodge"] }),
      9: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 6, parry: 6, magicAttack: 4, fort: 3, ref: 6, will: 6, features: ["Acrobatics +10", "Disciplined Blow"] }),
      10: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 7, parry: 7, magicAttack: 5, fort: 3, ref: 7, will: 7, features: ["Improved Mobility", "Damage Reduction 1/-"] }),
      11: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 8, parry: 8, magicAttack: 5, fort: 3, ref: 7, will: 7, features: ["Speed of the Hare"] }),
      12: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 9, parry: 9, magicAttack: 6, fort: 4, ref: 8, will: 8 }),
      13: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 9, parry: 9, magicAttack: 6, fort: 4, ref: 8, will: 8, features: ["Damage Reduction 2/-"] }),
      14: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 10, parry: 10, magicAttack: 7, fort: 4, ref: 9, will: 9, features: ["Greater Martial Discipline"] }),
      15: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 11, parry: 11, magicAttack: 7, fort: 5, ref: 9, will: 9, features: ["Greater Mobility", "Acrobatics +15"] }),
      16: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 12, parry: 12, magicAttack: 8, fort: 5, ref: 10, will: 10, features: ["Damage Reduction 3/-"] }),
      17: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 12, parry: 12, magicAttack: 8, fort: 5, ref: 10, will: 10, features: ["Speed of the Wind"] }),
      18: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 13, parry: 13, magicAttack: 9, fort: 6, ref: 11, will: 11 }),
      19: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 14, parry: 14, magicAttack: 9, fort: 6, ref: 11, will: 11, features: ["Damage Reduction 4/-"] }),
      20: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 15, parry: 15, magicAttack: 10, fort: 6, ref: 12, will: 12, features: ["Master Martial Discipline"] })
    }
  },
  noble: {
    hitDie: 8,
    skillPointsPerLevel: 6,
    levels: {
      1: createProgressionRow({ will: 2, features: ["Title", "Rank Hath Its Privileges", "Wealth"] }),
      2: createProgressionRow({ bab: 1, attackSequence: "+1", parry: 1, will: 3, features: ["Special Regional Feature +1"] }),
      3: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 1, fort: 1, ref: 1, will: 3 }),
      4: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 2, magicAttack: 1, fort: 1, ref: 1, will: 4, features: ["Social Ability"] }),
      5: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 2, magicAttack: 1, fort: 1, ref: 1, will: 4, features: ["Lead By Example +2"] }),
      6: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 2, parry: 3, magicAttack: 1, fort: 2, ref: 2, will: 5, features: ["Enhanced Leadership"] }),
      7: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 2, parry: 3, magicAttack: 1, fort: 2, ref: 2, will: 5, features: ["Special Regional Feature +2"] }),
      8: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 3, parry: 4, magicAttack: 2, fort: 2, ref: 2, will: 6 }),
      9: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 3, parry: 4, magicAttack: 2, fort: 3, ref: 3, will: 6, features: ["Social Ability"] }),
      10: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 3, parry: 5, magicAttack: 2, fort: 3, ref: 3, will: 7, features: ["Lead By Example +4"] }),
      11: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 4, parry: 5, magicAttack: 2, fort: 3, ref: 3, will: 7, features: ["Do You Know Who I Am?"] }),
      12: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 4, parry: 6, magicAttack: 3, fort: 4, ref: 4, will: 8, features: ["Special Regional Feature +3"] }),
      13: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 4, parry: 6, magicAttack: 3, fort: 4, ref: 4, will: 8 }),
      14: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 5, parry: 7, magicAttack: 3, fort: 4, ref: 4, will: 9, features: ["Social Ability"] }),
      15: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 5, parry: 7, magicAttack: 3, fort: 5, ref: 5, will: 9, features: ["Lead By Example +6"] }),
      16: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 6, parry: 8, magicAttack: 4, fort: 5, ref: 5, will: 10, features: ["Rally"] }),
      17: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 6, parry: 8, magicAttack: 4, fort: 5, ref: 5, will: 10, features: ["Special Regional Feature +4"] }),
      18: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 6, parry: 9, magicAttack: 4, fort: 6, ref: 6, will: 11 }),
      19: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 7, parry: 9, magicAttack: 4, fort: 6, ref: 6, will: 11, features: ["Social Ability"] }),
      20: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 7, parry: 10, magicAttack: 5, fort: 6, ref: 6, will: 12, features: ["Absolute Power", "Lead By Example +8"] })
    }
  },
  nomad: {
    hitDie: 10,
    skillPointsPerLevel: 4,
    levels: {
      1: createProgressionRow({ bab: 1, attackSequence: "+1", fort: 2, ref: 2, features: ["Track", "Favoured Terrain +1", "Born to the Saddle"] }),
      2: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 1, fort: 3, ref: 3, features: ["Bonus Feat"] }),
      3: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 1, fort: 3, ref: 3, will: 1, features: ["Endurance"] }),
      4: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 2, parry: 2, magicAttack: 1, fort: 4, ref: 4, will: 1, features: ["Nomad Charge +1", "Favoured Terrain +2"] }),
      5: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 2, parry: 2, magicAttack: 1, fort: 4, ref: 4, will: 1, features: ["Mobility"] }),
      6: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 3, parry: 3, magicAttack: 1, fort: 5, ref: 5, will: 2, features: ["Diehard"] }),
      7: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 3, parry: 3, magicAttack: 1, fort: 5, ref: 5, will: 2, features: ["Bonus Feat"] }),
      8: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 4, parry: 4, magicAttack: 2, fort: 6, ref: 6, will: 2, features: ["Favoured Terrain +3"] }),
      9: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 4, parry: 4, magicAttack: 2, fort: 6, ref: 6, will: 3, features: ["Second Favoured Terrain +1"] }),
      10: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 5, parry: 5, magicAttack: 2, fort: 7, ref: 7, will: 3, features: ["Improved Mobility"] }),
      11: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 5, parry: 5, magicAttack: 2, fort: 7, ref: 7, will: 3, features: ["Nomad Charge +2"] }),
      12: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 6, parry: 6, magicAttack: 3, fort: 8, ref: 8, will: 4, features: ["Bonus Feat", "Favoured Terrain +4"] }),
      13: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 6, parry: 6, magicAttack: 3, fort: 8, ref: 8, will: 4, features: ["Born to the Saddle"] }),
      14: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 7, parry: 7, magicAttack: 3, fort: 9, ref: 9, will: 4, features: ["2nd Favoured Terrain +2"] }),
      15: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 7, parry: 7, magicAttack: 3, fort: 9, ref: 9, will: 5, features: ["Greater Mobility"] }),
      16: createProgressionRow({ bab: 16, attackSequence: "+16/+11/+6/+1", dodge: 8, parry: 8, magicAttack: 4, fort: 10, ref: 10, will: 5, features: ["Favoured Terrain +5"] }),
      17: createProgressionRow({ bab: 17, attackSequence: "+17/+12/+7/+2", dodge: 8, parry: 8, magicAttack: 4, fort: 10, ref: 10, will: 5, features: ["Bonus Feat"] }),
      18: createProgressionRow({ bab: 18, attackSequence: "+18/+13/+8/+3", dodge: 9, parry: 9, magicAttack: 4, fort: 11, ref: 11, will: 6, features: ["Nomad Charge +3"] }),
      19: createProgressionRow({ bab: 19, attackSequence: "+19/+14/+9/+4", dodge: 9, parry: 9, magicAttack: 4, fort: 11, ref: 11, will: 6, features: ["2nd Favoured Terrain +3"] }),
      20: createProgressionRow({ bab: 20, attackSequence: "+20/+15/+10/+5", dodge: 10, parry: 10, magicAttack: 5, fort: 12, ref: 12, will: 6, features: ["Favoured Terrain +6", "Mounted Mobility"] })
    }
  },
  pirate: {
    hitDie: 8,
    skillPointsPerLevel: 6,
    levels: {
      1: createProgressionRow({ fort: 2, ref: 2, features: ["Seamanship +1", "Ferocious Attack"] }),
      2: createProgressionRow({ bab: 1, attackSequence: "+1", dodge: 1, parry: 1, fort: 3, ref: 3, features: ["Pirate Code", "To Sail a Road of Blood and Slaughter"] }),
      3: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 2, parry: 1, fort: 3, ref: 3, will: 1, features: ["Sneak Attack +1d6", "Sneak Subdual"] }),
      4: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 3, parry: 2, magicAttack: 1, fort: 4, ref: 4, will: 1, features: ["Uncanny Dodge"] }),
      5: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 3, parry: 2, magicAttack: 1, fort: 4, ref: 4, will: 1, features: ["Mobility"] }),
      6: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 4, parry: 3, magicAttack: 1, fort: 5, ref: 5, will: 2, features: ["Sneak Attack +2d6", "Seamanship +2"] }),
      7: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 5, parry: 3, magicAttack: 1, fort: 5, ref: 5, will: 2, features: ["Bite Sword", "Ferocious Attack (additional attack)"] }),
      8: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 6, parry: 4, magicAttack: 2, fort: 6, ref: 6, will: 2, features: ["Improved Uncanny Dodge", "Poison Resistance +1"] }),
      9: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 6, parry: 4, magicAttack: 2, fort: 6, ref: 6, will: 3, features: ["Sneak Attack +3d6"] }),
      10: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 7, parry: 5, magicAttack: 2, fort: 7, ref: 7, will: 3, features: ["Improved Mobility", "Navigation"] }),
      11: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 8, parry: 5, magicAttack: 2, fort: 7, ref: 7, will: 3, features: ["Seamanship +3"] }),
      12: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 9, parry: 6, magicAttack: 3, fort: 8, ref: 8, will: 4, features: ["Sneak Attack +4d6"] }),
      13: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 9, parry: 6, magicAttack: 3, fort: 8, ref: 8, will: 4, features: ["Ferocious Attack (stun, blood & slaughter)"] }),
      14: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 10, parry: 7, magicAttack: 3, fort: 9, ref: 9, will: 4, features: ["Poison Resistance +2"] }),
      15: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 11, parry: 7, magicAttack: 3, fort: 9, ref: 9, will: 5, features: ["Sneak Attack +5d6", "Greater Mobility"] }),
      16: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 12, parry: 8, magicAttack: 4, fort: 10, ref: 10, will: 5, features: ["Seamanship +4"] }),
      17: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 12, parry: 8, magicAttack: 4, fort: 10, ref: 10, will: 5 }),
      18: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 13, parry: 9, magicAttack: 4, fort: 11, ref: 11, will: 6, features: ["Sneak Attack +6d6"] }),
      19: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 14, parry: 9, magicAttack: 4, fort: 11, ref: 11, will: 6, features: ["Ferocious Attack (fear)"] }),
      20: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 15, parry: 10, magicAttack: 5, fort: 12, ref: 12, will: 6, features: ["Poison Resistance +3 (and half effect)"] })
    }
  },
  scholar: {
    hitDie: 6,
    skillPointsPerLevel: 8,
    levels: {
      1: createProgressionRow({ will: 2, features: ["New Sorcery Style", "Scholar Background", "Base Power Points", "Knowledge Is Power"] }),
      2: createProgressionRow({ bab: 1, attackSequence: "+1", magicAttack: 1, will: 3, features: ["+1 Power Point", "New Sorcery Style"] }),
      3: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 1, magicAttack: 1, fort: 1, ref: 1, will: 3, features: ["Advanced Spell", "Bonus Spell"] }),
      4: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 1, magicAttack: 2, fort: 1, ref: 1, will: 4, features: ["Advanced Spell", "New Sorcery Style"] }),
      5: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 1, magicAttack: 2, fort: 1, ref: 1, will: 4, features: ["Advanced Spell", "Iron Will"] }),
      6: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 2, parry: 2, magicAttack: 3, fort: 2, ref: 2, will: 5, features: ["Advanced Spell", "+1 Power Point", "Increased Maximum Power Points (triple)"] }),
      7: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 2, parry: 2, magicAttack: 3, fort: 2, ref: 2, will: 5, features: ["Advanced Spell", "Bonus Spell"] }),
      8: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 3, parry: 3, magicAttack: 4, fort: 2, ref: 2, will: 6, features: ["Advanced Spell", "New Sorcery Style"] }),
      9: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 3, parry: 3, magicAttack: 4, fort: 3, ref: 3, will: 6, features: ["Advanced Spell"] }),
      10: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 3, parry: 3, magicAttack: 5, fort: 3, ref: 3, will: 7, features: ["Advanced Spell", "+1 Power Point"] }),
      11: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 4, parry: 4, magicAttack: 5, fort: 3, ref: 3, will: 7, features: ["Advanced Spell", "Bonus Spell"] }),
      12: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 4, parry: 4, magicAttack: 6, fort: 4, ref: 4, will: 8, features: ["Advanced Spell", "New Sorcery Style"] }),
      13: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 4, parry: 4, magicAttack: 6, fort: 4, ref: 4, will: 8, features: ["Advanced Spell", "Increased Maximum Power Points (quadruple)"] }),
      14: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 5, parry: 5, magicAttack: 7, fort: 4, ref: 4, will: 9, features: ["Advanced Spell", "+1 Power Point"] }),
      15: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 5, parry: 5, magicAttack: 7, fort: 5, ref: 5, will: 9, features: ["Advanced Spell", "Bonus Spell"] }),
      16: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 6, parry: 6, magicAttack: 8, fort: 5, ref: 5, will: 10, features: ["Advanced Spell", "New Sorcery Style"] }),
      17: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 6, parry: 6, magicAttack: 8, fort: 5, ref: 5, will: 10, features: ["Advanced Spell"] }),
      18: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 6, parry: 6, magicAttack: 9, fort: 6, ref: 6, will: 11, features: ["Advanced Spell", "+1 Power Point"] }),
      19: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 7, parry: 7, magicAttack: 9, fort: 6, ref: 6, will: 11, features: ["Advanced Spell", "Bonus Spell"] }),
      20: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 7, parry: 7, magicAttack: 10, fort: 6, ref: 6, will: 12, features: ["Advanced Spell", "New Sorcery Style", "Increased Maximum Power Points (quintuple)"] })
    }
  },
  soldier: {
    hitDie: 10,
    skillPointsPerLevel: 2,
    levels: {
      1: createProgressionRow({ bab: 1, attackSequence: "+1", fort: 2, features: ["Bonus Feat"] }),
      2: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 1, fort: 3, features: ["Bonus Feat"] }),
      3: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 2, fort: 3, ref: 1, will: 1, features: ["Formation Combat"] }),
      4: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 2, parry: 3, magicAttack: 1, fort: 4, ref: 1, will: 1, features: ["Bonus Feat"] }),
      5: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 2, parry: 3, magicAttack: 1, fort: 4, ref: 1, will: 1, features: ["Officer"] }),
      6: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 3, parry: 4, magicAttack: 1, fort: 5, ref: 2, will: 2, features: ["Bonus Feat"] }),
      7: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 3, parry: 5, magicAttack: 1, fort: 5, ref: 2, will: 2, features: ["Formation Combat"] }),
      8: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 4, parry: 6, magicAttack: 2, fort: 6, ref: 2, will: 2, features: ["Bonus Feat"] }),
      9: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 4, parry: 6, magicAttack: 2, fort: 6, ref: 3, will: 3, features: ["Officer +1"] }),
      10: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 5, parry: 7, magicAttack: 2, fort: 7, ref: 3, will: 3, features: ["Bonus Feat"] }),
      11: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 5, parry: 8, magicAttack: 2, fort: 7, ref: 3, will: 3, features: ["Formation Combat"] }),
      12: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 6, parry: 9, magicAttack: 3, fort: 8, ref: 4, will: 4, features: ["Bonus Feat"] }),
      13: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 6, parry: 9, magicAttack: 3, fort: 8, ref: 4, will: 4, features: ["Officer +2"] }),
      14: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 7, parry: 10, magicAttack: 3, fort: 9, ref: 4, will: 4, features: ["Bonus Feat"] }),
      15: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 7, parry: 11, magicAttack: 3, fort: 9, ref: 5, will: 5, features: ["Formation Combat"] }),
      16: createProgressionRow({ bab: 16, attackSequence: "+16/+11/+6/+1", dodge: 8, parry: 12, magicAttack: 4, fort: 10, ref: 5, will: 5, features: ["Bonus Feat"] }),
      17: createProgressionRow({ bab: 17, attackSequence: "+17/+12/+7/+2", dodge: 8, parry: 12, magicAttack: 4, fort: 10, ref: 5, will: 5, features: ["Officer +3"] }),
      18: createProgressionRow({ bab: 18, attackSequence: "+18/+13/+8/+3", dodge: 9, parry: 13, magicAttack: 4, fort: 11, ref: 6, will: 6, features: ["Bonus Feat"] }),
      19: createProgressionRow({ bab: 19, attackSequence: "+19/+14/+9/+4", dodge: 9, parry: 14, magicAttack: 4, fort: 11, ref: 6, will: 6, features: ["Formation Combat"] }),
      20: createProgressionRow({ bab: 20, attackSequence: "+20/+15/+10/+5", dodge: 10, parry: 15, magicAttack: 5, fort: 12, ref: 6, will: 6, features: ["Bonus Feat"] })
    }
  },
  temptress: {
    hitDie: 6,
    skillPointsPerLevel: 6,
    levels: {
      1: createProgressionRow({ ref: 2, will: 2, features: ["Comeliness", "Savoir-Faire"] }),
      2: createProgressionRow({ bab: 1, attackSequence: "+1", dodge: 1, ref: 3, will: 3, features: ["Seductive Art +1", "Compelling Performance 1/day"] }),
      3: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 1, fort: 1, ref: 3, will: 3, features: ["Secret Art"] }),
      4: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 2, parry: 1, magicAttack: 1, fort: 1, ref: 4, will: 4, features: ["Seductive Savant"] }),
      5: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 2, parry: 1, magicAttack: 1, fort: 1, ref: 4, will: 4, features: ["Binding Contract"] }),
      6: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 3, parry: 2, magicAttack: 1, fort: 2, ref: 5, will: 5, features: ["Seductive Art +2", "Compelling Performance 2/day"] }),
      7: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 3, parry: 2, magicAttack: 1, fort: 2, ref: 5, will: 5, features: ["Improved Secret Art", "Admirers"] }),
      8: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 4, parry: 3, magicAttack: 2, fort: 2, ref: 6, will: 6, features: ["Inspire"] }),
      9: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 4, parry: 3, magicAttack: 2, fort: 3, ref: 6, will: 6, features: ["Outrageous Flattery"] }),
      10: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 5, parry: 3, magicAttack: 2, fort: 3, ref: 7, will: 7, features: ["Seductive Art +3", "Compelling Performance 3/day"] }),
      11: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 5, parry: 4, magicAttack: 2, fort: 3, ref: 7, will: 7, features: ["Advanced Secret Art", "Exquisite"] }),
      12: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 6, parry: 4, magicAttack: 3, fort: 4, ref: 8, will: 8 }),
      13: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 6, parry: 4, magicAttack: 3, fort: 4, ref: 8, will: 8, features: ["Use Weakness as Strength"] }),
      14: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 7, parry: 5, magicAttack: 3, fort: 4, ref: 9, will: 9, features: ["Seductive Art +4", "Compelling Performance 4/day"] }),
      15: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 7, parry: 5, magicAttack: 3, fort: 5, ref: 9, will: 9 }),
      16: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 8, parry: 6, magicAttack: 4, fort: 5, ref: 10, will: 10, features: ["Veiled In Darkness"] }),
      17: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 8, parry: 6, magicAttack: 4, fort: 5, ref: 10, will: 10, features: ["Perfected Secret Art"] }),
      18: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 9, parry: 6, magicAttack: 4, fort: 6, ref: 11, will: 11, features: ["Seductive Art +5"] }),
      19: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 9, parry: 7, magicAttack: 4, fort: 6, ref: 11, will: 11, features: ["Compelling Performance 5/day"] }),
      20: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 10, parry: 7, magicAttack: 5, fort: 6, ref: 12, will: 12, features: ["Glorious"] })
    }
  },
  thief: {
    hitDie: 8,
    skillPointsPerLevel: 8,
    levels: {
      1: createProgressionRow({ ref: 2, features: ["Sneak Attack Style", "Sneak Attack +1d6/+1d8", "Trap Disarming"] }),
      2: createProgressionRow({ bab: 1, attackSequence: "+1", dodge: 1, parry: 1, ref: 3, features: ["Eyes of the Cat"] }),
      3: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 1, fort: 1, ref: 3, will: 1, features: ["Sneak Attack +2d6/+2d8", "Trap Sense +1"] }),
      4: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 2, parry: 2, magicAttack: 1, fort: 1, ref: 4, will: 1, features: ["Sneak Attack Style", "Light-Footed"] }),
      5: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 2, parry: 2, magicAttack: 1, fort: 1, ref: 4, will: 1, features: ["Sneak Attack +3d6/+3d8"] }),
      6: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 3, parry: 3, magicAttack: 1, fort: 2, ref: 5, will: 2, features: ["Trap Sense +2", "Special Ability"] }),
      7: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 3, parry: 3, magicAttack: 1, fort: 2, ref: 5, will: 2, features: ["Sneak Attack +4d6/+4d8"] }),
      8: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 4, parry: 4, magicAttack: 2, fort: 2, ref: 6, will: 2, features: ["Sneak Attack Style", "Poison Use"] }),
      9: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 4, parry: 4, magicAttack: 2, fort: 3, ref: 6, will: 3, features: ["Sneak Attack +5d6/+5d8", "Trap Sense +3"] }),
      10: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 5, parry: 5, magicAttack: 2, fort: 3, ref: 7, will: 3, features: ["Special Ability"] }),
      11: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 5, parry: 5, magicAttack: 2, fort: 3, ref: 7, will: 3, features: ["Sneak Attack +6d6/+6d8"] }),
      12: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 6, parry: 6, magicAttack: 3, fort: 4, ref: 8, will: 4, features: ["Sneak Attack Style", "Trap Sense +4"] }),
      13: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 6, parry: 6, magicAttack: 3, fort: 4, ref: 8, will: 4, features: ["Sneak Attack +7d6/+7d8"] }),
      14: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 7, parry: 7, magicAttack: 3, fort: 4, ref: 9, will: 4, features: ["Special Ability"] }),
      15: createProgressionRow({ bab: 11, attackSequence: "+11/+6/+1", dodge: 7, parry: 7, magicAttack: 3, fort: 5, ref: 9, will: 5, features: ["Sneak Attack +8d6/+8d8", "Trap Sense +5"] }),
      16: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 8, parry: 8, magicAttack: 4, fort: 5, ref: 10, will: 5, features: ["Sneak Attack Style"] }),
      17: createProgressionRow({ bab: 12, attackSequence: "+12/+7/+2", dodge: 8, parry: 8, magicAttack: 4, fort: 5, ref: 10, will: 5, features: ["Sneak Attack +9d6/+9d8"] }),
      18: createProgressionRow({ bab: 13, attackSequence: "+13/+8/+3", dodge: 9, parry: 9, magicAttack: 4, fort: 6, ref: 11, will: 6, features: ["Trap Sense +6", "Special Ability"] }),
      19: createProgressionRow({ bab: 14, attackSequence: "+14/+9/+4", dodge: 9, parry: 9, magicAttack: 4, fort: 6, ref: 11, will: 6, features: ["Sneak Attack +10d6/+10d8"] }),
      20: createProgressionRow({ bab: 15, attackSequence: "+15/+10/+5", dodge: 10, parry: 10, magicAttack: 5, fort: 6, ref: 12, will: 6, features: ["Sneak Attack Style"] })
    }
  },
  axeman: {
    hitDie: 12,
    skillPointsPerLevel: 3,
    levels: {
      1: createProgressionRow({ bab: 1, attackSequence: "+1", parry: 1, fort: 1, ref: 2, features: ["Axe Mastery (+0/+1)"] }),
      2: createProgressionRow({ bab: 2, attackSequence: "+2", parry: 1, fort: 2, ref: 2, features: ["Bonus Feat", "Low Grip"] }),
      3: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 2, fort: 3, ref: 3, will: 1, features: ["Axe Mastery (+1/+1)", "Power Hurler"] }),
      4: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 1, parry: 3, magicAttack: 1, fort: 3, ref: 3, will: 1, features: ["Butcher's Cleave"] }),
      5: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 2, parry: 3, magicAttack: 1, fort: 4, ref: 4, will: 2, features: ["Axe Mastery (+1/+2)", "Bonus Feat"] }),
      6: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 2, parry: 4, magicAttack: 1, fort: 5, ref: 4, will: 2, features: ["To the Bone", "High Grip"] }),
      7: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 3, parry: 5, magicAttack: 1, fort: 6, ref: 5, will: 3, features: ["Axe Mastery (+2/+2)", "Disarming Stroke"] }),
      8: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 3, parry: 5, magicAttack: 2, fort: 6, ref: 5, will: 3, features: ["Bonus Feat", "Brutal Force"] }),
      9: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 4, parry: 6, magicAttack: 2, fort: 7, ref: 6, will: 4, features: ["Sundering Stroke"] }),
      10: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 4, parry: 7, magicAttack: 2, fort: 8, ref: 6, will: 4, features: ["Unstoppable Stroke"] })
    }
  },
  duellist: {
    hitDie: 8,
    skillPointsPerLevel: 6,
    levels: {
      1: createProgressionRow({ bab: 1, attackSequence: "+1", dodge: 1, parry: 1, ref: 2, will: 1, features: ["One-on-One (+1)"] }),
      2: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 2, fort: 1, ref: 3, will: 1, features: ["Bonus Feat", "Lunge"] }),
      3: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 3, magicAttack: 1, fort: 1, ref: 3, will: 2, features: ["Improved Critical", "Opportunist (+1d6)"] }),
      4: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 2, parry: 3, magicAttack: 1, fort: 2, ref: 4, will: 2, features: ["Bonus Feat", "Misdirect Charge"] }),
      5: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 2, parry: 4, magicAttack: 1, fort: 2, ref: 5, will: 3, features: ["Counterstroke", "One-on-One (+3)"] }),
      6: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 3, parry: 5, magicAttack: 2, fort: 3, ref: 5, will: 3, features: ["Bonus Feat", "Off-Handed"] }),
      7: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 3, parry: 6, magicAttack: 2, fort: 3, ref: 6, will: 4, features: ["Confidence", "Opportunist (+2d6)"] }),
      8: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 3, parry: 6, magicAttack: 2, fort: 4, ref: 7, will: 4, features: ["Bonus Feat", "On All Sides"] }),
      9: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 4, parry: 7, magicAttack: 3, fort: 4, ref: 7, will: 5, features: ["One-on-One (+5)"] }),
      10: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 4, parry: 8, magicAttack: 3, fort: 5, ref: 8, will: 5, features: ["Bonus Feat", "Two-on-One"] })
    }
  },
  pitFighter: {
    hitDie: 10,
    skillPointsPerLevel: 2,
    levels: {
      1: createProgressionRow({ bab: 1, attackSequence: "+1", dodge: 1, parry: 1, fort: 1, ref: 2, features: ["Combat Mastery I", "Fighting Style"] }),
      2: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 2, fort: 2, ref: 3, will: 1, features: ["Maximise Protection (+2)"] }),
      3: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 2, fort: 2, ref: 3, will: 1, features: ["Bonus Feat", "Fame/Infamy"] }),
      4: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 2, parry: 3, magicAttack: 1, fort: 3, ref: 4, will: 2, features: ["Combat Mastery II", "Showman Macabre"] }),
      5: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 2, parry: 3, magicAttack: 1, fort: 4, ref: 4, will: 2, features: ["Bloody Mess", "Fighting Style"] }),
      6: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 2, parry: 4, magicAttack: 1, fort: 4, ref: 5, will: 3, features: ["Bonus Feat", "Maximise Protection (+4)"] }),
      7: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 3, parry: 4, magicAttack: 1, fort: 5, ref: 5, will: 3, features: ["Combat Mastery III"] }),
      8: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 3, parry: 5, magicAttack: 2, fort: 6, ref: 6, will: 4, features: ["Back from the Brink"] }),
      9: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 3, parry: 5, magicAttack: 2, fort: 6, ref: 6, will: 4, features: ["Bonus Feat", "Fighting Style"] }),
      10: createProgressionRow({ bab: 10, attackSequence: "+10/+5", dodge: 4, parry: 6, magicAttack: 2, fort: 7, ref: 7, will: 5, features: ["Combat Mastery IV", "Merchant of Death"] })
    }
  },
  savage: {
    hitDie: 10,
    skillPointsPerLevel: 2,
    levels: {
      1: createProgressionRow({ bab: 1, attackSequence: "+1", dodge: 1, parry: 1, fort: 1, ref: 1, will: 1, features: ["Know No Fear", "Simple Weapon Focus"] }),
      2: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 1, fort: 2, ref: 2, will: 1, features: ["As Good as Steel", "Savage Charge"] }),
      3: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 2, parry: 1, magicAttack: 1, fort: 2, ref: 3, will: 2, features: ["Dedication I", "Simple Weapon Master"] }),
      4: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 2, parry: 2, magicAttack: 1, fort: 3, ref: 3, will: 2, features: ["Cold Anger"] }),
      5: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 3, parry: 2, magicAttack: 2, fort: 3, ref: 4, will: 3, features: ["Dedication II", "Felling Blow"] })
    }
  },
  warlord: {
    hitDie: 10,
    skillPointsPerLevel: 6,
    levels: {
      1: createProgressionRow({ parry: 1, fort: 1, ref: 1, will: 1, features: ["Inspire (+1)", "Instinctual Attack"] }),
      2: createProgressionRow({ bab: 1, attackSequence: "+1", dodge: 1, parry: 2, fort: 1, ref: 1, will: 2, features: ["Bonus Feat", "Formation Combat"] }),
      3: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 2, magicAttack: 1, fort: 2, ref: 2, will: 2, features: ["Soldier's Life"] }),
      4: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 2, parry: 3, magicAttack: 1, fort: 2, ref: 2, will: 3, features: ["Bonus Feat", "Lead the Charge"] }),
      5: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 3, parry: 4, magicAttack: 1, fort: 3, ref: 3, will: 3, features: ["Inspire (+2)", "Formation Combat"] }),
      6: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 3, parry: 4, magicAttack: 2, fort: 3, ref: 3, will: 4, features: ["Bonus Feat", "Never Surrender"] }),
      7: createProgressionRow({ bab: 6, attackSequence: "+6/+1", dodge: 4, parry: 5, magicAttack: 2, fort: 4, ref: 4, will: 4, features: ["Enemy Evaluation"] }),
      8: createProgressionRow({ bab: 7, attackSequence: "+7/+2", dodge: 5, parry: 6, magicAttack: 2, fort: 4, ref: 4, will: 5, features: ["Bonus Feat", "Formation Combat"] }),
      9: createProgressionRow({ bab: 8, attackSequence: "+8/+3", dodge: 5, parry: 6, magicAttack: 3, fort: 5, ref: 5, will: 5, features: ["Embodiment of Victory"] }),
      10: createProgressionRow({ bab: 9, attackSequence: "+9/+4", dodge: 6, parry: 7, magicAttack: 3, fort: 5, ref: 5, will: 6, features: ["Bonus Feat", "Inspire (+3)"] })
    }
  },
  wrestler: {
    hitDie: 12,
    skillPointsPerLevel: 2,
    levels: {
      1: createProgressionRow({ bab: 1, attackSequence: "+1", parry: 1, fort: 2, ref: 1, features: ["Critical Grapple", "Improved Hold"] }),
      2: createProgressionRow({ bab: 2, attackSequence: "+2", dodge: 1, parry: 1, fort: 2, ref: 2, will: 1, features: ["Reactionary Grapple", "Unflinching Form I"] }),
      3: createProgressionRow({ bab: 3, attackSequence: "+3", dodge: 1, parry: 2, magicAttack: 1, fort: 3, ref: 2, will: 1, features: ["Turn Weapon", "Wrench Limb"] }),
      4: createProgressionRow({ bab: 4, attackSequence: "+4", dodge: 2, parry: 2, magicAttack: 1, fort: 3, ref: 3, will: 2, features: ["Stranglehold", "Unflinching Form II"] }),
      5: createProgressionRow({ bab: 5, attackSequence: "+5", dodge: 2, parry: 3, magicAttack: 2, fort: 4, ref: 4, will: 2, features: ["Deathgrip"] })
    }
  }
};

// Resolve one class and level into the derived values used by actor calculations.
export function getClassProgression(classKey, level) {
  const definition = CLASS_PROGRESSIONS[classKey];
  const normalizedLevel = Math.max(1, Math.min(getClassLevelCap(classKey), Number(level) || 1));

  if (!definition) {
    return {
      classLabel: CONAN_CLASS_OPTIONS[classKey] ?? classKey,
      hitDie: 0,
      skillPointsPerLevel: 0,
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

  const row = definition.levels[normalizedLevel] ?? createProgressionRow();

  return {
    classLabel: CONAN_CLASS_OPTIONS[classKey] ?? classKey,
    hitDie: definition.hitDie,
    skillPointsPerLevel: definition.skillPointsPerLevel,
    level: normalizedLevel,
    attackSequence: row.attackSequence || `+${row.bab || 0}`,
    bab: row.bab || 0,
    dodge: row.dodge || 0,
    parry: row.parry || 0,
    magicAttack: row.magicAttack || 0,
    fort: row.fort || 0,
    ref: row.ref || 0,
    will: row.will || 0,
    features: Array.isArray(row.features) ? row.features : []
  };
}

export function getClassLevelCap(classKey) {
  const levels = CLASS_PROGRESSIONS[classKey]?.levels ?? {};
  return Math.max(1, ...Object.keys(levels).map((level) => Number(level) || 1));
}

// Re-export the raw progression table for debugging or future tooling.
export {
  CLASS_PROGRESSIONS
};
