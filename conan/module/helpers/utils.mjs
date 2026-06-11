// General numeric and display helpers shared by document calculations and sheets.

// Convert an ability score into the d20-style modifier used by rolls and totals.
export function abilityMod(score) {
  return Math.floor((Number(score || 0) - 10) / 2);
}

// Normalize user-entered values to numbers while protecting calculations from NaN.
export function clampNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

// Turn camelCase keys into readable fallback labels for UI or chat output.
export function titleCase(value) {
  return String(value ?? "")
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}
