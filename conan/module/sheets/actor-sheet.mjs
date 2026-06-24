// Actor sheet: prepares class rows/totals for the Classes tab and wires sheet buttons.

import { CONAN } from "../config.mjs";
import { CONAN_CONDITIONS } from "../data/conditions.mjs";
import { createDefaultClassRow, getActorClassRows, getActorClassTotals, getClassSelectOptions, getDefaultActorClassRows } from "../data/common.mjs";
import { getClassProgression } from "../data/classes.mjs";
import { getClassFeatureDescription, loadClassFeatureDescriptions } from "../data/class-features.mjs";
import { getArmorQualityMaterialEffects, getWeaponQualityMaterialEffects } from "../rules/quality-material.mjs";

const ABILITY_KEYS = ["str", "dex", "con", "int", "wis", "cha"];

function clampPointBuyScore(value) {
  return Math.max(3, Math.min(18, Math.trunc(Number(value) || 10)));
}

function getPointBuyCost(score) {
  const value = clampPointBuyScore(score);
  if (value < 10) return value - 10;

  let cost = 0;
  for (let current = 11; current <= value; current += 1) {
    cost += current > 14 ? 2 : 1;
  }
  return cost;
}

function getPointBuyData(abilities = {}, pool = 28) {
  const scores = ABILITY_KEYS.map((key) => {
    const score = clampPointBuyScore(abilities[key]?.value);
    return {
      key,
      short: CONAN.abilities[key].short,
      label: game.i18n.localize(CONAN.abilities[key].label),
      value: score,
      cost: getPointBuyCost(score)
    };
  });
  const spent = scores.reduce((total, score) => total + score.cost, 0);

  return {
    pool,
    scores,
    spent,
    remaining: pool - spent
  };
}

function coerceIntegerUpdate(formData, path, fallback = 0) {
  if (!(path in formData)) return;
  const value = Number(formData[path]);
  formData[path] = Number.isFinite(value) ? Math.trunc(value) : fallback;
}

function coerceMatchingIntegerUpdates(formData, patterns, actor) {
  for (const path of Object.keys(formData)) {
    if (!patterns.some((pattern) => pattern.test(path))) continue;
    coerceIntegerUpdate(formData, path, foundry.utils.getProperty(actor, path) ?? 0);
  }
}

function getClassFeatureRows(classRows, featureDescriptions = {}) {
  return classRows.flatMap((classRow, classIndex) => {
    const level = Math.max(1, Number(classRow.level) || 1);
    const features = [];

    for (let currentLevel = 1; currentLevel <= level; currentLevel += 1) {
      const progression = getClassProgression(classRow.classKey, currentLevel);
      for (const feature of progression.features ?? []) {
        features.push({
          id: `${classIndex}-${currentLevel}-${feature}`,
          classLabel: progression.classLabel,
          level: currentLevel,
          name: feature,
          description: getClassFeatureDescription(featureDescriptions, classRow.classKey, feature)
        });
      }
    }

    return features;
  });
}

