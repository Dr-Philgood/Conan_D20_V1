// Reference data for advancement, class choices, and the homebrew setting.

export const CONAN_MASTER_BOOKS = {
  "CR": "Conan 2e: Core Rulebook",
  "Fine": "Conan 1e: Hyboria's Finest",
  "Fierce": "Conan 1e: Hyboria's Fiercest",
  "Fall": "Conan 1e: Hyboria's Fallen",
  "WC": "Conan 2e: Warrior's Companion",
  "SoS": "Conan 2e: Secrets of Skelos",
  "PGHA": "Conan 2e: Players Guide to the Hyborian Age",
  "AFW": "Conan 1e: Aqualonia Flower of the West",
  "ATR": "Conan 1e: Across the Thunder River",
  "TFC": "Conan 1e: The Free Companies",
  "PI": "Conan 1e: Pirate Isles",
  "SGS": "Conan 1e: Shem Gateway to the South",
  "RRK": "Conan 2e: Return to the Road of Kings",
  "MCR": "Conan 1e: Messantia - City of Riches, Book II: Secrets of the Streets (Book II)",
  "AZ": "Conan 1e: Argos and Zingara",
  "SSS": "Conan1e: Stygia - Serpent of the South",
  "TTT": "Conan 1e: Tito's Trading Post",
  "HBC": "Homebrew Content",
  "FF": "Conan 1e: Faith and Fervour"
};

export const CONAN_LEVEL_PROGRESSION = [
  {
    "level": 1,
    "xp": 0,
    "maxSkillRanks": 4,
    "generalFeats": 1,
    "featGained": true,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": "Starting character"
  },
  {
    "level": 2,
    "xp": 1000,
    "maxSkillRanks": 5,
    "generalFeats": 1,
    "featGained": false,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 3,
    "xp": 3000,
    "maxSkillRanks": 6,
    "generalFeats": 2,
    "featGained": true,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 4,
    "xp": 6000,
    "maxSkillRanks": 7,
    "generalFeats": 2,
    "featGained": false,
    "singleAbilityIncrease": true,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 5,
    "xp": 10000,
    "maxSkillRanks": 8,
    "generalFeats": 2,
    "featGained": false,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 6,
    "xp": 15000,
    "maxSkillRanks": 9,
    "generalFeats": 3,
    "featGained": true,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": true,
    "notes": ""
  },
  {
    "level": 7,
    "xp": 21000,
    "maxSkillRanks": 10,
    "generalFeats": 3,
    "featGained": false,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 8,
    "xp": 28000,
    "maxSkillRanks": 11,
    "generalFeats": 3,
    "featGained": false,
    "singleAbilityIncrease": true,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 9,
    "xp": 36000,
    "maxSkillRanks": 12,
    "generalFeats": 4,
    "featGained": true,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 10,
    "xp": 45000,
    "maxSkillRanks": 13,
    "generalFeats": 4,
    "featGained": false,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": true,
    "notes": ""
  },
  {
    "level": 11,
    "xp": 55000,
    "maxSkillRanks": 14,
    "generalFeats": 4,
    "featGained": false,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": "Hit points use the fixed class-based award from this level onward"
  },
  {
    "level": 12,
    "xp": 66000,
    "maxSkillRanks": 15,
    "generalFeats": 5,
    "featGained": true,
    "singleAbilityIncrease": true,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 13,
    "xp": 78000,
    "maxSkillRanks": 16,
    "generalFeats": 5,
    "featGained": false,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 14,
    "xp": 91000,
    "maxSkillRanks": 17,
    "generalFeats": 5,
    "featGained": false,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": true,
    "notes": ""
  },
  {
    "level": 15,
    "xp": 105000,
    "maxSkillRanks": 18,
    "generalFeats": 6,
    "featGained": true,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 16,
    "xp": 120000,
    "maxSkillRanks": 19,
    "generalFeats": 6,
    "featGained": false,
    "singleAbilityIncrease": true,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 17,
    "xp": 136000,
    "maxSkillRanks": 20,
    "generalFeats": 6,
    "featGained": false,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 18,
    "xp": 153000,
    "maxSkillRanks": 21,
    "generalFeats": 7,
    "featGained": true,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": true,
    "notes": ""
  },
  {
    "level": 19,
    "xp": 171000,
    "maxSkillRanks": 22,
    "generalFeats": 7,
    "featGained": false,
    "singleAbilityIncrease": false,
    "allAbilityIncrease": false,
    "notes": ""
  },
  {
    "level": 20,
    "xp": 190000,
    "maxSkillRanks": 23,
    "generalFeats": 7,
    "featGained": false,
    "singleAbilityIncrease": true,
    "allAbilityIncrease": false,
    "notes": ""
  }
];

export const CONAN_ORIGINS = [
  {
    "name": "Caldrayni",
    "group": "The Eld Varendi",
    "traits": [
      "Feudal Court Training: +2 racial bonus to all Diplomacy, Knowledge (nobility)and Sense Motive checks. Caldrayni life is shaped by oaths, estates, noble courts, marriage alliances and the constant weighing of honour against advantage. Even common-born Caldrayni learn the manners of lords, knights and landholders, for a careless word before the wrong banner can ruin a family.",
      "Oath and Banner: +1 morale bonus to Will saving throws against fear, intimidation and demoralization effects. Caldrayni are raised beneath banners, household crests and sworn obligations. Whether noble-born or peasant levy, they are taught that shame before one's lord, family or companions is worse than pain.",
      "Estate-Born: +2 racial bonus to all Handle Animal and Survival checks made in settled farmland, noble estates, hunting preserves or rural heartland terrain. Caldrayne is a land of manors, fields, horse farms, vineyards, hunting woods and tenant villages. Its people grow up around livestock, estate boundaries, harvest roads and the rhythms of noble landholding."
    ],
    "skills": "Diplomacy, Knowledge (local), Knowledge (nobility), Ride",
    "featOptions": "- Noble Blood\n- Negotiator\n- Paragon of Loyalty\n- Skill Focus (Knowledge (nobility))\n- Animal Affinity",
    "favoredClasses": [
      "Noble",
      "Soldier"
    ],
    "restrictedClasses": [
      "Nomad"
    ],
    "primaryLanguage": "Caldrayni",
    "secondaryLanguages": [
      "Corvayni",
      "Morathi",
      "Mournessi",
      "Thalmyri",
      "Vhaldruni",
      "Tharuuni",
      "Orvesski",
      "Narukan"
    ],
    "masterId": "origins-1"
  },
  {
    "name": "Corvayni",
    "group": "The Eld Varendi",
    "traits": [
      "Corvayni Sea Training: +2 racial bonus to all Diplomacy, Profession (sailor), Swim and Use Rope checks: The arts of ferreting out information about trading opportunities and taking by piracy whatever opportunities they cannot take by trade have been in the Corvayni blood on almost equal measure for generations.",
      "Sword Training:+1 racial bonus to all attack rolls made with the broadsword and arming sword: The Corvayni are among the most expert swordsmen of the known world. They employ a highly developed and scientific approach to the study of swordsmanship.",
      "Martial Weapon Proficiency: Arming Sword: Corvayne League swordsmanship is taught in both formal fencing schools and the back streets of every city, which are no less strict; though many Corvayni learn to wield only the civilian arming sword rather than the more military broadsword."
    ],
    "skills": "Diplomacy, Knowledge (local), Profession (sailor), Swim",
    "featOptions": "- Sea Legs\n- Athletic\n- Negotiator\n- Skill Focus (Profession (sailor))\n- Weapon Focus (arming sword)",
    "favoredClasses": [
      "Thief",
      "Pirate"
    ],
    "restrictedClasses": [
      "Barbarian"
    ],
    "primaryLanguage": "Corvayni",
    "secondaryLanguages": [
      "Caldrayni",
      "Morathi",
      "Mournessi",
      "Thalmyri",
      "Vossaki"
    ],
    "masterId": "origins-2"
  },
  {
    "name": "Mournessi",
    "group": "The Eld Varendi",
    "traits": [
      "Stone-Law Education: +2 racial bonus to all Decipher Script, Knowledge (history), Knowledge (local) and Sense Motive checks. Mournesse is a land of archives, court records, magistrates, old treaties, ancestral grievances and written judgments. Its people are taught that memory is power and that law, once recorded, can be sharper than steel.",
      "Veiled Courtesy: +2 racial bonus to Diplomacy checks made in formal, legal, noble or bureaucratic situations, but -2 penalty to Diplomacy checks with barbarians, nomads, pirates or others who disdain courtly indirection. Mournessi speech is precise, layered and cautious; among civilized courts this is admired, but among rougher peoples it often sounds evasive, arrogant or cold.",
      "Codified Memory: A Mournessi character may make Knowledge (history), Knowledge (nobility), and Decipher Script checks untrained. In addition, once per game session, the character may reroll one failed check with one of those skills, but must accept the second result. Mournessi are raised among records, petitions, family claims, border disputes, and ancestral scandals. Even commoners absorb fragments of law and history that would be formal scholarship elsewhere."
    ],
    "skills": "Decipher Script, Knowledge (history), Knowledge (local) and Sense Motive",
    "featOptions": "- Great Library\n- Diligent\n- Investigator\n- Knowledgeable\n- Skill Focus (Knowledge (history))",
    "favoredClasses": [
      "Noble",
      "Scholar"
    ],
    "restrictedClasses": [
      "Barbarian"
    ],
    "primaryLanguage": "Mournessi",
    "secondaryLanguages": [
      "Caldrayni",
      "Morathi",
      "Corvayni",
      "Thalmyri",
      "Vhaldruni",
      "Skarnholli",
      "Vossaki"
    ],
    "masterId": "origins-3"
  },
  {
    "name": "Thalmyri",
    "group": "The Eld Varendi",
    "traits": [
      "Pike Formation: +1 racial bonus to attack with the Pike & Gunderland Pike: Thalmyr's strength does not lie in reckless charges or individual sword-glory, but in ranks of disciplined pikemen holding road, gate, bridge and pass against enemies who would break lesser men. From the narrow streets of Passwatch to the wind-cut approaches of the Great Pass, Thalmyri soldiers are drilled to fight shoulder to shoulder, presenting a wall of spearpoints that cavalry, raiders and hill-warriors learn to fear. A lone Thalmyri with a pike may be only one man; a dozen together are a moving fortress.",
      "Martial Weapon Proficiency: Pike:In Thalmyr, the pike is more than a soldier's weapon. It is a civic duty. Town militias, caravan guards, toll-house wardens, road levies and fortress servants all receive some instruction in its use. A merchant's son may never campaign beyond the gate, and a scribe may never stand in the shield-line, but both know how to take a place in formation when the alarm bells sound. The Great Pass has survived because every Thalmyri understands that walls fail when the people behind them cannot hold a line.",
      "Iron Will: +1 morale bonus to all Will saving throws: Thalmyri are counted among the most reliable soldiers in Varinthia, not because they are fearless, but because they have been raised to master fear. Their homeland is a place of avalanches, siege roads, ambushes, toll disputes, desperate caravans and foreign armies testing the pass. A Thalmyri learns early that panic kills more surely than steel. Whether facing raiders in a mountain storm, sorcery in a ruined watchtower, or the slow terror of an army marching toward the gates, the people of Thalmyr are taught to stand, breathe, and obey the signal. Their courage is not flamboyant. It is grim, practical and difficult to break."
    ],
    "skills": "Craft (weaponsmith) or Knowledge (military tactics), Knowledge (local) and any two other skills chosen by the player.",
    "featOptions": "- Combat Reflexes\n- Endurance\n- Iron Will\n- Shield Proficiency\n- Weapon Focus (pike)",
    "favoredClasses": [
      "Soldier",
      "Borderer"
    ],
    "restrictedClasses": [
      "Pirate"
    ],
    "primaryLanguage": "Thalmyri",
    "secondaryLanguages": [
      "Caldrayni",
      "Morathi",
      "Corvayni",
      "Mournessi",
      "Aram Vossi",
      "Vossaki"
    ],
    "masterId": "origins-4"
  },
  {
    "name": "Vel Morathi",
    "group": "The Eld Varendi",
    "traits": [
      "Sea Legs: +2 racial bonus to all Profession (sailor), Acrobatics and Use Rope checks: The Morathi do a fair amount of trading on the sea but indulge in even more raiding. Morathi buccaneers are almost as feared as the pirates of the Isles of Veyr.",
      "Knife in the Dark: All Morathi begin play with a +1d6 sneak attack. This is treated exactly like the thief class feature of the same name (see page 73). It stacks with the sneak attack class feature from the thief class or from any other class that grants it.",
      "Paranoid:+2 racial bonus to all Sense Motive checks but a -2 racial penalty to all Diplomacy checks: The Morathi are naturally wary of others' motives and assume the worst about their own countrymen and foreigners alike. This suspicious nature can be useful at times but tends to cause negotiation to break down into mutual paranoia and hatred, making the Morathi poor diplomats."
    ],
    "skills": "Profession (Sailor), Bluff, Acrobatics Use Rope",
    "featOptions": "- Animal Magnetism\n- Deceitful\n- Improved Initiative\n- Sea Legs\n- Stealthy",
    "favoredClasses": [
      "Noble",
      "Temptress"
    ],
    "restrictedClasses": [
      "Barbarian"
    ],
    "primaryLanguage": "Morathi",
    "secondaryLanguages": [
      "Caldrayni",
      "Thalmyri",
      "Corvayni",
      "Mournessi",
      "Aram Vossi",
      "Narukan"
    ],
    "masterId": "origins-5"
  },
  {
    "name": "Skarnholli",
    "group": "The Rhimeborn",
    "traits": [
      "Glacier-Born Endurance: +2 racial bonus to all Fortitude saves against cold exposure, fatigue, exhaustion, starvation, and forced marches. Skarnholli children are raised in mountain keeps, ice valleys, thin air, and long winters where weakness is not pitied. Their bodies are trained by cold halls, poor harvests, steep roads, and the expectation that a noble face must never show suffering.",
      "Death-House Rites: +2 racial bonus to all Knowledge (religion), Perform (ritual), Heal, and Intimidate checks. Skarnholli culture is steeped in death temples and ancestral obligation. Even commoners know the proper words over a corpse, the signs of a cursed bloodline, and the difference between grief, omen, and warning.",
      "Pale Court Reserve: +1 morale bonus to all Will saving throws against fear, intimidation, terror, and Corruption. Skarnholli are trained to master the face, still the breath, and bury panic beneath ritual composure. They are not fearless because they lack imagination; they are fearless because fear is considered a private matter between the living and their dead."
    ],
    "skills": "Knowledge (religion), Perform (ritual), Intimidate, Survival",
    "featOptions": "- Endurance\n- Great Fortitude\n- Iron Will\n- Religiously Driven\n- Skill Focus (Knowledge (religion))",
    "favoredClasses": [
      "Noble",
      "Scholar"
    ],
    "restrictedClasses": [
      "Pirate"
    ],
    "primaryLanguage": "Skarnholli",
    "secondaryLanguages": [
      "Vhaldruni",
      "Mournessi",
      "Vossaki",
      "Hyr Veshi"
    ],
    "masterId": "origins-6"
  },
  {
    "name": "Vhaldrunni",
    "group": "The Rhimeborn",
    "traits": [
      "Cold Naturalists: +2 racial bonus to all Stealth, Perception and Survival checks made in any cold land: The Vhaldrunni are not such expert outdoorsmen as the Drovic, concerning themselves with valour more than with woodcraft.",
      "Vhaldrunni War Training: +2 racial bonus to damage rolls with Warswords, Broadswords, Axes, War Spears ; The Vhaldrunni favor heavy blows and though their technique is perhaps unsophisticated, they have a great deal of practice at delivering hard blows.",
      "Weapon Familiarity: Vhaldrunni can wield war swords as though they were martial weapons rather than exotic weapons."
    ],
    "skills": "Climb, Knowledge (local), Intimidate, Survival",
    "featOptions": "- Athletic\n- Endurance\n- Great Fortitude\n- Power Attack\n- Weapon Focus (war sword)",
    "favoredClasses": [
      "Barbarian",
      "Borderer"
    ],
    "restrictedClasses": [
      "Noble"
    ],
    "primaryLanguage": "Vhaldrunni",
    "secondaryLanguages": [
      "Tharuuni",
      "Caldraynni",
      "Orvesski",
      "Skarnholli"
    ],
    "masterId": "origins-7"
  },
  {
    "name": "Aram Vossi",
    "group": "The Vossaric",
    "traits": [
      "Hill-March Hardened: +2 racial bonus to all Climb, Survival, and Perception checks.The Aram Vossi are raised among goat tracks, ruined towers, sheep paths, ambush ridges, and poor soil. They may not be elegant woodsmen, but they know how to move, hide, watch, and endure in rough border country.",
      "Armed Hospitality: +2 racial bonus to all Sense Motive and Diplomacy checks involving guest-right, ransom, blood-price, feuds, surrender terms, hostage exchange, or armed negotiation. Aram Vossi custom treats hospitality as sacred but never naive. A guest is protected until the fire dies, a prisoner has a price, and a feud can be settled if both sides still have enough kin left to bargain.",
      "Free Company Blood: Once per day, an Aram Vossi character may reroll a failed Fortitude save against fatigue, exhaustion, forced marches, hunger, thirst, or exposure, but must accept the second result. Aram Vos produces caravan guards, mercenaries, hill scouts, and hard-bitten retainers who are used to bad roads, short rations, cold camps, and fighting for coin far from home."
    ],
    "skills": "Climb, Knowledge (local), Sense Motive, Survival",
    "featOptions": "- Athletic\n- Endurance\n- Negotiator\n- Paragon of Loyalty\n- Track",
    "favoredClasses": [
      "Borderer",
      "Soldier"
    ],
    "restrictedClasses": [
      "Noble",
      "Pirate"
    ],
    "primaryLanguage": "Aram Vossi",
    "secondaryLanguages": [
      "Vel Morathi",
      "Narukan",
      "Xhombari",
      "Thalmyri",
      "Uldaran",
      "Vossaki"
    ],
    "masterId": "origins-8"
  },
  {
    "name": "Orvesski",
    "group": "The Vossaric",
    "traits": [
      "Ironwood Road-Wise: +2 racial bonus to all Knowledge (local), Perception, and Survival checks. Orvesski grow up around muddy roads, hidden paths, false tolls, poacher tracks, abandoned keeps, and travelers who are rarely what they claim to be.",
      "Suspicious by Blood: +2 racial bonus to all Sense Motive checks, but -2 racial penalty to Diplomacy checks made with nobles, magistrates, royal officers, or other representatives of formal authority. Orvesski suspicion keeps them alive, but it also makes them poor subjects. They assume every tax collector is a thief, every lord is a liar, and every written warrant is just a knife with better manners.",
      "False Name Custom: +2 racial bonus to all Bluff, Disguise, and Forgery checks made to conceal identity, pass as a traveler, invent credentials, avoid legal attention, smuggle goods, or mislead toll collectors, soldiers, magistrates, bounty hunters, and tax men. Orvesski grow up in a land of exiles, wanted men, forged charters, stolen seals, false toll rights, outlaw houses, and families who survive by remembering which name to use on which side of the road."
    ],
    "skills": "Bluff, Knowledge (local), Sense Motive, Survival",
    "featOptions": "- Alertness\n- Deceitful\n- Investigator\n- Stealthy\n- Street-Smart",
    "favoredClasses": [
      "Borderer",
      "Thief"
    ],
    "restrictedClasses": [
      "Noble",
      "Scholar"
    ],
    "primaryLanguage": "Orvesski",
    "secondaryLanguages": [
      "Narukan",
      "Muzatuli",
      "Tharuuni",
      "Caldrayni",
      "Vhaldruni"
    ],
    "masterId": "origins-9"
  },
  {
    "name": "Narukan Wilder",
    "group": "The Drovic",
    "traits": [
      "Deepwood Stalkers: +2 racial bonus to all Stealth, Perception, and Survival checks made in forests, jungles, thornlands, or other heavily wooded terrain. The Narukan are born into a world of hidden trails, animal signs, false paths, hanging moss, root-hollows, and silent watchers. Even those who leave the Wilds never fully lose the habit of moving as though every branch might betray them.",
      "Poison-Wise: +2 racial bonus to all Craft (alchemy), Heal, and Survival checks involving poisons, venoms, toxic plants, medicinal roots, antidotes, or identifying dangerous flora and fauna. Narukan clans know which berries bring sleep, which moss draws infection, which sap blinds, and which root can pull venom from the blood. This knowledge is treated as practical survival, not sorcery.",
      "Unarmoured Defence: +1 dodge bonus to Dodge Defence when unarmoured: The Southern Islanders usually do not wear armour and so have had to become expert at avoiding blows."
    ],
    "skills": "Stealth, Survival, Heal, Knowledge (local)",
    "featOptions": "- Alertness\n- Self-Sufficient\n- Skill Focus (Survival)\n- Stealthy\n- Track",
    "favoredClasses": [
      "Borderer",
      "Thief"
    ],
    "restrictedClasses": [
      "Noble"
    ],
    "primaryLanguage": "Narukan",
    "secondaryLanguages": [
      "Xhombari",
      "Aram Vossi",
      "Vel Morathi",
      "Muzatuli",
      "Orevesski",
      "Caldrayni"
    ],
    "masterId": "origins-10"
  },
  {
    "name": "Tharunni",
    "group": "The Drovic",
    "traits": [
      "Nimble: +2 racial bonus to all Acrobatics checks.The Tharuuni are raised beneath tangled boughs, on rain-slick stones, among fallen trunks, cliff roots, mossy ravines and storm-bent hillsides. A child who cannot leap a creek, climb a wet tree, balance on a narrow branch or scramble over broken ground quickly becomes a burden. Tharuuni warriors fight with the same restless agility, ducking under spears, vaulting roots, bounding over rocks and moving through difficult forest terrain with the ease of men born to it.",
      "Hunter: +2 circumstance bonus to attack and damage rolls made when attacking a creature of the Animal type. If using a ranged weapon, a Tharuuni only gains the damage bonus if his prey is within one range increment of the weapon.The Tharuuni live closer to the hunt than almost any settled people of Varinthia. They do not merely hunt for sport, nor as a noble pastime, but as a matter of survival, status and sacred custom. Deer, boar, wolf, bear, elk, great cats and stranger forest beasts are known by track, scent, cry, mating season and kill sign. A Tharuuni hunter learns where to place the spear, when to loose the arrow, how to drive a beast toward waiting kin, and when a wounded animal is most dangerous. To kill cleanly is skill. To waste the kill is shame.",
      "Survivalists: +2 circumstance bonus to all Stealth, Perception and Survival checks made in forests. The deep woods are not wilderness to the Tharuuni; they are home, road, larder, shrine and battlefield. Tharuuni clans know which moss hides stone, which birdcall means an intruder, which trees mark old paths, and which quiet places should not be entered after dusk. Outsiders see only green shadow and tangled branches, but a Tharuuni reads the forest like a warrior reads an enemy's stance. When they choose not to be found, even experienced trackers may pass within arm's reach and see nothing but leaves."
    ],
    "skills": "Acrobatics, Knowledge (Nature), Survival, Stealth",
    "featOptions": "- Acrobatic\n- Alertness\n- Self-Sufficient\n- Stealthy\n- Track",
    "favoredClasses": [
      "Barbarian",
      "Borderer"
    ],
    "restrictedClasses": [
      "Noble"
    ],
    "primaryLanguage": "Tharunni",
    "secondaryLanguages": [
      "Orevesski",
      "Caldrayni",
      "Vhaldruni",
      "Mournessi",
      "Narukan"
    ],
    "masterId": "origins-11"
  },
  {
    "name": "Hyr Veshi",
    "group": "The Khuric",
    "traits": [
      "Storm-Sign Instinct: +2 racial bonus to all Perception, Survival, and Knowledge (nature) checks. The Hyr Veshi live beneath an unbroken sky, where a shift in wind, a bird's flight, a distant dust plume, or the smell before rain may mean survival, battle, or death.",
      "Horsebow Tradition: Hyr Veshi can wield (Hyrkainian bows) as though they were martial weapons rather than exotic weapons. The Hyr Veshi way of war is built around speed, distance, encirclement, and sudden storms of arrows. They do not see mounted archery as a special military art; they see it as the natural expression of a free people.",
      "Herd-Law: +2 racial bonus to all Sense Motive, Intimidate, and Diplomacy checks involving clan councils, horse-trading, oaths, marriage negotiations, tribute demands, prisoner ransom, grazing rights, or dealings with nomads and herdsmen. Hyr Veshi society may lack courts and written law, but it is not lawless. Herd-law is remembered in bloodlines, horse brands, old songs, and the judgment of elders."
    ],
    "skills": "Ride, Handle Animal, Survival, Knowledge (local)",
    "featOptions": "- Animal Affinity\n- Endurance\n- Mounted Combat\n- Point Blank Shot\n- Skill Focus (Ride)",
    "favoredClasses": [
      "Nomad",
      "Borderer"
    ],
    "restrictedClasses": [
      "Pirate",
      "Noble"
    ],
    "primaryLanguage": "Hyr Veshi",
    "secondaryLanguages": [
      "Vossaki",
      "Uldaran",
      "Nath Khorumi",
      "Keshtovari"
    ],
    "masterId": "origins-12"
  },
  {
    "name": "Uldaran",
    "group": "The Khuric",
    "traits": [
      "Road-Fort Upbringing: +2 racial bonus to all Knowledge (local), Perception, and Survival checks. Uldarans are not rootless nomads like the Hyr Veshi. They are raised among road-forts, caravan bells, horse yards, border towers, tax posts, and dusty settlements where survival depends on knowing which road is safe, which garrison is loyal, which merchant is lying, and which dust cloud means riders.",
      "Caravan Road-Wise: +2 racial bonus to all Appraise, Diplomacy, and Sense Motive checks involving trade, tolls, caravan contracts, horse-dealing, border negotiation, or dealings with merchants, guides, mercenaries, and travelers. Uldara survives by controlling the roads between west and east. Its people learn early that a caravan can be a fortune, a threat, a spy mission, or all three at once.",
      "Weapon Familiarity: Sabre: Uldarans can wield sabres as though they were martial weapons rather than exotic weapons. The sabre is the favored sidearm of Uldara's road-wardens, horse-nobles, caravan captains, and frontier patrols. Unlike the heavier blades of the western kingdoms, the Uldaran sabre is made for the saddle, the road, and the sudden violence of border life. It can be drawn quickly from horseback, used in close quarters at a caravan halt, or carried openly in the dusty streets of a frontier town without seeming overly warlike."
    ],
    "skills": "Knowledge (local), Perception, Ride, Survival",
    "featOptions": "- Animal Affinity\n- Negotiator\n- Skill Focus (Ride)\n- Street-Smart\n- Weapon Focus (sabre)",
    "favoredClasses": [
      "Nomad",
      "Soldier"
    ],
    "restrictedClasses": [
      "Pirate"
    ],
    "primaryLanguage": "Uldaran",
    "secondaryLanguages": [
      "Hyr Veshi",
      "Keshtovari",
      "Vossaki",
      "Aram Vossi",
      "Qadiraqi",
      "Veyri"
    ],
    "masterId": "origins-13"
  },
  {
    "name": "Sarhaddi",
    "group": "The Sahradi",
    "traits": [
      "Sun-Bronze Discipline: +2 racial bonus to all Fortitude saves against heat exposure, thirst, fatigue from forced marches, and non-magical disease. Sarhaddon is a land of burning river valleys, red deserts, slave roads, temple works, and brutal campaign seasons. Sarhaddi children grow up beneath a punishing sun, where endurance is treated as a duty rather than a virtue.",
      "Temple-State Upbringing: +2 racial bonus to all Knowledge (religion), Knowledge (nobility), and Sense Motive checks. Sarhaddon is ruled through throne, temple, and bronze law. Even commoners know how to lower their eyes before a priest, read danger in a noble's silence, and recognize which officials can ruin a life with a word.",
      "Exotic Weapon Proficiency: Stygian Bow: All true Sarhaddi learn the techniques of the powerful Stygian bow. Among the Sarhaddi, the Stygian bow is a weapon of temple guards, desert companies, and bronze nobles. Its harsh draw and heavy arrows demand strength and discipline, making it a fitting weapon for a people raised beneath the Black Sun, where war is treated as duty, punishment, and sacred order."
    ],
    "skills": "Knowledge (religion), Knowledge (local), Decipher Script, Sense Motive",
    "featOptions": "- Endurance\n- Iron Will\n- Noble Blood\n- Religiously Driven\n- Weapon Focus (Stygian bow)",
    "favoredClasses": [
      "Scholar",
      "Noble"
    ],
    "restrictedClasses": [
      "Pirate"
    ],
    "primaryLanguage": "Sarhaddi",
    "secondaryLanguages": [
      "Tazuli",
      "Qadiraqi",
      "Veyri",
      "Keshtovari",
      "Uldaran",
      "Aram Vossi"
    ],
    "masterId": "origins-14"
  },
  {
    "name": "Qadiraqi",
    "group": "The Sahradi",
    "traits": [
      "Seven-Wells Lore: +2 racial bonus to all Survival, Perception, and Knowledge (nature) checks made in deserts, badlands, salt flats, rocky wastes, oasis lands, caravan routes, or other arid terrain. The Qadiraqi know how to read wind-carved stone, dry riverbeds, animal tracks, dust clouds, stars, hidden wells, and the faint signs of water beneath killing ground.",
      "Guest-Shade Custom: +2 racial bonus to all Diplomacy, Sense Motive, and Knowledge (local) checks involving hospitality, water-rights, tribal custom, shrine-law, ransom, safe passage, caravan disputes, or negotiation under truce. Qadiraqi hospitality is sacred, but never simple. A guest may be protected, watched, tested, bargained over, or quietly trapped by the exact wording of old desert law.",
      "Night Bazaar Cunning: +2 racial bonus to all Appraise, Bluff, and Gather Information checks.The Qadiraqi roads carry silk, salt, jewels, slaves, incense, weapons, lies, and forbidden things dug from ruined cities. A Qadiraqi learns early that every bargain has two prices: the one spoken aloud and the one paid later."
    ],
    "skills": "Survival, Knowledge (local), Appraise, Sense Motive",
    "featOptions": "- Deceitful\n- Negotiator\n- Self-Sufficient\n- Skill Focus (Appraise)\n- Street-Smart",
    "favoredClasses": [
      "Nomad",
      "Thief"
    ],
    "restrictedClasses": [
      "Pirate"
    ],
    "primaryLanguage": "Qadiraqi",
    "secondaryLanguages": [
      "Sarhaddi",
      "Tazuli",
      "Veyri",
      "Uldaran",
      "Xhombari. Aram Vossi"
    ],
    "masterId": "origins-15"
  },
  {
    "name": "Xhombari",
    "group": "The Mbari",
    "traits": [
      "Jungle-River Born: +2 racial bonus to all Survival, Perception, and Swim checks made in jungles, rainforests, river valleys, savannas, floodplains, waterfalls, or other hot and heavily watered lands. The Xhombari are raised amid black rivers, dense forest, animal trails, sudden floods, hunting paths, crocodile waters, and drum-marked villages. They are not subtle like the Narukan, but they know how to live where the green world is always watching.",
      "Drum and Mask Rites: +2 racial bonus to all Perform (ritual), Intimidate, and Knowledge (religion) checks involving ancestor worship, spirit masks, war drums, royal ceremonies, judgment rites, funerals, initiation trials, or dealings with chiefs and spirit-priests. Xhombari culture treats drums and masks as sacred instruments of memory, power, and authority. A warrior who marches beneath the drums does not fight alone; the dead are listening.",
      "Leopard-Hand Courage: +1 morale bonus to all Will saving throws against fear, intimidation, and terror effects. Xhombari children are taught that fear is natural, but shame before clan, drum, mask, and ancestor is worse than death. Their war societies prize visible courage, public endurance, and the refusal to break while others watch."
    ],
    "skills": "Survival, Perform (ritual), Intimidate, Knowledge (local)",
    "featOptions": "- Brawl\n- Great Fortitude\n- Religiously Driven\n- Skill Focus (Perform (ritual))\n- Toughness",
    "favoredClasses": [
      "Barbarian",
      "Scholar"
    ],
    "restrictedClasses": [
      "Nomad"
    ],
    "primaryLanguage": "Xhombari",
    "secondaryLanguages": [
      "Aram Vossi",
      "Qadiraqi",
      "Sarhaddi",
      "Tazuli",
      "Muzatuli",
      "Narukan"
    ],
    "masterId": "origins-16"
  },
  {
    "name": "Muzatuli",
    "group": "The Mbari",
    "traits": [
      "Blackwater Born: +2 racial bonus to all Stealth, Survival, and Swim checks. Muzatuli children learn to move through mud, reeds, mist, insects, hidden roots, and crocodile channels before they learn to trust roads.",
      "Reed-Canoe Lore: +2 racial bonus to all Profession (sailor), Perception, and Knowledge (local) checks involving canoes, river travel, hidden channels, smugglers' routes, flooded ruins, blackwater villages, reed markets, or safe passage through marsh settlements. No road reaches the heart of Muzatul. A person who does not know the water, the boats, and the people who control the crossings is already lost.",
      "Fever and Venom Wise: +1 racial bonus to all Fortitude saving throws against poison and disease. In addition, Muzatuli gain a +2 racial bonus to Heal checks involving fever, venom, infection, narcotic lotus, swamp sickness, poisoned wounds, or antidotes. The Muzatuli live among biting insects, stagnant pools, venomous serpents, poisoned reeds, and fever spirits. Survival has made them careful students of both sickness and cure."
    ],
    "skills": "Stealth, Survival, Heal, Knowledge (local)",
    "featOptions": "- Athletic\n- Great Fortitude\n- Self-Sufficient\n- Skill Focus (Survival)\n- Track",
    "favoredClasses": [
      "Borderer",
      "Barbarian"
    ],
    "restrictedClasses": [
      "Noble"
    ],
    "primaryLanguage": "Muzatuli",
    "secondaryLanguages": [
      "Aram Vossi",
      "Orevesski",
      "Xhombari",
      "Narukan"
    ],
    "masterId": "origins-17"
  },
  {
    "name": "Keshtovari",
    "group": "The Shuvari",
    "traits": [
      "Imperial Protocol: +2 racial bonus to all Diplomacy, Knowledge (nobility), and Sense Motive checks. Keshtovari society is layered with titles, gestures, bows, seals, and inherited obligations. Even commoners learn that speaking correctly to the wrong person may save one's life.",
      "Canal-City Acumen: +2 racial bonus to all Appraise, Gather Information, and Knowledge (local) checks made in cities, river ports, canal districts, trade offices, markets, ministry quarters, or noble estates. Keshtovar's wealth moves by river, barge, canal, silk road, and sealed ledger. Its people are accustomed to prices, rumors, officials, guild factors, quiet bribes, and the hidden movements of goods and influence.",
      "Seal-Bound Authority: +2 racial bonus to all Forgery, Decipher Script, and Knowledge (local) checks involving official documents, permits, court orders, tax records, travel papers, trade licenses, ministry seals, genealogies, or bureaucratic procedure. In addition, a Keshtovari character may make Forgery checks untrained when dealing with formal documents or official seals."
    ],
    "skills": "Diplomacy, Knowledge (local), Knowledge (nobility), Appraise.",
    "featOptions": "- Diligent\n- Investigator\n- Negotiator\n- Noble Blood\n- Scan the Crowd",
    "favoredClasses": [
      "Scholar",
      "Noble"
    ],
    "restrictedClasses": [
      "Barbarian"
    ],
    "primaryLanguage": "Keshtovari",
    "secondaryLanguages": [
      "Hyr Veshi",
      "Nath Khorumi",
      "Uldaran",
      "Veyri",
      "Qadiraq",
      "Sarhaddi",
      "Vossaki"
    ],
    "masterId": "origins-18"
  },
  {
    "name": "Nath Khorumi",
    "group": "The Shuvari",
    "traits": [
      "Plateau-Hardened: +2 racial bonus to all Climb, Survival, and Perception. Nath Khorum is a hard land of red mountains, salt lakes, monastery roads, and wind-carved heights. Its people are accustomed to long climbs, poor air, sparse food, and journeys where one mistake can send a pilgrim into the abyss.",
      "Bell-Temple Discipline: +2 racial bonus to all Concentration, Knowledge (religion), and Perform (ritual) checks. Nath Khorumi children are taught to breathe correctly, speak carefully, listen before answering, and treat ritual as a weapon against chaos.",
      "Oracle-House Listening: +2 racial bonus to all Sense Motive, Perception, and Gather Information checks made after at least one minute of quiet observation or careful listening. The Nath Khorumi believe most people reveal the truth in what they do not say: a delayed breath, a misplaced word, a glance toward an exit, a pause before a lie, or silence where grief should be. Their oracles teach that the world confesses itself between sounds."
    ],
    "skills": "Knowledge (religion), Perform (ritual), Sense Motive, Survival",
    "featOptions": "- Alertness\n- Iron Will\n- Religiously Driven\n- Self-Sufficient\n- Skill Focus (Concentration)",
    "favoredClasses": [
      "Scholar",
      "Soldier"
    ],
    "restrictedClasses": [
      "Temptress",
      "Noble"
    ],
    "primaryLanguage": "Nath Khorumi",
    "secondaryLanguages": [
      "Hyr Veshi",
      "Keshtovari",
      "Veyri",
      "Uldaran",
      "Qadiraqi"
    ],
    "masterId": "origins-19"
  },
  {
    "name": "Tazuli",
    "group": "The Shuvari",
    "traits": [
      "Caste-Court Protocol: +2 racial bonus to all Diplomacy, Sense Motive, and Knowledge (nobility) checks involving caste rank, temple courts, noble households, royal ceremonies, marriage negotiations, patronage, sacred etiquette, or palace intrigue. Tazuli society is layered with rank, ritual purity, public courtesy, hidden insult, and obligations owed to temple, caste, family, and throne.",
      "Spice-Market Cunning: +2 racial bonus to all Appraise, Bluff, and Gather Information checks involving spices, perfumes, medicines, poisons, silk, gems, temple goods, luxury trade, smugglers, court gossip, or foreign merchants. The markets of Tazul Kor are fragrant, beautiful, and dangerous. Every scent has a price, every merchant has a patron, and every bargain may conceal a debt.",
      "Weapon Familiarity: Tulwar: Tazuli can wield tulwars as though they were martial weapons rather than exotic weapons.The tulwar is a favored blade of Tazul Kor's palace guards, temple retainers, spice-road escorts, and noble duelists. Its curved edge suits the swift, elegant violence prized in Tazuli courts, where battle is often treated as both ritual and display."
    ],
    "skills": "Diplomacy, Appraise, Knowledge (local), Sense Motive",
    "featOptions": "- Noble Blood\n- Negotiator\n- Skill Focus (Appraise)\n- Street-Smart\n- Weapon Focus (tulwar)",
    "favoredClasses": [
      "Noble",
      "Scholar"
    ],
    "restrictedClasses": [
      "Nomad"
    ],
    "primaryLanguage": "Tazuli",
    "secondaryLanguages": [
      "Xhombari",
      "Aram Vossi",
      "Sarhaddi",
      "Qadiraqi",
      "Veyri",
      "Uldaran"
    ],
    "masterId": "origins-20"
  },
  {
    "name": "Vossaki",
    "group": "The Miscellaneous",
    "traits": [
      "Mountain-Hold Born: +2 racial bonus to all Climb, Perception, and Survival checks. Kar Vossaki children grow up around steep paths, unstable stone, echoing tunnels, hidden drops, bad air, and winter roads where one careless step can kill.",
      "Deep Road Instinct: +2 racial bonus to all Disable Device, and Knowledge (dungeoneering), checks involving tunnels, mines, caves, underground roads, unstable stone, sealed passages, deadfalls, cave-ins, bad air, or hidden ways beneath the mountains. Kar Vossaki are raised with stories of lost galleries, sealed stairs, forgotten mine-roads, and things that move below the holds. Even those who never become miners learn to fear a wrong echo, a warm draft, a cracked support beam, or a door their ancestors chose to bury.",
      "Stone-Oath Custom: +2 racial bonus to all Sense Motive, Diplomacy, and Intimidate checks involving oaths, contracts, clan councils, mine rights, inheritance claims, blood-price, guild bargains, sworn service, or disputes between holds. Among the Kar Vossaki, a promise made before stone is not casual speech. It is a weight placed upon the speaker's bloodline."
    ],
    "skills": "Climb, Knowledge (local), Knowledge (dungeoneering), Survival",
    "featOptions": "- Alertness\n- Athletic\n- Blind-Fight\n- Paragon of Loyalty\n- Skill Focus (Knowledge (dungeoneering))",
    "favoredClasses": [
      "Soldier",
      "Borderer"
    ],
    "restrictedClasses": [
      "Pirate"
    ],
    "primaryLanguage": "Vossaki",
    "secondaryLanguages": [
      "Mournessi",
      "Thalmyri",
      "Uldaran",
      "Hyr Veshi",
      "Aram Vossi"
    ],
    "masterId": "origins-21"
  },
  {
    "name": "Veyri",
    "group": "The Miscellaneous",
    "traits": [
      "Storm-Reef Instinct: +2 racial bonus to all Profession (sailor), Perception, and Survival checks. Veyri children grow up learning that the sea speaks constantly: in wave-color, bird-flight, reef foam, pressure in the air, and the wrong silence before a storm.",
      "Black Sail Custom: +2 racial bonus to all Bluff, Intimidate, and Sense Motive checks involving pirates, smugglers, sailors, mutiny, ransom, black-market cargo, shipboard disputes, false flags, or harbor criminals. Veyri society is built on crew loyalty, reputation, threat, bargaining, and betrayal. A Veyr learns early when to smile, when to lie, and when to make another captain believe violence is already inevitable.",
      "Wreck-Hardened: +1 racial bonus to all Reflex saving throws made aboard ships, docks, piers, boats, rafts, sea cliffs, wet stone, or unstable footing. In addition, Veyri gain a +2 racial bonus to Swim checks made in rough water. The Veyri are raised among slick decks, sudden squalls, collapsing rigging, reef breaks, and drowning surf. Those who survive childhood learn to move when the world pitches beneath them."
    ],
    "skills": "Profession (sailor), Swim, Bluff, Knowledge (local).",
    "featOptions": "- Athletic\n- Deceitful\n- Lightning Reflexes\n- Sea Legs\n- Skill Focus (Profession (sailor))",
    "favoredClasses": [
      "Pirate",
      "Thief"
    ],
    "restrictedClasses": [
      "Nomad",
      "Noble"
    ],
    "primaryLanguage": "Veyri",
    "secondaryLanguages": [
      "Keshtovari",
      "Tazuli",
      "Sarhaddi",
      "Nath Khorumi",
      "Qadiraqi"
    ],
    "masterId": "origins-22"
  }
];

