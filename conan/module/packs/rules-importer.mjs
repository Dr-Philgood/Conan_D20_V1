// Rules compendium importer.
// Builds JournalEntry rules references from packs/rules-source.txt.

import { createPackJournalEntries, deletePackFolders, ensurePackFolders, getFolderId, lockPack, unlockPack } from "./utils.mjs";

const RULE_SECTIONS = [
  { folder: "Combat Modifiers", name: "Combat Modifiers Overview", start: ["Combat Modifiers"], end: ["Cover"] },
  { folder: "Combat Modifiers", name: "Cover", start: ["Cover"], end: ["Concealment"] },
  { folder: "Combat Modifiers", name: "Concealment", start: ["Concealment"], end: ["Flanking"] },
  { folder: "Combat Modifiers", name: "Flanking", start: ["Flanking"], end: ["Helpless Defenders"] },
  { folder: "Combat Modifiers", name: "Helpless Defenders", start: ["Helpless Defenders"], end: ["Sneak Attack"] },
  { folder: "Combat Modifiers", name: "Sneak Attack", start: ["Sneak Attack"], end: ["Special Combat", "Situations"] },
  { folder: "Special Combat Situations", name: "Grapple", start: ["Grapple"], end: ["Mounted Combat"] },
  { folder: "Special Combat Situations", name: "Mounted Combat", start: ["Mounted Combat"], end: ["Multiple Opponents"] },
  { folder: "Special Combat Situations", name: "Multiple Opponents", start: ["Multiple Opponents"], end: ["Two-Weapon Fighting"] },
  { folder: "Special Combat Situations", name: "Two-Weapon Fighting", start: ["Two-Weapon Fighting"], end: ["Special Attacks", "and Manoeuvres"] },
  { folder: "Special Attacks and Manoeuvres", name: "Aid Another", start: ["Aid Another"], end: ["Aim"] },
  { folder: "Special Attacks and Manoeuvres", name: "Aim", start: ["Aim"], end: ["Bull Rush"] },
  { folder: "Special Attacks and Manoeuvres", name: "Bull Rush", start: ["Bull Rush"], end: ["Cat’s Parry"] },
  { folder: "Special Attacks and Manoeuvres", name: "Cat's Parry", start: ["Cat’s Parry"], end: ["Charge"] },
  { folder: "Special Attacks and Manoeuvres", name: "Charge", start: ["Charge"], end: ["Bull’s Charge"] },
  { folder: "Special Attacks and Manoeuvres", name: "Bull's Charge", start: ["Bull’s Charge"], end: ["Leaping Charge"] },
  { folder: "Special Attacks and Manoeuvres", name: "Leaping Charge", start: ["Leaping Charge"], end: ["Dance Aside"] },
  { folder: "Special Attacks and Manoeuvres", name: "Dance Aside", start: ["Dance Aside"], end: ["Decapitating Slash"] },
  { folder: "Special Attacks and Manoeuvres", name: "Decapitating Slash", start: ["Decapitating Slash"], end: ["Delay"] },
  { folder: "Special Attacks and Manoeuvres", name: "Delay", start: ["Delay"], end: ["Desperate Stab"] },
  { folder: "Special Attacks and Manoeuvres", name: "Desperate Stab", start: ["Desperate Stab"], end: ["Devastating Sweep"] },
  { folder: "Special Attacks and Manoeuvres", name: "Devastating Sweep", start: ["Devastating Sweep"], end: ["Disarm"] },
  { folder: "Special Attacks and Manoeuvres", name: "Disarm", start: ["Disarm"], end: ["Disarm and", "Grabbing Weapons"] },
  { folder: "Special Attacks and Manoeuvres", name: "Disarm and Grabbing Weapons", start: ["Disarm and", "Grabbing Weapons"], end: ["Masterful Disarm"] },
  { folder: "Special Attacks and Manoeuvres", name: "Masterful Disarm", start: ["Masterful Disarm"], end: ["Ranged Disarm"] },
  { folder: "Special Attacks and Manoeuvres", name: "Ranged Disarm", start: ["Ranged Disarm"], end: ["Distracting Arrow"] },
  { folder: "Special Attacks and Manoeuvres", name: "Distracting Arrow", start: ["Distracting Arrow"], end: ["Feint"] },
  { folder: "Special Attacks and Manoeuvres", name: "Feint", start: ["Feint"], end: ["Force Back"] },
  { folder: "Special Attacks and Manoeuvres", name: "Force Back", start: ["Force Back"], end: ["Fling Aside"] },
  { folder: "Special Attacks and Manoeuvres", name: "Fling Aside", start: ["Fling Aside"], end: ["Hooking Parry"] },
  { folder: "Special Attacks and Manoeuvres", name: "Hooking Parry", start: ["Hooking Parry"], end: ["Human Shield"] },
  { folder: "Special Attacks and Manoeuvres", name: "Human Shield", start: ["Human Shield"], end: ["Improvised Attack"] },
  { folder: "Special Attacks and Manoeuvres", name: "Improvised Attack", start: ["Improvised Attack"], end: ["Kip Up"] },
  { folder: "Special Attacks and Manoeuvres", name: "Kip Up", start: ["Kip Up"], end: ["Leave Them for Dead"] },
  { folder: "Special Attacks and Manoeuvres", name: "Leave Them for Dead", start: ["Leave Them for Dead"], end: ["Lock Weapons"] },
  { folder: "Special Attacks and Manoeuvres", name: "Lock Weapons", start: ["Lock Weapons"], end: ["Overrun"] },
  { folder: "Special Attacks and Manoeuvres", name: "Overrun", start: ["Overrun"], end: ["Improved Overrun"] },
  { folder: "Special Attacks and Manoeuvres", name: "Improved Overrun", start: ["Improved Overrun"], end: ["Mounted Overrun (Trample)"] },
  { folder: "Special Attacks and Manoeuvres", name: "Mounted Overrun (Trample)", start: ["Mounted Overrun (Trample)"], end: ["Pantherish Twist"] },
  { folder: "Special Attacks and Manoeuvres", name: "Pantherish Twist", start: ["Pantherish Twist"], end: ["Ready"] },
  { folder: "Special Attacks and Manoeuvres", name: "Ready", start: ["Ready"], end: ["Riposte"] },
  { folder: "Special Attacks and Manoeuvres", name: "Riposte", start: ["Riposte"], end: ["Roll"] },
  { folder: "Special Attacks and Manoeuvres", name: "Roll", start: ["Roll"], end: ["Shield Slam"] },
  { folder: "Special Attacks and Manoeuvres", name: "Shield Slam", start: ["Shield Slam"], end: ["Sunder"] },
  { folder: "Special Attacks and Manoeuvres", name: "Sunder", start: ["Sunder"], end: ["Sundering a Carried", "or Worn Object"] },
  { folder: "Special Attacks and Manoeuvres", name: "Sundering a Carried or Worn Object", start: ["Sundering a Carried", "or Worn Object"], end: ["Sundering Parry"] },
  { folder: "Special Attacks and Manoeuvres", name: "Sundering Parry", start: ["Sundering Parry"], end: ["Throw Splash Weapon"] },
  { folder: "Special Attacks and Manoeuvres", name: "Throw Splash Weapon", start: ["Throw Splash Weapon"], end: ["To the Hilt"] },
  { folder: "Special Attacks and Manoeuvres", name: "To the Hilt", start: ["To the Hilt"], end: ["Trip"] },
  { folder: "Special Attacks and Manoeuvres", name: "Trip", start: ["Trip"], end: ["Use The Battlefield"] },
  { folder: "Special Attacks and Manoeuvres", name: "Use The Battlefield", start: ["Use The Battlefield"], end: ["Adventuring and", "the Wilderness"] },
  { folder: "Adventuring and the Wilderness", name: "Encumbrance", start: ["Encumbrance"], end: ["Movement"] },
  { folder: "Adventuring and the Wilderness", name: "Movement", start: ["Movement"], end: ["Terrain And", "Overland Movement"] },
  { folder: "Adventuring and the Wilderness", name: "Terrain and Overland Movement", start: ["Terrain And", "Overland Movement"], end: ["The Rules of", "Exploration"] },
  { folder: "Exploration and Hazards", name: "Vision and Lighting Conditions", start: ["Vision and", "Lighting Conditions"], end: ["Light Sources", "And Illumination"] },
  { folder: "Exploration and Hazards", name: "Light Sources and Illumination", start: ["Light Sources", "And Illumination"], end: ["Breaking Objects"] },
  { folder: "Exploration and Hazards", name: "Breaking Objects", start: ["Breaking Objects"], end: ["Cold and Exposure"] },
  { folder: "Exploration and Hazards", name: "Cold and Exposure", start: ["Cold and Exposure"], end: ["Darkness"] },
  { folder: "Exploration and Hazards", name: "Darkness", start: ["Darkness"], end: ["Falling"] },
  { folder: "Exploration and Hazards", name: "Falling", start: ["Falling"], end: ["Heat"] },
  { folder: "Exploration and Hazards", name: "Heat", start: ["Heat"], end: ["Catching Fire"] },
  { folder: "Exploration and Hazards", name: "Catching Fire", start: ["Catching Fire"], end: ["Smoke"] },
  { folder: "Exploration and Hazards", name: "Smoke", start: ["Smoke"], end: ["Starvation and Thirst"] },
  { folder: "Exploration and Hazards", name: "Starvation and Thirst", start: ["Starvation and Thirst"], end: ["Suffocation"] },
  { folder: "Exploration and Hazards", name: "Suffocation", start: ["Suffocation"], end: ["Water and Drowning"] },
  { folder: "Exploration and Hazards", name: "Water and Drowning", start: ["Water and Drowning"], end: ["Combat Underwater"] },
  { folder: "Exploration and Hazards", name: "Combat Underwater", start: ["Combat Underwater"], end: ["Weather"] },
  { folder: "Exploration and Hazards", name: "Weather", start: ["Weather"], end: ["Fog"] },
  { folder: "Exploration and Hazards", name: "Fog", start: ["Fog"], end: ["Winds"] },
  { folder: "Exploration and Hazards", name: "Winds", start: ["Winds"], end: ["Condition", "Summary"] },
  { folder: "Conditions", name: "Condition Summary", start: ["Condition", "Summary"], end: ["Sorcery Knowledge and Power"] },
  { folder: "Sorcery", name: "Sorcery Knowledge and Power", start: ["Sorcery Knowledge and Power"], end: ["Power Points"] },
  { folder: "Sorcery", name: "Power Points", start: ["Power Points"], end: ["Sacrifices and", "Energy Drains"] },
  { folder: "Sorcery", name: "Sacrifices and Energy Drains", start: ["Sacrifices and", "Energy Drains"], end: ["Power Rituals"] },
  { folder: "Sorcery", name: "Power Rituals", start: ["Power Rituals"], end: ["Pushing It"] },
  { folder: "Sorcery", name: "Pushing It", start: ["Pushing It"], end: ["The R ules", "of Sorcery"] },
  { folder: "Rules of Sorcery", name: "The Rule of Success", start: ["The Rule of Success"], end: ["The Rule of", "Impermanence"] },
  { folder: "Rules of Sorcery", name: "The Rule of Impermanence", start: ["The Rule of", "Impermanence"], end: ["The Rule of Defence"] },
  { folder: "Rules of Sorcery", name: "The Rule of Defence", start: ["The Rule of Defence"], end: ["The Rule of Obsession"] },
  { folder: "Rules of Sorcery", name: "The Rule of Obsession", start: ["The Rule of Obsession"], end: ["The Rule of the Master"] },
  { folder: "Rules of Sorcery", name: "The Rule of the Master", start: ["The Rule of the Master"], end: ["The Rule of the", "Sorcerer’s Soul"] },
  { folder: "Rules of Sorcery", name: "The Rule of the Sorcerer's Soul", start: ["The Rule of the", "Sorcerer’s Soul"], end: ["Spell Failure"] },
  { folder: "Sorcery", name: "Spell Failure", start: ["Spell Failure"], end: ["Consequences", "of Magic"] },
  { folder: "Sorcery Consequences", name: "Mighty Spells and Runaway Magic", start: ["Mighty Spells", "and Runaway Magic"], end: ["Corruption and Insanity"] },
  { folder: "Sorcery Consequences", name: "Corruption and Insanity", start: ["Corruption and Insanity"], end: ["Spells and", "Spellcasting"] },
  { folder: "Spells and Spellcasting", name: "Spells and Spellcasting", start: ["Spells and", "Spellcasting"], end: ["Spell Descriptions"] },
  { folder: "Spells and Spellcasting", name: "Spell Descriptions", start: ["Spell Descriptions"], end: ["Components"] },
  { folder: "Spells and Spellcasting", name: "Components", start: ["Components"], end: ["Casting Time"] },
  { folder: "Spells and Spellcasting", name: "Casting Time", start: ["Casting Time"], end: ["Spell Range"] },
  { folder: "Spells and Spellcasting", name: "Spell Range", start: ["Spell Range"], end: ["Spell Duration"] },
  { folder: "Spells and Spellcasting", name: "Spell Duration", start: ["Spell Duration"], end: ["The Magic Attack Roll"] },
  { folder: "Spells and Spellcasting", name: "The Magic Attack Roll", start: ["The Magic Attack Roll"], end: ["Codes of Honour"] },
  { folder: "Codes of Honour", name: "Codes of Honour", start: ["Codes of Honour"], end: ["Benefits of a", "Code of Honour"] },
  { folder: "Codes of Honour", name: "Benefits of a Code of Honour", start: ["Benefits of a", "Code of Honour"], end: ["Barbaric Code", "of Honour"] },
  { folder: "Codes of Honour", name: "Barbaric Code of Honour", start: ["Barbaric Code", "of Honour"], end: ["Civilised Code", "of Honour"] },
  { folder: "Codes of Honour", name: "Civilised Code of Honour", start: ["Civilised Code", "of Honour"], end: ["Mercenary", "Code of Honour"] },
  { folder: "Codes of Honour", name: "Mercenary Code of Honour", start: ["Mercenary", "Code of Honour"], end: ["Losing a Code of Honour"] },
  { folder: "Codes of Honour", name: "Losing a Code of Honour", start: ["Losing a Code of Honour"], end: ["The Warrior Way – A New", "Code of Honour"] },
  { folder: "Codes of Honour", name: "The Warrior Way Code of Honour", start: ["The Warrior Way – A New", "Code of Honour"], end: null }
];

