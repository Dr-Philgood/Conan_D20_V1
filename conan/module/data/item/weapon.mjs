// Weapon item data model.
// Fields here back the weapon sheet and actor attack/damage roll calculations.
const fields = foundry.data.fields;

export class ConanWeaponData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new fields.HTMLField({ required: true, initial: "" }),
      category: new fields.StringField({ required: true, initial: "" }),
      attackType: new fields.StringField({ required: true, initial: "melee" }),
      damage: new fields.StringField({ required: true, initial: "1d6" }),
      critical: new fields.StringField({ required: true, initial: "x2" }),
      damageType: new fields.StringField({ required: true, initial: "" }),
      qualities: new fields.StringField({ required: true, initial: "" }),
      quality: new fields.StringField({ required: true, initial: "average" }),
      material: new fields.StringField({ required: true, initial: "iron" }),
      hitpoints: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      hardness: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      handedness: new fields.StringField({ required: true, initial: "one" }),
      rangeIncrement: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      armorPiercing: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      finesse: new fields.BooleanField({ required: true, initial: false }),
      attackBonus: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      equipped: new fields.BooleanField({ required: true, initial: true }),
      pinned: new fields.BooleanField({ required: true, initial: false }),
      weight: new fields.NumberField({ required: true, initial: 0 }),
      cost: new fields.StringField({ required: true, initial: "" })
    };
  }
}