export const CONAN_LANGUAGES = [
  {
    "name": "Caldrayni",
    "group": "Common Languages",
    "spokenIn": "Caldrayne",
    "notes": "Noble courts, feudal law, military command, knightly songs. Often used by western nobles.",
    "masterId": "languages-1"
  },
  {
    "name": "Mournessi",
    "group": "Common Languages",
    "spokenIn": "Mournesse",
    "notes": "Precise, formal, legalistic. Used in contracts, trials, genealogy, and old records.",
    "masterId": "languages-2"
  },
  {
    "name": "Corvayni",
    "group": "Common Languages",
    "spokenIn": "Corvayne League",
    "notes": "Major trade tongue of the Inland Sea. Merchants, sailors, spies, and diplomats often learn it.",
    "masterId": "languages-3"
  },
  {
    "name": "Morathi",
    "group": "Common Languages",
    "spokenIn": "Vel Morath",
    "notes": "Soft, elegant, poetic, full of double meanings. Common in pleasure courts and diplomacy.",
    "masterId": "languages-4"
  },
  {
    "name": "Thalmyri",
    "group": "Common Languages",
    "spokenIn": "Thalmyr",
    "notes": "Practical pass-road language used by toll collectors, guides, caravan guards, and fortress troops.",
    "masterId": "languages-5"
  },
  {
    "name": "Aram Vossi",
    "group": "Common Languages",
    "spokenIn": "Aram Vos",
    "notes": "Rough marchland tongue with Caldrayni, Tharuuni, and Corvayni influences. Common among mercenaries.",
    "masterId": "languages-6"
  },
  {
    "name": "Orevesski",
    "group": "Common Languages",
    "spokenIn": "Orevessk",
    "notes": "Orvesski is a clipped, guarded language shaped by merchants, travellers, and spies. It uses layered meanings, false names, and subtle changes in tone, allowing speakers to exchange warnings or conceal their intentions without attracting outsiders' attention.",
    "masterId": "languages-7"
  },
  {
    "name": "Vhaldruni",
    "group": "Common Languages",
    "spokenIn": "Vhaldrun",
    "notes": "Harsh northern clan language used in sagas, oaths, raids, and war songs.",
    "masterId": "languages-8"
  },
  {
    "name": "Skarnholli",
    "group": "Common Languages",
    "spokenIn": "Skarnholl",
    "notes": "Related distantly to Vhaldruni but colder, more formal, and full of archaic bloodline terms.",
    "masterId": "languages-9"
  },
  {
    "name": "Tharuuni",
    "group": "Common Languages",
    "spokenIn": "Tharuun",
    "notes": "Forest-clan language of moots, tattoos, sacred groves, and oral law. Difficult for outsiders.",
    "masterId": "languages-10"
  },
  {
    "name": "Narukan",
    "group": "Common Languages",
    "spokenIn": "Narukan Wilds",
    "notes": "Quiet, clipped forest tongue with many hunting terms, poison names, and hand-signs.",
    "masterId": "languages-11"
  },
  {
    "name": "Vossaki",
    "group": "Common Languages",
    "spokenIn": "Kar Vossak",
    "notes": "Mountain hold language of miners, smiths, oath-brothers, and fortress clans.",
    "masterId": "languages-12"
  },
  {
    "name": "Uldaran",
    "group": "Common Languages",
    "spokenIn": "Uldara",
    "notes": "Frontier language blending western road speech with eastern horse-clan words. Useful beyond the Great Pass.",
    "masterId": "languages-13"
  },
  {
    "name": "Hyr Veshi",
    "group": "Common Languages",
    "spokenIn": "Hyr Vesh",
    "notes": "Horse-nomad tongue of clans, khans, sky rites, and steppe warfare.",
    "masterId": "languages-14"
  },
  {
    "name": "Nath Khorumi",
    "group": "Common Languages",
    "spokenIn": "Nath Khorum",
    "notes": "Plateau language of bells, temples, oracles, and monastery courts. Formal and ritual-heavy.",
    "masterId": "languages-15"
  },
  {
    "name": "Keshtovari",
    "group": "Common Languages",
    "spokenIn": "Keshtovar",
    "notes": "Great eastern imperial language. Used in bureaucracy, court poetry, ancestor rites, and river trade.",
    "masterId": "languages-16"
  },
  {
    "name": "Veyri",
    "group": "Common Languages",
    "spokenIn": "Isles of Veyr",
    "notes": "Sailors' and pirates' tongue of reefs, storms, ships, pearl houses, and island ports.",
    "masterId": "languages-17"
  },
  {
    "name": "Sarhaddi",
    "group": "Common Languages",
    "spokenIn": "Sarhaddon",
    "notes": "Ancient river-desert language of bronze cities, temples, slave markets, and royal decrees.",
    "masterId": "languages-18"
  },
  {
    "name": "Qadiraqi",
    "group": "Common Languages",
    "spokenIn": "Qadiraq",
    "notes": "Desert trade language of caravans, oasis cities, tribes, poets, and water-law.",
    "masterId": "languages-19"
  },
  {
    "name": "Xhombari",
    "group": "Common Languages",
    "spokenIn": "Xhombara",
    "notes": "Jungle-river language of drum kings, ancestors, masks, spirits, and warrior societies.",
    "masterId": "languages-20"
  },
  {
    "name": "Muzatuli",
    "group": "Common Languages",
    "spokenIn": "Muzatul",
    "notes": "Swamp tongue of reed clans, poison houses, boatmen, and drowned priests.",
    "masterId": "languages-21"
  },
  {
    "name": "Tazuli",
    "group": "Common Languages",
    "spokenIn": "Tazul Kor",
    "notes": "Monsoon coast language of spice courts, temple rites, elephant lords, and palace intrigue.",
    "masterId": "languages-22"
  },
  {
    "name": "Red Ledger Cant",
    "group": "Criminal Cants & Codes",
    "spokenIn": "Corvayni spies, assassins, smugglers, debt collectors",
    "notes": "A coded trade-criminal language hidden inside accounting terms.",
    "masterId": "languages-23"
  },
  {
    "name": "Black Sail Cant",
    "group": "Criminal Cants & Codes",
    "spokenIn": "Veyri pirates, smugglers, mutineers",
    "notes": "Shipboard slang, hand signs, flag meanings, and coded threats.",
    "masterId": "languages-24"
  },
  {
    "name": "Dust Knife Cant",
    "group": "Criminal Cants & Codes",
    "spokenIn": "Uldaran horse thieves, frontier killers, caravan smugglers",
    "notes": "Used along the eastern roads and horse markets.",
    "masterId": "languages-25"
  },
  {
    "name": "Night Bazaar Speech",
    "group": "Criminal Cants & Codes",
    "spokenIn": "Qadiraqi relic dealers, poisoners, thieves, forbidden book sellers",
    "notes": "A coded market language of half-phrases and ritual bargaining.",
    "masterId": "languages-26"
  },
  {
    "name": "Fang Society Signs",
    "group": "Criminal Cants & Codes",
    "spokenIn": "Xhombari secret warrior societies",
    "notes": "Gesture, scar, mask, and drum-code system used for judgment and assassination.",
    "masterId": "languages-27"
  },
  {
    "name": "Poison House Marks",
    "group": "Criminal Cants & Codes",
    "spokenIn": "Muzatuli poisoners and herbalists",
    "notes": "Identifies medicines, venoms, safe houses, and people marked for death.",
    "masterId": "languages-28"
  },
  {
    "name": "Ancient Eld Varendi",
    "group": "Ancient Languages",
    "spokenIn": "Heartland scholars, Mournessi archivists, Caldrayni nobles",
    "notes": "Dead or semi-dead language of old western law, ruins, and inscriptions.",
    "masterId": "languages-29"
  },
  {
    "name": "High Sarhaddi",
    "group": "Ancient Languages",
    "spokenIn": "Sarhaddi priests, astrologers, tomb scribes",
    "notes": "Sacred temple language used in black sun rites, royal tombs, and ancient curses.",
    "masterId": "languages-30"
  },
  {
    "name": "Temple Nathic",
    "group": "Ancient Languages",
    "spokenIn": "Nath Khorumi priests and oracle houses",
    "notes": "Ritual language of bells, prophecy, breath rites, and forbidden archive texts.",
    "masterId": "languages-31"
  },
  {
    "name": "Classical Keshtovari",
    "group": "Ancient Languages",
    "spokenIn": "Imperial scholars, ministers, ancestor priests",
    "notes": "Used in imperial histories, sacred genealogies, court poetry, and legal decrees.",
    "masterId": "languages-32"
  },
  {
    "name": "Old Vossaki Runes",
    "group": "Ancient Languages",
    "spokenIn": "Kar Vossak forge-priests and deep wardens",
    "notes": "Carved into mines, sealed doors, old anvils, and mountain shrines.",
    "masterId": "languages-33"
  },
  {
    "name": "Root-Speech",
    "group": "Ancient Languages",
    "spokenIn": "Narukan spirit-speakers, Tharuuni grove-judges",
    "notes": "Not truly one language; a shared body of sacred forest names, taboos, and spirit terms.",
    "masterId": "languages-34"
  },
  {
    "name": "Drum Cant of Xhombara",
    "group": "Ancient Languages",
    "spokenIn": "Xhombari drum-speakers",
    "notes": "A non-written signal language carried by drums across jungle and river valleys.",
    "masterId": "languages-35"
  },
  {
    "name": "Reed Marks of Muzatul",
    "group": "Ancient Languages",
    "spokenIn": "Muzatuli guides, poison houses, smugglers",
    "notes": "A system of signs, knots, cuts, and reed arrangements used in the swamps.",
    "masterId": "languages-36"
  }
];