function cleanSourceText(text) {
  return String(text ?? "")
    .replaceAll("â€™", "'")
    .replaceAll("â€˜", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replaceAll("â€“", "-")
    .replaceAll("â€”", "-")
    .replaceAll("â€˜", "'")
    .replaceAll("â€™", "'")
    .replaceAll("Ã—", "x")
    .replaceAll("Ãƒâ€”", "x")
    .replaceAll("Â½", "1/2")
    .replaceAll("Ã‚Â½", "1/2")
    .replaceAll("â€˜", "'")
    .replaceAll("â€™", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replace(/Starting Equipment by Character Class[\s\S]*?even strangers are given hospitality/, "Even strangers are given hospitality")
    .replace(/\r/g, "");
}

function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function lineEquals(line, expected) {
  return line.trim().toLowerCase() === expected.trim().toLowerCase();
}

function findHeading(lines, parts, fromIndex = 0) {
  if (!parts?.length) return -1;

  for (let index = fromIndex; index <= lines.length - parts.length; index += 1) {
    if (parts.every((part, offset) => lineEquals(lines[index + offset], part))) return index;
  }

  return -1;
}

function stripNoiseLines(lines) {
  return lines
    .map((line) => line.trim())
    .filter((line) => line && !/^\d+$/.test(line) && line !== "Combat" && line !== "Sorcery");
}

function joinWrappedLines(lines) {
  const paragraphs = [];
  let current = "";

  for (const line of lines) {
    if (!current) {
      current = line;
      continue;
    }

    const startsNewThought = /^(Action|Circumstance|Effect|Prerequisite|Prerequisites|Benefit|Normal|Special|Note|Exception|Checked|Knocked Down|Blown Away|Rain|Snow|Heavy Snow|Sleet|Hail|Dust storm|Snowstorm|Thunderstorm|Windstorm|Blizzard|Hurricane|Tornado|Powerful Storms|Light Wind|Moderate Wind|Strong Wind|Severe Wind|Hurricane-Force Wind|Blinded|Cowering|Dazed|Dazzled|Deafened|Disabled|Dying|Entangled|Exhausted|Fatigued|Frightened|Nauseated|Panicked|Pinned|Prone|Shaken|Sickened|Stable|Staggered|Stunned|Unconscious):\s/.test(line);
    const previousEndsSentence = /[.!?;:]$/.test(current);

    if (startsNewThought || previousEndsSentence) {
      paragraphs.push(current);
      current = line;
    } else {
      current = `${current} ${line}`;
    }
  }

  if (current) paragraphs.push(current);
  return paragraphs;
}

function htmlifyRuleText(name, text) {
  const lines = stripNoiseLines(text.split("\n"));
  const paragraphs = joinWrappedLines(lines);
  const content = paragraphs
    .filter((paragraph) => paragraph !== name)
    .map((paragraph) => {
      const actionMatch = paragraph.match(/^([^:]{2,60}):\s*(.+)$/);
      if (actionMatch) {
        return `<p><strong>${escapeHtml(actionMatch[1])}:</strong> ${escapeHtml(actionMatch[2])}</p>`;
      }
      return `<p>${escapeHtml(paragraph)}</p>`;
    })
    .join("\n");

  return `<h1>${escapeHtml(name)}</h1>\n${content}`;
}

export function buildRuleJournalEntries(sourceText) {
  const text = cleanSourceText(sourceText);
  const lines = text.split("\n");
  const entries = [];

  for (const section of RULE_SECTIONS) {
    const start = findHeading(lines, section.start);
    if (start === -1) continue;

    const end = section.end ? findHeading(lines, section.end, start + section.start.length) : lines.length;
    const body = lines.slice(start, end === -1 ? lines.length : end).join("\n");

    entries.push({
      name: section.name,
      folderName: section.folder,
      pages: [
        {
          name: section.name,
          type: "text",
          text: {
            format: 1,
            content: htmlifyRuleText(section.name, body)
          }
        }
      ]
    });
  }

  return entries;
}

function ruleEntryKey(entry) {
  return entry.name;
}

export async function importRulesPack({ clear = false } = {}) {
  const pack = game.packs.get("conan.rules");
  if (!pack) {
    ui.notifications?.warn("Conan | Rules compendium pack was not found.");
    return { created: 0, skipped: 0 };
  }

  await unlockPack(pack);

  try {
    const response = await fetch("systems/conan/packs/rules-source.txt");
    const sourceText = await response.text();
    const entries = buildRuleJournalEntries(sourceText);

    if (clear) {
      const existing = await pack.getDocuments();
      await JournalEntry.deleteDocuments(existing.map((entry) => entry.id), { pack: pack.collection });
      await deletePackFolders(pack);
    }

    const folderMap = await ensurePackFolders(pack, entries.map((entry) => entry.folderName), "JournalEntry");
    const entriesWithFolders = entries.map((entry) => ({
      name: entry.name,
      pages: entry.pages,
      folder: folderMap.get(entry.folderName)?.id ?? null
    }));

    const existing = await pack.getDocuments();
    const existingByKey = new Map(existing.map((entry) => [ruleEntryKey(entry), entry]));
    const toCreate = entriesWithFolders.filter((entry) => !existingByKey.has(ruleEntryKey(entry)));

    await createPackJournalEntries(toCreate, pack);

    for (const entryData of entriesWithFolders) {
      const existingEntry = existingByKey.get(ruleEntryKey(entryData));
      if (!existingEntry) continue;

      const existingFolderId = getFolderId(existingEntry.folder);
      const updates = {};
      if (entryData.folder && existingFolderId !== entryData.folder) updates.folder = entryData.folder;
      if (Object.keys(updates).length) await existingEntry.update(updates);

      const [existingPage] = existingEntry.pages.contents;
      const [pageData] = entryData.pages;
      if (!existingPage) {
        await JournalEntryPage.createDocuments(pageData, { parent: existingEntry });
      } else if (existingPage.text?.content !== pageData.text.content || existingPage.name !== pageData.name) {
        await existingPage.update({
          name: pageData.name,
          type: pageData.type,
          "text.format": pageData.text.format,
          "text.content": pageData.text.content
        });
      }
    }

    return { created: toCreate.length, skipped: entriesWithFolders.length - toCreate.length };
  } finally {
    await lockPack(pack);
  }
}

export function registerRulesPackImporter() {
  game.conan ??= {};
  game.conan.importRulesPack = importRulesPack;

  const autoImport = async () => {
    if (!game.user?.isGM) return;
    const pack = game.packs.get("conan.rules");
    if (!pack) return;
    try {
      const existing = await pack.getDocuments();
      const response = await fetch("systems/conan/packs/rules-source.txt");
      const sourceText = await response.text();
      const expectedEntries = buildRuleJournalEntries(sourceText);
      const existingNames = new Set(existing.map((entry) => entry.name));
      const hasMissingEntries = expectedEntries.some((entry) => !existingNames.has(entry.name));
      if (existing.length === 0 || hasMissingEntries) {
        const result = await importRulesPack();
        console.log(`Conan | Rules compendium populated: ${result.created} created, ${result.skipped} updated or skipped.`);
      } else {
        await lockPack(pack);
      }
    } catch (error) {
      console.error("Conan | Rules compendium import failed.", error);
      ui.notifications?.error("Conan | Rules compendium import failed. Check the console for details.");
    }
  };

  if (game.ready) setTimeout(autoImport, 0);
  else Hooks.once("ready", autoImport);
}
