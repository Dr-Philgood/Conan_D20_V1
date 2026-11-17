// NPC actor data model.
// NPCs currently share the same schema as player characters so rules and sheet
// calculations can run through one actor document implementation.
import { createActorSchema } from "../common.mjs";

export class ConanNpcData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return createActorSchema();
  }
}
