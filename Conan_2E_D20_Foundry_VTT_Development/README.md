# Conan d20 Development

This workspace contains a local Foundry VTT game system based on the supplied Conan 0.4.1 package. The `conan/` folder is the system package. It retains the character and NPC sheets, six item types, d20 rolls, class advancement, and homebrew origins.

## Try it in Foundry V13

1. Use a test user-data directory. If you already run a system with the `conan` ID, use Foundry’s `--dataPath` option to keep the two copies in separate user-data directories. [Foundry application configuration](https://foundryvtt.com/article/configuration/)
2. Copy the `conan` folder into `Data/systems/` in that user-data directory. The manifest should be at `Data/systems/conan/system.json`. [Foundry system development](https://foundryvtt.com/article/system-development/)
3. Restart Foundry and create a fresh test world with **Conan d20 Development** selected as its game system.
4. Open a character you own and the **Compendium Packs** sidebar. Open **Weapons & Ammunition**, find **Dagger**, and drag the entry onto the sheet. Its editable copy appears under **Combat**, where you can equip it and roll its 1d4 base damage. Try **Bedroll** from **Clothing & Equipment** to see a quantity-one, 5 lb. item under **Equipment**.

The original manifest identifies V13 build 13.350 as its verified version. This baseline was checked in Node and still needs a live Foundry playtest.

## Equipment compendia

Version 0.5.0 includes 1,025 individual entries from the audited equipment index. The packs are included in the system folder and become available when Foundry loads the system. Players can browse them and drag items onto characters they own. Each drop creates an unequipped copy.

| Compendium | Items | Compendium | Items |
| --- | ---: | --- | ---: |
| Clothing & Equipment | 443 | Unusual Items | 200 |
| Weapons & Ammunition | 96 | Herbs & Poisons | 85 |
| Armour & Shields | 40 | Alchemical Items | 44 |
| Weapon & Armor Modifications | 25 | Animals & Mounts | 29 |
| Vehicles | 30 | Ship Parts | 22 |
| War Machines | 11 | | |

Weapon and armour entries appear on **Combat**. Ammunition, modifications, mounts, vehicles, and other gear appear on **Equipment**. One ammunition item represents the bundle named in the index. Each shield combines its offensive and defensive profiles in a single item. Mounts and vehicles are inventory references. Modifications and conditional effects can be applied manually during play.

Item sheets include the source citation and workbook row. The index supplies the price wording and stated item mass. An unspecified or variable mass contributes zero to encumbrance until you enter a weight on the character’s copy. Capacity, price multipliers, and modification weight changes are displayed as reference values.

To update the catalogue, run `python tools/build_equipment.py "path/to/workbook.ods" "path/to/empty-source-folder"`. Each generated subfolder contains the Item and Folder JSON for one compendium. The game effects for alchemical items, herbs, and poisons are summarized in `tools/equipment_effects.py`. Compile each subfolder into a fresh LevelDB directory using the official CLI’s `compilePack(source, destination)` API. The release packs were compiled and read back with CLI 3.0.5. [Foundry VTT CLI](https://github.com/foundryvtt/foundryvtt-cli)

## Customize the system

| Change | Start here |
| --- | --- |
| Display name, supported versions, and document types | `conan/system.json` and `conan/lang/en.json` |
| Document fields and defaults | `conan/module/data/` |
| Calculations and rolls | `conan/module/documents/` and `conan/module/dice/` |
| Sheet layout and styling | `conan/templates/` and `conan/styles/conan.css` |
| Class advancement, feature names, and origin choices | `conan/module/data/generated-master-data.mjs` |

The package keeps the `conan` ID because the system uses it in its sheet and template paths. It includes the supplied `template.json` and uses the JavaScript data models registered by `conan/conan.mjs`. `LICENSE.txt` is the supplied placeholder for local testing.
