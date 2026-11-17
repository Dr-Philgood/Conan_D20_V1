// Sorcery item data model.
// These items are intended for compendium entries such as styles, spells, rituals, components, and power sources.
const fields = foundry.data.fields;

export class ConanSorceryData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new fields.HTMLField({ required: true, initial: "" }),
      category: new fields.StringField({ required: true, initial: "spell" }),
      style: new fields.StringField({ required: true, initial: "" }),
      source: new fields.StringField({ required: true, initial: "" }),
      ppCost: new fields.StringField({ required: true, initial: "" }),
      castingTime: new fields.StringField({ required: true, initial: "" }),
      range: new fields.StringField({ required: true, initial: "" }),
      duration: new fields.StringField({ required: true, initial: "" }),
      components: new fields.StringField({ required: true, initial: "" }),
      difficulty: new fields.StringField({ required: true, initial: "" }),
      prepared: new fields.BooleanField({ required: true, initial: false }),
      requirements: new fields.HTMLField({ required: true, initial: "" }),
      notes: new fields.HTMLField({ required: true, initial: "" })
    };
  }
}
