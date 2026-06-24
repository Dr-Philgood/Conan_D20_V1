// Shared actor data helpers: schema, class-row normalization, and multiclass totals.
import { CONAN } from "../config.mjs";
import { CONAN_CONDITIONS } from "./conditions.mjs";
import { getClassChoiceRows } from "./class-options.mjs";
import {
  CONAN_CLASS_OPTIONS,
  createDefaultClassRow as createClassRowTemplate,
  getClassLevelCap,
  getClassProgression
} from "./classes.mjs";

const fields = foundry.data.fields;

// Schema builder for one ability score and its derived modifier.
function abilityField() {
  return new fields.SchemaField({
    value: new fields.NumberField({ required: true, integer: true, initial: 10 }),
    mod: new fields.NumberField({ required: true, integer: true, initial: 0 })
  });
}

// Schema builder for one saving throw.
function saveField(ability) {
  return new fields.SchemaField({
    base: new fields.NumberField({ required: true, integer: true, initial: 0 }),
    ability: new fields.StringField({ required: true, initial: ability }),
    misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
    total: new fields.NumberField({ required: true, integer: true, initial: 0 })
  });
}

// Schema builder for one skill row based on the static CONAN.skills config.
function skillField(skill) {
  return new fields.SchemaField({
    keyAbility: new fields.StringField({ required: true, initial: skill.ability }),
    ranks: new fields.NumberField({ required: true, integer: true, initial: 0 }),
    misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
    classSkill: new fields.BooleanField({ required: true, initial: false }),
    pinned: new fields.BooleanField({ required: true, initial: false }),
    armorCheck: new fields.BooleanField({ required: true, initial: !!skill.armorCheck }),
    trainedOnly: new fields.BooleanField({ required: true, initial: !!skill.trainedOnly }),
    total: new fields.NumberField({ required: true, integer: true, initial: 0 })
  });
}

// Build the full skills schema from system configuration.
function skillsSchema() {
  const schema = {};
  for (const [key, skill] of Object.entries(CONAN.skills)) {
    schema[key] = skillField(skill);
  }
  return new fields.SchemaField(schema);
}

// Injury records store display text, treatment metadata, active state, and penalties.
function injurySchema() {
  return new fields.SchemaField({
    id: new fields.StringField({ required: true, initial: () => foundry.utils.randomID() }),
    label: new fields.StringField({ required: true, initial: "" }),
    location: new fields.StringField({ required: true, initial: "" }),
    healDc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
    bedRest: new fields.StringField({ required: true, initial: "" }),
    notes: new fields.StringField({ required: true, initial: "" }),
    active: new fields.BooleanField({ required: true, initial: true }),
    slowlyHealingDamage: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
    penalties: new fields.SchemaField({
      allAttacks: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      allSkills: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      meleeAttack: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      meleeDamage: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      rangedAttack: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      dodge: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      fortitude: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      diplomacy: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      disguise: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      gatherInformation: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      perform: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      balance: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      listen: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      search: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      spot: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      speech: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      moveSilently: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      sleightOfHand: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      hide: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      intimidate: new fields.NumberField({ required: true, integer: true, initial: 0 })
    })
  });
}

function conditionsSchema() {
  const schema = {};
  for (const key of Object.keys(CONAN_CONDITIONS)) {
    schema[key] = new fields.BooleanField({ required: true, initial: false });
  }
  return new fields.SchemaField(schema);
}

// Custom Profession/Craft/Perform entry schema.
function customSkillEntryField(defaultAbility = "int", trainedOnly = false) {
  return new fields.SchemaField({
    id: new fields.StringField({ required: true, initial: () => foundry.utils.randomID() }),
    name: new fields.StringField({ required: true, initial: "" }),
    keyAbility: new fields.StringField({ required: true, initial: defaultAbility }),
    ranks: new fields.NumberField({ required: true, integer: true, initial: 0 }),
    misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
    classSkill: new fields.BooleanField({ required: true, initial: false }),
    pinned: new fields.BooleanField({ required: true, initial: false }),
    armorCheck: new fields.BooleanField({ required: true, initial: false }),
    trainedOnly: new fields.BooleanField({ required: true, initial: trainedOnly }),
    total: new fields.NumberField({ required: true, integer: true, initial: 0 })
  });
}