export class ConanActorSheet extends ActorSheet {
  static get defaultOptions() {
    // Main sheet window layout and Foundry tab wiring.
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["conan", "sheet", "actor"],
      template: "systems/conan/templates/actor/character-sheet.hbs",
      width: 900,
      height: 780,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "overview"
        }
      ]
    });
  }

  get template() {
    // Characters and NPCs use separate templates, but share this controller.
    return this.actor.type === "npc"
      ? "systems/conan/templates/actor/npc-sheet.hbs"
      : "systems/conan/templates/actor/character-sheet.hbs";
  }

  _getSubmitData(updateData = {}) {
    const formData = super._getSubmitData(updateData);

    coerceMatchingIntegerUpdates(formData, [
      /^system\.abilities\.[^.]+\.value$/,
      /^system\.classes\.\d+\.(level|hpRolled)$/,
      /^system\.combat\.(hp\.(value|max)|initiative\.misc|dodge\.misc|parry\.misc|damageReduction\.misc)$/,
      /^system\.combat\.attack\.(melee|ranged)\.misc$/,
      /^system\.combat\.featToggles\.(powerAttack\.value|toughness\.ranks)$/,
      /^system\.details\.(level|xp)$/,
      /^system\.movement\.speed\.(base|armor|misc)$/,
      /^system\.resources\.(fate\.value|wealth\.(gold|silver|copper))$/,
      /^system\.saves\.(fort|ref|will)\.misc$/,
      /^system\.skills\.[^.]+\.(ranks|misc)$/,
      /^system\.customSkills\.[^.]+\.\d+\.(ranks|misc)$/
    ], this.actor);

    return formData;
  }

  async getData(options = {}) {
    const context = await super.getData(options);

    // Split embedded items into inventory sections for the inventory tab.
    const items = {
      weapons: this.actor.items
        .filter((item) => item.type === "weapon")
        .map((item) => ({
          id: item.id,
          name: item.name,
          system: item.system,
          effects: getWeaponQualityMaterialEffects(item.system),
          attackSequence: this.actor.getWeaponAttackSequence(item.id)
        })),
      armor: this.actor.items
        .filter((item) => item.type === "armor")
        .map((item) => ({
          id: item.id,
          name: item.name,
          system: item.system,
          effects: getArmorQualityMaterialEffects(item.system)
        })),
      gear: this.actor.items.filter((item) => item.type === "gear")
    };
    const skills = Object.entries(CONAN.skills).map(([key, value]) => ({
      key,
      label: value.label,
      data: this.actor.system.skills[key]
    }));
    const customSkillGroups = this.actor.system.customSkills ?? { professions: [], crafts: [], performs: [] };
    const pinnedCustomSkills = Object.entries(customSkillGroups).flatMap(([group, entries]) =>
      (entries ?? [])
        .filter((entry) => entry.pinned)
        .map((entry) => ({
          group,
          id: entry.id,
          label: entry.name || group,
          data: entry
        }))
    );

    // Always derive class rows/totals from actor data so multiclass UI stays in sync.
    const classRows = getActorClassRows(this.actor.system.classes ?? [], this.actor.type);
    const classTotals = getActorClassTotals(this.actor.system.classes ?? [], this.actor.type);
    const classFeatureDescriptions = await loadClassFeatureDescriptions();
    const speedBase = Math.max(0, Math.trunc(Number(this.actor.system.movement?.speed?.base) || 0));
    const speedArmor = Math.trunc(Number(this.actor.system.movement?.speed?.armor) || 0);
    const conditions = Object.entries(CONAN_CONDITIONS).map(([key, condition]) => ({
      key,
      ...condition,
      active: Boolean(this.actor.system.conditions?.[key])
    }));

    return {
      ...context,
      config: CONAN,
      system: this.actor.system,
      items,
      injuries: this.actor.system.injuries ?? [],
      customSkills: customSkillGroups,
      sorcery: this.actor.system.sorcery ?? {},
      feats: this.actor.system.feats ?? [],
      conditions,
      activeConditionNotes: conditions.filter((condition) => condition.active),
      social: this.actor.system.social ?? {},
      resources: this.actor.system.resources ?? {},
      movement: this.actor.system.movement ?? {},
      overviewSpeed: {
        armored: Math.max(0, speedBase + speedArmor)
      },
      abilities: Object.entries(CONAN.abilities).map(([key, value]) => ({
        key,
        label: game.i18n.localize(value.label),
        short: value.short,
        data: this.actor.system.abilities[key]
      })),
      saves: Object.entries(CONAN.saves).map(([key, value]) => ({
        key,
        label: game.i18n.localize(value.label),
        data: this.actor.system.saves[key]
      })),
      skills,
      pinnedSkills: skills.filter((skill) => skill.data?.pinned),
      pinnedCustomSkills,
      pinnedWeapons: items.weapons.filter((weapon) => weapon.system.pinned),
      classSelectOptions: getClassSelectOptions(),
      classRows,
      classTotals,
      classFeatureRows: getClassFeatureRows(classRows, classFeatureDescriptions),
      pointBuy: getPointBuyData(this.actor.system.abilities)
    };
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Roll buttons on the overview and skills tabs.
    html.find(".rollable-ability").on("click", (event) => {
      event.preventDefault();
      const abilityKey = event.currentTarget.dataset.ability;
      this.actor.rollAbility(abilityKey);
    });

    html.find(".rollable-save").on("click", (event) => {
      event.preventDefault();
      const saveKey = event.currentTarget.dataset.save;
      this.actor.rollSave(saveKey);
    });

    html.find(".rollable-skill").on("click", (event) => {
      event.preventDefault();
      const skillKey = event.currentTarget.dataset.skill;
      this.actor.rollSkill(skillKey);
    });

    html.find(".rollable-custom-skill").on("click", (event) => {
      event.preventDefault();
      const group = event.currentTarget.dataset.group;
      const skillId = event.currentTarget.dataset.skillId;
      this.actor.rollCustomSkill(group, skillId);
    });

    html.find(".add-custom-skill").on("click", async (event) => {
      event.preventDefault();
      const group = event.currentTarget.dataset.group;
      await this.actor.addCustomSkill(group);
    });

    html.find(".point-buy-score, .point-buy-pool").on("input change", () => {
      this._updatePointBuySummary(html);
    });

    html.find(".reset-point-buy").on("click", (event) => {
      event.preventDefault();
      html.find(".point-buy-score").val(10);
      this._updatePointBuySummary(html);
    });

    html.find(".apply-point-buy").on("click", async (event) => {
      event.preventDefault();
      await this._applyPointBuy(html);
    });

    html.find(".delete-custom-skill").on("click", async (event) => {
      event.preventDefault();
      const group = event.currentTarget.dataset.group;
      const skillId = event.currentTarget.closest("[data-skill-id]")?.dataset.skillId;
      await this.actor.removeCustomSkill(group, skillId);
    });

    html.find(".toggle-skill-pin").on("change", async (event) => {
      const path = event.currentTarget.name;
      if (!path) return;
      await this.actor.update({ [path]: event.currentTarget.checked });
    });

    html.find(".add-sorcery-entry").on("click", async (event) => {
      event.preventDefault();
      const group = event.currentTarget.dataset.group;
      await this.actor.addSorceryEntry(group);
    });

    html.find(".delete-sorcery-entry").on("click", async (event) => {
      event.preventDefault();
      const group = event.currentTarget.dataset.group;
      const entryId = event.currentTarget.closest("[data-sorcery-id]")?.dataset.sorceryId;
      await this.actor.removeSorceryEntry(group, entryId);
    });

    html.find(".add-tracker-entry").on("click", async (event) => {
      event.preventDefault();
      const path = event.currentTarget.dataset.path;
      await this.actor.addTrackerEntry(path);
    });

    html.find(".delete-tracker-entry").on("click", async (event) => {
      event.preventDefault();
      const path = event.currentTarget.dataset.path;
      const entryId = event.currentTarget.closest("[data-tracker-id]")?.dataset.trackerId;
      await this.actor.removeTrackerEntry(path, entryId);
    });

    // Class row controls.
    html.find(".add-class-row").on("click", async (event) => {
      event.preventDefault();

      if (typeof this.actor.addClassRow === "function") {
        await this.actor.addClassRow();
        return;
      }

      const current = Array.isArray(this.actor.system.classes)
        ? foundry.utils.deepClone(this.actor.system.classes)
        : [];

      const fallbackClassKey = this.actor.type === "npc" ? "soldier" : "barbarian";
      current.push(createDefaultClassRow(fallbackClassKey));

      await this.actor.update({ "system.classes": current });
    });

    html.find(".remove-class-row").on("click", async (event) => {
      event.preventDefault();
      const index = Number(event.currentTarget.closest("[data-class-index]")?.dataset.classIndex);
      if (!Number.isInteger(index)) return;
      const current = Array.isArray(this.actor.system.classes)
        ? foundry.utils.deepClone(this.actor.system.classes)
        : [];
      current.splice(index, 1);
      if (current.length === 0) {
        current.push(...getDefaultActorClassRows(this.actor.type));
      }
      await this.actor.update({ "system.classes": current });
    });

    html.find(".rollable-initiative").on("click", async (event) => {
      event.preventDefault();
      await this._onSubmit(event);
      this.actor.rollInitiativeCheck();
    });

    html.find(".rollable-magic-attack").on("click", (event) => {
      event.preventDefault();
      this.actor.rollMagicAttack();
    });

    html.find(".rollable-sorcery-difficulty").on("click", (event) => {
      event.preventDefault();
      const row = event.currentTarget.closest("[data-sorcery-id]");
      const group = event.currentTarget.dataset.group;
      this.actor.rollSorceryDifficulty(group, row?.dataset.sorceryId);
    });

    html.find(".spend-power-point").on("click", (event) => {
      event.preventDefault();
      this.actor.spendPowerPoint();
    });

    html.find(".recover-power-point").on("click", (event) => {
      event.preventDefault();
      this.actor.recoverPowerPoint();
    });

    html.find(".spend-fate-point").on("click", (event) => {
      event.preventDefault();
      this.actor.spendFatePoint();
    });

    html.find(".recover-fate-point").on("click", (event) => {
      event.preventDefault();
      this.actor.recoverFatePoint();
    });

    html.find(".rollable-corruption").on("click", (event) => {
      event.preventDefault();
      this.actor.rollCorruptionCheck();
    });

    // Embedded item buttons for attacks, damage, editing, creation, and deletion.
    html.find(".weapon-attack").on("click", (event) => {
      event.preventDefault();
      const itemId = event.currentTarget.closest("[data-item-id]")?.dataset.itemId;
      this.actor.rollWeaponAttack(itemId);
    });

    html.find(".weapon-full-attack").on("click", (event) => {
      event.preventDefault();
      const itemId = event.currentTarget.closest("[data-item-id]")?.dataset.itemId;
      this.actor.rollWeaponFullAttack(itemId);
    });

    html.find(".weapon-damage").on("click", (event) => {
      event.preventDefault();
      const itemId = event.currentTarget.closest("[data-item-id]")?.dataset.itemId;
      this.actor.rollWeaponDamage(itemId);
    });

    html.find(".toggle-weapon-pin").on("change", async (event) => {
      const itemId = event.currentTarget.closest("[data-item-id]")?.dataset.itemId;
      const item = this.actor.items.get(itemId);
      if (!item) return;
      await item.update({ "system.pinned": event.currentTarget.checked });
    });

    html.find(".weapon-critical-input").on("change", async (event) => {
      const itemId = event.currentTarget.closest("[data-item-id]")?.dataset.itemId;
      const item = this.actor.items.get(itemId);
      if (!item) return;
      await item.update({ "system.critical": event.currentTarget.value.trim() || "x2" });
    });

    html.find(".item-create").on("click", async (event) => {
      event.preventDefault();
      const type = event.currentTarget.dataset.type;
      const name = `New ${type.charAt(0).toUpperCase()}${type.slice(1)}`;
      await this.actor.createEmbeddedDocuments("Item", [{ name, type }]);
    });

    html.find(".item-edit").on("click", (event) => {
      event.preventDefault();
      const itemId = event.currentTarget.closest("[data-item-id]")?.dataset.itemId;
      this.actor.items.get(itemId)?.sheet?.render(true);
    });

    html.find(".item-delete").on("click", async (event) => {
      event.preventDefault();
      const itemId = event.currentTarget.closest("[data-item-id]")?.dataset.itemId;
      if (!itemId) return;
      await this.actor.deleteEmbeddedDocuments("Item", [itemId]);
    });

    // Permanent damage controls and injury list actions.
    html.find(".permanent-damage-check").on("click", async (event) => {
      event.preventDefault();
      this._openPermanentDamageDialog();
    });

    html.find(".injury-toggle").on("click", async (event) => {
      event.preventDefault();
      const injuryId = event.currentTarget.closest("[data-injury-id]")?.dataset.injuryId;
      await this.actor.toggleInjury(injuryId);
    });

    html.find(".injury-delete").on("click", async (event) => {
      event.preventDefault();
      const injuryId = event.currentTarget.closest("[data-injury-id]")?.dataset.injuryId;
      await this.actor.removeInjury(injuryId);
    });
  }

  async _onDrop(event) {
    const data = TextEditor.getDragEventData(event);

    if (data.type !== "Item") return super._onDrop(event);

    const item = await Item.fromDropData(data);
    if (!item) return super._onDrop(event);

    if (item.type === "sorcery") {
      event.preventDefault();
      return this.actor.addSorceryItem(item);
    }

    if (item.type === "feat") {
      event.preventDefault();
      return this.actor.addFeatItem(item);
    }

    if (["weapon", "armor", "gear"].includes(item.type)) {
      event.preventDefault();
      const itemData = item.toObject();
      delete itemData._id;
      delete itemData.folder;
      delete itemData.sort;
      return this.actor.createEmbeddedDocuments("Item", [itemData]);
    }

    return super._onDrop(event);
  }

  _openPermanentDamageDialog() {
    // Small dialog for entering the conditions that trigger permanent damage.
    const content = `
      <form class="conan-permanent-damage-form">
        <div class="form-group">
          <label>Damage Dealt</label>
          <input type="number" name="damage" value="0">
        </div>
        <div class="form-group">
          <label>Max Weapon Damage Rolled?</label>
          <input type="checkbox" name="maxWeaponDamage">
        </div>
        <div class="form-group">
          <label>Physical Attack?</label>
          <input type="checkbox" name="physical" checked>
        </div>
        <div class="form-group">
          <label>Living Target?</label>
          <input type="checkbox" name="living" checked>
        </div>
      </form>
    `;

    new Dialog({
      title: "Permanent Damage Check",
      content,
      buttons: {
        roll: {
          label: "Roll",
          callback: async (html) => {
            const form = html[0].querySelector(".conan-permanent-damage-form");
            const damage = Number(form.elements.damage.value || 0);
            const maxWeaponDamage = form.elements.maxWeaponDamage.checked;
            const physical = form.elements.physical.checked;
            const living = form.elements.living.checked;

            await this.actor.rollPermanentDamageCheck({
              damage,
              maxWeaponDamage,
              physical,
              living
            });
          }
        },
        cancel: {
          label: "Cancel"
        }
      },
      default: "roll"
    }).render(true);
  }

  _readPointBuyData(html) {
    const pool = Number(html.find(".point-buy-pool").val()) || 28;
    const abilities = {};

    for (const key of ABILITY_KEYS) {
      const input = html.find(`.point-buy-score[data-ability="${key}"]`);
      abilities[key] = { value: clampPointBuyScore(input.val()) };
    }

    return getPointBuyData(abilities, pool);
  }

  _updatePointBuySummary(html) {
    const data = this._readPointBuyData(html);
    html.find("[data-point-buy-spent]").text(data.spent);
    html.find("[data-point-buy-remaining]").text(data.remaining);
    html.find(".point-buy-panel").toggleClass("point-buy-over", data.remaining < 0);
    html.find(".apply-point-buy").prop("disabled", data.remaining < 0);

    for (const score of data.scores) {
      const input = html.find(`.point-buy-score[data-ability="${score.key}"]`);
      input.val(score.value);
      html.find(`[data-point-buy-cost="${score.key}"]`).text(score.cost);
    }
  }

  async _applyPointBuy(html) {
    const data = this._readPointBuyData(html);
    if (data.remaining < 0) {
      ui.notifications?.warn("Conan | Ability point buy is over budget.");
      return;
    }

    const updateData = {};
    for (const score of data.scores) {
      updateData[`system.abilities.${score.key}.value`] = score.value;
    }

    await this.actor.update(updateData);
  }
}
