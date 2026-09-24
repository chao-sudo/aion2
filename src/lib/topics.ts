import type { Locale } from "@/i18n/config";
import { deTopics } from "@/lib/topics.de";
import { koTopics } from "@/lib/topics.ko";
import { jaTopics } from "@/lib/topics.ja";

export type Topic = {
  slug: string;
  category: string;
  title: string;
  description: string;
  keywords: string;
  body: string;
};

export const topicCategories = [
  "Release Date",
  "Classes",
  "Tier List",
  "Guide",
  "Pay to Win",
  "Review",
  "Platform",
  "Server",
] as const;

export const topics: Topic[] = [
  {
    slug: "release-date",
    category: "Release Date",
    title: "AION 2 Release Date: Global Launch Oct 5 & Early Access",
    description: "AION 2 launches October 5, 2026 on PC. Pre-order a Founder's Pack for early access from September 30. Here are the confirmed dates and schedule.",
    keywords: "aion 2 release date, aion 2 early access, aion 2 beta, aion 2 launch date",
    body: "AION 2 launches globally on **October 5, 2026** on PC via Steam and NC's Purple launcher. It is a free-to-play MMORPG, with optional Founder's Packs that unlock play five days earlier.\n\n## Advance access\n\nPre-purchasing any Founder's Pack unlocks **Advance Access starting September 30, 2026**. Steam lists the same date on all three editions. Access starts ahead of the full release, so launch-day players can enter the world before the general population.\n\n## Founder's Packs\n\nSteam lists three pre-purchase editions: **Standard at $24.99**, **Deluxe at $49.99**, and **Ultimate at $99.99**. All three include the game and the Founder's Pack content, and all three grant the same five-day advance access window. The higher tiers add more cosmetics and in-game bonuses.\n\n## Beta and launch tests\n\nNC ran a **Launch Scale Test** before release. The official Japanese site listed a pre-download from September 16, with test windows on September 17–18 and September 19. Steam announcements also referenced a Launch Scale Test that wrapped up around September 19, 2026.\n\n## What is confirmed at launch\n\nThe Steam store page confirms AION 2 is **PC only**, built on **Unreal Engine 5**, across a world **36 times larger** than the original AION. The store description confirms **over 200 dungeons** in solo, 5-player, and 10-player formats, plus full 3D flight as a Daeva and a faction war between Elyos and Asmodians.",
  },
  {
    slug: "early-access",
    category: "Release Date",
    title: "AION 2 Early Access: Sep 30 Founder's Pack Access Explained",
    description: "AION 2 early access starts September 30, 2026 when you pre-order a Founder's Pack. Learn the start date, the three editions, and what each one includes.",
    keywords: "aion 2 early access, aion 2 founders pack, aion 2 release date",
    body: "AION 2 early access begins **September 30, 2026**, five days before the October 5 global launch. It is unlocked by pre-purchasing a Founder's Pack.\n\n## How to enter early access\n\nThe only confirmed way into early access is a **Founder's Pack**. Steam shows the same advance-access start date on the Standard, Deluxe, and Ultimate editions. The full release follows on October 5, 2026.\n\n## Standard Founder's Pack\n\nThe **Standard Founder's Pack** is $24.99 and includes the game, the Founder's Pack, five-day advance access, a 30-day membership, the \"Vanguard of Atreia\" title, and a Daeva's Campaign Supply Chest.\n\n## Deluxe and Ultimate editions\n\nThe **Deluxe** edition at $49.99 adds the Ascended Daeva skin set and the Eternal Sun weapon skin chest on top of the Standard contents. The **Ultimate** edition at $99.99 further adds a Daeva's Styling Chest, the Moonlit Aria skin set, the Black Dragon pet, and Blazing Sun Wings.\n\n## What early access actually gives you\n\nEarly access is a head start on servers and progression, not a separate game. Every player ends up in the same version on October 5. The only difference is the cosmetics and membership tied to each pack tier, so the cheapest pack unlocks the same five-day window.",
  },
  {
    slug: "beta",
    category: "Release Date",
    title: "AION 2 Beta & Launch Scale Test: Dates, Access, Rewards",
    description: "AION 2 ran a Launch Scale Test in September 2026 ahead of launch. Here are the beta dates, how access worked, and what the test covered before release.",
    keywords: "aion 2 beta, aion 2 launch scale test, aion 2 pre-registration",
    body: "AION 2 did not run a long open beta. Instead, NC held a short **Launch Scale Test** in September 2026 to prepare servers for launch.\n\n## Test dates\n\nThe official Japanese site listed a **pre-download from September 16**, with test windows on **September 17–18** and **September 19**. The Steam announcements referenced the same Launch Scale Test closing around September 19, 2026.\n\n## Who could join\n\nThe Launch Scale Test was open to all players who pre-downloaded the client. It was framed as a way to \"play AION 2 early and help prepare the game for launch,\" rather than a closed beta.\n\n## Pre-registration\n\nPre-registration opened on the official site from **June 6, 2026** until further notice. Registering with an email or NC account granted a guaranteed mount reward and early news. Exact reward details beyond the bonus mount are marked as 待确认.\n\n## What to expect instead of a beta\n\nThe next confirmed play window is **early access on September 30, 2026** for Founder's Pack owners, followed by the **October 5, 2026** global launch. There is no announced second beta, and further tests have not been confirmed.",
  },
  {
    slug: "tier-list",
    category: "Tier List",
    title: "AION 2 Class Tier List: Best PvP & PvE Classes Ranked",
    description: "Community AION 2 tier list ranking classes for solo PvP, group PvP, dungeons, and farming. See which classes sit in S, A, and B tiers today.",
    keywords: "aion 2 tier list, aion 2 best class, aion 2 pvp tier list",
    body: "Community tier lists rate AION 2's eight launch classes across **solo PvP, group PvP, dungeons, and farming**. Rankings are opinions from KR/TW players and shift with every balance patch, so treat them as a snapshot.\n\n## The class split\n\nAION 2 has **two tanks, four DPS, and two healers**. Tanks are Templar and Gladiator; DPS are Assassin, Ranger, Sorcerer, and Spiritmaster; healers are Cleric and Chanter.\n\n## Solo PvP\n\nCommunity sources place **Assassin, Gladiator, and Templar in S+** for solo PvP. Ranged DPS classes follow in S tier, Chanter in A tier, and Cleric in B tier because its kit is built for groups.\n\n## Group PvP\n\nIn 5–10 player fights, **Templar and Cleric rise to S+**. Gladiator, Assassin, Ranger, Sorcerer, Spiritmaster, and Chanter sit in S. Utility and survivability matter more when teams focus targets.\n\n## Overall class ranking\n\nA widely shared 2026 ranking puts **Gladiator and Assassin in S tier**, Ranger and Cleric in A tier, and Sorcerer in B tier. Gladiator is called the safest all-rounder, while Assassin delivers the sharpest single-target burst. These rankings are community opinions, not official data.",
  },
  {
    slug: "best-class",
    category: "Tier List",
    title: "AION 2 Best Class: Gladiator vs Assassin & Top Picks",
    description: "What is the best class in AION 2? The safest all-rounder is the Gladiator. See the top pick for solo PvP, group play, and beginners at launch.",
    keywords: "aion 2 best class, aion 2 top class, aion 2 class tier list",
    body: "The **safest \"best class\" in AION 2 is the Gladiator** — a high-HP bruiser with lifesteal that works in both PvE and PvP. The right pick still depends on your playstyle.\n\n## Gladiator: the safest pick\n\nGladiator uses a **Greatsword** with sweeping AoE, heavy crowd control, and lifesteal that keeps it alive inside fights. Community rankings place it in S tier as the most complete class, with no major weakness across solo PvE, dungeons, and PvP.\n\n## Assassin: best burst\n\nAssassin is the top **single-target burst** class, built around stealth, back attacks, and short damage windows. It deletes priority targets in PvP, but it is squishier and less forgiving when the fight runs long.\n\n## Best for groups\n\nFor dungeon and raid groups, **Cleric is the most essential class** because no other class replaces its healing, cleansing, barriers, and resurrection. **Templar** is the pick if you want the frontline tank that holds boss aggro.\n\n## Best for beginners\n\nRanger is frequently recommended as the easiest ranged all-rounder, with bows, traps, and kiting that keep you safe while you learn. Any class is viable, but Gladiator and Ranger punish mistakes less. 待确认 which class will dominate the global meta until launch balance lands.",
  },
  {
    slug: "classes",
    category: "Classes",
    title: "AION 2 Classes: All 8 Classes, Roles & Weapons Listed",
    description: "AION 2 launches with 8 classes: Templar, Gladiator, Assassin, Ranger, Sorcerer, Spiritmaster, Cleric, and Chanter. See every role and weapon.",
    keywords: "aion 2 classes, aion 2 class list, aion 2 classes and roles",
    body: "AION 2 launches with **8 classes**, each with one main weapon. Korea and Taiwan also have a ninth class, the **Brawler**, which is not part of the global launch.\n\n## The eight launch classes\n\nThe global classes are **Templar, Gladiator, Assassin, Ranger, Sorcerer, Spiritmaster, Cleric, and Chanter**. Every class is playable by both factions — Elyos and Asmodians — and by both genders.\n\n## Roles\n\nAION 2 has two tanks, four DPS, and two healers. **Templar** is the primary tank and **Gladiator** the bruiser tank-DPS. **Assassin, Ranger, Sorcerer, and Spiritmaster** are the DPS. **Cleric** is the main healer and **Chanter** the hybrid support.\n\n## Weapons\n\nEach class uses one weapon type: Templar uses a Longsword, Gladiator a Greatsword, Assassin a Dagger, Ranger a Bow, Sorcerer a Spellbook, Spiritmaster an Orb, Cleric a Mace, and Chanter a Staff.\n\n## The ninth class\n\nThe **Brawler** uses a fist/gauntlet weapon and is currently live only in Korea and Taiwan. It is a melee DPS built around rage and active blocking. Its global release has not been confirmed. 待确认 whether global servers add it in a later update.",
  },
  {
    slug: "cleric",
    category: "Classes",
    title: "AION 2 Cleric Guide: Skills, Role & Group Value",
    description: "AION 2 Cleric is the main healer with strong recovery, cleansing, barriers, and resurrection. Learn the Cleric role, weapon, and where it shines.",
    keywords: "aion 2 cleric, aion 2 cleric guide, aion 2 healer",
    body: "The **Cleric is AION 2's main healer**, wielding a **Mace**. It is the most valuable class in group content because no other class replaces its healing and support.\n\n## What the Cleric does\n\nThe Cleric brings direct healing, healing over time, cleanses, barriers, defensive cooldowns, and resurrection. A good Cleric reads incoming damage and picks the right answer instead of spamming heals.\n\n## Group value\n\nEvery serious dungeon and raid wants a Cleric. Its protection is essential when a group is learning fights or taking constant damage, and it can completely reverse a PvP fight by saving a teammate who should have died.\n\n## Weaknesses\n\nThe Cleric's personal damage and solo performance keep it out of the top tier in solo rankings. It also has limited crowd control, which makes some 1v1 matchups awkward. In a solo setting, the Cleric is slow to finish fights compared with a dedicated DPS class.\n\n## Where it ranks\n\nCommunity tier lists place Cleric around **A tier overall** and **S+ in 5–10 player PvP**, where its healing and cleansing matter most. It is a safe, high-demand pick for players who want to always find a group.",
  },
  {
    slug: "chanter",
    category: "Classes",
    title: "AION 2 Chanter Guide: Hybrid Support Role & Skills",
    description: "AION 2 Chanter is a hybrid support that mixes melee, healing, team buffs, crowd control, and DPS. Learn the Chanter role, Staff weapon, and when to pick it.",
    keywords: "aion 2 chanter, aion 2 chanter guide, aion 2 support",
    body: "The **Chanter is AION 2's hybrid support**, using a **Staff**. It combines melee, healing, team attack buffs, crowd control, and DPS in one flexible kit.\n\n## What the Chanter does\n\nThe Chanter mixes melee and ranged abilities with DPS, CC, healing, and team attack buffs. Its healing is weaker than a Cleric's, but its versatility makes it useful in many situations where a second support helps.\n\n## How it compares to Cleric\n\nPick Cleric when the group needs a dedicated main healer. Pick Chanter when the group wants extra buffs and damage alongside healing. Many parties value a Chanter as a second support that keeps pressure up.\n\n## Where it ranks\n\nCommunity tier lists place the Chanter around **A tier** in solo PvP and **S tier in small-scale PvP**, where its buffs and cleansing add more value. Its exact position shifts by patch.\n\n## Is it beginner friendly?\n\nThe Chanter is flexible but asks more decision-making than a pure role. It is a good choice for players who want a support that can still fight back. 待确认 global balance at launch, since KR/TW patches are still adjusting class power.",
  },
  {
    slug: "gladiator",
    category: "Classes",
    title: "AION 2 Gladiator Guide: Tank-DPS Bruiser Explained",
    description: "AION 2 Gladiator is the Greatsword bruiser with lifesteal, AoE damage, and tank-level durability. Learn the Gladiator role, skills, and why it ranks top tier.",
    keywords: "aion 2 gladiator, aion 2 gladiator guide, aion 2 best class",
    body: "The **Gladiator is AION 2's frontline bruiser**, wielding a **Greatsword**. It mixes tank durability with DPS pressure and is widely called the safest all-rounder.\n\n## What the Gladiator does\n\nThe Gladiator uses sweeping AoE attacks, heavy crowd control, and lifesteal to stay alive inside fights that force other damage dealers out. Its tanky passives make mistakes far less punishing.\n\n## Tank or DPS?\n\nThe Gladiator is listed as **Tank / DPS**. It can off-tank normal dungeons and endgame raids while still competing with dedicated damage classes. A partywide damage buff and extra lifesteal for allies add group value.\n\n## Why it ranks highly\n\nCommunity rankings put Gladiator in **S tier overall** and note it has been dominating Taiwan and Korean leaderboards, especially in solo PvE and PvP. Assassin has sharper burst, but the Gladiator has almost no major weaknesses.\n\n## Who should pick it\n\nGladiator suits players who want a durable melee class that survives mistakes and stays useful in every content type. It is a strong first class. 待确认 exact launch numbers, since rankings are community opinions.",
  },
  {
    slug: "brawler",
    category: "Classes",
    title: "AION 2 Brawler Guide: The New Fist DPS Class (KR/TW)",
    description: "AION 2 Brawler is the ninth class, a fist-wielding melee DPS live in Korea and Taiwan. Learn its rage mechanic, blocking, and global release status.",
    keywords: "aion 2 brawler, aion 2 brawler class, aion 2 ninth class",
    body: "The **Brawler is AION 2's ninth class**, a fist-wielding melee DPS. It is live in **Korea and Taiwan** but was not part of the eight-class global launch.\n\n## The Brawler's core mechanic\n\nThe Brawler builds **rage** with basic attacks, then spends it on stronger skills. It uses active blocking and a **Rampage** state, making it feel more like an active melee fighter than a rotation-based class.\n\n## Weapons and role\n\nThe Brawler uses a **fist/gauntlet** weapon and is a pure DPS class, not a tank. Community players describe it as demanding: strong when block timing works, fragile when it fails.\n\n## Global availability\n\nThe global client did not ship the Brawler at launch. Some sources report its skill names were still present but redacted in the global build as of September 2026. Its global release is **待确认**.\n\n## Should you care?\n\nIf you like aggressive, timing-based melee combat, the Brawler is worth watching. Its animations and Rampage state give it a distinct identity compared with the other melee classes. Until NC confirms a global date, global players can only play the eight launch classes. 待确认 any future chapter that adds it.",
  },
  {
    slug: "spiritmaster",
    category: "Classes",
    title: "AION 2 Spiritmaster Guide: Summoner Pet DPS Explained",
    description: "AION 2 Spiritmaster summons elemental spirits to fight for it. Learn the Spiritmaster role, Orb weapon, and how the pet DPS build works in PvE and PvP.",
    keywords: "aion 2 spiritmaster, aion 2 spiritmaster guide, aion 2 summoner",
    body: "The **Spiritmaster is AION 2's summoner**, wielding an **Orb**. It commands elemental spirits that deal sustained damage while the player resists crowd control.\n\n## What the Spiritmaster does\n\nThe Spiritmaster summons elemental spirits to deal continuous damage. It also has strong **CC resistance**, which makes it harder to lock down in PvP than a typical caster.\n\n## Spiritmaster vs Sorcerer\n\nThe Sorcerer is the burst caster that sacrifices defense for damage. The Spiritmaster is the sustained pet DPS with more resilience. Skilled players can use its unique mechanics to control fights in PvP.\n\n## Naming note\n\nOne wiki lists this class as **Elementalist**, while other sources use **Spiritmaster**. They refer to the same summoner role; the global name is Spiritmaster. 待确认 if regional clients use a different name.\n\n## Where it fits\n\nCommunity tier lists keep the Spiritmaster in the S range for small-scale PvP, with strong performance for players who master pet management. The pet keeps dealing damage while moving, so the class is hard to shut down. It rewards patience more than a straightforward DPS pick.",
  },
  {
    slug: "guide",
    category: "Guide",
    title: "AION 2 Guide: Leveling, Skills & Progression Overview",
    description: "The AION 2 guide hub: how leveling, main quests, side quests, skills, and gear fit together in your first hours. Direct answers for new Daevas.",
    keywords: "aion 2 guide, aion 2 beginner guide, aion 2 leveling",
    body: "For new AION 2 players, the fastest start is to **focus the main story quest first** and activate side quests as you go. Main quests carry most early progression and unlock a weapon reward when finished.\n\n## Early leveling\n\nCommunity launch advice is to push the main story as hard as possible, then complete side quests that sit on your route. Side quests also feed the ascension percentage bar, so you will do them eventually.\n\n## Sealed dungeons and power\n\nSealed dungeons are worth a lot of power for the time they take. Clearing them early gives an easier time on story bosses, especially during the crowded first launch wave.\n\n## Skills and stigma shards\n\nSkill points come from several sources, including side quests and open-world dungeons. **Stigma shards** are earned through the Abyss, Shugo mini-games, and dungeons. Some progression can be accelerated with currency, but the main sources still require play.\n\n## Gear basics\n\nQuest rewards cover most of your leveling gear. Community players report finishing the main story quest can reward a weapon, though the exact item is 待确认. After that, dungeons and crafting take over.",
  },
  {
    slug: "pvp",
    category: "Guide",
    title: "AION 2 PvP Guide: Arena, Abyss & Faction War Explained",
    description: "AION 2 PvP spans Arena duels, open-world fights, and the Abyss faction war. Learn the PvP modes, Abyss Points gear, and what spending changes.",
    keywords: "aion 2 pvp, aion 2 pvp guide, aion 2 arena",
    body: "AION 2 PvP has two main lanes: **Arena**, which focuses on personal skill, and the **Abyss**, which hosts large-scale faction wars, fortress battles, field bosses, and rank progression.\n\n## The Abyss\n\nThe Abyss is the large-scale PvP zone built around the Elyos and Asmodians faction war. It includes fortress battles and Abyss Rank progression, with PvP gear exchanged using **Abyss Points**.\n\n## PvP gear and cost\n\nPvP gear is different from PvE gear. PvP builds stack **defense**, and the real cost sits in enchanting, re-rolling defensive stats, and slotting PvP Manastones. Base gear is not the hard part; upgrading it is.\n\n## Map requirements\n\nThe Chaotic Middle **Rashanta** map requires level 45 and 3,000 item level, and has no flight — only gliding. 待确认 whether this threshold is identical on global servers.\n\n## Pay-to-win pressure\n\nPvP is where monetization hurts most. Players can buy premium currency and trade it for Kinah to accelerate gear, and whales run defense-stacked hybrid sets. Normalized battlefield modes reduce the gap, but open-world PvP exposes it. These are community reports, not official statements.",
  },
  {
    slug: "builds",
    category: "Guide",
    title: "AION 2 Builds: Skills, Stigma Shards & Gear Systems",
    description: "AION 2 builds span skill points, stigma shards, arcana cards, mana stones, and gear. Learn the progression systems that shape a strong build.",
    keywords: "aion 2 builds, aion 2 build guide, aion 2 skills",
    body: "A strong AION 2 build is built from several layered systems: **skill points, stigma shards, arcana cards, mana stones, and gear**. No single system carries a character.\n\n## Skill points\n\nSkill points come from both paid and unpaid paths. Free sources include side quests and open-world instanced dungeons, while some sources can be accelerated with currency.\n\n## Stigma shards and arcana cards\n\nStigma skill shards are earned through the **Abyss, Shugo mini-games, and dungeons**. Arcana cards drop from dungeons or are crafted after grinding. Kinah can help with smaller upgrade steps, but it cannot directly buy the main collection progress.\n\n## Mana stones and gear rolls\n\nMana stones are used to roll and reroll defensive stats on gear. Community players warn this system drains currency, so settle for a comfortable roll rather than chasing perfect stats.\n\n## Divination board and wings\n\nThe divination board has eight boards; some crystals come from Kinah or gameplay, others only from completing content. Wings must be collected through difficult content and in-game currencies. 待确认 exact global rates, since these details come from KR/TW play.",
  },
  {
    slug: "pay-to-win",
    category: "Pay to Win",
    title: "AION 2 Pay to Win? Monetization & Battle Pass Explained",
    description: "Is AION 2 pay to win? It is free to play with a monthly Battle Pass, premium currency, and PvP gear acceleration. Here is the honest picture from KR players.",
    keywords: "aion 2 pay to win, aion 2 p2w, aion 2 monetization",
    body: "AION 2 is **free to play**, but it has pay-to-win elements, especially in PvP. A Korean player's long-term report describes a \"soft subscription\" model where spending accelerates progression rather than gating all content.\n\n## The monthly pass\n\nThe most commonly cited \"essential\" spend is a roughly **$30 monthly Battle Pass**. It is technically optional, but without it progression slows and access to the Broker (auction house) is restricted. Exact global pricing is 待确认.\n\n## Premium currency and Kinah\n\nPlayers can buy **Quna** (premium currency) and trade it for **Kinah**, the in-game gold. Heavy spenders use this to accelerate gear. Player-to-player RMT for Kinah exists but breaks the terms of service.\n\n## PvE vs PvP impact\n\nCommunity reports say a non-spender can clear all PvE content in the first months without a subscription. The gap is much bigger in open-world PvP, where defense-stacked \"whale\" builds dominate. Normalized battlefields reduce the gap.\n\n## Class balance matters more\n\nKR players often say the bigger problem is class balance, not monetization. The meta swings hard between patches, and NC has called balance a priority. 待确认 what the global version ships with.",
  },
  {
    slug: "review",
    category: "Review",
    title: "AION 2 Review: Gameplay, Progression & Endgame Scores",
    description: "Our AION 2 review roundup: a 1000-hour player scores gameplay 8.5/10, progression 7.5/10, and endgame 6.5/10. Read the strengths and weak points.",
    keywords: "aion 2 review, aion 2 rating, aion 2 first impressions",
    body: "A 1000-hour KR/TW player review scores AION 2's **gameplay 8.5/10**, **character progression 7.5/10**, and **endgame 6.5/10**. These are one player's scores and exclude monetization.\n\n## Gameplay: 8.5/10\n\nThe reviewer calls the core gameplay solid and a real MMO that looks good and performs well. The score excludes endgame and combat, which are rated separately.\n\n## Progression: 7.5/10\n\nCharacter progression is described as one of the game's strongest points compared to other theme-park Korean MMOs, because most systems revolve around it.\n\n## Endgame: 6.5/10\n\nEndgame scores lower. The biggest criticism is the repetitive loop common to theme-park MMOs. The reviewer feels the endgame holds the game back more than its combat or progression.\n\n## First impressions from press\n\nMassively Overpowered's first impression called AION 2 \"surprisingly familiar,\" praising a detailed character creator but criticizing old-school \"kill ten rats\" quest design and combat that offers tab-target plus action modes. The preview also called out small open-world details like micro-dungeons and collectibles. These are opinions, not final review scores.",
  },
  {
    slug: "gameplay",
    category: "Review",
    title: "AION 2 Gameplay: Aerial Combat, Dungeons & Systems",
    description: "AION 2 gameplay centers on full 3D aerial combat as a Daeva, plus over 200 dungeons and a deep character creator. Here is what to expect at launch.",
    keywords: "aion 2 gameplay, aion 2 combat, aion 2 features",
    body: "AION 2's defining feature is **full 3D aerial combat**. As a Daeva, flight is not just travel — it is how you fight, explore, and gain altitude for an advantage.\n\n## Aerial combat\n\nThe Steam description says verticality is in the DNA of AION 2, and rewards players who think and fight in three dimensions. Every region and encounter is designed around that vertical axis.\n\n## Dungeons and PvE\n\nAION 2 advertises **over 200 dungeons** across solo challenges, 5-player parties, and 10-player group dungeons. Seasonal challenges, competitive rankings, and open-world events sit alongside the Abyss faction war.\n\n## Character creation\n\nThe character creator offers **over 200 customization options**, plus outfits, mounts, and wings to collect. Steam also lists accessibility features and in-app purchases.\n\n## Combat style\n\nCombat can be played as traditional tab-target or a softer action mode. A press preview called the action mode closer to an \"Elder Scrolls Online style\" feel. Questing is described as a linear theme-park main story. Players who prefer the classic tab-target feel can keep that option. 待确认 exact launch content count.",
  },
  {
    slug: "steam",
    category: "Platform",
    title: "AION 2 Steam: Price, Languages & System Info",
    description: "AION 2 is free to play on Steam, PC only, with 8 supported languages and three Founder's Packs. Here is the Steam page breakdown for launch.",
    keywords: "aion 2 steam, aion 2 steam release, aion 2 pc",
    body: "AION 2 is **free to play on Steam** and releases **October 5, 2026**. It is **PC only**, built on Unreal Engine 5.\n\n## Steam editions\n\nSteam lists three pre-purchase editions: **Standard $24.99**, **Deluxe $49.99**, and **Ultimate $99.99**. All three grant advance access from September 30, 2026. The base game itself is free to play.\n\n## Languages\n\nThe Steam page lists 8 supported languages. Confirmed options include **English, French, German, Spanish (Spain), and Japanese**, with full audio only listed for English and Japanese. Other languages are 待确认.\n\n## Store details\n\nSteam lists online PvP and online co-op, in-app purchases, family sharing, and an ESRB Teen (13+) rating. Steam Deck compatibility is marked **Unknown**.\n\n## Accessibility and ratings\n\nSteam lists accessibility features and an ESRB rating of Teen (13+) with in-game purchases. The page also shows online PvP and co-op modes, plus family sharing support.\n\n## Where to get it\n\nThe game is also available through NC's Purple launcher. For launch-day players, the Steam wishlist is the simplest way to track the unlock on October 5, 2026.",
  },
  {
    slug: "mobile",
    category: "Platform",
    title: "AION 2 Mobile: Is There a Mobile Version?",
    description: "AION 2 Mobile exists in Japan but has no confirmed global version, while the PC game is Steam-only. Here is what we know about mobile support.",
    keywords: "aion 2 mobile, aion 2 android, aion 2 ios",
    body: "There is a separate **AION 2 Mobile** version, but it has **no confirmed global release**. The main AION 2 game on Steam is PC only.\n\n## What the mobile version is\n\nAION 2 Mobile plays like the PC version, including auto-path options, but players report the reaction time for PvP is harder on touch controls. The controls use an \"AION 1 control mode\" that is decent after practice.\n\n## Availability\n\nThe mobile version is discussed in the Japan region, and community players say it is impressive but lacks a global version. A Western launch is **待确认**.\n\n## Is the PC game on mobile?\n\nNo. The Steam AION 2 is PC only on Unreal Engine 5. Steam Deck compatibility is listed as Unknown, which is not the same as a native mobile client.\n\n## How it plays\n\nPlayers say the mobile build mirrors the PC experience, including auto-path movement, but manual combat and PvP reaction time are harder on a touchscreen. The AION 1 control mode is reported to feel decent once you learn it.\n\n## What to watch\n\nIf you want AION 2 on a phone, watch the Japanese official channels for mobile news. Do not expect the global Steam build to run on iOS or Android. 待确认 any global mobile announcement.",
  },
  {
    slug: "server-status",
    category: "Server",
    title: "AION 2 Server Status: How to Check if Servers Are Down",
    description: "Check AION 2 server status with real-time monitors for the Taiwan servers. See current online status, ping data, and how outages are tracked.",
    keywords: "aion 2 server status, aion 2 down, aion 2 servers",
    body: "At the time of the collected data, AION 2 **Taiwan servers were online** across both the Elyos and Asmodian factions. Server status changes constantly, so always check a live monitor.\n\n## How to check status\n\nThird-party trackers list AION 2 Taiwan servers with a live online/offline state and ping times. One monitor updated on September 23, 2026 and showed all listed servers online.\n\n## Taiwan servers\n\nThe tracker lists Elyos servers including Ariel, Bakarma, Kaisinel, Siel, and Vaizel, plus Asmodian servers including Azphel, Beritra, Israphel, and Zikel. This is region data, not global launch data.\n\n## Outage tracking\n\nA status site reported no active problems and about 97.8% uptime in its tracking window. These third-party numbers reflect community reports, not official NC telemetry.\n\n## Caveats\n\nSome third-party pages carry outdated or incorrect game metadata, so prefer the official site and Steam announcements for downtime news. Use a live monitor only as a quick health check. Global server names and launch status are 待确认 until October 5, 2026.",
  }
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getTopics(locale: Locale): Topic[] {
  if (locale === "de" || locale === "ko" || locale === "ja") {
    const source = locale === "de" ? deTopics : locale === "ko" ? koTopics : jaTopics;
    return topics.map((t) => {
      const localized = source.find((x) => x.slug === t.slug);
      return localized ? { ...t, ...localized } : t;
    });
  }
  return topics;
}

export function getTopicByLocale(slug: string, locale: Locale): Topic | undefined {
  return getTopics(locale).find((t) => t.slug === slug);
}
