"""Game-only descriptions for the workbook's herbs, poisons, and alchemy."""

from __future__ import annotations

import re


# These summaries intentionally use the rules of the tabletop game. Source
# instructions and real-world measurements are never interpolated into them.
ALCHEMY = {
    "Basic Alchemist's Laboratory": "Required facility for Craft (alchemy). Use a −2 penalty on alchemy checks with a basic laboratory.",
    "Acheronian Black Globe": "Perception (Search) DC 20 spots the threat. After 1d4 rounds a supernatural swarm deals 1 damage in its area. After 7 in-game days, the infestation imposes a −2 morale penalty on rolls and skill checks unless a character passes Will DC 15.",
    "Acheronian Demon-Fire": "Direct hit uses a ranged touch attack against Dodge Defence. It deals 1d6 fire damage and leaves the target unconscious for 1d6 hours (Fortitude DC 25 negates the condition). The area effect deals 1 fire damage and stuns for 1d4 rounds (Reflex DC 20 negates both).",
    "Acheronian Grave Dust": "Fortitude DC 15 negates 1d6 Wisdom damage. After 1 minute in game time, a second Fortitude DC 15 negates 1d6 Intelligence damage. A character can be affected once a day.",
    "Acheronian Guardian Orb": "Perception (Search) DC 25 detects the spider. The owner loses 1 HP nightly while holding the orb. It breaks after more than 3 rounds with another bearer, more than 5 rounds apart from the owner, or 5 rounds after the owner's death. The spider becomes giant within 1 more round.",
    "Acid, mild": "The game profile deals 1 damage.",
    "Acid, powerful": "The game profile deals 1d4 damage.",
    "Acid, lethal": "The game profile deals 1d8 damage.",
    "Blue Devil's-Flame": "Display grants +2 circumstance to social checks against creatures of 4 HD or less. The burst calls for Fortitude DC 20. Failure dazes for 1 round and dazzles for 1 minute. Success dazzles for 1 round. Dazzled gives −1 on attacks and Perception checks for Search or Spot.",
    "Disease Dust": "Resolve Fortitude at the chosen campaign disease's save DC +4 and use that disease's game profile for the effect.",
    "Distillate of Black Lotus": "Fortitude DC 21 negates unconsciousness for 1d6 hours in game. The secondary effect is 1d4 Constitution damage. No separate save timing is specified.",
    "Dust of Forgetfulness": "Will DC 20 negates the loss of the previous 1d4+1 hours of in-game memory. Memories return gradually within one month.",
    "Elixir of Orkideh": "Suppresses an affected magic item. An affected sorcerer cannot spend Power Points, including on a defensive blast, for 1d4 minutes. A character carrying the elixir cannot use magic.",
    "Fire Weed Extract": "The game effect deals 1d4 temporary damage each to Intelligence, Wisdom, and Charisma per round, plus 1d2 temporary Constitution damage per in-game minute. Fortitude DC 18 halves the penalties.",
    "Fire Weed Medicine": "A fictional treatment for setting-specific fevers. The game source gives no numerical healing effect.",
    "Fiery Antidote": "Counters the fictional Fire Weed Extract effect. The game source gives no fixed recovery roll or recovery time.",
    "Flame-Powder": "The game profile deals 1d4 fire damage for 1 round.",
    "Fountain of Blood": "Treat the victim as having 10 additional HP for Ritual Sacrifice and related feats. This stacks with Bleed Dry.",
    "Globe of Yezud": "Choose a named target through a 1-round Perform (ritual) DC 15 check. Against that target the magical spider hits automatically for no bite HP damage. Apply Fortitude DC 20 and 1d10 Constitution damage under the 2E profile, with three saves at 1-round intervals.",
    "Globe of the Amber Serpent": "Releases a Tiny viper with +4 circumstance on its first attack. Without Loathsome Weapons, a failed Reflex save or critical hit causes carried globes to break.",
    "Golden Wine of Xuthal": "Restores 2d8 + twice the character's level HP. Also restores up to 1d6 + character level points per damaged or drained ability score.",
    "Hellfire Puffball": "Fortitude DC 15. Failure dazes for 1 round, then dazzles for 1 in-game minute. Success dazzles for 1 round.",
    "Kothic Demon-Fire": "Direct hit uses a ranged touch attack against Dodge Defence and deals 5d6 fire damage plus 1 round of stun (Fortitude DC 20 negates stun). The area effect deals 2d8 fire damage (Reflex DC 20 negates).",
    "Lotus Smoke, black": "The magical light applies the creator's Entrance effect, then becomes a moving area for 2d6 rounds. Black Lotus Blossom profile grants a Fortitude DC 25 save against 1d3 Strength damage and hallucinations.",
    "Lotus Smoke, green": "The magical light applies the creator's Entrance effect, then becomes a moving area for 2d6 rounds. Green Lotus Dust profile grants 1d6 Fortitude DC 24 saves at 1-round intervals, with 1d4 Constitution damage on failure.",
    "Lotus Smoke, grey": "The magical light applies the creator's Entrance effect, then becomes a moving area for 2d6 rounds. One Fortitude DC 22 save negates 2d6 Wisdom damage and Fighting-Madness against the nearest living creature.",
    "Potion of Hibernation": "Enters ageless magical sleep for up to 1,000 years plus 1,000 years per point of Wisdom bonus. Lose 1 HP per 100 in-game years. Will DC 20 sets a waking condition. On failure, waking is up to the GM.",
    "Potion of Strength": "+6 enhancement to Strength. Once its elapsed rounds exceed the drinker's Constitution score, the drinker takes 2d6 damage each round until the effect ends.",
    "Radium Gem": "A magical light that can toggle once per round as a free action. For characters below Corruption 1, prolonged exposure in the game prompts Corruption DC 15 or gain 1 Corruption.",
    "Rope of Dead Women's Hair": "A compact alchemical rope that fits in a belt pouch. It has high carrying capacity and low encumbrance in game.",
    "Smoke Powder": "Provides concealment. In the hazard, make a Fortitude save each round starting at DC 15 with +1 to the DC per prior check. Failure costs the round and can cause 1d6 nonlethal damage.",
    "Stygian Tomb-Dust": "Reflex save against the user's magic attack roll. Failure blinds the target for 2d6 rounds.",
    "Stygian Wind Venom": "Applies blindness for 1d4 rounds. Failure on the Fortitude DC 15 save gives −2 against Hypnotism and Necromancy saves for 24 in-game hours and −1 against Terror and Corruption saves.",
    "Ta Neheh Leaf Elixir": "The living age-reversal effect restores age 16 in the game. Extreme addiction calls for Fortitude DC 25. The unsated game effect is 1d8 Dexterity, 1d8 Wisdom, 1d6 Constitution, and 1d6 Strength damage on a failed check. The necromantic effects can preserve a body at −9 HP or animate the risen dead.",
    "Advanced Alchemist's Laboratory": "Use the ordinary Craft (alchemy) modifier with this facility.",
    "Masterwork Alchemist's Laboratory": "Grants +2 on Craft (alchemy) checks. Use the modifier for this laboratory quality on its own.",
    "Quicklime, monthly siege usage": "Siege hazard profile deals 1d6 damage. The later game checks are Fortitude DC 25 and DC 30, with blindness among the listed conditions.",
    "Violet Cureall": "Restores 1d4 + half the character's level (rounded down) HP, at 1 HP per round. A character can benefit once per in-game day.",
    "Space Mead": "Protects a character from the cold vacuum of space in the setting. The source gives no duration.",
    "Hashish of Paradise": "For 1 in-game hour, grants +4 morale to saving throws and immunity to fear, with −2 enhancement on Intelligence- and Wisdom-based skill checks.",
    "Thunderclap Powder": "Provides full cover within the cloud and +4 circumstance on Stealth (Hide or Move Silently) for 2 rounds. Apply any shock effect at the GM's discretion.",
    "Argossean Dream Dust": "Maintenance costs 1 PP per in-game minute with Visions and 0 PP with Visions of Torment and Enlightenment. When the spell ends, the vision wanders and the sorcerer stays helpless for 24 in-game hours.",
    "Dancer's Wine": "On a failed Fortitude DC 15 save, apply −1 Defence Value and +1 to the Constitution score for 1d4 in-game hours.",
    "Vendhya Chew": "The source contains a table entry without a playable effect description.",
}


