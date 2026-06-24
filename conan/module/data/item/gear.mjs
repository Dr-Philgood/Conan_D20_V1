// Gear item data model.
// Generic carried equipment stores quantity, weight, cost, and equipped status.
const fields = foundry.data.fields;

export class ConanGearData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new fields.HTMLField({ required: true, initial: "" }),
      quantity: new fields.NumberField({ required: true, integer: true, min: 0, initial: 1 }),
      weight: new fields.NumberField({ required: true, initial: 0 }),
      cost: new fields.StringField({ required: true, initial: "" }),
      equipped: new fields.BooleanField({ required: true, initial: false })
    };
  }
}
