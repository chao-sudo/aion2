import type { Locale } from "@/i18n/config";

export type ClassMeta = {
  slug: string;
  icon: string;
  name: string;
  role: string;
  weapon: string;
  tag: string;
  description: string;
};

const en: ClassMeta[] = [
  { slug: "templar", icon: "shield", name: "Templar", role: "Tank", weapon: "Longsword", tag: "Frontline · Tank", description: "The primary tank with strong defense, HP and aggro control — the backbone of every dungeon group." },
  { slug: "gladiator", icon: "sword", name: "Gladiator", role: "Tank / DPS", weapon: "Greatsword", tag: "Bruiser · Tank-DPS", description: "A frontline bruiser with sweeping AoE, lifesteal and relentless pressure; the safest all-rounder." },
  { slug: "assassin", icon: "crosshair", name: "Assassin", role: "DPS", weapon: "Dagger", tag: "Melee · Burst DPS", description: "Stealthy melee burst with back attacks and crowd control; a top-tier solo PvP killer." },
  { slug: "ranger", icon: "target", name: "Ranger", role: "DPS", weapon: "Bow", tag: "Ranged · Kite DPS", description: "Ranged DPS with bows, traps and excellent kiting — the most reliable all-rounder." },
  { slug: "sorcerer", icon: "sparkles", name: "Sorcerer", role: "DPS", weapon: "Spellbook", tag: "Ranged · Burst Caster", description: "A glass-cannon caster with huge burst and crowd control, but positioning is everything." },
  { slug: "spiritmaster", icon: "wand", name: "Spiritmaster", role: "DPS", weapon: "Orb", tag: "Summoner · Pet DPS", description: "Summons elemental spirits to deal sustained damage while resisting crowd control." },
  { slug: "cleric", icon: "heart", name: "Cleric", role: "Healer", weapon: "Mace", tag: "Support · Main Healer", description: "The main healer with recovery, cleanses, barriers and resurrection — essential in groups." },
  { slug: "chanter", icon: "music", name: "Chanter", role: "Healer / DPS", weapon: "Staff", tag: "Support · Hybrid", description: "Hybrid support that blends melee, heals and team buffs into one versatile kit." },
];

const de: ClassMeta[] = [
  { slug: "templar", icon: "shield", name: "Templar", role: "Tank", weapon: "Langschwert", tag: "Frontlinie · Tank", description: "Der Haupttank mit starker Verteidigung, HP und Aggro-Kontrolle — das Rückgrat jeder Dungeon-Gruppe." },
  { slug: "gladiator", icon: "sword", name: "Gladiator", role: "Tank / DPS", weapon: "Großschwert", tag: "Bruiser · Tank-DPS", description: "Ein Frontlinien-Bruiser mit großflächigem AoE, Lebensraub und unerbittlichem Druck; der sicherste Allrounder." },
  { slug: "assassin", icon: "crosshair", name: "Assassin", role: "DPS", weapon: "Dolch", tag: "Nahkampf · Burst-DPS", description: "Heimlicher Nahkampf-Burst mit Rückenangriffen und Massenkontrolle; ein Top-Killer im Solo-PvP." },
  { slug: "ranger", icon: "target", name: "Ranger", role: "DPS", weapon: "Bogen", tag: "Fernkampf · Kite-DPS", description: "Fernkampf-DPS mit Bögen, Fallen und exzellentem Kiting — der zuverlässigste Allrounder." },
  { slug: "sorcerer", icon: "sparkles", name: "Sorcerer", role: "DPS", weapon: "Zauberbuch", tag: "Fernkampf · Burst-Caster", description: "Ein Glas-Kanonen-Caster mit riesigem Burst und Massenkontrolle, doch Positionierung ist alles." },
  { slug: "spiritmaster", icon: "wand", name: "Spiritmaster", role: "DPS", weapon: "Kugel", tag: "Beschwörer · Pet-DPS", description: "Beschwört Elementargeister für anhaltenden Schaden und widersteht zugleich Massenkontrolle." },
  { slug: "cleric", icon: "heart", name: "Cleric", role: "Heiler", weapon: "Streitkolben", tag: "Support · Hauptheiler", description: "Der Hauptheiler mit Heilung, Reinigung, Barrieren und Wiederbelebung — unverzichtbar in Gruppen." },
  { slug: "chanter", icon: "music", name: "Chanter", role: "Heiler / DPS", weapon: "Stab", tag: "Support · Hybrid", description: "Hybrider Support, der Nahkampf, Heilung und Team-Buffs in einem vielseitigen Kit vereint." },
];

