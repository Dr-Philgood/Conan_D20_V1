// Item sheet controller.
// Chooses the right item template and supplies config/system data to Handlebars.
import { CONAN } from "../config.mjs";

export class ConanItemSheet extends ItemSheet {
  static get defaultOptions() {
    // Basic window sizing and CSS classes for all Conan item sheets.
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["conan", "sheet", "item"],
      width: 520,
      height: 520
    });
  }

  get template() {
    // Each item type has a matching template: weapon, armor, or gear.
    return `systems/conan/templates/item/${this.item.type}-sheet.hbs`;
  }

  async getData(options = {}) {
    const context = await super.getData(options);
    // Add system configuration and item system data to the template context.
    return {
      ...context,
      config: CONAN,
      system: this.item.system
    };
  }
}