// One class option row records player selections such as formation combat or social abilities.
function classChoiceField() {
  return new fields.SchemaField({
    key: new fields.StringField({ required: true, initial: "" }),
    label: new fields.StringField({ required: true, initial: "" }),
    value: new fields.StringField({ required: true, initial: "" }),
    notes: new fields.StringField({ required: true, initial: "" })
  });
}

// One class row records class choice, level, rolled HP, favored flag, player choices, and notes.
function classEntryField() {
  return new fields.SchemaField({
    classKey: new fields.StringField({ required: true, initial: "barbarian" }),
    level: new fields.NumberField({ required: true, integer: true, min: 1, max: 20, initial: 1 }),
    hpRolled: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
    favored: new fields.BooleanField({ required: true, initial: false }),
    choices: new fields.ArrayField(classChoiceField()),
    notes: new fields.StringField({ required: true, initial: "" })
  });
}

// Flexible sorcery tracker row used for styles, spells, rituals, and resources.
function sorceryEntryField() {
  return new fields.SchemaField({
    id: new fields.StringField({ required: true, initial: () => foundry.utils.randomID() }),
    name: new fields.StringField({ required: true, initial: "" }),
    style: new fields.StringField({ required: true, initial: "" }),
    source: new fields.StringField({ required: true, initial: "" }),
    ppCost: new fields.StringField({ required: true, initial: "" }),
    castingTime: new fields.StringField({ required: true, initial: "" }),
    range: new fields.StringField({ required: true, initial: "" }),
    duration: new fields.StringField({ required: true, initial: "" }),
    components: new fields.StringField({ required: true, initial: "" }),
    difficulty: new fields.StringField({ required: true, initial: "" }),
    prepared: new fields.BooleanField({ required: true, initial: false }),
    notes: new fields.HTMLField({ required: true, initial: "" })
  });
}

// General-purpose row for feats, languages, social entries, and combat maneuvers.
function trackerEntryField() {
  return new fields.SchemaField({
    id: new fields.StringField({ required: true, initial: () => foundry.utils.randomID() }),
    name: new fields.StringField({ required: true, initial: "" }),
    type: new fields.StringField({ required: true, initial: "" }),
    source: new fields.StringField({ required: true, initial: "" }),
    level: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
    bonus: new fields.StringField({ required: true, initial: "" }),
    active: new fields.BooleanField({ required: true, initial: true }),
    notes: new fields.HTMLField({ required: true, initial: "" })
  });
}

// Create a plain class row object using the class progression helper defaults.
export function createDefaultClassRow(classKey = "barbarian") {
  return createClassRowTemplate(classKey);
}

// New actors get one starter class row appropriate to their actor type.
export function getDefaultActorClassRows(actorType = "character") {
  return [createDefaultClassRow(actorType === "npc" ? "soldier" : "barbarian")];
}

// Clean up one class row so sheet edits stay inside the allowed range.
export function normalizeClassRow(row = {}, fallbackClassKey = "barbarian") {
  const classKey = typeof row.classKey === "string" && row.classKey in CONAN_CLASS_OPTIONS
    ? row.classKey
    : fallbackClassKey;

  return {
    classKey,
    level: Math.max(1, Math.min(getClassLevelCap(classKey), Number(row.level) || 1)),
    hpRolled: Math.max(0, Number(row.hpRolled) || 0),
    favored: Boolean(row.favored),
    choices: getClassChoiceRows(classKey, row.level, row.choices),
    notes: typeof row.notes === "string" ? row.notes : ""
  };
}

// Clean up all class rows and ensure there is always at least one row.
export function normalizeActorClasses(classRows, actorType = "character") {
  const fallbackClassKey = actorType === "npc" ? "soldier" : "barbarian";
  if (!Array.isArray(classRows) || classRows.length === 0) {
    return getDefaultActorClassRows(actorType);
  }

  return classRows.map((row) => normalizeClassRow(row, fallbackClassKey));
}

// Expose class choices for selectOptions in the actor sheet.
export function getClassSelectOptions() {
  return CONAN_CLASS_OPTIONS;
}

// Attach derived progression data to each normalized class row.
export function getActorClassRows(classRows, actorType = "character") {
  return normalizeActorClasses(classRows, actorType).map((classRow, classIndex) => ({
    ...classRow,
    choices: (classRow.choices ?? []).map((choice) => ({ ...choice, classIndex })),
    derived: getClassProgression(classRow.classKey, classRow.level)
  }));
}