const ko: ClassMeta[] = [
  { slug: "templar", icon: "shield", name: "템플러", role: "탱커", weapon: "장검", tag: "최전방 · 탱커", description: "강한 방어력과 체력, 어그로 관리에 특화된 메인 탱커 — 모든 던전 파티의 핵심입니다." },
  { slug: "gladiator", icon: "sword", name: "글라디에이터", role: "탱커 / 딜러", weapon: "대검", tag: "브루저 · 탱딜", description: "광역 공격과 생명력 흡수, 끊임없는 압박을 갖춘 최전방 브루저 — 가장 안정적인 올라운더입니다." },
  { slug: "assassin", icon: "crosshair", name: "어쌔신", role: "딜러", weapon: "단검", tag: "근접 · 폭딜", description: "은신과 후방 공격, 군중 제어를 활용한 근접 폭딜러 — 최상위 솔로 PvP 킬러입니다." },
  { slug: "ranger", icon: "target", name: "레인저", role: "딜러", weapon: "활", tag: "원거리 · 카이팅 딜러", description: "활과 덫, 뛰어난 카이팅을 갖춘 원거리 딜러 — 가장 신뢰도 높은 올라운더입니다." },
  { slug: "sorcerer", icon: "sparkles", name: "소서러", role: "딜러", weapon: "주문서", tag: "원거리 · 폭딜 캐스터", description: "강력한 폭딜과 군중 제어를 지닌 유리대포 캐스터 — 포지셔닝이 생명입니다." },
  { slug: "spiritmaster", icon: "wand", name: "스피릿마스터", role: "딜러", weapon: "오브", tag: "소환사 · 펫 딜러", description: "정령을 소환해 지속 피해를 주고 군중 제어에 강한 저항력을 지닙니다." },
  { slug: "cleric", icon: "heart", name: "클레릭", role: "힐러", weapon: "메이스", tag: "서포터 · 메인 힐러", description: "회복과 정화, 보호막, 부활을 갖춘 메인 힐러 — 그룹 콘텐츠의 필수 클래스입니다." },
  { slug: "chanter", icon: "music", name: "챈터", role: "힐러 / 딜러", weapon: "지팡이", tag: "서포터 · 하이브리드", description: "근접과 힐, 팀 버프를 하나로 결합한 하이브리드 서포터입니다." },
];

const ja: ClassMeta[] = [
  { slug: "templar", icon: "shield", name: "テンプラー", role: "タンク", weapon: "ロングソード", tag: "前衛 · タンク", description: "防御力・HP・ヘイト管理に優れたメインタンク — あらゆるダンジョン攻略の要です。" },
  { slug: "gladiator", icon: "sword", name: "グラディエーター", role: "タンク / DPS", weapon: "グレートソード", tag: "ブロウラー · タンクDPS", description: "範囲攻撃とライフスティール、絶え間ない圧力を持つ前衛ブロウラー — 最も安定した万能型です。" },
  { slug: "assassin", icon: "crosshair", name: "アサシン", role: "DPS", weapon: "ダガー", tag: "近接 · バーストDPS", description: "ステルスと背面攻撃、CCを駆使する近接バースト — 最上位のソロPvPキラーです。" },
  { slug: "ranger", icon: "target", name: "レンジャー", role: "DPS", weapon: "弓", tag: "遠距離 · キティングDPS", description: "弓と罠、優れたキティングを持つ遠距離DPS — 最も信頼できる万能型です。" },
  { slug: "sorcerer", icon: "sparkles", name: "ソーサラー", role: "DPS", weapon: "スペルブック", tag: "遠距離 · バーストキャスター", description: "強力なバーストとCCを持つガラスキャノン — 立ち回りがすべてです。" },
  { slug: "spiritmaster", icon: "wand", name: "スピリットマスター", role: "DPS", weapon: "オーブ", tag: "召喚士 · ペットDPS", description: "精霊を召喚して持続ダメージを与えつつ、CCへの耐性にも優れます。" },
  { slug: "cleric", icon: "heart", name: "クレリック", role: "ヒーラー", weapon: "メイス", tag: "サポート · メインヒーラー", description: "回復・浄化・バリア・蘇生を備えたメインヒーラー — グループに不可欠です。" },
  { slug: "chanter", icon: "music", name: "チャンター", role: "ヒーラー / DPS", weapon: "スタッフ", tag: "サポート · ハイブリッド", description: "近接・回復・チームバフを一つにまとめた万能サポートです。" },
];

const data: Record<Locale, ClassMeta[]> = { en, de, ko, ja };

export function getClasses(locale: Locale): ClassMeta[] {
  return data[locale] ?? en;
}

export function getClass(locale: Locale, slug: string): ClassMeta | undefined {
  return getClasses(locale).find((c) => c.slug === slug);
}

export const classSlugs = en.map((c) => c.slug);