HERBS = {
    "Acacia": "Herbalism DC 30 restores 1d4 HP.",
    "Adder's Tongue": "Herbalism DC 24 ends the game's viper-poison condition when the source's full moon condition applies.",
    "Agaric (Death Angel)": "Herbalism DC 20 grants +2 saves against cackle fever. DC 22 grants +1 to magic attacks for curses.",
    "Agrimony": "Herbalism DC 24 grants +4 saves against the game's viper-poison condition. DC 30 causes magical sleep for 1d3 in-game days. Only damage wakes the character before the effect ends. The Fortitude DC equals the herbalist's magic attack bonus.",
    "Angelica": "Herbalism DC 26 removes the in-game filth fever condition. DC 28 grants +4 on disease saves or +2 on injury-poison saves. DC 30 grants 1d3 temporary HP.",
    "Anise": "Herbalism DC 20 grants +2 on disease saves. DC 24 grants +2 herbal on saves against Hypnotism sorcery.",
    "Asafoetida (Devil's Dung)": "Herbalism DC 26 removes the game's mindfire condition. DC 28 grants +1 on Intelligence checks for 2 in-game minutes.",
    "Avens (Star of the Earth)": "Herbalism DC 24 grants +2 saves against slimy doom. DC 28 grants a new save against an effect that deals Strength damage.",
    "Belladonna (Deadly Nightshade)": "Herbalism DC 26 produces the Fortitude DC 18 game profile with 1d4 Constitution damage on each failed save. DC 30 counters lycanthropy and also applies the poison profile. DC 34 gives +4 sorcery saves for 4 rounds.",
    "Boneset": "Herbalism DC 20 counters the in-game disease or grants +2 on a new save against red ache. DC 24 grants +2 on a new save against the game's yellow fever condition.",
    "Broom (Besom)": "Herbalism DC 24 restores 1d3 Dexterity damage.",
    "Celandine (Devil's Milk)": "Herbalism DC 20 removes the in-game filth fever condition. DC 24 gives +2 herbal on saves against slimy doom. DC 25 grants a new save against blindness.",
    "Cloves": "Herbalism DC 22 improves an NPC's reaction by one step for 1 minute. DC 28 gives +1 saves against curse spells.",
    "Comfrey Root": "Herbalism DC 20 grants +2 saves against red ache. DC 24 restores 1d4 HP.",
    "Deathstalk": "Herbalism DC 20 makes a corpse speak its final thought once.",
    "Figwort": "Herbalism DC 25 grants +2 to saves against the contact-poison game rules. DC 28 restores 1d2 Dexterity damage.",
    "Hemlock (Warlock Weed)": "Herbalism DC 24 produces the Fortitude DC 16 game profile with 2d12 HP damage and secondary 2d6 Constitution damage. DC 40 produces a Black Lotus Blossom-like effect.",
    "Holly (Bat's Wings)": "Herbalism DC 24 gives +1 saves against curses for 1 in-game day. DC 30 gives +1 luck on one roll.",
    "Horehound": "Herbalism DC 24 gives +2 on poison saves. DC 32 grants one reroll against fear or Terror.",
    "Ignis Weed": "Herbalism DC 28 applies Fighting-Madness for 2 rounds.",
    "Larkspur": "Herbalism DC 16 removes the in-game parasite effect. DC 18 grants +2 herbal on saves against filth fever.",
    "Mandrake (Sorcerer's Root)": "Herbalism DC 30 increases Intelligence by 1d4+1 for 1 in-game hour. DC 32 grants Greater Sorcerous News for 10 minutes. DC 34 grants +2 luck on magic attacks for 1 minute.",
    "Mistletoe": "Herbalism DC 18 grants +2 saves against the shakes in game.",
    "Mullein (Graveyard Dust)": "Herbalism DC 20 reduces other herbalism DCs by 2. DC 24 wards animals away for 2 in-game hours. DC 26 grants +2 herbal on saves against fear and Terror.",
    "Scullcap (Madweed)": "Herbalism DC 26 ends Fighting-Madness or Crimson Mist. DC 28 grants +4 saves against mindfire.",
    "Witch Hazel": "Herbalism DC 22 restores 1 HP. DC 24 stabilizes a dying creature in game. DC 26 gives +2 on the inhaled-poison save profile. DC 28 gives a Wisdom herbal bonus for 1 in-game hour, with the amount unspecified.",
    "Wolfsbane": "Herbalism DC 20 grants +2 damage against wolves and wolf-like creatures. DC 25 wards against lycanthropes and DC 30 wards against vampires.",
    "Black Draught (Laudanum)": "Fortitude DC 23 negates the tabletop sleep condition for 1d8 in-game hours. Low addiction, Fortitude DC 6.",
    "Love Potion": "Compels romantic attachment. Will DC is 10 + half the chosen person's level + that person's Charisma bonus. Repeat the save each week in game.",
    "Narcinthe": "Grants a divination benefit. In the sorcerer addiction rules, a failed daily Fortitude DC 10 save while unsated deals 1d4 Dexterity and 1d4 Wisdom damage.",
    "Opium": "The campaign profile uses a Fortitude DC 25 save and the Extreme addiction rating.",
    "Potion of Madness": "Fortitude DC 23. On failure, take 1d6 Wisdom plus 1d6 Intelligence damage and hallucinate. Make 3 saves at 1-minute game intervals, with increased dice on later failures.",
    "Sleeping Draught": "Fortitude DC 17. Failure causes unconsciousness for 1d3 in-game hours. Make four saves total, repeating after each period of sleep.",
    "Black Lotus Blossom": "Fortitude DC 25 resists 1d3 Strength damage and hallucinations. The game profile also describes 1d3 hours of dream-filled sleep. Repeat saves until failure or until the effect ends.",
    "Black Lotus Juice": "Fortitude DC 22. Failure deals 1d6 Strength and 1d4 Constitution damage. Make four saves at 1-round intervals, with larger dice after later failures.",
    "Black Lotus Powder": "Below 0 PP, restore Base PP after 4d6 hours helpless. At 0 PP or above, recover 1 PP per hour up to Maximum PP and take −4 Perception for Listen or Spot during the 4d6-hour effect. Medium addiction, Fortitude DC 10.",
    "Black Lotus Wine": "The tabletop profile includes hallucinations and dulled senses. The source supplies no distinct save DC.",
    "Emerald Lotus": "Doubles current PP and doubles the Charisma bonus to magic attacks for 1d2 in-game hours. Fortitude DC 22 resists 1d2 Constitution damage and hallucinations. Addiction uses Fortitude and Will DC 25.",
    "Golden Lotus Juice": "Ends the game's herbal and alchemical effects and restores 1d6 ability damage.",
    "Green Lotus Dust (blossom)": "Fortitude DC 24. Failure deals 1d4 Constitution damage. Make 1d6 saves at 1-round intervals, using larger dice after later failures.",
    "Grey Lotus Dust (blossom)": "One Fortitude DC 22 save negates 2d6 Wisdom damage and Fighting-Madness against the nearest living creature.",
    "Purple Lotus Juice": "Fortitude DC 28. Failure deals 1d6 Dexterity damage and applies paralysis. Make 1d6 saves at 1-round intervals. The Core default paralysis lasts 2d6 in-game minutes.",
    "Purple Lotus Wine": "Fortitude DC 28. Failure deals 1d6 Dexterity damage and applies paralysis. Make 1d6 saves at 1-round intervals. The Core default paralysis lasts 2d6 in-game minutes.",
    "Red Lotus Blossoms": "One Will DC 25 save resists the entranced condition. The source restricts available actions while entranced.",
    "Red Lotus Residue": "One Fortitude DC 20 save resists the entranced condition. The source restricts available actions while entranced.",
    "Silver Lotus": "Counters the setting's dream-plague effect. Will DC 20 resists the sleeping draught version.",
    "White Lotus Powder": "One Fortitude DC 27 save negates 3d6 Dexterity damage, paralysis, and blindness. The game's conditions last 1d4+2 hours.",
    "White Lotus Pollen": "Instantly cancels the game's black lotus effects.",
    "Yellow Lotus Resin": "+2 circumstance on Knowledge (arcana) for Divination. Counts as resting for PP recovery for 2d4 in-game hours. Applies −2 Perception for Listen and Spot during the effect and for 1d6 hours afterward.",
    "Mixed Lotus": "The game's profile uses Fortitude DC 25 and the Extreme addiction rating. The source describes a euphoric roleplay effect.",
    "Woundwort": "Successful in-game short-term care restores 1d4 additional HP.",
    "Apple of Derketa Juice": "The three in-game profiles use save DCs 20, 22, and 22 and deal 1d3, 1d4, and 1d6 Constitution damage respectively. Each uses a four-save sequence.",
    "Black Stygian Scorpion Venom": "DC 23 saves in game. Failure deals 1d6 Constitution and 1d6 Dexterity damage. Make four saves at 1-round intervals.",
    "Great Serpent Venom": "DC 21 saves in game. Failure deals 1d2 Constitution damage. The game profile calls for ten saves.",
    "Mandrake Root, magical-link preparation": "+2 save DC for spells that use a magical link. The magical scream deals 2d6 damage to animals and sorcerers who fail Will DC 15.",
    "Purgative Potion": "Fortitude DC 15. The game's nauseated condition lasts 3d20 minutes on failure or 1d6 minutes on success. Grants +8 circumstance against the relevant poison save profile.",
    "Yellow Lotus Blossom": "Fortitude DC 21. Failure causes unconsciousness for 1d6 in-game hours and 1d4 Constitution damage. Make four saves, one after each sleep period.",
    "Sleeping Draught, soldier's packet": "Fortitude DC 10, with voluntary failure allowed. Failure permits a full night's rest despite troubles. Waking before 8 game hours requires Fortitude DC 15.",
    "Dandelion": "Herbalism DC 24 grants low-light vision. DC 32 gives +10% to Divination spells that already have a percentage chance of success.",
    "Elderberry (Tree of Doom)": "Herbalism DC 26 counters the in-game shakes condition. DC 28 removes an in-game poison effect.",
    "Hawthorn (Hagthorn)": "Herbalism DC 24 ends the game's intoxication effect.",
}


