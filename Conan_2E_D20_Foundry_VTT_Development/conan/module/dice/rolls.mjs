// Dice helpers used by actor document actions.

// Evaluate a roll formula and post the result to chat with the actor as speaker.
export async function rollFormula({ actor, formula, flavor }) {
  const roll = await new Roll(formula, actor?.getRollData?.() ?? {}).evaluate({ async: true });

  return roll.toMessage({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor
  });
}

// Evaluate a formula, post it, and keep the Roll object for rules that inspect dice.
export async function rollFormulaDetailed({ actor, formula, flavor }) {
  const roll = await new Roll(formula, actor?.getRollData?.() ?? {}).evaluate({ async: true });
  const message = await roll.toMessage({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor
  });

  return { roll, message };
}
