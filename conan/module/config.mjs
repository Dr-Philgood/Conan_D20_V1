// Static system configuration used by sheets, data schemas, and roll labels.
export const CONAN = {
  // Six core ability scores and their localization keys.
  abilities: {
    str: { label: "CONAN.Ability.str", short: "STR" },
    dex: { label: "CONAN.Ability.dex", short: "DEX" },
    con: { label: "CONAN.Ability.con", short: "CON" },
    int: { label: "CONAN.Ability.int", short: "INT" },
    wis: { label: "CONAN.Ability.wis", short: "WIS" },
    cha: { label: "CONAN.Ability.cha", short: "CHA" }
  },

  // Saving throws and the ability modifier each one uses by default.
  saves: {
    fort: { label: "CONAN.Save.fort", ability: "con" },
    ref: { label: "CONAN.Save.ref", ability: "dex" },
    will: { label: "CONAN.Save.will", ability: "wis" }
  },

  // Weapon attack categories offered on weapon items.
  attackTypes: {
    melee: "Melee",
    ranged: "Ranged",
    thrown: "Thrown"
  },

  // Weapon handedness controls how Strength is added to damage.
  handedness: {
    one: "One-Handed",
    two: "Two-Handed",
    off: "Off-Hand"
  },

  // Weapon craftsmanship quality options.
  weaponQuality: {
    poor: "Poor",
    average: "Average",
    superior: "Superior",
    mastercrafted: "Mastercrafted"
  },

  // Weapon material options used for durability and rules notes.
  weaponMaterials: {
    primitive: "Primitive",
    bronze: "Bronze",
    iron: "Iron",
    steel: "Steel",
    starmetal: "Starmetal"
  },

  // Armor craftsmanship quality options.
  armorQuality: {
    poor: "Poor",
    average: "Average",
    superior: "Superior",
    mastercrafted: "Mastercrafted"
  },

  // Armor material options for the custom quality/material rules.
  armorMaterials: {
    primitiveHide: "Leather/Hide - Primitive Hide",
    commonLeather: "Leather/Hide - Common Leather",
    curedLeather: "Leather/Hide - Cured Leather",
    hardenedLeather: "Leather/Hide - Hardened Leather",
    exoticHide: "Leather/Hide - Exotic Hide",
    primitiveWood: "Wood/Reed/Bark - Primitive Wood",
    commonWood: "Wood/Reed/Bark - Common Wood",
    seasonedWood: "Wood/Reed/Bark - Seasoned Wood",
    ironwood: "Wood/Reed/Bark - Ironwood",
    exoticWood: "Wood/Reed/Bark - Exotic Wood",
    primitiveCloth: "Padded/Quilted/Cloth - Primitive Cloth",
    commonCloth: "Padded/Quilted/Cloth - Common Cloth",
    layeredCloth: "Padded/Quilted/Cloth - Layered Cloth",
    reinforcedCloth: "Padded/Quilted/Cloth - Reinforced Cloth",
    exoticWeave: "Padded/Quilted/Cloth - Exotic Weave",
    bronze: "Metal - Bronze",
    iron: "Iron",
    steel: "Metal - Steel",
    starmetal: "Metal - Starmetal"
  },

  // Sorcery compendium item categories.
  sorceryItemTypes: {
    style: "Style",
    spell: "Spell",
    ritual: "Ritual",
    component: "Component",
    sacrifice: "Power Source"
  },

  // Skill definitions drive actor schema fields and the skills tab display.
  skills: {
    acrobatics: { label: "Acrobatics", ability: "dex", armorCheck: true, trainedOnly: false },
    appraise: { label: "Appraise", ability: "int", armorCheck: false, trainedOnly: false },
    bluff: { label: "Bluff", ability: "cha", armorCheck: false, trainedOnly: false },
    challenge: { label: "Challenge", ability: "cha", armorCheck: false, trainedOnly: true },
    climb: { label: "Climb", ability: "str", armorCheck: true, trainedOnly: false },
    concentration: { label: "Concentration", ability: "con", armorCheck: false, trainedOnly: false },
    decipherScript: { label: "Decipher Script", ability: "int", armorCheck: false, trainedOnly: true },
    diplomacy: { label: "Diplomacy", ability: "cha", armorCheck: false, trainedOnly: false },
    disableDevice: { label: "Disable Device", ability: "int", armorCheck: false, trainedOnly: true },
    disguise: { label: "Disguise", ability: "cha", armorCheck: false, trainedOnly: false },
    forgery: { label: "Forgery", ability: "int", armorCheck: false, trainedOnly: false },
    handleAnimal: { label: "Handle Animal", ability: "cha", armorCheck: false, trainedOnly: false },
    heal: { label: "Heal", ability: "wis", armorCheck: false, trainedOnly: false },
    intimidate: { label: "Intimidate", ability: "cha", armorCheck: false, trainedOnly: false },
    knowledgeArcana: { label: "Knowledge (Arcana)", ability: "int", armorCheck: false, trainedOnly: true },
    knowledgeGeography: { label: "Knowledge (Geography)", ability: "int", armorCheck: false, trainedOnly: false },
    knowledgeHistory: { label: "Knowledge (History)", ability: "int", armorCheck: false, trainedOnly: true },
    knowledgeLocal: { label: "Knowledge (Local)", ability: "int", armorCheck: false, trainedOnly: false },
    knowledgeNobility: { label: "Knowledge (Nobility)", ability: "int", armorCheck: false, trainedOnly: true },
    knowledgeReligion: { label: "Knowledge (Religion)", ability: "int", armorCheck: false, trainedOnly: true },
    knowledgeRumours: { label: "Knowledge (Rumours)", ability: "int", armorCheck: false, trainedOnly: false },
    knowledgeTactics: { label: "Knowledge (Tactics)", ability: "int", armorCheck: false, trainedOnly: true },
    perception: { label: "Perception", ability: "wis", armorCheck: false, trainedOnly: false },
    ride: { label: "Ride", ability: "dex", armorCheck: false, trainedOnly: false },
    senseMotive: { label: "Sense Motive", ability: "wis", armorCheck: false, trainedOnly: false },
    sharpen: { label: "Sharpen", ability: "wis", armorCheck: false, trainedOnly: true },
    sleightOfHand: { label: "Sleight of Hand", ability: "dex", armorCheck: true, trainedOnly: false },
    stealth: { label: "Stealth", ability: "dex", armorCheck: true, trainedOnly: false },
    survival: { label: "Survival", ability: "wis", armorCheck: false, trainedOnly: false },
    swim: { label: "Swim", ability: "str", armorCheck: false, trainedOnly: false },
    useRope: { label: "Use Rope", ability: "dex", armorCheck: false, trainedOnly: false }
  }
};