export const CONAN_CLASS_OPTIONS = {
  "barbarian": "Barbarian",
  "borderer": "Borderer",
  "martialDisciple": "Martial Disciple",
  "noble": "Noble",
  "nomad": "Nomad",
  "pirate": "Pirate",
  "scholar": "Scholar",
  "soldier": "Soldier",
  "temptress": "Temptress",
  "thief": "Thief",
  "agentOfTheCrown": "Agent of the Crown",
  "axeman": "Axeman",
  "dancingSavage": "Dancing Savage",
  "drummerInTheDark": "Drummer in the Dark",
  "duellist": "Duelist",
  "forestRunner": "Forest Runner",
  "gunderlandMercenary": "Gunderland Mercenary",
  "gunderlandPikeman": "Gunderland Pikeman",
  "houseAgent": "House Agent",
  "huntMaster": "Hunt Master",
  "lordOfTheBlackRing": "Lord of the Black Ring",
  "masterOfDeath": "Master of Death",
  "masterOfTheBlackCircle": "Master of the Black Circle",
  "merchantPrince": "Merchant Prince",
  "paramountChief": "Paramount Chief",
  "pitFighter": "Pit Fighter",
  "poitainianKnight": "Poitainian Knight",
  "savage": "Savage",
  "sorcererOfTheScarletCircle": "Sorcerer of the Scarlet Circle",
  "warlord": "Warlord",
  "wrestler": "Wrestler"
};

export const CONAN_CLASS_SKILLS = {
  "barbarian": [
    "acrobatics",
    "bluff",
    "challenge",
    "climb",
    "handleAnimal",
    "intimidate",
    "perception",
    "ride",
    "stealth",
    "survival",
    "swim"
  ],
  "borderer": [
    "acrobatics",
    "climb",
    "handleAnimal",
    "knowledgeGeography",
    "knowledgeLocal",
    "knowledgeRumours",
    "perception",
    "ride",
    "sharpen",
    "stealth",
    "survival",
    "swim",
    "useRope"
  ],
  "martialDisciple": [
    "acrobatics",
    "climb",
    "concentration",
    "decipherScript",
    "escapeArtist",
    "heal",
    "intimidate",
    "knowledgeArcana",
    "knowledgeHistory",
    "knowledgeReligion",
    "perception",
    "sleightOfHand",
    "stealth",
    "swim",
    "useRope"
  ],
  "noble": [
    "appraise",
    "bluff",
    "challenge",
    "diplomacy",
    "handleAnimal",
    "intimidate",
    "knowledgeHistory",
    "knowledgeLocal",
    "knowledgeNobility",
    "knowledgeReligion",
    "knowledgeRumours",
    "knowledgeTactics",
    "perception",
    "ride",
    "senseMotive",
    "stealth",
    "survival"
  ],
  "nomad": [
    "bluff",
    "climb",
    "handleAnimal",
    "heal",
    "knowledgeLocal",
    "knowledgeRumours",
    "perception",
    "ride",
    "sharpen",
    "stealth",
    "survival"
  ],
  "pirate": [
    "acrobatics",
    "appraise",
    "bluff",
    "climb",
    "disguise",
    "escapeArtist",
    "intimidate",
    "knowledgeGeography",
    "knowledgeRumours",
    "knowledgeTactics",
    "perception",
    "sharpen",
    "stealth",
    "survival",
    "swim",
    "useRope"
  ],
  "scholar": [
    "appraise",
    "bluff",
    "concentration",
    "decipherScript",
    "forgery",
    "heal",
    "intimidate",
    "knowledgeArcana",
    "knowledgeArchitectureEngineering",
    "knowledgeAstrology",
    "knowledgeGeography",
    "knowledgeHistory",
    "knowledgeLocal",
    "knowledgeMysteryGod",
    "knowledgeNature",
    "knowledgeNobility",
    "knowledgeReligion",
    "knowledgeRumours",
    "knowledgeTactics",
    "perception",
    "senseMotive",
    "stealth"
  ],
  "soldier": [
    "acrobatics",
    "challenge",
    "climb",
    "intimidate",
    "knowledgeGeography",
    "knowledgeLocal",
    "knowledgeRumours",
    "knowledgeTactics",
    "perception",
    "ride",
    "sharpen"
  ],
  "temptress": [
    "acrobatics",
    "appraise",
    "bluff",
    "diplomacy",
    "disguise",
    "escapeArtist",
    "forgery",
    "heal",
    "intimidate",
    "knowledgeLocal",
    "knowledgeNobility",
    "knowledgeRumours",
    "perception",
    "senseMotive",
    "sleightOfHand",
    "stealth",
    "swim",
    "useRope"
  ],
  "thief": [
    "acrobatics",
    "appraise",
    "bluff",
    "climb",
    "decipherScript",
    "diplomacy",
    "disableDevice",
    "disguise",
    "escapeArtist",
    "forgery",
    "intimidate",
    "knowledgeArcana",
    "knowledgeLocal",
    "knowledgeNobility",
    "knowledgeRumours",
    "openLock",
    "perception",
    "senseMotive",
    "sharpen",
    "sleightOfHand",
    "stealth",
    "useRope"
  ],
  "agentOfTheCrown": [
    "acrobatics",
    "appraise",
    "climb",
    "diplomacy",
    "intimidate",
    "knowledgeGeography",
    "knowledgeLocal",
    "knowledgeNobility",
    "knowledgeRumours",
    "perception",
    "ride",
    "senseMotive",
    "survival",
    "useRope"
  ],
  "axeman": [
    "acrobatics",
    "bluff",
    "climb",
    "handleAnimal",
    "intimidate",
    "perception",
    "ride",
    "senseMotive",
    "survival",
    "useRope"
  ],
  "dancingSavage": [
    "acrobatics",
    "climb",
    "handleAnimal",
    "knowledgeGeography",
    "knowledgeLocal",
    "knowledgeNature",
    "perception",
    "stealth",
    "survival",
    "swim",
    "useRope"
  ],
  "drummerInTheDark": [
    "acrobatics",
    "bluff",
    "climb",
    "diplomacy",
    "intimidate",
    "knowledgeNature",
    "knowledgeRumours",
    "perception",
    "stealth",
    "survival",
    "swim",
    "useRope"
  ],
  "duellist": [
    "acrobatics",
    "bluff",
    "challenge",
    "climb",
    "diplomacy",
    "intimidate",
    "knowledgeRumours",
    "perception",
    "senseMotive"
  ],
  "forestRunner": [
    "acrobatics",
    "climb",
    "escapeArtist",
    "handleAnimal",
    "heal",
    "knowledgeGeography",
    "knowledgeLocal",
    "knowledgeNature",
    "perception",
    "stealth",
    "survival",
    "swim"
  ],
  "gunderlandMercenary": [
    "acrobatics",
    "bluff",
    "climb",
    "intimidate",
    "knowledgeGeography",
    "knowledgeLocal",
    "ride",
    "senseMotive",
    "swim"
  ],
  "gunderlandPikeman": [
    "acrobatics",
    "climb",
    "intimidate",
    "knowledgeGeography",
    "knowledgeLocal",
    "perception",
    "ride",
    "survival",
    "swim"
  ],
  "houseAgent": [
    "acrobatics",
    "appraise",
    "bluff",
    "climb",
    "concentration",
    "decipherScript",
    "diplomacy",
    "disableDevice",
    "disguise",
    "escapeArtist",
    "forgery",
    "intimidate",
    "knowledgeGeography",
    "knowledgeHistory",
    "knowledgeLocal",
    "knowledgeNobility",
    "knowledgeReligion",
    "knowledgeRumours",
    "openLock",
    "perception",
    "ride",
    "senseMotive",
    "sleightOfHand",
    "stealth",
    "survival",
    "useRope"
  ],
  "huntMaster": [
    "acrobatics",
    "climb",
    "handleAnimal",
    "knowledgeGeography",
    "knowledgeLocal",
    "knowledgeNature",
    "perception",
    "stealth",
    "survival",
    "swim",
    "useRope"
  ],
  "lordOfTheBlackRing": [
    "bluff",
    "concentration",
    "diplomacy",
    "intimidate",
    "knowledgeRumours",
    "senseMotive",
    "sleightOfHand"
  ],
  "masterOfDeath": [
    "appraise",
    "bluff",
    "concentration",
    "decipherScript",
    "heal",
    "intimidate",
    "perception",
    "senseMotive",
    "sleightOfHand",
    "stealth"
  ],
  "masterOfTheBlackCircle": [
    "bluff",
    "concentration",
    "decipherScript",
    "diplomacy",
    "intimidate",
    "knowledgeRumours",
    "perception",
    "senseMotive",
    "sleightOfHand"
  ],
  "merchantPrince": [
    "appraise",
    "bluff",
    "diplomacy",
    "handleAnimal",
    "intimidate",
    "knowledgeLocal",
    "knowledgeNobility",
    "knowledgeRumours",
    "perception",
    "ride",
    "senseMotive"
  ],
  "paramountChief": [
    "acrobatics",
    "bluff",
    "climb",
    "diplomacy",
    "handleAnimal",
    "intimidate",
    "knowledgeLocal",
    "knowledgeNobility",
    "knowledgeRumours",
    "perception",
    "senseMotive",
    "swim"
  ],
  "pitFighter": [
    "acrobatics",
    "bluff",
    "climb",
    "disguise",
    "handleAnimal",
    "heal",
    "intimidate",
    "perception",
    "senseMotive",
    "sleightOfHand",
    "survival",
    "swim",
    "useRope"
  ],
  "poitainianKnight": [
    "acrobatics",
    "climb",
    "handleAnimal",
    "intimidate",
    "knowledgeGeography",
    "knowledgeLocal",
    "knowledgeNobility",
    "ride"
  ],
  "savage": [
    "acrobatics",
    "climb",
    "handleAnimal",
    "heal",
    "intimidate",
    "perception",
    "senseMotive",
    "stealth",
    "survival",
    "swim"
  ],
  "sorcererOfTheScarletCircle": [
    "appraise",
    "bluff",
    "concentration",
    "decipherScript",
    "diplomacy",
    "heal",
    "intimidate",
    "perception",
    "senseMotive",
    "sleightOfHand",
    "stealth"
  ],
  "warlord": [
    "acrobatics",
    "bluff",
    "challenge",
    "climb",
    "diplomacy",
    "handleAnimal",
    "heal",
    "intimidate",
    "knowledgeRumours",
    "knowledgeTactics",
    "perception",
    "ride",
    "senseMotive",
    "sharpen",
    "survival"
  ],
  "wrestler": [
    "acrobatics",
    "bluff",
    "challenge",
    "climb",
    "escapeArtist",
    "heal",
    "intimidate",
    "perception",
    "senseMotive",
    "survival",
    "useRope"
  ]
};

export const CONAN_CUSTOM_CLASS_SKILL_GROUPS = {
  "barbarian": [
    "crafts"
  ],
  "borderer": [
    "crafts",
    "professions"
  ],
  "martialDisciple": [
    "crafts"
  ],
  "noble": [],
  "nomad": [
    "crafts"
  ],
  "pirate": [
    "crafts"
  ],
  "scholar": [
    "crafts",
    "professions"
  ],
  "soldier": [
    "crafts",
    "professions"
  ],
  "temptress": [
    "crafts",
    "performs",
    "professions"
  ],
  "thief": [
    "crafts",
    "professions"
  ],
  "agentOfTheCrown": [],
  "axeman": [
    "crafts",
    "performs",
    "professions"
  ],
  "dancingSavage": [
    "crafts",
    "professions"
  ],
  "drummerInTheDark": [
    "crafts",
    "performs"
  ],
  "duellist": [
    "crafts",
    "performs",
    "professions"
  ],
  "forestRunner": [
    "crafts",
    "professions"
  ],
  "gunderlandMercenary": [
    "crafts",
    "professions"
  ],
  "gunderlandPikeman": [
    "crafts",
    "performs",
    "professions"
  ],
  "houseAgent": [
    "crafts",
    "performs",
    "professions"
  ],
  "huntMaster": [
    "crafts",
    "professions"
  ],
  "lordOfTheBlackRing": [
    "crafts",
    "knowledge",
    "performs"
  ],
  "masterOfDeath": [
    "crafts",
    "knowledge"
  ],
  "masterOfTheBlackCircle": [
    "crafts",
    "knowledge",
    "performs"
  ],
  "merchantPrince": [
    "crafts",
    "performs",
    "professions"
  ],
  "paramountChief": [
    "crafts",
    "performs",
    "professions"
  ],
  "pitFighter": [
    "performs",
    "professions"
  ],
  "poitainianKnight": [],
  "savage": [
    "crafts"
  ],
  "sorcererOfTheScarletCircle": [
    "crafts",
    "knowledge",
    "performs",
    "professions"
  ],
  "warlord": [
    "knowledge",
    "performs",
    "professions"
  ],
  "wrestler": []
};

