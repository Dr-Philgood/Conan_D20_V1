// Character actor data model.
// This reuses the shared actor schema so player characters and NPCs store the
// same core stats, combat values, skills, injuries, and class rows.
import { createActorSchema } from "../common.mjs";

export class ConanCharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return createActorSchema();
  }
}