// Sum multiclass progression values for actor-level derived calculations.
export function getActorClassTotals(classRows, actorType = "character") {
  const rows = getActorClassRows(classRows, actorType);

  return rows.reduce(
    (totals, row) => {
      const { derived } = row;
      totals.level += Number(row.level) || 0;
      totals.bab += Number(derived.bab) || 0;
      totals.dodge += Number(derived.dodge) || 0;
      totals.parry += Number(derived.parry) || 0;
      totals.magicAttack += Number(derived.magicAttack) || 0;
      totals.fort += Number(derived.fort) || 0;
      totals.ref += Number(derived.ref) || 0;
      totals.will += Number(derived.will) || 0;
      totals.features.push(
        ...derived.features.map((feature) => ({
          classKey: row.classKey,
          classLabel: derived.classLabel,
          level: row.level,
          feature
        }))
      );
      return totals;
    },
    {
      level: 0,
      bab: 0,
      dodge: 0,
      parry: 0,
      magicAttack: 0,
      fort: 0,
      ref: 0,
      will: 0,
      features: []
    }
  );
}

// Shared actor TypeDataModel schema used by character and NPC actor types.
export function createActorSchema() {
  return {
    // Identity, advancement, and rich-text biography fields.
    details: new fields.SchemaField({
      level: new fields.NumberField({ required: true, integer: true, min: 1, initial: 1 }),
      xp: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      race: new fields.StringField({ required: true, initial: "" }),
      archetype: new fields.StringField({ required: true, initial: "" }),
      homeland: new fields.StringField({ required: true, initial: "" }),
      religion: new fields.StringField({ required: true, initial: "" }),
      biography: new fields.HTMLField({ required: true, initial: "" })
    }),

    // Core ability score objects.
    abilities: new fields.SchemaField({
      str: abilityField(),
      dex: abilityField(),
      con: abilityField(),
      int: abilityField(),
      wis: abilityField(),
      cha: abilityField()
    }),

    // Saving throw data. Base and total are derived; misc remains editable.
    saves: new fields.SchemaField({
      fort: saveField("con"),
      ref: saveField("dex"),
      will: saveField("wis")
    }),

    // Combat resources and derived combat totals.
    combat: new fields.SchemaField({
      hp: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, min: 0, initial: 10 }),
        max: new fields.NumberField({ required: true, integer: true, min: 0, initial: 10 })
      }),
      initiative: new fields.SchemaField({
        misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        total: new fields.NumberField({ required: true, integer: true, initial: 0 })
      }),
      magicAttack: new fields.SchemaField({
        base: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        total: new fields.NumberField({ required: true, integer: true, initial: 0 })
      }),
      dodge: new fields.SchemaField({
        base: new fields.NumberField({ required: true, integer: true, initial: 10 }),
        misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        total: new fields.NumberField({ required: true, integer: true, initial: 10 })
      }),
      parry: new fields.SchemaField({
        base: new fields.NumberField({ required: true, integer: true, initial: 10 }),
        misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        total: new fields.NumberField({ required: true, integer: true, initial: 10 })
      }),
      damageReduction: new fields.SchemaField({
        armor: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        total: new fields.NumberField({ required: true, integer: true, initial: 0 })
      }),
      armorCheckPenalty: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      featToggles: new fields.SchemaField({
        powerAttack: new fields.SchemaField({
          active: new fields.BooleanField({ required: true, initial: false }),
          value: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        pointBlankShot: new fields.SchemaField({
          active: new fields.BooleanField({ required: true, initial: false })
        }),
        rapidShot: new fields.SchemaField({
          active: new fields.BooleanField({ required: true, initial: false })
        }),
        toughness: new fields.SchemaField({
          ranks: new fields.NumberField({ required: true, integer: true, min: 0, max: 10, initial: 0 })
        })
      }),
      attack: new fields.SchemaField({
        melee: new fields.SchemaField({
          base: new fields.NumberField({ required: true, integer: true, initial: 0 }),
          misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
          total: new fields.NumberField({ required: true, integer: true, initial: 0 })
        }),
        ranged: new fields.SchemaField({
          base: new fields.NumberField({ required: true, integer: true, initial: 0 }),
          misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
          total: new fields.NumberField({ required: true, integer: true, initial: 0 })
        })
      }),
      massiveDamage: new fields.SchemaField({
        total: new fields.NumberField({ required: true, integer: true, initial: 10 })
      }),
      threshold: new fields.SchemaField({
        total: new fields.NumberField({ required: true, integer: true, initial: 0 })
      }),
      maneuvers: new fields.ArrayField(trackerEntryField())
    }),

    // Heroic resources, reputation, social identity, movement, and encumbrance.
    resources: new fields.SchemaField({
      fate: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, min: 0, initial: 3 })
      }),
      wealth: new fields.SchemaField({
        gold: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        silver: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        copper: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        totalSilver: new fields.NumberField({ required: true, min: 0, initial: 0 }),
        notes: new fields.HTMLField({ required: true, initial: "" })
      })
    }),

    social: new fields.SchemaField({
      reputation: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        notes: new fields.HTMLField({ required: true, initial: "" })
      }),
      allegiances: new fields.ArrayField(trackerEntryField()),
      codes: new fields.ArrayField(trackerEntryField()),
      languages: new fields.ArrayField(trackerEntryField())
    }),

    movement: new fields.SchemaField({
      speed: new fields.SchemaField({
        base: new fields.NumberField({ required: true, integer: true, min: 0, initial: 30 }),
        armor: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        misc: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        total: new fields.NumberField({ required: true, integer: true, min: 0, initial: 30 })
      }),
      encumbrance: new fields.SchemaField({
        current: new fields.NumberField({ required: true, min: 0, initial: 0 }),
        light: new fields.NumberField({ required: true, min: 0, initial: 0 }),
        medium: new fields.NumberField({ required: true, min: 0, initial: 0 }),
        heavy: new fields.NumberField({ required: true, min: 0, initial: 0 }),
        load: new fields.StringField({ required: true, initial: "Light" }),
        maxDex: new fields.StringField({ required: true, initial: "" }),
        checkPenalty: new fields.NumberField({ required: true, integer: true, initial: 0 }),
        speed: new fields.NumberField({ required: true, integer: true, min: 0, initial: 30 }),
        runMultiplier: new fields.NumberField({ required: true, integer: true, min: 0, initial: 4 }),
        liftOverhead: new fields.NumberField({ required: true, min: 0, initial: 0 }),
        liftOffGround: new fields.NumberField({ required: true, min: 0, initial: 0 }),
        pushDrag: new fields.NumberField({ required: true, min: 0, initial: 0 }),
        notes: new fields.HTMLField({ required: true, initial: "" })
      })
    }),

    // Optional switches for rules that can be enabled per actor.
    optionalRules: new fields.SchemaField({
      permanentDamage: new fields.BooleanField({ required: true, initial: false })
    }),

    // Sorcery tab data: resource tracking and rules-facing lists.
    sorcery: new fields.SchemaField({
      powerPoints: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        max: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        temporary: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        recovery: new fields.StringField({ required: true, initial: "" })
      }),
      corruption: new fields.SchemaField({
        score: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        taint: new fields.StringField({ required: true, initial: "" }),
        notes: new fields.HTMLField({ required: true, initial: "" })
      }),
      styles: new fields.ArrayField(sorceryEntryField()),
      spells: new fields.ArrayField(sorceryEntryField()),
      rituals: new fields.ArrayField(sorceryEntryField()),
      components: new fields.ArrayField(sorceryEntryField()),
      sacrifices: new fields.ArrayField(sorceryEntryField()),
      notes: new fields.HTMLField({ required: true, initial: "" })
    }),

    // Permanent damage entries generated by the optional injury workflow.
    injuries: new fields.ArrayField(injurySchema()),
    conditions: conditionsSchema(),

    // User-defined skill groups shown on the skills tab.
    customSkills: new fields.SchemaField({
      professions: new fields.ArrayField(customSkillEntryField("wis", false)),
      crafts: new fields.ArrayField(customSkillEntryField("int", false)),
      performs: new fields.ArrayField(customSkillEntryField("cha", false))
    }),

    // Multiclass rows shown on the Classes tab.
    classes: new fields.ArrayField(classEntryField()),

    // Feats and class/special abilities selected during advancement.
    feats: new fields.ArrayField(trackerEntryField()),

    // Built-in skill records generated from CONAN.skills.
    skills: skillsSchema()
  };
}
