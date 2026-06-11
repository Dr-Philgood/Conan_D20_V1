// System bootstrap: register documents, sheets, helpers, and shared templates.
import { CONAN } from "./module/config.mjs";
import { ConanCharacterData } from "./module/data/actor/character.mjs";
import { ConanNpcData } from "./module/data/actor/npc.mjs";
import { ConanWeaponData } from "./module/data/item/weapon.mjs";
import { ConanArmorData } from "./module/data/item/armor.mjs";
import { ConanGearData } from "./module/data/item/gear.mjs";
import { ConanSorceryData } from "./module/data/item/sorcery.mjs";
import { ConanFeatData } from "./module/data/item/feat.mjs";
import { ConanActor } from "./module/documents/actor.mjs";
import { ConanItem } from "./module/documents/item.mjs";
import { ConanActorSheet } from "./module/sheets/actor-sheet.mjs";
import { ConanItemSheet } from "./module/sheets/item-sheet.mjs";
import { registerSorceryPackImporter } from "./module/packs/sorcery-importer.mjs";
import { registerWeaponsPackImporter } from "./module/packs/weapons-importer.mjs";
import { registerArmorPackImporter } from "./module/packs/armor-importer.mjs";
import { registerFeatsPackImporter } from "./module/packs/feats-importer.mjs";

Hooks.once("init", async () => {
  console.log("Conan | Initializing system");

  // Expose static system configuration for sheets, documents, and macros.
  CONFIG.CONAN = CONAN;

  // Replace core Actor and Item documents with Conan-specific subclasses.
  CONFIG.Actor.documentClass = ConanActor;
  CONFIG.Item.documentClass = ConanItem;

  // Register TypeDataModel schemas for each actor type.
  CONFIG.Actor.dataModels = {
    character: ConanCharacterData,
    npc: ConanNpcData
  };

  // Register TypeDataModel schemas for each item type.
  CONFIG.Item.dataModels = {
    weapon: ConanWeaponData,
    armor: ConanArmorData,
    gear: ConanGearData,
    sorcery: ConanSorceryData,
    feat: ConanFeatData
  };

  // Tell Foundry which actor values can be bound to token resource bars.
  CONFIG.Actor.trackableAttributes = {
    character: {
      bar: ["combat.hp"],
      value: ["details.level"]
    },
    npc: {
      bar: ["combat.hp"],
      value: ["details.level"]
    }
  };

  // Register compendium import commands before any awaited setup so the ready hook is never missed.
  registerSorceryPackImporter();
  registerWeaponsPackImporter();
  registerArmorPackImporter();
  registerFeatsPackImporter();

  // Preload shared templates before any actor sheet is rendered.
  await loadTemplates([
    "systems/conan/templates/actor/partials/class-rows.hbs",
    "systems/conan/templates/actor/partials/overview-tab.hbs",
    "systems/conan/templates/actor/partials/point-buy-panel.hbs",
    "systems/conan/templates/actor/partials/sorcery-tab.hbs",
    "systems/conan/templates/actor/partials/feats-tab.hbs",
    "systems/conan/templates/actor/partials/social-tab.hbs",
    "systems/conan/templates/actor/partials/movement-panel.hbs"
  ]);
  Handlebars.registerHelper("eq", (a, b) => a === b);
  Handlebars.registerHelper("concat", (...args) => args.slice(0, -1).join(""));
  // Render a simple numeric input from templates without repeating markup.
  Handlebars.registerHelper("numberInput", (value, options) => {
    const { name = "", step = "1", min = "", max = "" } = options.hash;
    return new Handlebars.SafeString(
      `<input type="number" name="${name}" value="${value ?? 0}" step="${step}" min="${min}" max="${max}">`
    );
  });

  // Replace the core sheets with the Conan actor and item sheets.
  Actors.unregisterSheet("core", ActorSheet);
  Items.unregisterSheet("core", ItemSheet);

  Actors.registerSheet("conan", ConanActorSheet, {
    makeDefault: true,
    types: ["character", "npc"],
    label: "CONAN.SystemName"
  });

  Items.registerSheet("conan", ConanItemSheet, {
    makeDefault: true,
    types: ["weapon", "armor", "gear", "sorcery", "feat"],
    label: "CONAN.SystemName"
  });

});
