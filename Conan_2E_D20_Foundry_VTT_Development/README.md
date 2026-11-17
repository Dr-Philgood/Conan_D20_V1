# Conan d20 Development

This workspace contains a local Foundry VTT game system based on the supplied Conan 0.4.1 package. The `conan/` folder is the system package. It retains the character and NPC sheets, six item types, d20 rolls, class advancement, and homebrew origins.

## Try it in Foundry V13

1. Use a test user-data directory. If you already run a system with the `conan` ID, use Foundry’s `--dataPath` option to keep the two copies in separate user-data directories. [Foundry application configuration](https://foundryvtt.com/article/configuration/)
2. Copy the `conan` folder into `Data/systems/` in that user-data directory. The manifest should be at `Data/systems/conan/system.json`. [Foundry system development](https://foundryvtt.com/article/system-development/)
3. Restart Foundry and create a fresh test world with **Conan d20 Development** selected as its game system.
4. Create a Character and an NPC, open both sheets, and make an ability check. Create a Weapon item, drop it onto a Character sheet, and try the attack and damage rolls.

The original manifest identifies V13 build 13.350 as its verified version. This baseline was checked in Node and still needs a live Foundry playtest.

## Customize the system

| Change | Start here |
| --- | --- |
| Display name, supported versions, and document types | `conan/system.json` and `conan/lang/en.json` |
| Document fields and defaults | `conan/module/data/` |
| Calculations and rolls | `conan/module/documents/` and `conan/module/dice/` |
| Sheet layout and styling | `conan/templates/` and `conan/styles/conan.css` |
| Class advancement, feature names, and origin choices | `conan/module/data/generated-master-data.mjs` |

The package keeps the `conan` ID because the system uses it in its sheet and template paths. It includes the supplied `template.json` and uses the JavaScript data models registered by `conan/conan.mjs`. Compendium importers, bundled pack data, and non-homebrew class-feature descriptions were omitted from this baseline. `LICENSE.txt` is the supplied placeholder for local testing.
