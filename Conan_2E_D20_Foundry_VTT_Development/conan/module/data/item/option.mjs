// Generic character-option item used by classes, origins, languages, skills, and manoeuvres.
const fields = foundry.data.fields;

export class ConanOptionData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new fields.HTMLField({ required: true, initial: "" }),
      category: new fields.StringField({ required: true, initial: "option" }),
      subtype: new fields.StringField({ required: true, initial: "" }),
      source: new fields.StringField({ required: true, initial: "" }),
      prerequisites: new fields.StringField({ required: true, initial: "" }),
      data: new fields.ObjectField({ required: true, initial: {} })
    };
  }
}