SAVE_DC = re.compile(r"Fort(?:itude)?\s+DC\s+(\d+(?:\s*/\s*\d+)*)", re.I)
ABILITY_DAMAGE = re.compile(r"\b(\d+d\d+)\s+(Str|Dex|Con|Int|Wis|Cha)\b", re.I)
ABILITIES = {
    "str": "Strength", "dex": "Dexterity", "con": "Constitution",
    "int": "Intelligence", "wis": "Wisdom", "cha": "Charisma",
}


def _natural_poison_stats(fields: dict[str, str]) -> dict[str, str]:
    """Extract d20 values without copying agent details or exposure routes."""
    game_stats = {}
    save = SAVE_DC.fullmatch(fields.get("Save DC", "").strip())
    if save:
        game_stats["Game save"] = f"Fortitude DC {save[1]}"
    for source_label, game_label in (
        ("Initial Effect", "Initial ability damage"),
        ("Later Effects / Save Schedule", "Later ability damage"),
    ):
        dice = ABILITY_DAMAGE.findall(fields.get(source_label, ""))
        if dice:
            game_stats[game_label] = ", ".join(
                f"{roll.lower()} {ABILITIES[ability.lower()]}" for roll, ability in dice
            )
    return game_stats


def game_effects(sheet: str, fields: dict[str, str]) -> dict[str, str]:
    """Return ordered, game-only fields based on the workbook's item profile."""
    if sheet == "Alchemical Items":
        name = fields.get("Item", "")
        catalog = ALCHEMY
    elif sheet == "Herbs & Poisons":
        if fields.get("Kind", "").strip() == "Natural Poison":
            return _natural_poison_stats(fields)
        name = fields.get("Name", "")
        catalog = HERBS
    else:
        return {}

    name = " ".join(name.replace("’", "'").split())
    summary = catalog.get(name)
    return {"Game effect": summary} if summary else {}