export const CONAN_CLASS_PROGRESSIONS = {
  "barbarian": {
    "hitDie": 10,
    "skillPointsPerLevel": 4,
    "classType": "Base Class",
    "source": "CR p. 41",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Bluff (Cha), Challenge (Cha), Climb (Str), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (herbalism) (Int), Craft (mask) (Int), Craft (talking drum) (Int), Handle Animal (Cha), Hide (Dex), Intimidate (Cha), Jump (Str), Listen (Wis), Move Silently (Dex),Ride (Dex), Spot (Wis), Survival (Wis), Swim (Str).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Fearless",
          "Track",
          "Versatility (-2)"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 0,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 0,
        "features": [
          "Bite Sword",
          "Crimson Mist"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Trap Sense +1",
          "Endurance"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Uncanny Dodge"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Mobility"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 2,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Trap Sense +2",
          "Diehard"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 5,
        "parry": 2,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Versatility (no penalty)"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 2,
        "features": [
          "Improved Uncanny Dodge"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 3,
        "features": [
          "Trap Sense +3"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 7,
        "parry": 3,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Improved Mobility",
          "Damage Reduction 1/-"
        ]
      },
      "11": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 8,
        "parry": 4,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Greater Crimson Mist"
        ]
      },
      "12": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 9,
        "parry": 4,
        "magicAttack": 3,
        "fort": 8,
        "ref": 8,
        "will": 4,
        "features": [
          "Trap Sense +4"
        ]
      },
      "13": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 9,
        "parry": 4,
        "magicAttack": 3,
        "fort": 8,
        "ref": 8,
        "will": 4,
        "features": [
          "Damage Reduction 2/-"
        ]
      },
      "14": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 10,
        "parry": 5,
        "magicAttack": 3,
        "fort": 9,
        "ref": 9,
        "will": 4,
        "features": [
          "Versatility (double threat range)"
        ]
      },
      "15": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 11,
        "parry": 5,
        "magicAttack": 3,
        "fort": 9,
        "ref": 9,
        "will": 5,
        "features": [
          "Greater Mobility",
          "Trap Sense +5"
        ]
      },
      "16": {
        "bab": 16,
        "attackSequence": "+16/+11/+6/+1",
        "dodge": 12,
        "parry": 6,
        "magicAttack": 4,
        "fort": 10,
        "ref": 10,
        "will": 5,
        "features": [
          "Damage Reduction 3/-"
        ]
      },
      "17": {
        "bab": 17,
        "attackSequence": "+17/+12/+7/+2",
        "dodge": 12,
        "parry": 6,
        "magicAttack": 4,
        "fort": 10,
        "ref": 10,
        "will": 5,
        "features": [
          "Unconquerable"
        ]
      },
      "18": {
        "bab": 18,
        "attackSequence": "+18/+13/+8/+3",
        "dodge": 13,
        "parry": 6,
        "magicAttack": 4,
        "fort": 11,
        "ref": 11,
        "will": 6,
        "features": [
          "Trap Sense +6",
          "Wheel of Death"
        ]
      },
      "19": {
        "bab": 19,
        "attackSequence": "+19/+14/+9/+4",
        "dodge": 14,
        "parry": 7,
        "magicAttack": 4,
        "fort": 11,
        "ref": 11,
        "will": 6,
        "features": [
          "Damage Reduction 4/-"
        ]
      },
      "20": {
        "bab": 20,
        "attackSequence": "+20/+15/+10/+5",
        "dodge": 15,
        "parry": 7,
        "magicAttack": 5,
        "fort": 12,
        "ref": 12,
        "will": 6,
        "features": [
          "Versatility (triple threat range)"
        ]
      }
    }
  },
  "borderer": {
    "hitDie": 10,
    "skillPointsPerLevel": 6,
    "classType": "Base Class",
    "source": "CR p. 44",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Climb (Str), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (herbalism) (Int), Craft (mask) (Int), Craft (talking drum) (Int), Gather Information (Cha), Handle Animal (Cha), Hide (Dex), Jump (Str), Knowledge (geography) (Int), Knowledge (local) (Int), Knowledge (rumours) (Int), Listen (Wis), Move Silently (Dex), Profession (Wis), Profession (mummifier) (Wis), Profession (scribe) (Wis), Ride (Dex), Search (Int), Sharpen (Wis), Spot (Wis), Survival (Wis), Swim (Str), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Track",
          "Favoured Terrain +1"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 0,
        "features": [
          "Combat Style"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Endurance"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Favoured Terrain +2"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Improved Combat Style"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Diehard"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Second Favoured Terrain +1",
          "Guide"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 2,
        "features": [
          "Favoured Terrain +3"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 3,
        "features": [
          "Swift Tracker"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Bonus Feat"
        ]
      },
      "11": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Combat Style Mastery"
        ]
      },
      "12": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 3,
        "fort": 8,
        "ref": 8,
        "will": 4,
        "features": [
          "Second Favoured Terrain +2",
          "Favoured Terrain +4"
        ]
      },
      "13": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 3,
        "fort": 8,
        "ref": 8,
        "will": 4,
        "features": [
          "Third Favoured Terrain +1",
          "Guide (fast movement)"
        ]
      },
      "14": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 7,
        "parry": 7,
        "magicAttack": 3,
        "fort": 9,
        "ref": 9,
        "will": 4,
        "features": [
          "Bonus Feat"
        ]
      },
      "15": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 7,
        "parry": 7,
        "magicAttack": 3,
        "fort": 9,
        "ref": 9,
        "will": 5,
        "features": [
          "Heroic Sacrifice"
        ]
      },
      "16": {
        "bab": 16,
        "attackSequence": "+16/+11/+6/+1",
        "dodge": 8,
        "parry": 8,
        "magicAttack": 4,
        "fort": 10,
        "ref": 10,
        "will": 5,
        "features": [
          "Favoured Terrain +5"
        ]
      },
      "17": {
        "bab": 17,
        "attackSequence": "+17/+12/+7/+2",
        "dodge": 8,
        "parry": 8,
        "magicAttack": 4,
        "fort": 10,
        "ref": 10,
        "will": 5,
        "features": [
          "Second Favoured Terrain +3"
        ]
      },
      "18": {
        "bab": 18,
        "attackSequence": "+18/+13/+8/+3",
        "dodge": 9,
        "parry": 9,
        "magicAttack": 4,
        "fort": 11,
        "ref": 11,
        "will": 6,
        "features": [
          "Bonus Feat",
          "Swift Tracker (full speed)"
        ]
      },
      "19": {
        "bab": 19,
        "attackSequence": "+19/+14/+9/+4",
        "dodge": 9,
        "parry": 9,
        "magicAttack": 4,
        "fort": 11,
        "ref": 11,
        "will": 6,
        "features": [
          "Third Favoured Terrain +2",
          "Fourth Favoured Terrain +1"
        ]
      },
      "20": {
        "bab": 20,
        "attackSequence": "+20/+15/+10/+5",
        "dodge": 10,
        "parry": 10,
        "magicAttack": 5,
        "fort": 12,
        "ref": 12,
        "will": 6,
        "features": [
          "Favoured Terrain +6",
          "Guide (mounts)"
        ]
      }
    }
  },
  "martialDisciple": {
    "hitDie": 8,
    "skillPointsPerLevel": 4,
    "classType": "Base Class",
    "source": "WC p. 86",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Balance (Dex), Climb (Str), Concentration (Con), Craft (alchemy) (Int), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (herbalism) (Int), Craft (mask) (Int), Craft (talking drum) (Int), Decipher Script (Int), Escape Artist (Dex), Heal (Wis), Intimidate (Cha), Jump (Str), Knowledge (arcana) (Int), Knowledge (history) (Int), Knowledge (religion) (Int), Listen (Wis), Move Silently (Dex), Sleight of Hand (Dex), Spot (Wis), Swim (Str), Tumble (Dex), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 2,
        "will": 2,
        "features": [
          "Improved Unarmed Strike"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 1,
        "fort": 0,
        "ref": 3,
        "will": 3,
        "features": [
          "Martial Discipline"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 1,
        "ref": 3,
        "will": 3,
        "features": [
          "Acrobatics +5",
          "Disciplined Defence"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 2,
        "fort": 1,
        "ref": 4,
        "will": 4,
        "features": [
          "Uncanny Dodge"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 2,
        "fort": 1,
        "ref": 4,
        "will": 4,
        "features": [
          "Mobility"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 3,
        "fort": 2,
        "ref": 5,
        "will": 5,
        "features": []
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 3,
        "fort": 2,
        "ref": 5,
        "will": 5,
        "features": [
          "Improved Martial Discipline"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 4,
        "fort": 2,
        "ref": 6,
        "will": 6,
        "features": [
          "Improved Uncanny Dodge"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 4,
        "fort": 3,
        "ref": 6,
        "will": 6,
        "features": [
          "Acrobatics +10",
          "Disciplined Blow"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 7,
        "parry": 7,
        "magicAttack": 5,
        "fort": 3,
        "ref": 7,
        "will": 7,
        "features": [
          "Improved Mobility",
          "Damage Reduction 1/-"
        ]
      },
      "11": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 8,
        "parry": 8,
        "magicAttack": 5,
        "fort": 3,
        "ref": 7,
        "will": 7,
        "features": [
          "Speed of the Hare"
        ]
      },
      "12": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 9,
        "parry": 9,
        "magicAttack": 6,
        "fort": 4,
        "ref": 8,
        "will": 8,
        "features": []
      },
      "13": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 9,
        "parry": 9,
        "magicAttack": 6,
        "fort": 4,
        "ref": 8,
        "will": 8,
        "features": [
          "Damage Reduction 2/-"
        ]
      },
      "14": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 10,
        "parry": 10,
        "magicAttack": 7,
        "fort": 4,
        "ref": 9,
        "will": 9,
        "features": [
          "Greater Martial Discipline"
        ]
      },
      "15": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 11,
        "parry": 11,
        "magicAttack": 7,
        "fort": 5,
        "ref": 9,
        "will": 9,
        "features": [
          "Greater Mobility",
          "Acrobatics +15"
        ]
      },
      "16": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 12,
        "parry": 12,
        "magicAttack": 8,
        "fort": 5,
        "ref": 10,
        "will": 10,
        "features": [
          "Damage Reduction 3/-"
        ]
      },
      "17": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 12,
        "parry": 12,
        "magicAttack": 8,
        "fort": 5,
        "ref": 10,
        "will": 10,
        "features": [
          "Speed of the Wind"
        ]
      },
      "18": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 13,
        "parry": 13,
        "magicAttack": 9,
        "fort": 6,
        "ref": 11,
        "will": 11,
        "features": []
      },
      "19": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 14,
        "parry": 14,
        "magicAttack": 9,
        "fort": 6,
        "ref": 11,
        "will": 11,
        "features": [
          "Damage Reduction 4/-"
        ]
      },
      "20": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 15,
        "parry": 15,
        "magicAttack": 10,
        "fort": 6,
        "ref": 12,
        "will": 12,
        "features": [
          "Master Martial Discipline"
        ]
      }
    }
  },
  "noble": {
    "hitDie": 8,
    "skillPointsPerLevel": 6,
    "classType": "Base Class",
    "source": "CR p. 47",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Bluff (Cha), Challenge (Cha), Diplomacy (Cha), Gather Information (Cha), Handle Animal (Cha), Hide (Dex), Intimidate (Cha), Knowledge (history) (Int), Knowledge (local) (Int), Knowledge (nobility) (Int), Knowledge (religion) (Int), Knowledge (rumours) (Int), Knowledge (warfare) (Int), Ride (Dex), Sense Motive (Wis), Spot (Wis), Survival (Wis), Tactics (Int).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 0,
        "will": 2,
        "features": [
          "Title",
          "Rank Hath Its Privileges",
          "Wealth"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 1,
        "magicAttack": 0,
        "fort": 0,
        "ref": 0,
        "will": 3,
        "features": [
          "Special Regional Feature +1"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 1,
        "will": 3,
        "features": []
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 1,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "Social Ability"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 1,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "Lead By Example +2"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "Enhanced Leadership"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "Special Regional Feature +2"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 2,
        "fort": 2,
        "ref": 2,
        "will": 6,
        "features": []
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 2,
        "fort": 3,
        "ref": 3,
        "will": 6,
        "features": [
          "Social Ability"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 2,
        "fort": 3,
        "ref": 3,
        "will": 7,
        "features": [
          "Lead By Example +4"
        ]
      },
      "11": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 4,
        "parry": 5,
        "magicAttack": 2,
        "fort": 3,
        "ref": 3,
        "will": 7,
        "features": [
          "Do You Know Who I Am?"
        ]
      },
      "12": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 3,
        "fort": 4,
        "ref": 4,
        "will": 8,
        "features": [
          "Special Regional Feature +3"
        ]
      },
      "13": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 3,
        "fort": 4,
        "ref": 4,
        "will": 8,
        "features": []
      },
      "14": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 5,
        "parry": 7,
        "magicAttack": 3,
        "fort": 4,
        "ref": 4,
        "will": 9,
        "features": [
          "Social Ability"
        ]
      },
      "15": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 5,
        "parry": 7,
        "magicAttack": 3,
        "fort": 5,
        "ref": 5,
        "will": 9,
        "features": [
          "Lead By Example +6"
        ]
      },
      "16": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 6,
        "parry": 8,
        "magicAttack": 4,
        "fort": 5,
        "ref": 5,
        "will": 10,
        "features": [
          "Rally"
        ]
      },
      "17": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 6,
        "parry": 8,
        "magicAttack": 4,
        "fort": 5,
        "ref": 5,
        "will": 10,
        "features": [
          "Special Regional Feature +4"
        ]
      },
      "18": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 6,
        "parry": 9,
        "magicAttack": 4,
        "fort": 6,
        "ref": 6,
        "will": 11,
        "features": []
      },
      "19": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 7,
        "parry": 9,
        "magicAttack": 4,
        "fort": 6,
        "ref": 6,
        "will": 11,
        "features": [
          "Social Ability"
        ]
      },
      "20": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 7,
        "parry": 10,
        "magicAttack": 5,
        "fort": 6,
        "ref": 6,
        "will": 12,
        "features": [
          "Absolute Power",
          "Lead By Example +8"
        ]
      }
    }
  },
  "nomad": {
    "hitDie": 10,
    "skillPointsPerLevel": 4,
    "classType": "Base Class",
    "source": "CR p. 53",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Bluff (Cha), Climb (Str), Craft (any mundane) (Int), Gather Information (Cha), Handle Animal (Cha), Heal (Wis), Hide (Dex), Knowledge (local) (Int), Knowledge (rumours) (Int), Listen (Wis), Move Silently (Dex), Ride (Dex), Search (Int), Sharpen (Wis), Spot (Wis), Survival (Wis).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Track",
          "Favoured Terrain +1",
          "Born to the Saddle"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 0,
        "features": [
          "Bonus Feat"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Endurance"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Nomad Charge +1",
          "Favoured Terrain +2"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Mobility"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Diehard"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Bonus Feat"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 2,
        "features": [
          "Favoured Terrain +3"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 3,
        "features": [
          "Second Favoured Terrain +1"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Improved Mobility"
        ]
      },
      "11": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Nomad Charge +2"
        ]
      },
      "12": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 3,
        "fort": 8,
        "ref": 8,
        "will": 4,
        "features": [
          "Bonus Feat",
          "Favoured Terrain +4"
        ]
      },
      "13": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 3,
        "fort": 8,
        "ref": 8,
        "will": 4,
        "features": [
          "Born to the Saddle"
        ]
      },
      "14": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 7,
        "parry": 7,
        "magicAttack": 3,
        "fort": 9,
        "ref": 9,
        "will": 4,
        "features": [
          "Second Favoured Terrain +2"
        ]
      },
      "15": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 7,
        "parry": 7,
        "magicAttack": 3,
        "fort": 9,
        "ref": 9,
        "will": 5,
        "features": [
          "Greater Mobility"
        ]
      },
      "16": {
        "bab": 16,
        "attackSequence": "+16/+11/+6/+1",
        "dodge": 8,
        "parry": 8,
        "magicAttack": 4,
        "fort": 10,
        "ref": 10,
        "will": 5,
        "features": [
          "Favoured Terrain +5"
        ]
      },
      "17": {
        "bab": 17,
        "attackSequence": "+17/+12/+7/+2",
        "dodge": 8,
        "parry": 8,
        "magicAttack": 4,
        "fort": 10,
        "ref": 10,
        "will": 5,
        "features": [
          "Bonus Feat"
        ]
      },
      "18": {
        "bab": 18,
        "attackSequence": "+18/+13/+8/+3",
        "dodge": 9,
        "parry": 9,
        "magicAttack": 4,
        "fort": 11,
        "ref": 11,
        "will": 6,
        "features": [
          "Nomad Charge +3"
        ]
      },
      "19": {
        "bab": 19,
        "attackSequence": "+19/+14/+9/+4",
        "dodge": 9,
        "parry": 9,
        "magicAttack": 4,
        "fort": 11,
        "ref": 11,
        "will": 6,
        "features": [
          "Second Favoured Terrain +3"
        ]
      },
      "20": {
        "bab": 20,
        "attackSequence": "+20/+15/+10/+5",
        "dodge": 10,
        "parry": 10,
        "magicAttack": 5,
        "fort": 12,
        "ref": 12,
        "will": 6,
        "features": [
          "Favoured Terrain +6",
          "Mounted Mobility"
        ]
      }
    }
  },
  "pirate": {
    "hitDie": 8,
    "skillPointsPerLevel": 6,
    "classType": "Base Class",
    "source": "CR p. 56",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Balance (Dex), Bluff (Cha), Climb (Str), Craft (any mundane) (Int), Disguise (Cha), Escape Artist (Dex), Gather Information (Cha), Intimidate (Cha), Jump (Str), Knowledge (geography) (Int), Knowledge (rumours) (Int), Move Silently (Dex),Search (Int), Sharpen (Wis), Spot (Wis), Survival (Wis), Swim (Str), Tactics (Int), Tumble (Dex), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Seamanship +1",
          "Ferocious Attack"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 0,
        "features": [
          "Pirate Code",
          "To Sail a Road of Blood and Slaughter"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Sneak Attack +1d6",
          "Sneak Subdual"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Uncanny Dodge"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Mobility"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 4,
        "parry": 3,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Sneak Attack +2d6",
          "Seamanship +2"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 5,
        "parry": 3,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Bite Sword",
          "Ferocious Attack (additional attack)"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 4,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 2,
        "features": [
          "Improved Uncanny Dodge",
          "Poison Resistance +1"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 4,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 3,
        "features": [
          "Sneak Attack +3d6"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 7,
        "parry": 5,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Improved Mobility",
          "Navigation"
        ]
      },
      "11": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 8,
        "parry": 5,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Seamanship +3"
        ]
      },
      "12": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 9,
        "parry": 6,
        "magicAttack": 3,
        "fort": 8,
        "ref": 8,
        "will": 4,
        "features": [
          "Sneak Attack +4d6"
        ]
      },
      "13": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 9,
        "parry": 6,
        "magicAttack": 3,
        "fort": 8,
        "ref": 8,
        "will": 4,
        "features": [
          "Ferocious Attack (stun, blood & slaughter)"
        ]
      },
      "14": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 10,
        "parry": 7,
        "magicAttack": 3,
        "fort": 9,
        "ref": 9,
        "will": 4,
        "features": [
          "Poison Resistance +2"
        ]
      },
      "15": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 11,
        "parry": 7,
        "magicAttack": 3,
        "fort": 9,
        "ref": 9,
        "will": 5,
        "features": [
          "Sneak Attack +5d6",
          "Greater Mobility"
        ]
      },
      "16": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 12,
        "parry": 8,
        "magicAttack": 4,
        "fort": 10,
        "ref": 10,
        "will": 5,
        "features": [
          "Seamanship +4"
        ]
      },
      "17": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 12,
        "parry": 8,
        "magicAttack": 4,
        "fort": 10,
        "ref": 10,
        "will": 5,
        "features": []
      },
      "18": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 13,
        "parry": 9,
        "magicAttack": 4,
        "fort": 11,
        "ref": 11,
        "will": 6,
        "features": [
          "Sneak Attack +6d6"
        ]
      },
      "19": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 14,
        "parry": 9,
        "magicAttack": 4,
        "fort": 11,
        "ref": 11,
        "will": 6,
        "features": [
          "Ferocious Attack (fear)"
        ]
      },
      "20": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 15,
        "parry": 10,
        "magicAttack": 5,
        "fort": 12,
        "ref": 12,
        "will": 6,
        "features": [
          "Poison Resistance +3 (and half effect)"
        ]
      }
    }
  },
  "scholar": {
    "hitDie": 6,
    "skillPointsPerLevel": 8,
    "classType": "Base Class",
    "source": "CR p. 60",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Bluff (Cha), Concentration (Con), Craft (alchemy) (Int), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (herbalism) (Int), Craft (mask) (Int), Craft (talking drum) (Int), Decipher Script (Int), Forgery (Int), Gather Information (Cha), Heal (Wis), Intimidate (Cha), Knowledge (arcana) (Int), Knowledge (architecture and engineering) (Int), Knowledge (astrology) (Int),), Knowledge (geography) (Int), Knowledge (history) (Int), Knowledge (local) (Int), Knowledge (Mystery: God) (Int), Knowledge (nature) (Int), Knowledge (nobility) (Int), Knowledge (religion) (Int), Knowledge (rumours) (Int), Knowledge (warfare) (Int), Listen (Wis), Move Silently (Dex),Profession (Wis), Profession (mummifier) (Wis), Profession (scribe) (Wis), Search (Int), Sense Motive (Wis).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 0,
        "will": 2,
        "features": [
          "New Sorcery Style",
          "Scholar",
          "Background",
          "Base Power Points",
          "Knowledge Is Power"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 1,
        "fort": 0,
        "ref": 0,
        "will": 3,
        "features": [
          "\"+1 Power Point",
          "New Sorcery Style"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 1,
        "fort": 1,
        "ref": 1,
        "will": 3,
        "features": [
          "Advanced Spell",
          "Bonus Spell"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 2,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "Advanced Spell",
          "New Sorcery Style"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 2,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "Advanced Spell",
          "Iron Will"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 3,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "Advanced Spell",
          "+1 Power Point",
          "Increased Maximum PP (triple)"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 3,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "Advanced Spell",
          "Bonus Spell"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 4,
        "fort": 2,
        "ref": 2,
        "will": 6,
        "features": [
          "Advanced Spell",
          "New Sorcery Style"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 4,
        "fort": 3,
        "ref": 3,
        "will": 6,
        "features": [
          "Advanced Spell"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 5,
        "fort": 3,
        "ref": 3,
        "will": 7,
        "features": [
          "Advanced Spell",
          "+1 Power Point"
        ]
      },
      "11": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 5,
        "fort": 3,
        "ref": 3,
        "will": 7,
        "features": [
          "Advanced Spell",
          "Bonus Spell"
        ]
      },
      "12": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 6,
        "fort": 4,
        "ref": 4,
        "will": 8,
        "features": [
          "Advanced Spell",
          "New Sorcery Style"
        ]
      },
      "13": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 6,
        "fort": 4,
        "ref": 4,
        "will": 8,
        "features": [
          "Advanced Spell",
          "Increased Maximum PP (quadruple)"
        ]
      },
      "14": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 7,
        "fort": 4,
        "ref": 4,
        "will": 9,
        "features": [
          "Advanced Spell",
          "+1 Power Point"
        ]
      },
      "15": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 7,
        "fort": 5,
        "ref": 5,
        "will": 9,
        "features": [
          "Advanced Spell",
          "Bonus Spell"
        ]
      },
      "16": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 8,
        "fort": 5,
        "ref": 5,
        "will": 10,
        "features": [
          "Advanced Spell",
          "New Sorcery Style"
        ]
      },
      "17": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 8,
        "fort": 5,
        "ref": 5,
        "will": 10,
        "features": [
          "Advanced Spell"
        ]
      },
      "18": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 9,
        "fort": 6,
        "ref": 6,
        "will": 11,
        "features": [
          "Advanced Spell",
          "+1 Power Point"
        ]
      },
      "19": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 7,
        "parry": 7,
        "magicAttack": 9,
        "fort": 6,
        "ref": 6,
        "will": 11,
        "features": [
          "Advanced Spell",
          "Bonus Spell"
        ]
      },
      "20": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 7,
        "parry": 7,
        "magicAttack": 10,
        "fort": 6,
        "ref": 6,
        "will": 12,
        "features": [
          "Advanced Spell",
          "New Sorcery Style",
          "Increased Maximum PP (quintuple)"
        ]
      }
    }
  },
  "soldier": {
    "hitDie": 10,
    "skillPointsPerLevel": 4,
    "classType": "Base Class",
    "source": "CR p. 64",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Challenge (Cha), Climb (Str), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (mask) (Int), Craft (talking drum) (Int), Intimidate (Cha), Jump (Str), Knowledge (geography) (Int), Knowledge (local) (Int), Knowledge (rumours) (Int), Knowledge (warfare) (Int),Profession (Wis),Ride (Dex), Search (Int), Sharpen (Wis), Tactics (Int).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 0,
        "will": 0,
        "features": [
          "Bonus Feat"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 0,
        "will": 0,
        "features": [
          "Bonus Feat"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 3,
        "ref": 1,
        "will": 1,
        "features": [
          "Formation Combat"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 1,
        "will": 1,
        "features": [
          "Bonus Feat"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 1,
        "will": 1,
        "features": [
          "Officer"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 1,
        "fort": 5,
        "ref": 2,
        "will": 2,
        "features": [
          "Bonus Feat"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 1,
        "fort": 5,
        "ref": 2,
        "will": 2,
        "features": [
          "Formation Combat"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 2,
        "will": 2,
        "features": [
          "Bonus Feat"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 3,
        "will": 3,
        "features": [
          "Officer +1"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 5,
        "parry": 7,
        "magicAttack": 2,
        "fort": 7,
        "ref": 3,
        "will": 3,
        "features": [
          "Bonus Feat"
        ]
      },
      "11": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 5,
        "parry": 8,
        "magicAttack": 2,
        "fort": 7,
        "ref": 3,
        "will": 3,
        "features": [
          "Formation Combat"
        ]
      },
      "12": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 6,
        "parry": 9,
        "magicAttack": 3,
        "fort": 8,
        "ref": 4,
        "will": 4,
        "features": [
          "Bonus Feat"
        ]
      },
      "13": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 6,
        "parry": 9,
        "magicAttack": 3,
        "fort": 8,
        "ref": 4,
        "will": 4,
        "features": [
          "Officer +2"
        ]
      },
      "14": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 7,
        "parry": 10,
        "magicAttack": 3,
        "fort": 9,
        "ref": 4,
        "will": 4,
        "features": [
          "Bonus Feat"
        ]
      },
      "15": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 7,
        "parry": 11,
        "magicAttack": 3,
        "fort": 9,
        "ref": 5,
        "will": 5,
        "features": [
          "Formation Combat"
        ]
      },
      "16": {
        "bab": 16,
        "attackSequence": "+16/+11/+6/+1",
        "dodge": 8,
        "parry": 12,
        "magicAttack": 4,
        "fort": 10,
        "ref": 5,
        "will": 5,
        "features": [
          "Bonus Feat"
        ]
      },
      "17": {
        "bab": 17,
        "attackSequence": "+17/+12/+7/+2",
        "dodge": 8,
        "parry": 12,
        "magicAttack": 4,
        "fort": 10,
        "ref": 5,
        "will": 5,
        "features": [
          "Officer +3"
        ]
      },
      "18": {
        "bab": 18,
        "attackSequence": "+18/+13/+8/+3",
        "dodge": 9,
        "parry": 13,
        "magicAttack": 4,
        "fort": 11,
        "ref": 6,
        "will": 6,
        "features": [
          "Bonus Feat"
        ]
      },
      "19": {
        "bab": 19,
        "attackSequence": "+19/+14/+9/+4",
        "dodge": 9,
        "parry": 14,
        "magicAttack": 4,
        "fort": 11,
        "ref": 6,
        "will": 6,
        "features": [
          "Formation Combat"
        ]
      },
      "20": {
        "bab": 20,
        "attackSequence": "+20/+15/+10/+5",
        "dodge": 10,
        "parry": 15,
        "magicAttack": 5,
        "fort": 12,
        "ref": 6,
        "will": 6,
        "features": [
          "Bonus Feat"
        ]
      }
    }
  },
  "temptress": {
    "hitDie": 8,
    "skillPointsPerLevel": 8,
    "classType": "Base Class",
    "source": "CR p. 67",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Bluff (Cha), Craft (alchemy) (Int), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (herbalism) (Int), Craft (mask) (Int), Craft (talking drum) (Int), Diplomacy (Cha), Disguise (Cha), Escape Artist (Dex), Forgery (Int), Gather Information (Cha), Heal (Wis), Hide (Dex), Intimidate (Cha), Knowledge (local) (Int), Knowledge (nobility) (Int), Knowledge (rumours) (Int), Listen (Wis), Move Silently (Dex), Perform (act) (Cha), Perform (chastity) (Cha), Perform (comedy) (Cha), Perform (dance) (Cha), Perform (oratory) (Cha), Perform (percussion instruments) (Cha), Perform (rhetoric) (Cha), Perform (ritual) (Cha), Perform (sing) (Cha), Perform (string instruments) (Cha), Perform (talking drum) (Cha), Perform (virginity) (Cha), Perform (wind instruments) (Cha), Profession (Wis),Search (Int), Sense Motive (Wis), Sleight of Hand (Dex), Spot (Wis), Swim (Str), Tumble (Dex), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 2,
        "will": 2,
        "features": [
          "Comeliness",
          "Savoir-Faire"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 3,
        "will": 3,
        "features": [
          "Seductive Art +1",
          "Compelling Performance 1/day"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 3,
        "will": 3,
        "features": [
          "Secret Art"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 1,
        "fort": 1,
        "ref": 4,
        "will": 4,
        "features": [
          "Seductive Savant"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 1,
        "fort": 1,
        "ref": 4,
        "will": 4,
        "features": [
          "Binding Contract"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 2,
        "magicAttack": 1,
        "fort": 2,
        "ref": 5,
        "will": 5,
        "features": [
          "Seductive Art +2",
          "Compelling Performance 2/day"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 2,
        "magicAttack": 1,
        "fort": 2,
        "ref": 5,
        "will": 5,
        "features": [
          "Improved Secret Art",
          "Admirers"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 3,
        "magicAttack": 2,
        "fort": 2,
        "ref": 6,
        "will": 6,
        "features": [
          "Inspire"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 3,
        "magicAttack": 2,
        "fort": 3,
        "ref": 6,
        "will": 6,
        "features": [
          "Outrageous Flattery"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 5,
        "parry": 3,
        "magicAttack": 2,
        "fort": 3,
        "ref": 7,
        "will": 7,
        "features": [
          "Seductive Art +3",
          "Compelling Performance 3/day"
        ]
      },
      "11": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 5,
        "parry": 4,
        "magicAttack": 2,
        "fort": 3,
        "ref": 7,
        "will": 7,
        "features": [
          "Advanced Secret Art",
          "Exquisite"
        ]
      },
      "12": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 6,
        "parry": 4,
        "magicAttack": 3,
        "fort": 4,
        "ref": 8,
        "will": 8,
        "features": []
      },
      "13": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 6,
        "parry": 4,
        "magicAttack": 3,
        "fort": 4,
        "ref": 8,
        "will": 8,
        "features": [
          "Use Weakness as Strength"
        ]
      },
      "14": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 7,
        "parry": 5,
        "magicAttack": 3,
        "fort": 4,
        "ref": 9,
        "will": 9,
        "features": [
          "Seductive Art +4",
          "Compelling Performance 4/day"
        ]
      },
      "15": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 7,
        "parry": 5,
        "magicAttack": 3,
        "fort": 5,
        "ref": 9,
        "will": 9,
        "features": []
      },
      "16": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 8,
        "parry": 6,
        "magicAttack": 4,
        "fort": 5,
        "ref": 10,
        "will": 10,
        "features": [
          "Veiled In Darkness"
        ]
      },
      "17": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 8,
        "parry": 6,
        "magicAttack": 4,
        "fort": 5,
        "ref": 10,
        "will": 10,
        "features": [
          "Perfected Secret Art"
        ]
      },
      "18": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 9,
        "parry": 6,
        "magicAttack": 4,
        "fort": 6,
        "ref": 11,
        "will": 11,
        "features": [
          "Seductive Art +5"
        ]
      },
      "19": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 9,
        "parry": 7,
        "magicAttack": 4,
        "fort": 6,
        "ref": 11,
        "will": 11,
        "features": [
          "Compelling Performance 5/day"
        ]
      },
      "20": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 10,
        "parry": 7,
        "magicAttack": 5,
        "fort": 6,
        "ref": 12,
        "will": 12,
        "features": [
          "Glorious"
        ]
      }
    }
  },
  "thief": {
    "hitDie": 8,
    "skillPointsPerLevel": 8,
    "classType": "Base Class",
    "source": "CR p. 67",
    "requirements": "",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Balance (Dex), Bluff (Cha), Climb (Str), Craft (any mundane) (Int),Decipher Script (Int), Diplomacy (Cha), Disable Device (Int), Disguise (Cha), Escape Artist (Dex), Forgery (Int), Gather Information (Cha), Hide (Dex), Intimidate (Cha), Jump (Str), Knowledge (arcana) (Int), Knowledge (local) (Int), Knowledge (nobility) (Int), Knowledge (rumours) (Int), Listen (Wis), Move Silently (Dex), Open Lock (Dex), Profession (Wis), Profession (mummifier) (Wis), Profession (scribe) (Wis), Search (Int), Sense Motive (Wis), Sharpen (Wis), Sleight of Hand (Dex), Spot (Wis), Tumble (Dex), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 2,
        "will": 0,
        "features": [
          "Sneak Attack Style",
          "Sneak Attack +1d6/+1d8",
          "Trap Disarming"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 0,
        "ref": 3,
        "will": 0,
        "features": [
          "Eyes of the Cat"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 3,
        "will": 1,
        "features": [
          "Sneak Attack +2d6/+2d8",
          "Trap Sense +1"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 1,
        "ref": 4,
        "will": 1,
        "features": [
          "Sneak Attack Style",
          "Light-Footed"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 1,
        "ref": 4,
        "will": 1,
        "features": [
          "Sneak Attack +3d6/+3d8"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 5,
        "will": 2,
        "features": [
          "Trap Sense +2",
          "Special Ability"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 5,
        "will": 2,
        "features": [
          "Sneak Attack +4d6/+4d8"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 2,
        "fort": 2,
        "ref": 6,
        "will": 2,
        "features": [
          "Sneak Attack Style",
          "Poison Use"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 2,
        "fort": 3,
        "ref": 6,
        "will": 3,
        "features": [
          "Sneak Attack +5d6/+5d8",
          "Trap Sense +3"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 2,
        "fort": 3,
        "ref": 7,
        "will": 3,
        "features": [
          "Special Ability"
        ]
      },
      "11": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 2,
        "fort": 3,
        "ref": 7,
        "will": 3,
        "features": [
          "Sneak Attack +6d6/+6d8"
        ]
      },
      "12": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 3,
        "fort": 4,
        "ref": 8,
        "will": 4,
        "features": [
          "Sneak Attack Style",
          "Trap Sense +4"
        ]
      },
      "13": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 6,
        "parry": 6,
        "magicAttack": 3,
        "fort": 4,
        "ref": 8,
        "will": 4,
        "features": [
          "Sneak Attack +7d6/+7d8"
        ]
      },
      "14": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 7,
        "parry": 7,
        "magicAttack": 3,
        "fort": 4,
        "ref": 9,
        "will": 4,
        "features": [
          "Special Ability"
        ]
      },
      "15": {
        "bab": 11,
        "attackSequence": "+11/+6/+1",
        "dodge": 7,
        "parry": 7,
        "magicAttack": 3,
        "fort": 5,
        "ref": 9,
        "will": 5,
        "features": [
          "Sneak Attack +8d6/+8d8",
          "Trap Sense +5"
        ]
      },
      "16": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 8,
        "parry": 8,
        "magicAttack": 4,
        "fort": 5,
        "ref": 10,
        "will": 5,
        "features": [
          "Sneak Attack Style"
        ]
      },
      "17": {
        "bab": 12,
        "attackSequence": "+12/+7/+2",
        "dodge": 8,
        "parry": 8,
        "magicAttack": 4,
        "fort": 5,
        "ref": 10,
        "will": 5,
        "features": [
          "Sneak Attack +9d6/+9d8"
        ]
      },
      "18": {
        "bab": 13,
        "attackSequence": "+13/+8/+3",
        "dodge": 9,
        "parry": 9,
        "magicAttack": 4,
        "fort": 6,
        "ref": 11,
        "will": 6,
        "features": [
          "Trap Sense +6",
          "Special Ability"
        ]
      },
      "19": {
        "bab": 14,
        "attackSequence": "+14/+9/+4",
        "dodge": 9,
        "parry": 9,
        "magicAttack": 4,
        "fort": 6,
        "ref": 11,
        "will": 6,
        "features": [
          "Sneak Attack +10d6/+10d8"
        ]
      },
      "20": {
        "bab": 15,
        "attackSequence": "+15/+10/+5",
        "dodge": 10,
        "parry": 10,
        "magicAttack": 5,
        "fort": 6,
        "ref": 12,
        "will": 6,
        "features": [
          "Sneak Attack Style"
        ]
      }
    }
  },
  "agentOfTheCrown": {
    "hitDie": 10,
    "skillPointsPerLevel": 2,
    "classType": "Prestige Class",
    "source": "MCR p. 9",
    "requirements": "Base Attack Bonus: +4 or better. Feat: Investigator. Skills: Diplomacy 4 ranks, Sense Motive 4 ranks, Spot 6 ranks. Special: Must previously have been deputised as a Patrolman or soldier in the armies of Argos; service under contract or letter of marque as a mercenary can also qualify.",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Climb (Str), Diplomacy (Cha), Gather Information (Cha), Intimidate (Cha), Jump (Str), Knowledge (geography) (Int), Knowledge (local) (Int), Knowledge (nobility) (Int), Listen (Wis), Ride (Dex), Search (Int), Sense Motive (Wis), Spot (Wis), Survival (Wis), Use Rope (Dex)",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 0,
        "will": 0,
        "features": [
          "Agent of the Crown Ability",
          "Authority"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 0,
        "will": 0,
        "features": [
          "Interrogation +2"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 3,
        "ref": 1,
        "will": 1,
        "features": [
          "Bonus Feat"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 1,
        "will": 1,
        "features": [
          "Agent of the Crown Ability"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 1,
        "will": 1,
        "features": [
          "Interrogation +4"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 1,
        "fort": 5,
        "ref": 2,
        "will": 2,
        "features": [
          "Bonus Feat"
        ]
      },
      "7": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 1,
        "fort": 5,
        "ref": 2,
        "will": 2,
        "features": [
          "Agent of the Crown Ability"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 2,
        "will": 2,
        "features": [
          "Interrogation +6"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 3,
        "will": 3,
        "features": [
          "Bonus Feat"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 5,
        "parry": 7,
        "magicAttack": 2,
        "fort": 7,
        "ref": 3,
        "will": 3,
        "features": [
          "Agent of the Crown Ability"
        ]
      }
    }
  },
  "axeman": {
    "hitDie": 12,
    "skillPointsPerLevel": 3,
    "classType": "Prestige Class",
    "source": "WC p. 58",
    "requirements": "Base Attack Bonus: +4 or higher; Feats: Power Attack, Weapon Focus (any axe-type weapon); Skills: Intimidate 4 ranks",
    "proficiencies": "",
    "classSkillsText": "Balance (Dex), Bluff (Cha), Climb (Str), Craft (any mundane) (Int), Handle Animal (Cha), Intimidate (Cha), Jump (Str), Listen (Wis), Perform (Cha), Profession (any) (Wis), Ride (Dex), Search (Int), Sense Motive (Wis), Spot (Wis), Survival (Wis), Tumble (Dex), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 2,
        "will": 0,
        "features": [
          "Axe Mastery (+0/+1)"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 0,
        "parry": 1,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Bonus Feat",
          "Low Grip"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Axe Mastery (+1/+1)",
          "Power Hurler"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 1,
        "parry": 3,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Butcher's Cleave"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 2,
        "features": [
          "Axe Mastery (+1/+2)",
          "Bonus Feat"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 2,
        "parry": 4,
        "magicAttack": 1,
        "fort": 5,
        "ref": 4,
        "will": 2,
        "features": [
          "To the Bone",
          "High Grip"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 1,
        "fort": 6,
        "ref": 5,
        "will": 3,
        "features": [
          "Axe Mastery (+2/+2)",
          "Disarming Stroke"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 2,
        "fort": 6,
        "ref": 5,
        "will": 3,
        "features": [
          "Bonus Feat",
          "Brutal Force"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 7,
        "ref": 6,
        "will": 4,
        "features": [
          "Sundering Stroke"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 4,
        "parry": 7,
        "magicAttack": 2,
        "fort": 8,
        "ref": 6,
        "will": 4,
        "features": [
          "Unstoppable Stroke"
        ]
      }
    }
  },
  "dancingSavage": {
    "hitDie": 10,
    "skillPointsPerLevel": 4,
    "classType": "Prestige Class",
    "source": "ATR p. 144",
    "requirements": "Race: Pict; Base Attack Bonus: +6; Skills: Perform (Dance) 8 ranks; Feats: Mobility, Improved Initiative, Combat Expertise, Improved Feint",
    "proficiencies": "",
    "classSkillsText": "Climb (Str), Craft (herbalism) (Int), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (talking drum) (Int), Handle Animal (Cha), Hide (Dex), Jump (Str), Knowledge (geography), Knowledge (local), Knowledge (nature) (Int), Listen (Wis), Move Silently (Dex), Profession (Wis), Search (Int), Speak Language (none), Spot (Wis), Swim (Str), Survival (Wis), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 1,
        "ref": 1,
        "will": 0,
        "features": [
          "Improved Uncanny Dodge",
          "Sneak Attack +1d6"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Whirlwind Attack"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 1,
        "features": [
          "Improved Mobility"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Sneak Attack +2d6"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": []
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 2,
        "features": [
          "Greater Uncanny Dodge"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 5,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 2,
        "features": [
          "Sneak Attack +3d6",
          "Greater Feint"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Greater Mobility"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 5,
        "ref": 5,
        "will": 3,
        "features": [
          "Dance of Death"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 7,
        "parry": 3,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 3,
        "features": [
          "Sneak Attack +4d6"
        ]
      }
    }
  },
  "drummerInTheDark": {
    "hitDie": 8,
    "skillPointsPerLevel": 4,
    "classType": "Prestige Class",
    "source": "ATR p. 146",
    "requirements": "Race: Pict; Skills: Perform (Talking Drum) 8 ranks, Craft (Talking Drum) 6 ranks, Knowledge (nature) 4 ranks; Feats: Drum Focus and at least one other Drum feat.",
    "proficiencies": "",
    "classSkillsText": "Bluff (Cha), Climb (Str), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (talking drum) (Int), Diplomacy (Cha), Gather Information (Cha), Hide (Dex), Intimidate (Cha), Jump (Str), Knowledge (nature) (Int), Move Silently (Dex), Perform (Cha), Search (Int), Spot (Wis), Survival (Wis), Swim (Str), Tumble (Dex), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 2,
        "will": 2,
        "features": [
          "Carried with the Wind"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 3,
        "will": 3,
        "features": [
          "Drum Bonus Feat"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 3,
        "will": 3,
        "features": [
          "Drum Mastery (not flat-footed)"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 1,
        "ref": 4,
        "will": 4,
        "features": [
          "Counter Drumming"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 1,
        "ref": 4,
        "will": 4,
        "features": [
          "Drum Mastery (movement)"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 4,
        "parry": 2,
        "magicAttack": 1,
        "fort": 2,
        "ref": 5,
        "will": 5,
        "features": [
          "Drum Bonus Feat"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 5,
        "parry": 2,
        "magicAttack": 1,
        "fort": 2,
        "ref": 5,
        "will": 5,
        "features": [
          "Drum Mastery (alert)"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 2,
        "ref": 6,
        "will": 6,
        "features": [
          "Echoes in the Forests"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 3,
        "ref": 6,
        "will": 6,
        "features": [
          "Drum Mastery (take 10)"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 7,
        "parry": 3,
        "magicAttack": 2,
        "fort": 3,
        "ref": 7,
        "will": 7,
        "features": [
          "Drum Master",
          "Drum Bonus Feat"
        ]
      }
    }
  },
  "duellist": {
    "hitDie": 8,
    "skillPointsPerLevel": 6,
    "classType": "Prestige Class",
    "source": "WC p. 61",
    "requirements": "Base Attack Bonus: +6 or higher; Feats: Combat Reflexes, Parry; Skills: Bluff 6 ranks, Sense Motive 6 ranks.",
    "proficiencies": "",
    "classSkillsText": "Balance (Dex), Bluff (Cha), Challenge (Cha), Climb (Str), Craft (any mundane) (Int), Diplomacy (Cha), Gather Information (Cha), Intimidate (Cha), Jump (Str), Listen (Wis), Perform (Cha), Profession (any) (Wis), Sense Motive (Wis), Spot (Wis), Tumble (Dex).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 0,
        "ref": 2,
        "will": 1,
        "features": [
          "One-on-One (+1)"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 1,
        "ref": 3,
        "will": 1,
        "features": [
          "Bonus Feat",
          "Lunge"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 3,
        "magicAttack": 1,
        "fort": 1,
        "ref": 3,
        "will": 2,
        "features": [
          "Improved Critical",
          "Opportunist (+1d6)"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 4,
        "will": 2,
        "features": [
          "Bonus Feat",
          "Misdirect Charge"
        ]
      },
      "5": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 4,
        "magicAttack": 1,
        "fort": 2,
        "ref": 5,
        "will": 3,
        "features": [
          "Counterstroke",
          "One-on-One (+3)"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 2,
        "fort": 3,
        "ref": 5,
        "will": 3,
        "features": [
          "Bonus Feat",
          "Off-Handed"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 6,
        "magicAttack": 2,
        "fort": 3,
        "ref": 6,
        "will": 4,
        "features": [
          "Confidence",
          "Opportunist (+2d6)"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 6,
        "magicAttack": 2,
        "fort": 4,
        "ref": 7,
        "will": 4,
        "features": [
          "Bonus Feat",
          "On All Sides"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 7,
        "magicAttack": 3,
        "fort": 4,
        "ref": 7,
        "will": 5,
        "features": [
          "One-on-One (+5)"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 4,
        "parry": 8,
        "magicAttack": 3,
        "fort": 5,
        "ref": 8,
        "will": 5,
        "features": [
          "Bonus Feat",
          "Two-on-One"
        ]
      }
    }
  },
  "forestRunner": {
    "hitDie": 8,
    "skillPointsPerLevel": 6,
    "classType": "Prestige Class",
    "source": "ATR p. 147",
    "requirements": "Base Attack Bonus: +5; Skills: Move Silently 8 ranks, Hide 8 ranks; Feats: Fleet-Footed, Stealthy, Run.",
    "proficiencies": "",
    "classSkillsText": "Balance (Dex), Climb (Str), Craft (any mundane) (Int), Craft (herbalism) (Int), Escape Artist (Dex), Handle Animal (Cha), Heal (Wis), Hide (Dex), Jump (Str), Knowledge (geography), Knowledge (local), Knowledge (nature) (Int), Listen (Wis), Move Silently (Dex), Profession (Wis), Search (Int), Speak Language (none), Spot (Wis), Swim (Str), Survival (Wis), Tumble (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 1,
        "ref": 1,
        "will": 0,
        "features": [
          "Woodland Stride"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Fleet-Footed"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 1,
        "features": [
          "Eyes of the Cat"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Swift Tracker (full speed)"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Mobility"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 4,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 2,
        "features": [
          "Camouflage"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 5,
        "parry": 2,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 2,
        "features": [
          "Fleet-Footed",
          "Melt Away"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Improved Mobility"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 5,
        "ref": 5,
        "will": 3,
        "features": [
          "Hide in Plain Sight"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 7,
        "parry": 3,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 3,
        "features": [
          "Swift Tracker (run)"
        ]
      }
    }
  },
  "gunderlandMercenary": {
    "hitDie": 8,
    "skillPointsPerLevel": 4,
    "classType": "Prestige Class",
    "source": "AFW p. 141",
    "requirements": "Base Attack Bonus: +6; Code of Honour: Mercenary Code of Honour; Feat: Toughness.",
    "proficiencies": "",
    "classSkillsText": "Bluff (Cha), Climb (Str), Craft (Int), Intimidate (Cha), Jump (Str), Knowledge (geography) (Int), Knowledge (local) (Int), Profession (Wis), Ride (Dex), Sense Motive (Wis), Swim (Str).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Blood Money 1/day"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 0,
        "features": [
          "At Home in Armour"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Patchwork Armour +1"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Cheap Shot +1d6"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Blood Money 2/day"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Patchwork Armour +2"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Cat Nap"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 2,
        "features": [
          "Cheap Shot +2d6"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 3,
        "features": [
          "Patchwork Armour +3"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 5,
        "parry": 7,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Blood Money 3/day",
          "Cheap Shot 2/day"
        ]
      }
    }
  },
  "gunderlandPikeman": {
    "hitDie": 10,
    "skillPointsPerLevel": 2,
    "classType": "Prestige Class",
    "source": "AFW p. 143",
    "requirements": "Race: Gunderman; Feat: Gunderland Pike-and-Shield Fighting; Weapon Proficiency: Must be proficient with the standard pike; Base Attack Bonus: +5.",
    "proficiencies": "",
    "classSkillsText": "Balance (Dex), Climb (Str), Craft (Int), Intimidate (Cha), Jump (Str), Knowledge (geography) (Int), Knowledge (local) (Int), Perform (Cha), Profession (Wis), Ride (Dex), Search (Int), Survival (Wis), Swim (Str).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 0,
        "will": 0,
        "features": [
          "Gunderland Pike",
          "Pike Mastery"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 0,
        "will": 0,
        "features": [
          "Close Combat Weapon"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 3,
        "ref": 1,
        "will": 1,
        "features": [
          "Pike Bash",
          "Bonus Feat"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 1,
        "will": 1,
        "features": [
          "Charge Barricade"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 1,
        "will": 1,
        "features": [
          "Pike Mastery"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 1,
        "fort": 5,
        "ref": 2,
        "will": 2,
        "features": [
          "Bonus Feat"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 1,
        "fort": 5,
        "ref": 2,
        "will": 2,
        "features": [
          "Greater Gunderland Pike-and-Shield Fighting"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 2,
        "will": 2,
        "features": [
          "Supreme Bravery"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 3,
        "will": 3,
        "features": [
          "Bonus Feat"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 5,
        "parry": 7,
        "magicAttack": 2,
        "fort": 7,
        "ref": 3,
        "will": 3,
        "features": [
          "Pike Mastery"
        ]
      }
    }
  },
  "houseAgent": {
    "hitDie": 8,
    "skillPointsPerLevel": 6,
    "classType": "Prestige Class",
    "source": "MCR p. 7",
    "requirements": "Feats: Deceitful or Investigator, and Light-Footed. Skills: Bluff 4 ranks, Diplomacy 4 ranks, Disguise 6 ranks.",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Balance (Dex), Bluff (Cha), Climb (Str), Concentration (Con), Craft (any mundane) (Int), Decipher Script (Int), Diplomacy (Cha), Disable Device (Cha), Disguise (Cha), Escape Artist (Dex), Forgery (Int), Gather Information (Cha), Hide (Dex), Intimidate (Cha), Jump (Str), Knowledge (geography) (Int), Knowledge (history) (Int), Knowledge (local) (Int), Knowledge (nobility) (Int), Knowledge (religion) (Int), Listen (Wis), Move Silently (Dex), Open Lock (Dex), Perform (Cha), Profession (Wis), Ride (Dex), Search (Int), Sense Motive (Wis), Sleight of Hand (Dex), Spot (Wis), Survival (Wis), Tumble (Dex), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 2,
        "will": 0,
        "features": [
          "Bonus Feat",
          "House Agent Ability"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 0,
        "ref": 3,
        "will": 0,
        "features": [
          "Shadowing +2"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 3,
        "will": 1,
        "features": [
          "House Agent Ability"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 1,
        "ref": 4,
        "will": 1,
        "features": [
          "Alias",
          "Bonus Feat"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 1,
        "ref": 4,
        "will": 1,
        "features": [
          "Shadowing +4"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 5,
        "will": 2,
        "features": [
          "House Agent Ability"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 5,
        "will": 2,
        "features": [
          "Alias",
          "Bonus Feat"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 2,
        "fort": 2,
        "ref": 6,
        "will": 2,
        "features": [
          "Shadowing +6"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 4,
        "magicAttack": 2,
        "fort": 3,
        "ref": 6,
        "will": 3,
        "features": [
          "House Agent Ability"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 5,
        "parry": 5,
        "magicAttack": 2,
        "fort": 3,
        "ref": 7,
        "will": 3,
        "features": [
          "Alias",
          "Bonus Feat"
        ]
      }
    }
  },
  "huntMaster": {
    "hitDie": 8,
    "skillPointsPerLevel": 6,
    "classType": "Prestige Class",
    "source": "ATR p. 148",
    "requirements": "Race: Pict; Base Attack Bonus: +6; Skills: Spot 8 ranks, Knowledge (nature) 4 ranks; Feats: Stealthy, Track, Point Blank Shot, Endurance.",
    "proficiencies": "",
    "classSkillsText": "Climb (Str), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (herbalism) (Int), Craft (talking drum) (Int), Handle Animal (Cha), Hide (Dex), Jump (Str), Knowledge (geography) (Int), Knowledge (local) (Int), Knowledge (nature) (Int), Listen (Wis), Move Silently (Dex), Profession (Wis), Search (Int), Spot (Wis), Swim (Str), Survival (Wis), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Wild Empathy",
          "Poison Use"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 0,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 0,
        "features": [
          "Woodland Stride"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Swift Tracker (full speed)"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": []
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 1,
        "features": [
          "Camouflage"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 2,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Improved Precise Shot"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 5,
        "parry": 2,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 2,
        "features": [
          "Passing of the Panther"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 2,
        "features": [
          "Out of Thin Air"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 3,
        "features": [
          "Hide in Plain Sight"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 7,
        "parry": 3,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 3,
        "features": [
          "Swift Tracker (run)"
        ]
      }
    }
  },
  "lordOfTheBlackRing": {
    "hitDie": 6,
    "skillPointsPerLevel": 6,
    "classType": "Prestige Class",
    "source": "SoS p. 161",
    "requirements": "Sorcery Styles: At least four, including Summonings; Code of Honour: None; Skills: Knowledge (arcana) 12 ranks, Perform (ritual) 12 ranks; Race: Stygian; Religion: Worshipper of Set in good standing; Corruption: 3+; Special: Member of the Black Ring coven for at least one year.",
    "proficiencies": "",
    "classSkillsText": "Bluff (Cha), Concentration (Con), Craft (alchemy) (Int), Craft (herbalism) (Int), Diplomacy (Cha), Gather Information (Cha), Intimidate (Cha), Knowledge (any) (Int), Perform (Cha), Sense Motive (Wis), Sleight of Hand (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 0,
        "will": 2,
        "features": [
          "1 Power Point",
          "Advanced Spell",
          "Scholar Levels",
          "Demonologist"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 1,
        "fort": 0,
        "ref": 0,
        "will": 3,
        "features": [
          "Advanced Spell"
        ]
      },
      "3": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 2,
        "fort": 1,
        "ref": 1,
        "will": 3,
        "features": [
          "Advanced Spell x2 or New Sorcery Style"
        ]
      },
      "4": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 3,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "+1 Power Point",
          "Advanced Spell"
        ]
      },
      "5": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 3,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "Advanced Spell"
        ]
      },
      "6": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 4,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "Advanced Spell x2 or New Sorcery Style"
        ]
      },
      "7": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 5,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "+1 Power Point",
          "Advanced Spell"
        ]
      },
      "8": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 6,
        "fort": 2,
        "ref": 2,
        "will": 6,
        "features": [
          "Advanced Spell"
        ]
      },
      "9": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 6,
        "fort": 3,
        "ref": 3,
        "will": 6,
        "features": [
          "Advanced Spell x2 or New Sorcery Style"
        ]
      },
      "10": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 7,
        "fort": 3,
        "ref": 3,
        "will": 7,
        "features": [
          "+1 Power Point",
          "Advanced Spell"
        ]
      }
    }
  },
  "masterOfDeath": {
    "hitDie": 6,
    "skillPointsPerLevel": 6,
    "classType": "Prestige Class",
    "source": "SoS p. 167",
    "requirements": "Sorcery Styles: At least three, including Necromancy and Summonings; Skills: Knowledge (arcana) 8 ranks, Concentration 8 ranks; Corruption: 5+; Special: Must have a demonic pact, must be dead and mummified, and must have the soul returned to the body by a third party.",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Bluff (Cha), Concentration (Con), Craft (alchemy) (Int), Craft (herbalism) (Int), Craft (any mundane) (Int), Decipher Script (Int), Heal (Wis), Intimidate (Cha), Knowledge (any) (Int), Listen (Wis), Move Silently (Dex), Search (Int), Sense Motive (Wis), Sleight of Hand (Dex)",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 0,
        "will": 2,
        "features": [
          "Undeath",
          "Scholar Levels",
          "+1 Power Point",
          "Advanced Spell"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 1,
        "fort": 3,
        "ref": 0,
        "will": 3,
        "features": [
          "New Sorcery Style or Advanced Spell"
        ]
      },
      "3": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 2,
        "fort": 3,
        "ref": 1,
        "will": 3,
        "features": [
          "\"+1 Power Point",
          "Advanced Spell"
        ]
      },
      "4": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 3,
        "fort": 4,
        "ref": 1,
        "will": 4,
        "features": [
          "Improved Undeath",
          "Advanced Spell"
        ]
      },
      "5": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 3,
        "fort": 4,
        "ref": 1,
        "will": 4,
        "features": [
          "New Sorcery Style or Advanced Spell"
        ]
      },
      "6": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 4,
        "fort": 5,
        "ref": 2,
        "will": 5,
        "features": [
          "\"+1 Power Point",
          "Advanced Spell"
        ]
      },
      "7": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 5,
        "fort": 5,
        "ref": 2,
        "will": 5,
        "features": [
          "Greater Undeath",
          "Advanced Spell"
        ]
      },
      "8": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 6,
        "fort": 6,
        "ref": 2,
        "will": 6,
        "features": [
          "New Sorcery Style or Advanced Spell"
        ]
      },
      "9": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 6,
        "fort": 6,
        "ref": 3,
        "will": 6,
        "features": [
          "\"+1 Power Point",
          "Advanced Spell"
        ]
      },
      "10": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 7,
        "fort": 7,
        "ref": 3,
        "will": 7,
        "features": [
          "Perfected Undeath",
          "Advanced Spell"
        ]
      }
    }
  },
  "masterOfTheBlackCircle": {
    "hitDie": 6,
    "skillPointsPerLevel": 8,
    "classType": "Prestige Class",
    "source": "SoS p. 163",
    "requirements": "Sorcery Styles: At least five, including Summonings, Cosmic Magic and Oriental Magic; Spells: ranged hypnotism, greater demonic pact, summon demon, form demon; Magic Attack Bonus: +7; Feats: Craft Magic Item, Craft Major Magic Item, Permanent Sorcery, Leadership; Skills: Knowledge (arcana) 18 ranks, Perform (ritual) 18 ranks; Corruption: 5+; Special: Construct the pomegranate altar of the Black Circle, hold Mount Yimsha or a comparable stronghold, slay any existing rival Master of the Black Circle, and maintain a greater demonic pact with a demon lord.",
    "proficiencies": "",
    "classSkillsText": "Bluff (Cha), Concentration (Con), Craft (alchemy) (Int), Craft (herbalism) (Int), Craft (any mundane) (Int), Decipher Script (Int), Diplomacy (Cha), Gather Information (Cha), Intimidate (Cha), Knowledge (any) (Int), Perform (Cha), Search (Int), Sense Motive (Wis), Sleight of Hand (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 0,
        "will": 2,
        "features": [
          "\"+1 Power Point",
          "Advanced Spell",
          "Summon Lords of the Black Circle",
          "Scholar Levels"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 0,
        "magicAttack": 1,
        "fort": 3,
        "ref": 0,
        "will": 3,
        "features": [
          "\"+1 Power Point",
          "Advanced Spell",
          "New Sorcery Style"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 1,
        "fort": 3,
        "ref": 1,
        "will": 3,
        "features": [
          "\"+1 Power Point",
          "Advanced Spell",
          "Master Mesmerist"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 2,
        "fort": 4,
        "ref": 1,
        "will": 4,
        "features": [
          "\"+1 Power Point",
          "Advanced Spell",
          "New Sorcery Style"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 2,
        "fort": 4,
        "ref": 1,
        "will": 4,
        "features": [
          "\"+1 Power Point",
          "Advanced Spell",
          "Spellcraft"
        ]
      }
    }
  },
  "merchantPrince": {
    "hitDie": 8,
    "skillPointsPerLevel": 4,
    "classType": "Prestige Class",
    "source": "MCR p. 2",
    "requirements": "Race: Native-born Argossean, or sponsored by / married into a native Merchant House. Class Ability: Title, Social Ability. Reputation: 20+. Skills: Diplomacy 6 ranks, Knowledge (local) 6 ranks. Special: Must belong to one or more guilds to trade legally in Messantia.",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Bluff (Cha), Craft (any), Diplomacy (Cha), Gather Information (Cha), Handle Animal (Cha), Intimidate (Cha), Knowledge (local) (Int), Knowledge (nobility) (Int), Listen (Wis), Perform (Cha), Profession (any) (Wis), Ride (Dex), Sense Motive (Wis), Spot (Wis).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 0,
        "will": 2,
        "features": [
          "Assistance I",
          "Contact",
          "Property"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 1,
        "magicAttack": 0,
        "fort": 0,
        "ref": 0,
        "will": 3,
        "features": [
          "Bonus Social Feat",
          "Hard Bargain +1"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 1,
        "will": 3,
        "features": [
          "Communicator",
          "Contact",
          "Investment"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 1,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "Bonus Social Feat"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 1,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "Assistance II",
          "Communicator",
          "Contact",
          "Hard Bargain +2"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "Bonus Social Feat",
          "Investment"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "Contact",
          "Communicator",
          "Entrepreneur"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 2,
        "fort": 2,
        "ref": 2,
        "will": 6,
        "features": [
          "Bonus Social Feat",
          "Hard Bargain +3"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 2,
        "fort": 3,
        "ref": 3,
        "will": 6,
        "features": [
          "Contact",
          "Communicator",
          "Investment"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 2,
        "fort": 3,
        "ref": 3,
        "will": 7,
        "features": [
          "Bonus Social Feat",
          "Assistance III",
          "Hard Bargain +4"
        ]
      }
    }
  },
  "paramountChief": {
    "hitDie": 10,
    "skillPointsPerLevel": 4,
    "classType": "Prestige Class",
    "source": "ATR p. 150",
    "requirements": "Race: Pict; Skills: Diplomacy 9 ranks, Sense Motive 5 ranks, Intimidate 5 ranks; Feat: Leadership; Special: Must be granted the title by the chiefs and councils of the tribes.",
    "proficiencies": "",
    "classSkillsText": "Bluff (Cha), Climb (Str), Craft (any mundane) (Int), Craft (body paint) (Int), Craft (talking drum) (Int), Diplomacy (Cha), Gather Information (Cha), Handle Animal (Cha), Intimidate (Cha), Jump (Str), Knowledge (local) (Int), Knowledge (nobility) (Int), Perform (Cha), Profession (Wis), Search (Int), Sense Motive (Wis), Speak Language (none), Swim (Str).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 1,
        "ref": 1,
        "will": 0,
        "features": [
          "Blood Feud",
          "Natural Leader"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 0,
        "features": [
          "Culling the Weak"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 1,
        "features": [
          "Negotiator"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "Horde"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 3,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 1,
        "features": [
          "War of Nations"
        ]
      }
    }
  },
  "pitFighter": {
    "hitDie": 10,
    "skillPointsPerLevel": 2,
    "classType": "Prestige Class",
    "source": "WC p. 65",
    "requirements": "Base Attack Bonus: +4 or higher; Ability: Charisma 12+; Feats: Endurance, Weapon Focus (any Exotic Weapon); Skills: Heal 4 ranks; Special: Cannot have the Civilised Code of Honour.",
    "proficiencies": "",
    "classSkillsText": "Balance (Dex), Bluff (Cha), Climb (Str), Disguise (Cha), Handle Animal (Cha), Heal (Wis), Intimidate (Cha), Jump (Str), Listen (Wis), Perform (showmanship) (Cha), Profession (gladiator/fighter) (Wis), Sense Motive (Wis), Sleight of Hand (Dex), Spot (Wis), Survival (Wis), Swim (Str), Tumble (Dex), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 2,
        "will": 0,
        "features": [
          "Combat Mastery I",
          "Fighting Style"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 2,
        "ref": 3,
        "will": 1,
        "features": [
          "Maximise Protection (+2)"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 2,
        "ref": 3,
        "will": 1,
        "features": [
          "Bonus Feat",
          "Fame/Infamy"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 3,
        "ref": 4,
        "will": 2,
        "features": [
          "Combat Mastery II",
          "Showman Macabre"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 4,
        "will": 2,
        "features": [
          "Bloody Mess",
          "Fighting Style"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 2,
        "parry": 4,
        "magicAttack": 1,
        "fort": 4,
        "ref": 5,
        "will": 3,
        "features": [
          "Bonus Feat",
          "Maximise Protection (+4)"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 1,
        "fort": 5,
        "ref": 5,
        "will": 3,
        "features": [
          "Combat Mastery III"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 4,
        "features": [
          "Back from the Brink"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 2,
        "fort": 6,
        "ref": 6,
        "will": 4,
        "features": [
          "Bonus Feat",
          "Fighting Style"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 7,
        "ref": 7,
        "will": 5,
        "features": [
          "Combat Mastery IV",
          "Merchant of Death"
        ]
      }
    }
  },
  "poitainianKnight": {
    "hitDie": 10,
    "skillPointsPerLevel": 4,
    "classType": "Prestige Class",
    "source": "AFR p. 145",
    "requirements": "Base Attack Bonus: +5; Code of Honour: Chivalrous Code of Honour; Skills: Ride 8 ranks; Feat: Mounted Combat; Special: Must possess the Heavy Cavalry Formation Combat ability from the Soldier class.",
    "proficiencies": "",
    "classSkillsText": "Climb (Str), Handle Animal (Cha), Intimidate (Cha), Jump (Str), Knowledge (geography) (Int), Knowledge (local) (Int), Knowledge (nobility) (Int), Ride (Dex).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 2,
        "ref": 0,
        "will": 0,
        "features": [
          "Born to the Saddle",
          "Horsemanship +1"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 3,
        "ref": 0,
        "will": 0,
        "features": [
          "Armour Tolerance +1"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 3,
        "ref": 1,
        "will": 1,
        "features": [
          "Horsemanship +2"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 1,
        "will": 1,
        "features": [
          "Armour Tolerance +2",
          "Lance Charge +1"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 4,
        "ref": 1,
        "will": 1,
        "features": [
          "Born to the Saddle"
        ]
      },
      "6": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 1,
        "fort": 5,
        "ref": 2,
        "will": 2,
        "features": [
          "Armour Tolerance +3",
          "Horsemanship +3"
        ]
      },
      "7": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 3,
        "parry": 5,
        "magicAttack": 1,
        "fort": 5,
        "ref": 2,
        "will": 2,
        "features": [
          "Improved Heavy Cavalry"
        ]
      },
      "8": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 2,
        "will": 2,
        "features": [
          "Armour Tolerance +4",
          "Lance Charge +2"
        ]
      },
      "9": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 4,
        "parry": 6,
        "magicAttack": 2,
        "fort": 6,
        "ref": 3,
        "will": 3,
        "features": [
          "Horsemanship +4"
        ]
      },
      "10": {
        "bab": 10,
        "attackSequence": "+10/+5",
        "dodge": 5,
        "parry": 7,
        "magicAttack": 2,
        "fort": 7,
        "ref": 3,
        "will": 3,
        "features": [
          "Armour Tolerance +5",
          "Born to the Saddle"
        ]
      }
    }
  },
  "savage": {
    "hitDie": 10,
    "skillPointsPerLevel": 2,
    "classType": "Prestige Class",
    "source": "WC p. 68",
    "requirements": "Base Attack Bonus: +3 or higher; Feats: Fighting-Madness, Power Attack; Skills: Survival 4 ranks; Special: Cannot have the Civilised Code of Honour.",
    "proficiencies": "",
    "classSkillsText": "Balance (Dex), Climb (Str), Craft (any mundane) (Int), Handle Animal (Cha), Heal (Wis), Hide (Dex), Intimidate (Cha), Jump (Str), Listen (Wis), Move Silently (Dex), Search (Int), Sense Motive (Wis), Spot (Wis), Survival (Wis), Swim (Str), Tumble (Dex).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 1,
        "will": 1,
        "features": [
          "Know No Fear",
          "Simple Weapon Focus"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 1,
        "features": [
          "As Good as Steel",
          "Savage Charge"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 1,
        "fort": 2,
        "ref": 3,
        "will": 2,
        "features": [
          "Dedication I",
          "Simple Weapon Master"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 2,
        "features": [
          "Cold Anger"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 2,
        "magicAttack": 2,
        "fort": 3,
        "ref": 4,
        "will": 3,
        "features": [
          "Dedication II",
          "Felling Blow"
        ]
      }
    }
  },
  "sorcererOfTheScarletCircle": {
    "hitDie": 6,
    "skillPointsPerLevel": 6,
    "classType": "Prestige Class",
    "source": "SoS p. 145",
    "requirements": "Sorcery Styles: At least three, including Oriental Magic; Feats: Brawl, Defensive Martial Arts, Improved Unarmed Strike; Skills: Knowledge (arcana) 8 ranks, Perform (ritual) 8 ranks; Race: Born east of the Vilayet Sea (including Khitans, Vendhyans, Himelian tribesmen and some Hyrkanians); Corruption: 1+.",
    "proficiencies": "",
    "classSkillsText": "Appraise (Int), Bluff (Cha), Concentration (Con), Craft (alchemy) (Int), Craft (herbalism) (Int), Craft (any mundane) (Int), Decipher Script (Int), Diplomacy (Cha), Heal (Wis), Intimidate (Cha), Knowledge (any) (Int), Listen (Wis), Move Silently (Dex), Perform (Cha), Profession (Wis), Search (Int), Sense Motive (Wis), Sleight of Hand (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 0,
        "will": 2,
        "features": [
          "Unarmed Strike (1d8)",
          "Scholar Levels"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 0,
        "magicAttack": 0,
        "fort": 0,
        "ref": 0,
        "will": 3,
        "features": [
          "Combination Attack",
          "Advanced Spell"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 2,
        "parry": 1,
        "magicAttack": 1,
        "fort": 1,
        "ref": 1,
        "will": 3,
        "features": [
          "New Sorcery Style",
          "Advanced Spell"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "Unarmed Strike (1d10)",
          "Advanced Spell"
        ]
      },
      "5": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 3,
        "parry": 1,
        "magicAttack": 1,
        "fort": 1,
        "ref": 1,
        "will": 4,
        "features": [
          "\"+1 Power Point",
          "Advanced Spell"
        ]
      },
      "6": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 4,
        "parry": 2,
        "magicAttack": 2,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "Impenetrable Fortress",
          "Advanced Spell"
        ]
      },
      "7": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 5,
        "parry": 2,
        "magicAttack": 2,
        "fort": 2,
        "ref": 2,
        "will": 5,
        "features": [
          "Unarmed Strike (1d12)",
          "Advanced Spell"
        ]
      },
      "8": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 3,
        "fort": 2,
        "ref": 2,
        "will": 6,
        "features": [
          "New Sorcery Style",
          "Advanced Spell"
        ]
      },
      "9": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 6,
        "parry": 3,
        "magicAttack": 3,
        "fort": 3,
        "ref": 3,
        "will": 6,
        "features": [
          "Arrow Fist",
          "Advanced Spell"
        ]
      },
      "10": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 7,
        "parry": 3,
        "magicAttack": 3,
        "fort": 3,
        "ref": 3,
        "will": 7,
        "features": [
          "Unarmed Strike (2d6)",
          "+1 Power Point",
          "Advanced Spell"
        ]
      }
    }
  },
  "warlord": {
    "hitDie": 10,
    "skillPointsPerLevel": 6,
    "classType": "Prestige Class",
    "source": "WC p. 71",
    "requirements": "Base Attack Bonus: +5 or higher; Feat: Leadership; Ability: Charisma 13+; Skills: Profession (mercenary or soldier) 6 ranks; Special: Must possess one form of the Formation Combat class feature.",
    "proficiencies": "",
    "classSkillsText": "Balance (Dex), Bluff (Cha), Challenge (Cha), Climb (Str), Diplomacy (Cha), Gather Information (Cha), Handle Animal (Cha), Heal (Wis), Intimidate (Cha), Jump (Str), Knowledge (any) (Int), Listen (Wis), Perform (oratory) (Cha), Profession (mercenary or soldier) (Wis), Ride (Dex), Search (Wis), Sense Motive (Wis), Sharpen (Wis), Spot (Wis), Survival (Wis), Tactics (Int), Tumble (Dex).",
    "levels": {
      "1": {
        "bab": 0,
        "attackSequence": "",
        "dodge": 0,
        "parry": 1,
        "magicAttack": 0,
        "fort": 1,
        "ref": 1,
        "will": 1,
        "features": [
          "Inspire (+1)",
          "Instinctual Attack"
        ]
      },
      "2": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 0,
        "fort": 1,
        "ref": 1,
        "will": 2,
        "features": [
          "Bonus Feat",
          "Formation Combat"
        ]
      },
      "3": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 1,
        "fort": 2,
        "ref": 2,
        "will": 2,
        "features": [
          "Soldier's Life"
        ]
      },
      "4": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 1,
        "fort": 2,
        "ref": 2,
        "will": 3,
        "features": [
          "Bonus Feat",
          "Lead the Charge"
        ]
      },
      "5": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 3,
        "features": [
          "Inspire (+2)",
          "Formation Combat"
        ]
      },
      "6": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 3,
        "parry": 4,
        "magicAttack": 2,
        "fort": 3,
        "ref": 3,
        "will": 4,
        "features": [
          "Bonus Feat",
          "Never Surrender"
        ]
      },
      "7": {
        "bab": 6,
        "attackSequence": "+6/+1",
        "dodge": 4,
        "parry": 5,
        "magicAttack": 2,
        "fort": 4,
        "ref": 4,
        "will": 4,
        "features": [
          "Enemy Evaluation"
        ]
      },
      "8": {
        "bab": 7,
        "attackSequence": "+7/+2",
        "dodge": 5,
        "parry": 6,
        "magicAttack": 2,
        "fort": 4,
        "ref": 4,
        "will": 5,
        "features": [
          "Bonus Feat",
          "Formation Combat"
        ]
      },
      "9": {
        "bab": 8,
        "attackSequence": "+8/+3",
        "dodge": 5,
        "parry": 6,
        "magicAttack": 3,
        "fort": 5,
        "ref": 5,
        "will": 5,
        "features": [
          "Embodiment of Victory"
        ]
      },
      "10": {
        "bab": 9,
        "attackSequence": "+9/+4",
        "dodge": 6,
        "parry": 7,
        "magicAttack": 3,
        "fort": 5,
        "ref": 5,
        "will": 6,
        "features": [
          "Bonus Feat",
          "Inspire (+3)"
        ]
      }
    }
  },
  "wrestler": {
    "hitDie": 10,
    "skillPointsPerLevel": 2,
    "classType": "Prestige Class",
    "source": "WC p. 74",
    "requirements": "Base Attack Bonus: +3 or higher; Feats: Improved Grapple, Improved Initiative; Skills: Tumble 4 ranks.",
    "proficiencies": "",
    "classSkillsText": "Balance (Dex), Bluff (Cha), Challenge (Cha), Climb (Str), Escape Artist (Dex), Heal (Wis), Intimidate (Cha), Jump (Str), Listen (Wis), Search (Int), Sense Motive (Wis), Spot (Wis), Survival (Wis), Tumble (Dex), Use Rope (Dex).",
    "levels": {
      "1": {
        "bab": 1,
        "attackSequence": "+1",
        "dodge": 0,
        "parry": 1,
        "magicAttack": 0,
        "fort": 2,
        "ref": 1,
        "will": 0,
        "features": [
          "Critical Grapple",
          "Improved Hold"
        ]
      },
      "2": {
        "bab": 2,
        "attackSequence": "+2",
        "dodge": 1,
        "parry": 1,
        "magicAttack": 0,
        "fort": 2,
        "ref": 2,
        "will": 1,
        "features": [
          "Reactionary Grapple",
          "Unflinching Form I"
        ]
      },
      "3": {
        "bab": 3,
        "attackSequence": "+3",
        "dodge": 1,
        "parry": 2,
        "magicAttack": 1,
        "fort": 3,
        "ref": 2,
        "will": 1,
        "features": [
          "Turn Weapon",
          "Wrench Limb"
        ]
      },
      "4": {
        "bab": 4,
        "attackSequence": "+4",
        "dodge": 2,
        "parry": 2,
        "magicAttack": 1,
        "fort": 3,
        "ref": 3,
        "will": 2,
        "features": [
          "Stranglehold",
          "Unflinching Form II"
        ]
      },
      "5": {
        "bab": 5,
        "attackSequence": "+5",
        "dodge": 2,
        "parry": 3,
        "magicAttack": 2,
        "fort": 4,
        "ref": 4,
        "will": 2,
        "features": [
          "Deathgrip"
        ]
      }
    }
  }
};

export const CONAN_CLASS_FEATURES = [
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Bite Sword",
    "levels": "2",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-1"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Crimson Mist / Greater Crimson Mist",
    "levels": "2, 11, 26",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-2"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Damage Reduction",
    "levels": "10, 13, 16, 19",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-3"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Diehard",
    "levels": "6",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-4"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Endurance",
    "levels": "3",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-5"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Fearless",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-6"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Mobility / Improved Mobility / Greater Mobility",
    "levels": "5, 10, 15",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-7"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Track",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-8"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Trap Sense",
    "levels": "3, 6, 9, 12, 15, 18",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-9"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Uncanny Dodge / Improved Uncanny Dodge",
    "levels": "4, 8, 26",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-10"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Unconquerable",
    "levels": "17",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-11"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Versatility",
    "levels": "1, 7, 14, 20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-12"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Wheel of Death",
    "levels": "18",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 41-44",
    "masterId": "classFeatures-13"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Argossean Gladiator Barbarian",
    "levels": "Varies",
    "abilityType": "Regional / cultural class variant",
    "description": "",
    "requirements": "Region/culture: Argos",
    "source": "AZ p. 11-12",
    "masterId": "classFeatures-14"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Argossean Inland Barbarian",
    "levels": "Varies",
    "abilityType": "Regional / cultural class variant",
    "description": "",
    "requirements": "Region/culture: Argos",
    "source": "AZ p. 11",
    "masterId": "classFeatures-15"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Black Kingdom Tribal Magician",
    "levels": "Varies",
    "abilityType": "Regional / cultural class variant",
    "description": "",
    "requirements": "Region/culture: Black Kingdoms Replaces/modifies: Trap Sense; Prerequisite/culture: Tribal magician of the Black Kingdoms",
    "source": "FF p. 26",
    "masterId": "classFeatures-16"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Zingaran Gladiator Barbarian",
    "levels": "Varies",
    "abilityType": "Regional / cultural class variant",
    "description": "",
    "requirements": "Region/culture: Zingara",
    "source": "AZ p. 55-56",
    "masterId": "classFeatures-17"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Cultural Weapon",
    "levels": "1, 7, 14, 20",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Versatility; Prerequisite/culture: -",
    "source": "WC p. 26",
    "masterId": "classFeatures-18"
  },
  {
    "classKey": "barbarian",
    "className": "Barbarian",
    "name": "Fighting Frenzy",
    "levels": "2, 11, 26",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Crimson Mist / Greater Crimson Mist; Prerequisite/culture: -",
    "source": "WC p. 26-27",
    "masterId": "classFeatures-19"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Track",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 44-47",
    "masterId": "classFeatures-20"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Bonus Feat",
    "levels": "10, 14, 18",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 44-47",
    "masterId": "classFeatures-21"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Combat Style / Improved Combat Style / Combat Style Mastery",
    "levels": "2, 5, 11",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 44-47",
    "masterId": "classFeatures-22"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Combat Style - Archery",
    "levels": "2, 5, 11",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 45-47",
    "masterId": "classFeatures-23"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Combat Style - Trapping",
    "levels": "2, 5, 11",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 45-47",
    "masterId": "classFeatures-24"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Combat Style - Two-Weapon Combat",
    "levels": "2, 5, 11",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 45-47",
    "masterId": "classFeatures-25"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Argossean Trident Combat Style",
    "levels": "2, 5, 11",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Standard Borderer Combat Style; Prerequisite/culture: No racial prerequisite; cultural name indicates likely origin",
    "source": "Argos and Zingara p. 86",
    "masterId": "classFeatures-26"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Crossbowman Combat Style",
    "levels": "2, 5, 11",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Standard Borderer Combat Style",
    "source": "WC p. 27-28",
    "masterId": "classFeatures-27"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Mountaineering Combat Style",
    "levels": "2, 5, 11",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Standard Borderer Combat Style",
    "source": "WC p. 27-28",
    "masterId": "classFeatures-28"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Pugilism Combat Style",
    "levels": "2, 5, 11",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Standard Borderer Combat Style",
    "source": "WC p. 27-28",
    "masterId": "classFeatures-29"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Spearman Combat Style",
    "levels": "2, 5, 11",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Standard Borderer Combat Style",
    "source": "WC p. 27-28",
    "masterId": "classFeatures-30"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Stygian Tomb Avenger Combat Style",
    "levels": "2, 5, 11",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Standard Borderer Combat Style; Prerequisite/culture: No racial prerequisite; cultural name indicates likely origin",
    "source": "Stygia - Serpent of the South p. 121",
    "masterId": "classFeatures-31"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Woodsman Combat Style",
    "levels": "2, 5, 11",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Standard Borderer Combat Style",
    "source": "WC p. 27-28",
    "masterId": "classFeatures-32"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Zingaran Sneak Attack Combat Style",
    "levels": "2, 5, 11",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Standard Borderer Combat Style; Prerequisite/culture: No racial prerequisite; cultural name indicates likely origin",
    "source": "Argos and Zingara p. 86",
    "masterId": "classFeatures-33"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Zingaran Whip Combat Style",
    "levels": "2, 5, 11",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Standard Borderer Combat Style; Prerequisite/culture: No racial prerequisite; cultural name indicates likely origin",
    "source": "Argos and Zingara p. 86",
    "masterId": "classFeatures-34"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Favoured Terrain",
    "levels": "1, 4, 7, 8, 12, 13, 16, 17, 19, 20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 44-47",
    "masterId": "classFeatures-35"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Guide",
    "levels": "7, 13, 20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 44-47",
    "masterId": "classFeatures-36"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Terrain Tactics",
    "levels": "7, 13, 20",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Guide",
    "source": "WC p. 28",
    "masterId": "classFeatures-37"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Heroic Sacrifice",
    "levels": "15",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 44-47",
    "masterId": "classFeatures-38"
  },
  {
    "classKey": "borderer",
    "className": "Borderer",
    "name": "Swift Tracker",
    "levels": "9, 18, 26",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 44-47",
    "masterId": "classFeatures-39"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Absolute Power",
    "levels": "20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-40"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Do You Know Who I Am?",
    "levels": "11",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-41"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Enhanced Leadership",
    "levels": "6",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-42"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Lead By Example",
    "levels": "5, 10, 15, 20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-43"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Rally",
    "levels": "16",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-44"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Rank Hath Its Privileges",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-45"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability",
    "levels": "4, 9, 14, 19",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-46"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability Alternative - Hunting Bonus Feat",
    "levels": "4, 9, 14, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "GM discretion.",
    "source": "CR p. 49",
    "masterId": "classFeatures-47"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Ally",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-48"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Comeliness",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-49"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Entertainer",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-50"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Etiquette",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-51"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Family Ties",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-52"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Improved Standing",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-53"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Refuge",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-54"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Savoir-Faire",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-55"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Secrets",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-56"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Smear Others",
    "levels": "Selectable at 4, 9, 14 or 19",
    "abilityType": "Core selectable social ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 49-52",
    "masterId": "classFeatures-57"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Born Officer",
    "levels": "4, 9, 14, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "",
    "source": "WC p. 28-29",
    "masterId": "classFeatures-58"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Fighting School",
    "levels": "4, 9, 14, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "",
    "source": "WC p. 28-29",
    "masterId": "classFeatures-59"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Soldiery Training",
    "levels": "4, 9, 14, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "",
    "source": "WC p. 28-29",
    "masterId": "classFeatures-60"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Social Ability - Threaten",
    "levels": "4, 9, 14, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Wealth; Prerequisite/culture: -",
    "source": "WC p. 28-29",
    "masterId": "classFeatures-61"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-62"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Caldrayne",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Broadsword, Hunting bow, Heavy lance; +1 Ride",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-63"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Corvayne",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Broadsword and Arming sword; +1 Parry Defence.",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-64"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Mournesse",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Broadsword, Hunting bow; +1 Knowledge (History)",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-65"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Thalmyr",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Pike, Crossbow; +1 Prfession (Soldier) and Diplomacy",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-66"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Vel Morath",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Dagger, Short Sword and Poniard; +1 Reflex saves.",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-67"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Skarnholl",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Battle Axe & Nordhimer Double Axe; +1 Knowledge (Arcane); +1 Fortitude Saves",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-68"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Xhombara",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with War Spear and Hunting bow; +1 Perform (ritual) and Craft (alchemy).",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-69"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Kar Vossak",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Warhammer; +1 Climb, Survival, Knowledge (dungeoneering), Sense Motive and Diplomacy",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-70"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Uldara",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Sabre; +1 Knowledge (local), Perception, Ride, Survival, and Appraise",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-71"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Qadiraq",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\" +1 Attack with Kukri and Arming Sword: +1 Knowledge (Local), Appraise, Diplomacy",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-72"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Sarhaddon",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Stygian longbow; +1 magic attack; +1 Knowledge (arcana).",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-73"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Tazul Kor",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Attack with Tulwar; +1 Diplomacy, Knowledge (nobility), Gather Information and Sense Motive.",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-74"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Keshtovar",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "\"+1 Magic Attack; +1 all Knowledge checks.",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "HBC p. N/A",
    "masterId": "classFeatures-75"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Hyboria",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 50",
    "masterId": "classFeatures-76"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Hyrkania",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 50",
    "masterId": "classFeatures-77"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Khitai",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 50",
    "masterId": "classFeatures-78"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Kush",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 50",
    "masterId": "classFeatures-79"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Shem",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 50",
    "masterId": "classFeatures-80"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Stygia",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 50",
    "masterId": "classFeatures-81"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Vendhya",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 50",
    "masterId": "classFeatures-82"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Zamora",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 50",
    "masterId": "classFeatures-83"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Special Regional Feature - Zingara",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Each time this feature is gained, the regional bonuses increase by +1.",
    "source": "CR p. 50",
    "masterId": "classFeatures-84"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Title",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-85"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Wealth",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 47-53",
    "masterId": "classFeatures-86"
  },
  {
    "classKey": "noble",
    "className": "Noble",
    "name": "Well-Equipped",
    "levels": "1",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "",
    "source": "WC p. 28",
    "masterId": "classFeatures-87"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Bonus Feat",
    "levels": "2, 7, 12, 17",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 54-57",
    "masterId": "classFeatures-88"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Born to the Saddle",
    "levels": "1, 13, 26",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 54-57",
    "masterId": "classFeatures-89"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Diehard",
    "levels": "6",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 54-57",
    "masterId": "classFeatures-90"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Endurance",
    "levels": "3",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 54-57",
    "masterId": "classFeatures-91"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Favoured Terrain",
    "levels": "1, 4, 8, 9, 12, 14, 16, 19, 20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 54-57",
    "masterId": "classFeatures-92"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Mobility / Improved Mobility / Greater Mobility",
    "levels": "5, 10, 15",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 54-57",
    "masterId": "classFeatures-93"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Mounted Mobility",
    "levels": "20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 54-57",
    "masterId": "classFeatures-94"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Nomad Charge",
    "levels": "4, 11, 18",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 54-57",
    "masterId": "classFeatures-95"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Track",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 54-57",
    "masterId": "classFeatures-96"
  },
  {
    "classKey": "nomad",
    "className": "Nomad",
    "name": "Common Threat",
    "levels": "1, 9, 26",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Favoured Terrain",
    "source": "WC p. 29",
    "masterId": "classFeatures-97"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Bite Sword",
    "levels": "7",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-98"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Ferocious Attack",
    "levels": "1, 7, 13, 19",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-99"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Mobility / Improved Mobility / Greater Mobility",
    "levels": "5, 10, 15",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-100"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Navigation",
    "levels": "10",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-101"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Pirate Code",
    "levels": "2",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-102"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Pirate Code - Barachan",
    "levels": "2",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "",
    "source": "CR p. 57-59",
    "masterId": "classFeatures-103"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Pirate Code - Black Coast",
    "levels": "2",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "",
    "source": "CR p. 57-59",
    "masterId": "classFeatures-104"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Pirate Code - Vilayet Sea",
    "levels": "2",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "",
    "source": "CR p. 57-59",
    "masterId": "classFeatures-105"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Pirate Code - Zingaran",
    "levels": "2",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "",
    "source": "CR p. 57-59",
    "masterId": "classFeatures-106"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Poison Resistance",
    "levels": "8, 14, 20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-107"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Seamanship",
    "levels": "1, 6, 11, 16",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-108"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Sneak Attack / Sneak Subdual",
    "levels": "3, 6, 9, 12, 15, 18",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-109"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "To Sail a Road of Blood and Slaughter",
    "levels": "2",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-110"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Uncanny Dodge / Improved Uncanny Dodge",
    "levels": "4, 8, 26",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "N/A",
    "source": "CR p. 57-60",
    "masterId": "classFeatures-111"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Parting Blow",
    "levels": "3, 6, 9, 12, 15, 18",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Sneak Attack progression; Prerequisite/culture: -",
    "source": "WC p. 29",
    "masterId": "classFeatures-112"
  },
  {
    "classKey": "pirate",
    "className": "Pirate",
    "name": "Scrapper",
    "levels": "3",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Sneak Subdual; Prerequisite/culture: -",
    "source": "WC p. 29",
    "masterId": "classFeatures-113"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - All-Seeing Eye",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Wisdom 13+",
    "source": "WC p. 38",
    "masterId": "classFeatures-114"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - All-Seeing Eye, Greater",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Wisdom 15+, All-Seeing Eye",
    "source": "WC p. 38",
    "masterId": "classFeatures-115"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Animalist Peace",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "-",
    "source": "WC p. 38",
    "masterId": "classFeatures-116"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Culmination of Force",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Greater Focal Strike",
    "source": "WC p. 38",
    "masterId": "classFeatures-117"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Endless Breath",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "-",
    "source": "WC p. 38",
    "masterId": "classFeatures-118"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Feat of Strength",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "-",
    "source": "WC p. 38",
    "masterId": "classFeatures-119"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Focal Strike",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "-",
    "source": "WC p. 38",
    "masterId": "classFeatures-120"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Focal Strike, Greater",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Base attack bonus +3, Focal Strike",
    "source": "WC p. 39",
    "masterId": "classFeatures-121"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Focal Weapon",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Focal Strike",
    "source": "WC p. 39",
    "masterId": "classFeatures-122"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Focussed Aim",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Base attack bonus +1",
    "source": "WC p. 39",
    "masterId": "classFeatures-123"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Focussed Aim, Greater",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Base attack bonus +4, Focussed Aim",
    "source": "WC p. 39",
    "masterId": "classFeatures-124"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Healing Trance",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Painlessness",
    "source": "WC p. 39",
    "masterId": "classFeatures-125"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Hide in Plain Sight",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "All-Seeing Eye",
    "source": "WC p. 39",
    "masterId": "classFeatures-126"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Imperviousness",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Painlessness",
    "source": "WC p. 39",
    "masterId": "classFeatures-127"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Imperviousness, Greater",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Imperviousness",
    "source": "WC p. 39",
    "masterId": "classFeatures-128"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Painlessness",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "-",
    "source": "WC p. 40",
    "masterId": "classFeatures-129"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Sanctify Body",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Healing Trance",
    "source": "WC p. 40",
    "masterId": "classFeatures-130"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Shatter Strike",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "Focal Strike",
    "source": "WC p. 40",
    "masterId": "classFeatures-131"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Steadying Grace",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "-",
    "source": "WC p. 40",
    "masterId": "classFeatures-132"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Tirelessness",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "-",
    "source": "WC p. 40",
    "masterId": "classFeatures-133"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Monastic Meditation - Wind Runner",
    "levels": "Chosen in place of a spell",
    "abilityType": "2e supplemental Scholar option",
    "description": "",
    "requirements": "-",
    "source": "WC p. 40",
    "masterId": "classFeatures-134"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Advanced Spell",
    "levels": "3-20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 60-66",
    "masterId": "classFeatures-135"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Base Power Points / +1 Power Point",
    "levels": "1; 2, 6, 10, 14, 18",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 60-66",
    "masterId": "classFeatures-136"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Bonus Spell",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 60-66",
    "masterId": "classFeatures-137"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Increased Maximum Power Points",
    "levels": "6, 13, 20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 60-66",
    "masterId": "classFeatures-138"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Iron Will",
    "levels": "5",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 60-66",
    "masterId": "classFeatures-139"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Knowledge Is Power",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 60-66",
    "masterId": "classFeatures-140"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "New Sorcery Style",
    "levels": "1, 2, 4, 8, 12, 16, 20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 60-66",
    "masterId": "classFeatures-141"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Scholar",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 60-66",
    "masterId": "classFeatures-142"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Scholar Background",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 60-66",
    "masterId": "classFeatures-143"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Advanced Spell Alternative - +2 Skill Points",
    "levels": "3-20",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "",
    "source": "CR p. 64",
    "masterId": "classFeatures-144"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Background - Acolyte",
    "levels": "1",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Background choice affects how new sorcery is learned.",
    "source": "CR p. 60-63",
    "masterId": "classFeatures-145"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Background - Independent",
    "levels": "1",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Background choice affects how new sorcery is learned.",
    "source": "CR p. 60-63",
    "masterId": "classFeatures-146"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Background - Lay Priest",
    "levels": "1",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Background choice affects how new sorcery is learned.",
    "source": "CR p. 60-63",
    "masterId": "classFeatures-147"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Background - Pact",
    "levels": "1",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Background choice affects how new sorcery is learned.",
    "source": "CR p. 60-63",
    "masterId": "classFeatures-148"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Iron Will Alternative - Sorcery Feat",
    "levels": "5",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "",
    "source": "CR p. 64",
    "masterId": "classFeatures-149"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "New Sorcery Style Alternative - Bonus Feat",
    "levels": "1, 2, 4, 8, 12, 16, 20",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Must meet normal prerequisites.",
    "source": "CR p. 63",
    "masterId": "classFeatures-150"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Sabatean Non-Sorcerous Scholar",
    "levels": "Varies",
    "abilityType": "Regional / cultural class variant",
    "description": "",
    "requirements": "Region/culture: Shem / Sabatea",
    "source": "Shem - Gateway to the South p. 42, 82-84",
    "masterId": "classFeatures-151"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Aura of Authority",
    "levels": "When eligible for a new style",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: New Sorcery Style; Prerequisite/culture: Sabatean, Intimidate 5 ranks",
    "source": "Shem - Gateway to the South p. 82",
    "masterId": "classFeatures-152"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Secret of the Acolyte Sabatean Torturer",
    "levels": "When eligible for a new style",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: New Sorcery Style; Prerequisite/culture: Sabatean, Background (acolyte), Perform (ritual) 4 ranks",
    "source": "Shem - Gateway to the South p. 83",
    "masterId": "classFeatures-153"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Secret of the Expert Sabatean Torturer",
    "levels": "When eligible for a new style",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: New Sorcery Style; Prerequisite/culture: Sabatean, Background (acolyte), Perform (ritual) 7 ranks, Acolyte Torturer secret",
    "source": "Shem - Gateway to the South p. 84",
    "masterId": "classFeatures-154"
  },
  {
    "classKey": "scholar",
    "className": "Scholar",
    "name": "Secret of the Master Sabatean Torturer",
    "levels": "When eligible for a new style",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: New Sorcery Style; Prerequisite/culture: Sabatean, Background (acolyte), Perform (ritual) 13 ranks, earlier Sabatean Torturer secrets",
    "source": "Shem - Gateway to the South p. 84",
    "masterId": "classFeatures-155"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Bonus Feat",
    "levels": "1, 2, and every even level thereafter",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 66-69",
    "masterId": "classFeatures-156"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 66-69",
    "masterId": "classFeatures-157"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Fighting Spirit",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-158"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Heavy Cavalry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-159"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Heavy Infantry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-160"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Improved Fighting Spirit",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-161"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Improved Heavy Cavalry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-162"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Improved Heavy Infantry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-163"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Improved Light Cavalry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-164"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Improved Skirmisher",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-165"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Light Cavalry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-166"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Formation Combat - Skirmisher",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Improved formations require the corresponding basic formation.",
    "source": "CR p. 66-67",
    "masterId": "classFeatures-167"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Advancing Infantry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-168"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Hoplite",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-169"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Hurler",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-170"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Improved Advancing Infantry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-171"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Improved Hoplite",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-172"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Improved Hurler",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-173"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Improved Tortoise Heavy Infantry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-174"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Improved Volley Support",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-175"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Marine Formation",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: -",
    "source": "Argos and Zingara p. 86",
    "masterId": "classFeatures-176"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Tortoise Heavy Infantry",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-177"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Volley Support",
    "levels": "3, 7, 11, 15, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Formation Combat choice; Prerequisite/culture: Improved version requires base formation",
    "source": "WC p. 29-31",
    "masterId": "classFeatures-178"
  },
  {
    "classKey": "soldier",
    "className": "Soldier",
    "name": "Officer",
    "levels": "5, 9, 13, 17",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 66-69",
    "masterId": "classFeatures-179"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Admirers",
    "levels": "7",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-180"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Binding Contract",
    "levels": "5",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-181"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Comeliness",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-182"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Compelling Performance",
    "levels": "2, 6, 10, 14, 19",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-183"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Lewd Distraction",
    "levels": "2, 6, 10, 14, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Compelling Performance; Prerequisite/culture: Targets must be able to see the temptress and be sexually attracted to her",
    "source": "WC p. 31",
    "masterId": "classFeatures-184"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Exquisite",
    "levels": "11",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-185"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Glorious",
    "levels": "20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-186"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Inspire",
    "levels": "8",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-187"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Outrageous Flattery",
    "levels": "9",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-188"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Savoir-Faire",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-189"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Secret Art / Improved / Advanced / Perfected Secret Art",
    "levels": "3, 7, 11, 17",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-190"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Secret Art Path - Politics",
    "levels": "3, 7, 11, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Once the Secret Art path is chosen, later improvements follow that path.",
    "source": "CR p. 68-71",
    "masterId": "classFeatures-191"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Secret Art Path - Sneak Attack",
    "levels": "3, 7, 11, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Once the Secret Art path is chosen, later improvements follow that path.",
    "source": "CR p. 68-71",
    "masterId": "classFeatures-192"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Secret Art Path - Sorcery",
    "levels": "3, 7, 11, 17",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Once the Secret Art path is chosen, later improvements follow that path.",
    "source": "CR p. 68-71",
    "masterId": "classFeatures-193"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Self-Defence: Anatomy Knowledge",
    "levels": "3, 7, 11/17",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Secret Art progression; Prerequisite/culture: Choose Self-Defence path",
    "source": "WC p. 31-32",
    "masterId": "classFeatures-194"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Self-Defence: Avoidance",
    "levels": "3, 7, 11/17",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Secret Art progression; Prerequisite/culture: Choose Self-Defence path",
    "source": "WC p. 31-32",
    "masterId": "classFeatures-195"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Self-Defence: Flexibility",
    "levels": "3, 7, 11/17",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Secret Art progression; Prerequisite/culture: Choose Self-Defence path",
    "source": "WC p. 31-32",
    "masterId": "classFeatures-196"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Seductive Art",
    "levels": "2, 6, 10, 14, 18",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-197"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Seductive Savant",
    "levels": "4",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-198"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Use Weakness as Strength",
    "levels": "13",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-199"
  },
  {
    "classKey": "temptress",
    "className": "Temptress",
    "name": "Veiled in Darkness",
    "levels": "16",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 69-73",
    "masterId": "classFeatures-200"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Light-Footed",
    "levels": "4",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 73-76",
    "masterId": "classFeatures-201"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Poison Use",
    "levels": "8",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 73-76",
    "masterId": "classFeatures-202"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Sneak Attack / Sneak Attack Style",
    "levels": "1-20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 73-76",
    "masterId": "classFeatures-203"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Special Ability",
    "levels": "6, 10, 14, 18",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 73-76",
    "masterId": "classFeatures-204"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Special Ability - Crippling Strike",
    "levels": "6, 10, 14, 18",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Selection rules and prerequisites as in the class description.",
    "source": "CR p. 72-74",
    "masterId": "classFeatures-205"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Special Ability - Evasion",
    "levels": "6, 10, 14, 18",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Selection rules and prerequisites as in the class description.",
    "source": "CR p. 73-74",
    "masterId": "classFeatures-206"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Special Ability - Feat",
    "levels": "6, 10, 14, 18",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Selection rules and prerequisites as in the class description.",
    "source": "CR p. 73-74",
    "masterId": "classFeatures-207"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Special Ability - Jack-of-all-trades",
    "levels": "6, 10, 14, 18",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Selection rules and prerequisites as in the class description.",
    "source": "CR p. 73-74",
    "masterId": "classFeatures-208"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Special Ability - Opportunist",
    "levels": "6, 10, 14, 18",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Selection rules and prerequisites as in the class description.",
    "source": "CR p. 73-74",
    "masterId": "classFeatures-209"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Special Ability - Skill Mastery",
    "levels": "6, 10, 14, 18",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Selection rules and prerequisites as in the class description.",
    "source": "CR p. 73-74",
    "masterId": "classFeatures-210"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Special Ability - Sorcerous Protection",
    "levels": "6, 10, 14, 18",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "Selection rules and prerequisites as in the class description.",
    "source": "CR p. 73-74",
    "masterId": "classFeatures-211"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Trap Disarming",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 73-76",
    "masterId": "classFeatures-212"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Trap Sense",
    "levels": "3, 6, 9, 12, 15, 18",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "CR p. 73-76",
    "masterId": "classFeatures-213"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Sneak Attack Style - Chosen Proficient Weapon",
    "levels": "1, 4, 8, 12, 16, 20",
    "abilityType": "Core feature choice",
    "description": "",
    "requirements": "",
    "source": "CR p. 73-76",
    "masterId": "classFeatures-214"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Dispatching Blow",
    "levels": "1, 3, 5, 7, 9, 11, 13, 15, 17, 19",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Sneak Attack progression; Prerequisite/culture: Must act before target in the first round",
    "source": "CR p. 73-74",
    "masterId": "classFeatures-215"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Poison Resistance",
    "levels": "8",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Poison Use; Prerequisite/culture: -",
    "source": "WC p. 32",
    "masterId": "classFeatures-216"
  },
  {
    "classKey": "thief",
    "className": "Thief",
    "name": "Weapon Precision",
    "levels": "1, 4, 8, 12, 16, 20",
    "abilityType": "Supplemental alternative / replacement",
    "description": "",
    "requirements": "Replaces/modifies: Sneak Attack Style; Prerequisite/culture: Choose a light weapon",
    "source": "WC p. 32",
    "masterId": "classFeatures-217"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Acrobatics",
    "levels": "3, 9, 15",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-89",
    "masterId": "classFeatures-218"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Damage Reduction",
    "levels": "10, 13, 16, 19",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-89",
    "masterId": "classFeatures-219"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Disciplined Blow",
    "levels": "9",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-89",
    "masterId": "classFeatures-220"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Disciplined Defence",
    "levels": "3",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-89",
    "masterId": "classFeatures-221"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Improved Unarmed Strike",
    "levels": "1",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-89",
    "masterId": "classFeatures-222"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Martial Discipline / Improved / Greater / Master Martial Discipline",
    "levels": "2, 7, 14, 20",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-92",
    "masterId": "classFeatures-223"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Fell Hand Discipline - Blind God's Eye (Su)",
    "levels": "20",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Fell Hand Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-224"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Fell Hand Discipline - Blows Undreamt (Su)",
    "levels": "7",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Fell Hand Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-225"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Fell Hand Discipline - Clasp the Mind (Su)",
    "levels": "14",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Fell Hand Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-226"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Fell Hand Discipline - Strike the Soul (Su)",
    "levels": "2",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Fell Hand Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-227"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Flesh of Mountains Discipline - Defy the Hammer (Ex)",
    "levels": "14",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Flesh of Mountains Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-228"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Flesh of Mountains Discipline - Dream the Mountain (Su)",
    "levels": "20",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Flesh of Mountains Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-229"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Flesh of Mountains Discipline - Scorn the Blade (Ex)",
    "levels": "7",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Flesh of Mountains Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-230"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Flesh of Mountains Discipline - Surmount the Dagger (Ex)",
    "levels": "2",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Flesh of Mountains Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-231"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Iron-Banded Discipline - Cage of Limbs (Ex)",
    "levels": "14",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Iron-Banded Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-232"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Iron-Banded Discipline - Iron God's Grasp (Ex)",
    "levels": "20",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Iron-Banded Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-233"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Iron-Banded Discipline - One Hundred Hands (Ex)",
    "levels": "7",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Iron-Banded Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-234"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Iron-Banded Discipline - Snapping Mongoose Strike (Ex)",
    "levels": "2",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Iron-Banded Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-235"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Mighty Blows Discipline - Dread Blow (Ex)",
    "levels": "2",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Mighty Blows Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-236"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Mighty Blows Discipline - Dread God's Hammer (Ex)",
    "levels": "20",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Mighty Blows Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-237"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Mighty Blows Discipline - Stunning Blow (Ex)",
    "levels": "7",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Mighty Blows Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-238"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Mighty Blows Discipline - Tree-Fell Strike (Su)",
    "levels": "14",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Mighty Blows Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-239"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Thousand Blows Discipline - Forest of Fists (Ex)",
    "levels": "7",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Thousand Blows Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-240"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Thousand Blows Discipline - One Thousand As One (Ex)",
    "levels": "14",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Thousand Blows Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-241"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Thousand Blows Discipline - Second Hand (Ex)",
    "levels": "2",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Thousand Blows Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-242"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Thousand Blows Discipline - Storm of Wrath (Ex)",
    "levels": "20",
    "abilityType": "Martial Discipline technique",
    "description": "",
    "requirements": "Must choose and remain within the Thousand Blows Discipline tree.",
    "source": "WC p. 87-90",
    "masterId": "classFeatures-243"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Mobility / Improved Mobility / Greater Mobility",
    "levels": "5, 10, 15",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-89",
    "masterId": "classFeatures-244"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Speed of the Hare",
    "levels": "11",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-89",
    "masterId": "classFeatures-245"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Speed of the Wind",
    "levels": "17",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-89",
    "masterId": "classFeatures-246"
  },
  {
    "classKey": "martialDisciple",
    "className": "Martial Disciple",
    "name": "Uncanny Dodge / Improved Uncanny Dodge",
    "levels": "4, 8, 26",
    "abilityType": "Core / supplemental base-class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 86-89",
    "masterId": "classFeatures-247"
  },
  {
    "classKey": "agentOfTheCrown",
    "className": "Agent of the Crown",
    "name": "Agent of the Crown Ability",
    "levels": "1, 4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 9",
    "masterId": "classFeatures-248"
  },
  {
    "classKey": "agentOfTheCrown",
    "className": "Agent of the Crown",
    "name": "Informant",
    "levels": "1, 4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 9",
    "masterId": "classFeatures-249"
  },
  {
    "classKey": "agentOfTheCrown",
    "className": "Agent of the Crown",
    "name": "Promotion",
    "levels": "1, 4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 9",
    "masterId": "classFeatures-250"
  },
  {
    "classKey": "agentOfTheCrown",
    "className": "Agent of the Crown",
    "name": "Street Fight",
    "levels": "1, 4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 9",
    "masterId": "classFeatures-251"
  },
  {
    "classKey": "agentOfTheCrown",
    "className": "Agent of the Crown",
    "name": "Streetwise",
    "levels": "1, 4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 9",
    "masterId": "classFeatures-252"
  },
  {
    "classKey": "agentOfTheCrown",
    "className": "Agent of the Crown",
    "name": "Authority",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 9",
    "masterId": "classFeatures-253"
  },
  {
    "classKey": "agentOfTheCrown",
    "className": "Agent of the Crown",
    "name": "Interrogation",
    "levels": "\"2, 5, 8\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 9",
    "masterId": "classFeatures-254"
  },
  {
    "classKey": "agentOfTheCrown",
    "className": "Agent of the Crown",
    "name": "Bonus Feat",
    "levels": "\"3, 6,9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 9",
    "masterId": "classFeatures-255"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "Axe Mastery",
    "levels": "1, 3, 5, 7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-256"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "Bonus Feat",
    "levels": "\"2, 5, 8\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-257"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "Low Grip",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-258"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "Power Hurler",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-259"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "Butcher's Cleave",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-260"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "To the Bone",
    "levels": "6",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-261"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "High Grip",
    "levels": "6",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-262"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "Disarming Stroke",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-263"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "Brutal Force",
    "levels": "8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-264"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "Sundering Stroke",
    "levels": "9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-265"
  },
  {
    "classKey": "axeman",
    "className": "Axeman",
    "name": "Unstoppable Stroke",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 58",
    "masterId": "classFeatures-266"
  },
  {
    "classKey": "dancingSavage",
    "className": "Dancing Savage",
    "name": "Improved Uncanny Dodge",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 144",
    "masterId": "classFeatures-267"
  },
  {
    "classKey": "dancingSavage",
    "className": "Dancing Savage",
    "name": "Sneak Attack",
    "levels": "1, 4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 144",
    "masterId": "classFeatures-268"
  },
  {
    "classKey": "dancingSavage",
    "className": "Dancing Savage",
    "name": "Whirlwind Attack",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 144",
    "masterId": "classFeatures-269"
  },
  {
    "classKey": "dancingSavage",
    "className": "Dancing Savage",
    "name": "Improved Mobility",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 144",
    "masterId": "classFeatures-270"
  },
  {
    "classKey": "dancingSavage",
    "className": "Dancing Savage",
    "name": "Greater Uncanny Dodge",
    "levels": "6",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 144",
    "masterId": "classFeatures-271"
  },
  {
    "classKey": "dancingSavage",
    "className": "Dancing Savage",
    "name": "Greater Feint",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 144",
    "masterId": "classFeatures-272"
  },
  {
    "classKey": "dancingSavage",
    "className": "Dancing Savage",
    "name": "Greater Mobility",
    "levels": "8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 144",
    "masterId": "classFeatures-273"
  },
  {
    "classKey": "dancingSavage",
    "className": "Dancing Savage",
    "name": "Dance of Death",
    "levels": "9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 144",
    "masterId": "classFeatures-274"
  },
  {
    "classKey": "drummerInTheDark",
    "className": "Drummer in the Dark",
    "name": "Carried with the Wind",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 146",
    "masterId": "classFeatures-275"
  },
  {
    "classKey": "drummerInTheDark",
    "className": "Drummer in the Dark",
    "name": "Drum Bonus Feat",
    "levels": "2, 6, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 146",
    "masterId": "classFeatures-276"
  },
  {
    "classKey": "drummerInTheDark",
    "className": "Drummer in the Dark",
    "name": "Drum Mastery",
    "levels": "3, 5, 7, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 146",
    "masterId": "classFeatures-277"
  },
  {
    "classKey": "drummerInTheDark",
    "className": "Drummer in the Dark",
    "name": "Counter Drumming",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 146",
    "masterId": "classFeatures-278"
  },
  {
    "classKey": "drummerInTheDark",
    "className": "Drummer in the Dark",
    "name": "Echoes in the Forests",
    "levels": "8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 146",
    "masterId": "classFeatures-279"
  },
  {
    "classKey": "drummerInTheDark",
    "className": "Drummer in the Dark",
    "name": "Drum Master",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 146",
    "masterId": "classFeatures-280"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "One-on-One",
    "levels": "1, 5, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-281"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "Bonus Feat",
    "levels": "2, 4, 6, 8, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-282"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "Lunge",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-283"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "Improved Critical",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-284"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "Opportunist",
    "levels": "3, 7, 26",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-285"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "Misdirect Charge",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-286"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "Counterstroke",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-287"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "Off-Handed",
    "levels": "6",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-288"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "Confidence",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-289"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "On All Sides",
    "levels": "8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-290"
  },
  {
    "classKey": "duellist",
    "className": "Duelist",
    "name": "Two-on-One",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 61",
    "masterId": "classFeatures-291"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Woodland Stride",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-292"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Fleet-Footed",
    "levels": "2, 7, 26",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-293"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Eyes of the Cat",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-294"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Swift Tracker (full speed)",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-295"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Mobility",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-296"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Camouflage",
    "levels": "6",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-297"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Melt Away",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-298"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Improved Mobility",
    "levels": "8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-299"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Hide in Plain Sight",
    "levels": "9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-300"
  },
  {
    "classKey": "forestRunner",
    "className": "Forest Runner",
    "name": "Swift Tracker (run)",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 147",
    "masterId": "classFeatures-301"
  },
  {
    "classKey": "gunderlandMercenary",
    "className": "Gunderland Mercenary",
    "name": "Blood Money 1/day",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 141",
    "masterId": "classFeatures-302"
  },
  {
    "classKey": "gunderlandMercenary",
    "className": "Gunderland Mercenary",
    "name": "At Home in Armour",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 141",
    "masterId": "classFeatures-303"
  },
  {
    "classKey": "gunderlandMercenary",
    "className": "Gunderland Mercenary",
    "name": "Patchwork Armour",
    "levels": "\"3, 6, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 141",
    "masterId": "classFeatures-304"
  },
  {
    "classKey": "gunderlandMercenary",
    "className": "Gunderland Mercenary",
    "name": "Cheap Shot",
    "levels": "4, 8, 26",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 141",
    "masterId": "classFeatures-305"
  },
  {
    "classKey": "gunderlandMercenary",
    "className": "Gunderland Mercenary",
    "name": "Blood Money 2/day",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 141",
    "masterId": "classFeatures-306"
  },
  {
    "classKey": "gunderlandMercenary",
    "className": "Gunderland Mercenary",
    "name": "Cat Nap",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 141",
    "masterId": "classFeatures-307"
  },
  {
    "classKey": "gunderlandMercenary",
    "className": "Gunderland Mercenary",
    "name": "Blood Money 3/day",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 141",
    "masterId": "classFeatures-308"
  },
  {
    "classKey": "gunderlandMercenary",
    "className": "Gunderland Mercenary",
    "name": "Cheap Shot 2/day",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 141",
    "masterId": "classFeatures-309"
  },
  {
    "classKey": "gunderlandPikeman",
    "className": "Gunderland Pikeman",
    "name": "Gunderland Pike",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 143",
    "masterId": "classFeatures-310"
  },
  {
    "classKey": "gunderlandPikeman",
    "className": "Gunderland Pikeman",
    "name": "Pike Mastery",
    "levels": "1, 5, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 143",
    "masterId": "classFeatures-311"
  },
  {
    "classKey": "gunderlandPikeman",
    "className": "Gunderland Pikeman",
    "name": "Close Combat Weapon",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 143",
    "masterId": "classFeatures-312"
  },
  {
    "classKey": "gunderlandPikeman",
    "className": "Gunderland Pikeman",
    "name": "Pike Bash",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 143",
    "masterId": "classFeatures-313"
  },
  {
    "classKey": "gunderlandPikeman",
    "className": "Gunderland Pikeman",
    "name": "Bonus Feat",
    "levels": "\"3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 143",
    "masterId": "classFeatures-314"
  },
  {
    "classKey": "gunderlandPikeman",
    "className": "Gunderland Pikeman",
    "name": "Charge Barricade",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 143",
    "masterId": "classFeatures-315"
  },
  {
    "classKey": "gunderlandPikeman",
    "className": "Gunderland Pikeman",
    "name": "Greater Gunderland Pike-and-Shield Fighting",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 143",
    "masterId": "classFeatures-316"
  },
  {
    "classKey": "gunderlandPikeman",
    "className": "Gunderland Pikeman",
    "name": "Supreme Bravery",
    "levels": "8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFW p. 143",
    "masterId": "classFeatures-317"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "Bonus Feat",
    "levels": "1, 4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-318"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "House Agent Ability",
    "levels": "1, 3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-319"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "Blackmail",
    "levels": "1, 3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-320"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "Contact",
    "levels": "1, 3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-321"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "Friends in High Places",
    "levels": "1, 3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-322"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "Streetwise",
    "levels": "1, 3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-323"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "Secrets of the City",
    "levels": "1, 3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-324"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "Word on the Stret",
    "levels": "1, 3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-325"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "Shadowing",
    "levels": "2, 5, 8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-326"
  },
  {
    "classKey": "houseAgent",
    "className": "House Agent",
    "name": "Alias",
    "levels": "4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 7",
    "masterId": "classFeatures-327"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Wild Empathy",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-328"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Poison Use",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-329"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Woodland Stride",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-330"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Swift Tracker (full speed)",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-331"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Camouflage",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-332"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Improved Precise Shot",
    "levels": "6",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-333"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Passing of the Panther",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-334"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Out of Thin Air",
    "levels": "8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-335"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Hide in Plain Sight",
    "levels": "9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-336"
  },
  {
    "classKey": "huntMaster",
    "className": "Hunt Master",
    "name": "Swift Tracker (run)",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "ATR p. 148",
    "masterId": "classFeatures-337"
  },
  {
    "classKey": "lordOfTheBlackRing",
    "className": "Lord of the Black Ring",
    "name": "\"+1 Power Point",
    "levels": "1, 4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 161",
    "masterId": "classFeatures-338"
  },
  {
    "classKey": "lordOfTheBlackRing",
    "className": "Lord of the Black Ring",
    "name": "Advanced Spell",
    "levels": "1, 2, 4, 5, 7, 8, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 161",
    "masterId": "classFeatures-339"
  },
  {
    "classKey": "lordOfTheBlackRing",
    "className": "Lord of the Black Ring",
    "name": "Scholar Levels",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 161",
    "masterId": "classFeatures-340"
  },
  {
    "classKey": "lordOfTheBlackRing",
    "className": "Lord of the Black Ring",
    "name": "Demonologist",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 161",
    "masterId": "classFeatures-341"
  },
  {
    "classKey": "lordOfTheBlackRing",
    "className": "Lord of the Black Ring",
    "name": "Advanced Spell x2 or New Sorcery Style",
    "levels": "\"3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 161",
    "masterId": "classFeatures-342"
  },
  {
    "classKey": "masterOfDeath",
    "className": "Master of Death",
    "name": "Undeath",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 167",
    "masterId": "classFeatures-343"
  },
  {
    "classKey": "masterOfDeath",
    "className": "Master of Death",
    "name": "Scholar Levels",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 167",
    "masterId": "classFeatures-344"
  },
  {
    "classKey": "masterOfDeath",
    "className": "Master of Death",
    "name": "\"+1 Power Point",
    "levels": "1, 3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 167",
    "masterId": "classFeatures-345"
  },
  {
    "classKey": "masterOfDeath",
    "className": "Master of Death",
    "name": "Advanced Spell",
    "levels": "1, 3, 4, 6, 7, 9, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 167",
    "masterId": "classFeatures-346"
  },
  {
    "classKey": "masterOfDeath",
    "className": "Master of Death",
    "name": "New Sorcery Style or Advanced Spell",
    "levels": "\"2, 5, 8\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 167",
    "masterId": "classFeatures-347"
  },
  {
    "classKey": "masterOfDeath",
    "className": "Master of Death",
    "name": "Improved Undeath",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 167",
    "masterId": "classFeatures-348"
  },
  {
    "classKey": "masterOfDeath",
    "className": "Master of Death",
    "name": "Greater Undeath",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 167",
    "masterId": "classFeatures-349"
  },
  {
    "classKey": "masterOfDeath",
    "className": "Master of Death",
    "name": "Perfected Undeath",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 167",
    "masterId": "classFeatures-350"
  },
  {
    "classKey": "masterOfTheBlackCircle",
    "className": "Master of the Black Circle",
    "name": "\"+1 Power Point",
    "levels": "1, 2, 3, 4, 5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 163",
    "masterId": "classFeatures-351"
  },
  {
    "classKey": "masterOfTheBlackCircle",
    "className": "Master of the Black Circle",
    "name": "Advanced Spell",
    "levels": "1, 2, 3, 4, 5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 163",
    "masterId": "classFeatures-352"
  },
  {
    "classKey": "masterOfTheBlackCircle",
    "className": "Master of the Black Circle",
    "name": "Summon Lords of the Black Circle",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 163",
    "masterId": "classFeatures-353"
  },
  {
    "classKey": "masterOfTheBlackCircle",
    "className": "Master of the Black Circle",
    "name": "Scholar Levels",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 163",
    "masterId": "classFeatures-354"
  },
  {
    "classKey": "masterOfTheBlackCircle",
    "className": "Master of the Black Circle",
    "name": "New Sorcery Style",
    "levels": "2, 4, 26",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 163",
    "masterId": "classFeatures-355"
  },
  {
    "classKey": "masterOfTheBlackCircle",
    "className": "Master of the Black Circle",
    "name": "Master Mesmerist",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 163",
    "masterId": "classFeatures-356"
  },
  {
    "classKey": "masterOfTheBlackCircle",
    "className": "Master of the Black Circle",
    "name": "Spellcraft",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 163",
    "masterId": "classFeatures-357"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Property",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-358"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Contacts",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-359"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Barony",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-360"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Criminal",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-361"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Foreign",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-362"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Guardian",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-363"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Guild",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-364"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Naval",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-365"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Patrol",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-366"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Priesthood",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-367"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Royalty",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-368"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Royal House",
    "levels": "1,3,5,7,9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-369"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Bonus Social Feat",
    "levels": "2, 4, 6, 8, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-370"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Hard Bargain",
    "levels": "2, 5, 8, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-371"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Communicator",
    "levels": "3, 5, 7, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-372"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Investment",
    "levels": "3, 6, 9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-373"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Assistance II",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-374"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Entrepreneur",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-375"
  },
  {
    "classKey": "merchantPrince",
    "className": "Merchant Prince",
    "name": "Assistance III",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "MCR p. 2",
    "masterId": "classFeatures-376"
  },
  {
    "classKey": "paramountChiefChiefOfChiefs",
    "className": "Paramount Chief (Chief of Chiefs)",
    "name": "Blood Feud",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "",
    "masterId": "classFeatures-377"
  },
  {
    "classKey": "paramountChiefChiefOfChiefs",
    "className": "Paramount Chief (Chief of Chiefs)",
    "name": "Natural Leader",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "",
    "masterId": "classFeatures-378"
  },
  {
    "classKey": "paramountChiefChiefOfChiefs",
    "className": "Paramount Chief (Chief of Chiefs)",
    "name": "Culling the Weak",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "",
    "masterId": "classFeatures-379"
  },
  {
    "classKey": "paramountChiefChiefOfChiefs",
    "className": "Paramount Chief (Chief of Chiefs)",
    "name": "Negotiator",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "",
    "masterId": "classFeatures-380"
  },
  {
    "classKey": "paramountChiefChiefOfChiefs",
    "className": "Paramount Chief (Chief of Chiefs)",
    "name": "Horde",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "",
    "masterId": "classFeatures-381"
  },
  {
    "classKey": "paramountChiefChiefOfChiefs",
    "className": "Paramount Chief (Chief of Chiefs)",
    "name": "War of Nations",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "",
    "masterId": "classFeatures-382"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Combat Mastery I",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-383"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Arterial Stike",
    "levels": "1,4,7,10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-384"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Bonebreaker",
    "levels": "1,4,7,10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-385"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Critical Mastery",
    "levels": "1,4,7,10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-386"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Fast Healer",
    "levels": "1,4,7,10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-387"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Prolonging Wound",
    "levels": "1,4,7,10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-388"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Weapon Mastery",
    "levels": "1,4,7,10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-389"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Fighting Style",
    "levels": "1, 5, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-390"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Beast Battler",
    "levels": "1, 5, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-391"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Improved Beast Battler",
    "levels": "1, 5, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-392"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Mankiller",
    "levels": "1, 5, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-393"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Improved Mankiller",
    "levels": "1, 5, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-394"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Spiker",
    "levels": "1, 5, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-395"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Improved Spiker",
    "levels": "1, 5, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-396"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Subduing",
    "levels": "1, 5, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-397"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Improved Subduing",
    "levels": "1, 5, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-398"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Maximise Protection",
    "levels": "2, 6, 26",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-399"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Bonus Feat",
    "levels": "3, 6, 9\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-400"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Fame/Infamy",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-401"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Combat Mastery II",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-402"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Showman Macabre",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-403"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Bloody Mess",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-404"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Combat Mastery III",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-405"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Back from the Brink",
    "levels": "8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-406"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Combat Mastery IV",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-407"
  },
  {
    "classKey": "pitFighter",
    "className": "Pit Fighter",
    "name": "Merchant of Death",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 65",
    "masterId": "classFeatures-408"
  },
  {
    "classKey": "poitainianKnight",
    "className": "Poitainian Knight",
    "name": "Born to the Saddle; Horsemanship",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFR p. 145",
    "masterId": "classFeatures-409"
  },
  {
    "classKey": "poitainianKnight",
    "className": "Poitainian Knight",
    "name": "Armour Tolerance",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFR p. 145",
    "masterId": "classFeatures-410"
  },
  {
    "classKey": "poitainianKnight",
    "className": "Poitainian Knight",
    "name": "Horsemanship",
    "levels": "3, 9, 26",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFR p. 145",
    "masterId": "classFeatures-411"
  },
  {
    "classKey": "poitainianKnight",
    "className": "Poitainian Knight",
    "name": "Armour Tolerance +2; Lance Charge",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFR p. 145",
    "masterId": "classFeatures-412"
  },
  {
    "classKey": "poitainianKnight",
    "className": "Poitainian Knight",
    "name": "Born to the Saddle",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFR p. 145",
    "masterId": "classFeatures-413"
  },
  {
    "classKey": "poitainianKnight",
    "className": "Poitainian Knight",
    "name": "Armour Tolerance +3; Horsemanship",
    "levels": "6",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFR p. 145",
    "masterId": "classFeatures-414"
  },
  {
    "classKey": "poitainianKnight",
    "className": "Poitainian Knight",
    "name": "Improved Heavy Cavalry",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFR p. 145",
    "masterId": "classFeatures-415"
  },
  {
    "classKey": "poitainianKnight",
    "className": "Poitainian Knight",
    "name": "Armour Tolerance +4; Lance Charge",
    "levels": "8",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFR p. 145",
    "masterId": "classFeatures-416"
  },
  {
    "classKey": "poitainianKnight",
    "className": "Poitainian Knight",
    "name": "Armour Tolerance +5; Born to the Saddle",
    "levels": "10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "AFR p. 145",
    "masterId": "classFeatures-417"
  },
  {
    "classKey": "savage",
    "className": "Savage",
    "name": "Know No Fear",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 68",
    "masterId": "classFeatures-418"
  },
  {
    "classKey": "savage",
    "className": "Savage",
    "name": "Simple Weapon Focus",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 68",
    "masterId": "classFeatures-419"
  },
  {
    "classKey": "savage",
    "className": "Savage",
    "name": "As Good as Steel",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 68",
    "masterId": "classFeatures-420"
  },
  {
    "classKey": "savage",
    "className": "Savage",
    "name": "Savage Charge",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 68",
    "masterId": "classFeatures-421"
  },
  {
    "classKey": "savage",
    "className": "Savage",
    "name": "Dedication I",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 68",
    "masterId": "classFeatures-422"
  },
  {
    "classKey": "savage",
    "className": "Savage",
    "name": "Simple Weapon Master",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 68",
    "masterId": "classFeatures-423"
  },
  {
    "classKey": "savage",
    "className": "Savage",
    "name": "Cold Anger",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 68",
    "masterId": "classFeatures-424"
  },
  {
    "classKey": "savage",
    "className": "Savage",
    "name": "Dedication II",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 68",
    "masterId": "classFeatures-425"
  },
  {
    "classKey": "savage",
    "className": "Savage",
    "name": "Felling Blow",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 68",
    "masterId": "classFeatures-426"
  },
  {
    "classKey": "sorcererOfTheScarletCircle",
    "className": "Sorcerer of the Scarlet Circle",
    "name": "Unarmed Strike",
    "levels": "1, 4, 7, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 145",
    "masterId": "classFeatures-427"
  },
  {
    "classKey": "sorcererOfTheScarletCircle",
    "className": "Sorcerer of the Scarlet Circle",
    "name": "Scholar Levels",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 145",
    "masterId": "classFeatures-428"
  },
  {
    "classKey": "sorcererOfTheScarletCircle",
    "className": "Sorcerer of the Scarlet Circle",
    "name": "Combination Attack",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 145",
    "masterId": "classFeatures-429"
  },
  {
    "classKey": "sorcererOfTheScarletCircle",
    "className": "Sorcerer of the Scarlet Circle",
    "name": "Advanced Spell",
    "levels": "2, 3, 4, 5, 6, 7, 8, 9, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 145",
    "masterId": "classFeatures-430"
  },
  {
    "classKey": "sorcererOfTheScarletCircle",
    "className": "Sorcerer of the Scarlet Circle",
    "name": "New Sorcery Style",
    "levels": "3, 8, 26",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 145",
    "masterId": "classFeatures-431"
  },
  {
    "classKey": "sorcererOfTheScarletCircle",
    "className": "Sorcerer of the Scarlet Circle",
    "name": "\"+1 Power Point",
    "levels": "5, 10, 26",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 145",
    "masterId": "classFeatures-432"
  },
  {
    "classKey": "sorcererOfTheScarletCircle",
    "className": "Sorcerer of the Scarlet Circle",
    "name": "Impenetrable Fortress",
    "levels": "6",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 145",
    "masterId": "classFeatures-433"
  },
  {
    "classKey": "sorcererOfTheScarletCircle",
    "className": "Sorcerer of the Scarlet Circle",
    "name": "Arrow Fist",
    "levels": "9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "SoS p. 145",
    "masterId": "classFeatures-434"
  },
  {
    "classKey": "warlord",
    "className": "Warlord",
    "name": "Inspire",
    "levels": "1, 5, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 71",
    "masterId": "classFeatures-435"
  },
  {
    "classKey": "warlord",
    "className": "Warlord",
    "name": "Instinctual Attack",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 71",
    "masterId": "classFeatures-436"
  },
  {
    "classKey": "warlord",
    "className": "Warlord",
    "name": "Bonus Feat",
    "levels": "2, 4, 6, 8, 10",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 71",
    "masterId": "classFeatures-437"
  },
  {
    "classKey": "warlord",
    "className": "Warlord",
    "name": "Formation Combat",
    "levels": "2, 5, 8\"",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 71",
    "masterId": "classFeatures-438"
  },
  {
    "classKey": "warlord",
    "className": "Warlord",
    "name": "Soldier's Life",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 71",
    "masterId": "classFeatures-439"
  },
  {
    "classKey": "warlord",
    "className": "Warlord",
    "name": "Lead the Charge",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 71",
    "masterId": "classFeatures-440"
  },
  {
    "classKey": "warlord",
    "className": "Warlord",
    "name": "Never Surrender",
    "levels": "6",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 71",
    "masterId": "classFeatures-441"
  },
  {
    "classKey": "warlord",
    "className": "Warlord",
    "name": "Enemy Evaluation",
    "levels": "7",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 71",
    "masterId": "classFeatures-442"
  },
  {
    "classKey": "warlord",
    "className": "Warlord",
    "name": "Embodiment of Victory",
    "levels": "9",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 71",
    "masterId": "classFeatures-443"
  },
  {
    "classKey": "wrestler",
    "className": "Wrestler",
    "name": "Critical Grapple",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 74",
    "masterId": "classFeatures-444"
  },
  {
    "classKey": "wrestler",
    "className": "Wrestler",
    "name": "Improved Hold",
    "levels": "1",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 74",
    "masterId": "classFeatures-445"
  },
  {
    "classKey": "wrestler",
    "className": "Wrestler",
    "name": "Reactionary Grapple",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 74",
    "masterId": "classFeatures-446"
  },
  {
    "classKey": "wrestler",
    "className": "Wrestler",
    "name": "Unflinching Form I",
    "levels": "2",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 74",
    "masterId": "classFeatures-447"
  },
  {
    "classKey": "wrestler",
    "className": "Wrestler",
    "name": "Turn Weapon",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 74",
    "masterId": "classFeatures-448"
  },
  {
    "classKey": "wrestler",
    "className": "Wrestler",
    "name": "Wrench Limb",
    "levels": "3",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 74",
    "masterId": "classFeatures-449"
  },
  {
    "classKey": "wrestler",
    "className": "Wrestler",
    "name": "Stranglehold",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 74",
    "masterId": "classFeatures-450"
  },
  {
    "classKey": "wrestler",
    "className": "Wrestler",
    "name": "Unflinching Form II",
    "levels": "4",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 74",
    "masterId": "classFeatures-451"
  },
  {
    "classKey": "wrestler",
    "className": "Wrestler",
    "name": "Deathgrip",
    "levels": "5",
    "abilityType": "Prestige class ability",
    "description": "",
    "requirements": "",
    "source": "WC p. 74",
    "masterId": "classFeatures-452"
  }
];

export const CONAN_SORCERY_STYLES = [
  "Cosmic Sorcery",
  "Counterspells",
  "Curses",
  "Divination",
  "Fire Magic",
  "Frost Magic",
  "Hedge Magic",
  "Hypnotism",
  "Immortality",
  "Nature Magic",
  "Necromancy",
  "Oriental Magic",
  "Prestidigitation",
  "Sea Witchery",
  "Serpent Magic",
  "Summoning",
  "Weather Witching"
];

export const CONAN_DRUM_FEATS = [
  "Carried with the Wind",
  "Drums of Fear",
  "Drums of Valusia",
  "Drums of War",
  "Drums of Zogar Sag",
  "Drums of the Altar",
  "Drums of the Dusk",
  "Drums of the Fire",
  "Drums of the Hunt",
  "Drums of the Serpent",
  "Gather the Tribe"
];
