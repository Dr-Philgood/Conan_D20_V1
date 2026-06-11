// Class feature description parser.
// Reads packs/class-features-source.txt once, then maps class progression feature names to rule text.

const CLASS_LABELS = {
  barbarian: "Barbarian",
  borderer: "Borderer",
  martialDisciple: "Martial Disciple",
  noble: "Noble",
  nomad: "Nomad",
  pirate: "Pirate",
  scholar: "Scholar",
  soldier: "Soldier",
  temptress: "Temptress",
  thief: "Thief",
  axeman: "Axeman",
  duellist: "Duellist",
  pitFighter: "Pit Fighter",
  savage: "Savage",
  warlord: "Warlord",
  wrestler: "Wrestler"
};

const NOISE_HEADINGS = new Set([
  "Adventures",
  "Characteristics",
  "Religion",
  "Game Rule Information",
  "Abilities",
  "Hit Die",
  "Class Skills",
  "Skill Points at 1st Level",
  "Skill Points at Each Additional Level",
  "Class Features",
  "Level",
  "Special",
  "Normal",
  "Benefit",
  "Prerequisite",
  "Prerequisites",
  "Condition",
  "Surface"
]);

let cachedDescriptions = null;

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function cleanSourceText(text) {
  return String(text ?? "")
    .replaceAll("\uFEFF", "")
    .replaceAll("Ã¢â‚¬â„¢", "'")
    .replaceAll("Ã¢â‚¬Ëœ", "'")
    .replaceAll("Ã¢â‚¬Å“", "\"")
    .replaceAll("Ã¢â‚¬\u009d", "\"")
    .replaceAll("Ã¢â‚¬â€œ", "-")
    .replaceAll("Ã¢â‚¬â€", "-")
    .replaceAll("Ãƒâ€”", "x")
    .replaceAll("Ã‚Â½", "1/2")
    .replaceAll("Â½", "1/2")
    .replaceAll("â€™", "'")
    .replaceAll("’", "'")
    .replaceAll("‘", "'")
    .replaceAll("“", "\"")
    .replaceAll("”", "\"")
    .replaceAll("â€“", "-")
    .replaceAll("â€”", "-")
    .replaceAll("Confi dence", "Confidence")
    .replaceAll("Unfl inching", "Unflinching")
    .replaceAll("Refl exive", "Reflexive")
    .replaceAll("Refl exes", "Reflexes")
    .replace(/\r/g, "");
}

function htmlify(text) {
  const escaped = String(text ?? "")
    .trim()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  return escaped
    ? escaped
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br>")}</p>`)
      .join("\n")
    : "";
}

function normalizeDescription(text) {
  return cleanSourceText(text)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !/^\d+$/.test(line) && line !== "Classes")
    .join("\n")
    .replace(/\n(?=[a-z,;)])/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function normalizeClassFeatureName(name) {
  return cleanSourceText(name)
    .replace(/\([^)]*\)/g, "")
    .replace(/^second /i, "2nd ")
    .replace(/^greater crimson mist$/i, "Crimson Mist")
    .replace(/^martial disciple$/i, "Martial Discipline")
    .replace(/\b[IVX]+$/i, "")
    .replace(/\b\d+(?:st|nd|rd|th)\b/gi, "")
    .replace(/\b\d+\/day\b/gi, "")
    .replace(/\+\d+(?:d\d+)?(?:\/\+\d+d\d+)?/gi, "")
    .replace(/\d+\/-/g, "")
    .replace(/\bno penalty\b/gi, "")
    .replace(/\bdouble threat range\b/gi, "")
    .replace(/\btriple threat range\b/gi, "")
    .replace(/\bfull speed\b/gi, "")
    .replace(/\bfast movement\b/gi, "")
    .replace(/\bmounts\b/gi, "")
    .replace(/\badditional attack\b/gi, "")
    .replace(/\bstun, blood & slaughter\b/gi, "")
    .replace(/\bfear\b/gi, "")
    .replace(/\btriple\b|\bquadruple\b|\bquintuple\b/gi, "")
    .replace(/\bbonus feats\b/gi, "Bonus Feat")
    .replace(/\bscholar backgrounds\b/gi, "Scholar Background")
    .replace(/^classes\s+/i, "")
    .replace(/^spell\s+/i, "")
    .replace(/^many paths, all warriors\s+/i, "")
    .replace(/^the\s+/i, "")
    .replace(/\s+/g, " ")
    .replace(/[-,]+$/g, "")
    .trim()
    .toLowerCase();
}

