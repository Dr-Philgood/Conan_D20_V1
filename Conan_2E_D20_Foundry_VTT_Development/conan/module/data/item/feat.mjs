// Feat item data model.
// Feat compendium entries can be dropped onto actors and converted into Feats tab rows.
const fields = foundry.data.fields;

export class ConanFeatData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new fields.HTMLField({ required: true, initial: "" }),
      category: new fields.StringField({ required: true, initial: "General" }),
      prerequisites: new fields.StringField({ required: true, initial: "" }),
      benefit: new fields.HTMLField({ required: true, initial: "" }),
      normal: new fields.HTMLField({ required: true, initial: "" }),
      special: new fields.HTMLField({ required: true, initial: "" }),
      source: new fields.StringField({ required: true, initial: "" }),
      soldierBonus: new fields.BooleanField({ required: true, initial: false }),
      repeatable: new fields.BooleanField({ required: true, initial: false }),
      active: new fields.BooleanField({ required: true, initial: true })
    };
  }
}
