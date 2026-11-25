// Carrying capacity and load effects for medium bipedal characters.

const CARRYING_CAPACITY = {
  1: { light: 3, medium: 6, heavy: 10 },
  2: { light: 6, medium: 13, heavy: 20 },
  3: { light: 10, medium: 20, heavy: 30 },
  4: { light: 13, medium: 26, heavy: 40 },
  5: { light: 16, medium: 33, heavy: 50 },
  6: { light: 20, medium: 40, heavy: 60 },
  7: { light: 23, medium: 46, heavy: 70 },
  8: { light: 26, medium: 53, heavy: 80 },
  9: { light: 30, medium: 60, heavy: 90 },
  10: { light: 33, medium: 66, heavy: 100 },
  11: { light: 38, medium: 76, heavy: 115 },
  12: { light: 43, medium: 86, heavy: 130 },
  13: { light: 50, medium: 100, heavy: 150 },
  14: { light: 58, medium: 116, heavy: 175 },
  15: { light: 66, medium: 133, heavy: 200 },
  16: { light: 76, medium: 153, heavy: 230 },
  17: { light: 86, medium: 173, heavy: 260 },
  18: { light: 100, medium: 200, heavy: 300 },
  19: { light: 116, medium: 233, heavy: 350 },
  20: { light: 133, medium: 266, heavy: 400 },
  21: { light: 153, medium: 306, heavy: 460 },
  22: { light: 173, medium: 346, heavy: 520 },
  23: { light: 200, medium: 400, heavy: 600 },
  24: { light: 233, medium: 466, heavy: 700 },
  25: { light: 266, medium: 533, heavy: 800 },
  26: { light: 306, medium: 613, heavy: 920 },
  27: { light: 346, medium: 693, heavy: 1040 },
  28: { light: 400, medium: 800, heavy: 1200 },
  29: { light: 466, medium: 933, heavy: 1400 }
};

const REDUCED_SPEEDS = new Map([
  [20, 15],
  [30, 20],
  [40, 30],
  [50, 35],
  [60, 40],
  [70, 50],
  [80, 55],
  [90, 60],
  [100, 70]
]);

function capacityForStrength(strength) {
  const score = Math.max(1, Math.trunc(Number(strength) || 1));
  if (score <= 29) return CARRYING_CAPACITY[score];

  const baseScore = 20 + (score % 10);
  const multiplier = 4 ** Math.floor((score - baseScore) / 10);
  const base = CARRYING_CAPACITY[baseScore];
  return {
    light: base.light * multiplier,
    medium: base.medium * multiplier,
    heavy: base.heavy * multiplier
  };
}

function reducedSpeed(baseSpeed) {
  const speed = Math.max(0, Math.trunc(Number(baseSpeed) || 0));
  if (REDUCED_SPEEDS.has(speed)) return REDUCED_SPEEDS.get(speed);
  return Math.max(0, Math.floor(speed * 0.7 / 5) * 5);
}

export function getLoadEffect(load) {
  if (load === "Medium") return { maxDex: 3, checkPenalty: -3, runMultiplier: 4 };
  if (load === "Heavy") return { maxDex: 1, checkPenalty: -6, runMultiplier: 3 };
  if (load === "Overloaded") return { maxDex: 0, checkPenalty: -6, runMultiplier: 0 };
  return { maxDex: null, checkPenalty: 0, runMultiplier: 4 };
}

export function calculateEncumbrance({ strength, carriedWeight, baseSpeed }) {
  const capacity = capacityForStrength(strength);
  const current = Math.max(0, Number(carriedWeight) || 0);
  const load =
    current <= capacity.light ? "Light" :
      current <= capacity.medium ? "Medium" :
        current <= capacity.heavy ? "Heavy" :
          "Overloaded";
  const effect = getLoadEffect(load);
  const speed = load === "Light" ? Math.max(0, Math.trunc(Number(baseSpeed) || 0)) : reducedSpeed(baseSpeed);

  return {
    current: Number(current.toFixed(1)),
    light: capacity.light,
    medium: capacity.medium,
    heavy: capacity.heavy,
    load,
    maxDex: effect.maxDex,
    checkPenalty: effect.checkPenalty,
    speed,
    runMultiplier: effect.runMultiplier,
    liftOverhead: capacity.heavy,
    liftOffGround: capacity.heavy * 2,
    pushDrag: capacity.heavy * 5
  };
}
