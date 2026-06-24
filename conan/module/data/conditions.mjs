// Fixed Conan condition list plus the sheet modifiers each active condition applies.

export const CONAN_CONDITIONS = {
  blinded: {
    label: "Blinded",
    summary: "Cannot see; half speed; -2 Defence; loses positive Dexterity bonus to Defence; -4 to Perception and most Strength/Dexterity skills.",
    effects: {
      defense: -2,
      ignoreDexDefense: true,
      halfSpeed: true,
      skills: { perception: -4 },
      strengthDexteritySkills: -4
    }
  },
  cowering: {
    label: "Cowering",
    summary: "Frozen in fear; no actions; -2 Defence.",
    effects: { defense: -2 }
  },
  dazed: {
    label: "Dazed",
    summary: "Cannot take actions, but can still Dodge and Parry."
  },
  dazzled: {
    label: "Dazzled",
    summary: "-1 attack rolls, Search checks, and Spot checks.",
    effects: { attacks: -1, skills: { perception: -1 } }
  },
  deafened: {
    label: "Deafened",
    summary: "Cannot hear; -4 initiative; Listen checks fail; 20% spell failure with verbal components.",
    effects: { initiative: -4, skills: { perception: -4 } }
  },
  disabled: {
    label: "Disabled",
    summary: "Single move or standard action each round; half speed; strenuous actions deal 1 damage.",
    effects: { halfSpeed: true }
  },
  dying: {
    label: "Dying",
    summary: "Unconscious near death; no actions; roll stabilization each round."
  },
  entangled: {
    label: "Entangled",
    summary: "Half speed; cannot run or charge; -2 attacks; -4 Dexterity; Concentration check required to cast.",
    effects: { halfSpeed: true, attacks: -2, abilities: { dex: -4 } }
  },
  exhausted: {
    label: "Exhausted",
    summary: "Half speed; -6 Strength and Dexterity.",
    effects: { halfSpeed: true, abilities: { str: -6, dex: -6 } }
  },
  fatigued: {
    label: "Fatigued",
    summary: "Cannot run or charge; -2 Strength and Dexterity.",
    effects: { abilities: { str: -2, dex: -2 } }
  },
  frightened: {
    label: "Frightened",
    summary: "Must flee if possible; -2 attacks, saves, skill checks, and ability checks.",
    effects: { attacks: -2, saves: -2, skillsAll: -2, abilityChecks: -2 }
  },
  nauseated: {
    label: "Nauseated",
    summary: "Cannot attack, cast spells, concentrate, or take attention-heavy actions; one move action only."
  },
  panicked: {
    label: "Panicked",
    summary: "Drops held items and flees; -2 saves, skill checks, and ability checks.",
    effects: { saves: -2, skillsAll: -2, abilityChecks: -2 }
  },
  pinned: {
    label: "Pinned",
    summary: "Held immobile in a grapple, but not helpless."
  },
  prone: {
    label: "Prone",
    summary: "-4 melee attacks; cannot use ranged weapons except crossbows; +4 Defence vs ranged, -4 Defence vs melee.",
    effects: { meleeAttack: -4 }
  },
  shaken: {
    label: "Shaken",
    summary: "-2 attacks, saves, skill checks, and ability checks.",
    effects: { attacks: -2, saves: -2, skillsAll: -2, abilityChecks: -2 }
  },
  sickened: {
    label: "Sickened",
    summary: "-2 attacks, weapon damage, saves, skill checks, and ability checks.",
    effects: { attacks: -2, weaponDamage: -2, saves: -2, skillsAll: -2, abilityChecks: -2 }
  },
  stable: {
    label: "Stable",
    summary: "No longer dying, but still unconscious while at negative hit points."
  },
  staggered: {
    label: "Staggered",
    summary: "May take a single move or standard action each round, but not both."
  },
  stunned: {
    label: "Stunned",
    summary: "Drops held items; cannot act; cannot Dodge or Parry.",
    effects: { disableDefenses: true }
  },
  unconscious: {
    label: "Unconscious",
    summary: "Knocked out and helpless.",
    effects: { disableDefenses: true }
  }
};

export function getDefaultConditionState() {
  return Object.fromEntries(Object.keys(CONAN_CONDITIONS).map((key) => [key, false]));
}