function findClassSection(text, label) {
  if (label === "Martial Disciple") {
    const start = text.search(/Class Features\s+All of the following are class features of the martial\s+disciple/i);
    return start === -1 ? "" : text.slice(start);
  }

  if (label === "Temptress") {
    const start = text.search(/Class Features\s+All of the following are class features of the temptress/i);
    const end = text.search(/\nThief\n/);
    return start === -1 ? "" : text.slice(start, end === -1 ? undefined : end);
  }

  const heading = new RegExp(`^(?:The\\s+)?${escapeRegex(label)}$`, "m");
  const match = text.match(heading);
  if (!match) return "";

  const start = match.index;
  const rest = text.slice(start + match[0].length);
  const next = Object.values(CLASS_LABELS)
    .filter((other) => other !== label && other !== "Martial Disciple")
    .map((other) => {
      const nextMatch = rest.match(new RegExp(`\\n(?:The\\s+)?${escapeRegex(other)}\\n`));
      return nextMatch ? start + match[0].length + nextMatch.index + 1 : -1;
    })
    .filter((index) => index > start)
    .sort((a, b) => a - b)[0];

  return text.slice(start, next ?? undefined);
}

function parseFeatureDescriptions(section) {
  const featureIndex = section.indexOf("Class Features");
  const body = featureIndex === -1 ? section : section.slice(featureIndex);
  const headingPattern = /(?:^|\n)([+A-Z][A-Za-z0-9+'?,&\/\- ]{1,90}(?:\n[A-Z][A-Za-z0-9+'?,&\/\- ]{1,50})?):\s*/g;
  const starts = [];

  for (const match of body.matchAll(headingPattern)) {
    const name = match[1].replace(/\s+/g, " ").trim();
    if (NOISE_HEADINGS.has(name)) continue;
    if (/^(Skill Points|Base Attack|Fort Save|Ref Save|Will Save|Magic Attack|Dodge Bonus|Parry Bonus)$/i.test(name)) continue;
    starts.push({
      name,
      index: match.index + (match[0].startsWith("\n") ? 1 : 0),
      bodyStart: match.index + match[0].length
    });
  }

  const entries = {};
  for (let index = 0; index < starts.length; index += 1) {
    const current = starts[index];
    const next = starts[index + 1];
    const description = normalizeDescription(body.slice(current.bodyStart, next?.index));
    if (description && description.length > 20) entries[normalizeClassFeatureName(current.name)] = htmlify(description);
  }

  return entries;
}

export function parseClassFeatureDescriptions(sourceText) {
  const text = cleanSourceText(sourceText);
  return Object.fromEntries(
    Object.entries(CLASS_LABELS).map(([classKey, label]) => [
      classKey,
      parseFeatureDescriptions(findClassSection(text, label))
    ])
  );
}

export async function loadClassFeatureDescriptions() {
  if (cachedDescriptions) return cachedDescriptions;

  try {
    const response = await fetch("systems/conan/packs/class-features-source.txt");
    cachedDescriptions = parseClassFeatureDescriptions(await response.text());
  } catch (error) {
    console.warn("Conan | Could not load class feature descriptions.", error);
    cachedDescriptions = {};
  }

  return cachedDescriptions;
}

export function getClassFeatureDescription(descriptions, classKey, featureName) {
  const key = normalizeClassFeatureName(featureName);
  if (descriptions?.[classKey]?.[key]) return descriptions[classKey][key];
  if (classKey === "scholar" && key === "scholar background" && descriptions?.scholar?.background) {
    return descriptions.scholar.background;
  }

  for (const classDescriptions of Object.values(descriptions ?? {})) {
    if (classDescriptions?.[key]) return classDescriptions[key];
  }

  return "";
}
