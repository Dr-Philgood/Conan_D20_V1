// Armor item data model.
// Equipped armor contributes damage reduction and armor check penalty to actors.
const fields = foundry.data.fields;

export class ConanArmorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new fields.HTMLField({ required: true, initial: "" }),
      category: new fields.StringField({ required: true, initial: "" }),
      quality: new fields.StringField({ required: true, initial: "average" }),
      material: new fields.StringField({ required: true, initial: "iron" }),
      damageReduction: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      maxDexBonus: new fields.StringField({ required: true, initial: "" }),
      armorPenalty: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      sorceryFailure: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      speed: new fields.StringField({ required: true, initial: "" }),
      shieldBonus: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      damage: new fields.StringField({ required: true, initial: "" }),
      critical: new fields.StringField({ required: true, initial: "" }),
      armorPiercing: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      hardness: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      hitpoints: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      damageType: new fields.StringField({ required: true, initial: "" }),
      equipped: new fields.BooleanField({ required: true, initial: true }),
      weight: new fields.NumberField({ required: true, initial: 0 }),
      cost: new fields.StringField({ required: true, initial: "" })
    };
  }
}
