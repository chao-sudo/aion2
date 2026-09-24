import type { Locale } from "@/i18n/config";

export type Stat = { value: string; label: string };
export type Fact = { label: string; value: string };
export type Hero = {
  eyebrow: string;
  line1: string;
  line2: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  stats: Stat[];
  scroll: string;
};
export type FactionCard = { tag: string; level: string; title: string; desc: string; cta: string };
export type JourneyCard = { icon: string; title: string; desc: string; href: string; cta: string };

export type Home = {
  hero: Hero;
  whatIs: { kicker: string; title: string; paragraphs: string[]; quickFacts: Fact[]; cta: string };
  classesSection: { kicker: string; title: string; explore: string };
  factionsSection: { kicker: string; title: string; cards: FactionCard[] };
  journeySection: { kicker: string; title: string; cards: JourneyCard[] };
  codesSection: { kicker: string; title: string; empty: string; cta: string };
};

const en: Home = {
  hero: {
    eyebrow: "An NCSOFT MMORPG · Unreal Engine 5",
    line1: "The Sky Is the",
    line2: "Battlefield",
    description: "An aerial-combat MMORPG from NCSOFT, built on Unreal Engine 5 across a world 36 times larger than the original. Choose your faction, ascend as a Daeva, and fight a faction war in full 3D flight.",
    primaryCta: "Play on Steam",
    secondaryCta: "Beginner Guide",
    stats: [
      { value: "Oct 5, 2026", label: "Global Launch" },
      { value: "Free", label: "To Play" },
      { value: "8", label: "Classes at Launch" },
      { value: "Sep 30, 2026", label: "Early Access" },
    ],
    scroll: "Scroll",
  },
  whatIs: {
    kicker: "A New Saga",
    title: "What is AION 2?",
    paragraphs: [
      "AION 2 is NCSOFT's free-to-play MMORPG built entirely around aerial combat on Unreal Engine 5. You ascend as a Daeva and fight across a world 36 times larger than the original AION.",
      "Whether you are learning your first flight maneuver, choosing a faction, or pushing toward endgame faction war, the whole game is designed around the sky as the battlefield.",
    ],
    quickFacts: [
      { label: "Developer", value: "NCSOFT" },
      { label: "Publisher", value: "NCSOFT" },
      { label: "Genre", value: "Aerial Combat MMORPG" },
      { label: "Platform", value: "PC (Steam)" },
      { label: "Players", value: "Online Multiplayer" },
      { label: "Price", value: "Free to Play" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Release", value: "Oct 5, 2026" },
    ],
    cta: "Explore All Guides",
  },
  classesSection: { kicker: "Choose Your Path", title: "The Classes", explore: "Explore" },
  factionsSection: {
    kicker: "Elyos & Asmodians",
    title: "Choose a Faction",
    cards: [
      { tag: "Light Faction", level: "The Children of Light", title: "Elyos", desc: "The luminous faction that descended from the skies of Atreia to protect the world from the Asmodian invasion.", cta: "Faction Guide" },
      { tag: "Dark Faction", level: "The Shadow-Born", title: "Asmodians", desc: "The dark-winged faction that endured in the shadows and now strikes back with relentless cunning and resilience.", cta: "Faction Guide" },
    ],
  },
  journeySection: {
    kicker: "Daeva's Codex",
    title: "Start Your Journey",
    cards: [
      { icon: "calendar", title: "Release Date", desc: "Global launch info, early access and the Founder's Pack schedule.", href: "/guide/release-date", cta: "Read More" },
      { icon: "compass", title: "Beginner Guide", desc: "Your first hours: choosing a class, flight basics and early progression.", href: "/guide/beginner-guide", cta: "Read More" },
      { icon: "layers", title: "Classes & Jobs", desc: "All 8 classes at launch — roles, weapons and recommended playstyles.", href: "/classes", cta: "Read More" },
      { icon: "trophy", title: "Tier List", desc: "Best classes for PvP, PvE and farming in the current meta.", href: "/guide/tier-list", cta: "Read More" },
      { icon: "shield", title: "Templar", desc: "The beginner-friendly frontline tank with strong defense and aggro.", href: "/classes/templar", cta: "Read More" },
      { icon: "heart", title: "Cleric", desc: "The essential group healer with recovery, cleanses and resurrection.", href: "/classes/cleric", cta: "Read More" },
    ],
  },
  codesSection: {
    kicker: "Redeem Codes",
    title: "AION 2 Codes",
    empty: "No active redeem codes have been announced yet.",
    cta: "Check Official Discord",
  },
};

const de: Home = {
  hero: {
    eyebrow: "Ein NCSOFT-MMORPG · Unreal Engine 5",
    line1: "Der Himmel ist",
    line2: "das Schlachtfeld",
    description: "Ein Luftkampf-MMORPG von NCSOFT, gebaut mit Unreal Engine 5 in einer Welt, die 36-mal größer ist als das Original. Wähle deine Fraktion, steige als Daeva auf und kämpfe in vollem 3D-Flug.",
    primaryCta: "Auf Steam spielen",
    secondaryCta: "Einsteiger-Guide",
    stats: [
      { value: "5. Okt 2026", label: "Globaler Launch" },
      { value: "Kostenlos", label: "Spielbar" },
      { value: "8", label: "Klassen zum Launch" },
      { value: "30. Sep 2026", label: "Early Access" },
    ],
    scroll: "Scrollen",
  },
  whatIs: {
    kicker: "Eine neue Saga",
    title: "Was ist AION 2?",
    paragraphs: [
      "AION 2 ist NCSOFTs kostenloses MMORPG, das vollständig auf Luftkämpfe mit Unreal Engine 5 ausgelegt ist. Du steigst als Daeva auf und kämpfst in einer Welt, die 36-mal größer ist als das ursprüngliche AION.",
      "Ob du dein erstes Flugmanöver lernst, eine Fraktion wählst oder dich auf den Endgame-Fraktionskrieg vorbereitest — das gesamte Spiel dreht sich um den Himmel als Schlachtfeld.",
    ],
    quickFacts: [
      { label: "Entwickler", value: "NCSOFT" },
      { label: "Publisher", value: "NCSOFT" },
      { label: "Genre", value: "Luftkampf-MMORPG" },
      { label: "Plattform", value: "PC (Steam)" },
      { label: "Spieler", value: "Online-Multiplayer" },
      { label: "Preis", value: "Kostenlos spielbar" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Release", value: "5. Okt 2026" },
    ],
    cta: "Alle Guides ansehen",
  },
  classesSection: { kicker: "Wähle deinen Weg", title: "Die Klassen", explore: "Entdecken" },
  factionsSection: {
    kicker: "Elyos & Asmodians",
    title: "Wähle eine Fraktion",
    cards: [
      { tag: "Licht-Fraktion", level: "Die Kinder des Lichts", title: "Elyos", desc: "Die leuchtende Fraktion, die vom Himmel Atreias herabstieg, um die Welt vor der Invasion der Asmodians zu schützen.", cta: "Fraktions-Guide" },
      { tag: "Dunkle Fraktion", level: "Die Schattengeborenen", title: "Asmodians", desc: "Die dunkelbeflügelte Fraktion, die in den Schatten überlebte und nun mit List und Zähigkeit zurückschlägt.", cta: "Fraktions-Guide" },
    ],
  },
  journeySection: {
    kicker: "Codex des Daeva",
    title: "Starte deine Reise",
    cards: [
      { icon: "calendar", title: "Release-Termin", desc: "Globaler Launch, Early Access und der Founder's-Pack-Zeitplan.", href: "/guide/release-date", cta: "Weiterlesen" },
      { icon: "compass", title: "Einsteiger-Guide", desc: "Deine ersten Stunden: Klassenwahl, Flug-Grundlagen und früher Fortschritt.", href: "/guide/beginner-guide", cta: "Weiterlesen" },
      { icon: "layers", title: "Klassen & Berufe", desc: "Alle 8 Klassen zum Launch — Rollen, Waffen und Spielweisen.", href: "/classes", cta: "Weiterlesen" },
      { icon: "trophy", title: "Tier-Liste", desc: "Die besten Klassen für PvP, PvE und Farming in der aktuellen Meta.", href: "/guide/tier-list", cta: "Weiterlesen" },
      { icon: "shield", title: "Templar", desc: "Der einsteigerfreundliche Fronttank mit starker Verteidigung und Aggro.", href: "/classes/templar", cta: "Weiterlesen" },
      { icon: "heart", title: "Cleric", desc: "Der unverzichtbare Gruppenheiler mit Heilung, Reinigung und Wiederbelebung.", href: "/classes/cleric", cta: "Weiterlesen" },
    ],
  },
  codesSection: {
    kicker: "Codes einlösen",
    title: "AION 2 Codes",
    empty: "Bisher wurden keine aktiven Codes angekündigt.",
    cta: "Offiziellen Discord ansehen",
  },
};

const ko: Home = {
  hero: {
    eyebrow: "엔씨소프트 MMORPG · 언리얼 엔진 5",
    line1: "하늘은 곧",
    line2: "전장이다",
    description: "엔씨소프트가 언리얼 엔진 5로 제작한 공중 전투 MMORPG. 원작보다 36배 넓은 세계에서 진영을 선택하고, 데바가 되어 3D 비행 전투를 펼치세요.",
    primaryCta: "Steam에서 플레이",
    secondaryCta: "초보자 가이드",
    stats: [
      { value: "2026. 10. 5", label: "글로벌 출시" },
      { value: "무료", label: "플레이" },
      { value: "8", label: "출시 클래스" },
      { value: "2026. 9. 30", label: "얼리 액세스" },
    ],
    scroll: "스크롤",
  },
  whatIs: {
    kicker: "새로운 서사",
    title: "아이온 2란?",
    paragraphs: [
      "아이온 2는 언리얼 엔진 5를 기반으로 공중 전투에 특화된 엔씨소프트의 무료 MMORPG입니다. 데바가 되어 원작보다 36배 넓은 세계에서 싸우게 됩니다.",
      "첫 비행 기술을 익히든, 진영을 선택하든, 최종 진영전을 준비하든 — 모든 콘텐츠가 하늘을 전장으로 삼아 설계되었습니다.",
    ],
    quickFacts: [
      { label: "개발사", value: "엔씨소프트" },
      { label: "퍼블리셔", value: "엔씨소프트" },
      { label: "장르", value: "공중 전투 MMORPG" },
      { label: "플랫폼", value: "PC (Steam)" },
      { label: "플레이어", value: "온라인 멀티플레이" },
      { label: "가격", value: "무료 플레이" },
      { label: "엔진", value: "언리얼 엔진 5" },
      { label: "출시", value: "2026. 10. 5" },
    ],
    cta: "모든 가이드 보기",
  },
  classesSection: { kicker: "나의 길을 선택하세요", title: "클래스", explore: "자세히 보기" },
  factionsSection: {
    kicker: "엘리오스 & 아스모디안",
    title: "진영 선택",
    cards: [
      { tag: "빛의 진영", level: "빛의 후예", title: "엘리오스", desc: "아트레이아의 하늘에서 내려와 아스모디안의 침공으로부터 세계를 지키는 빛의 진영입니다.", cta: "진영 가이드" },
      { tag: "어둠의 진영", level: "그림자에서 태어난 자", title: "아스모디안", desc: "어둠 속에서 살아남아 끈질긴 지략과 강인함으로 반격하는 어둠 날개의 진영입니다.", cta: "진영 가이드" },
    ],
  },
  journeySection: {
    kicker: "데바의 서",
    title: "여정을 시작하세요",
    cards: [
      { icon: "calendar", title: "출시일", desc: "글로벌 출시, 얼리 액세스와 파운더 팩 일정을 확인하세요.", href: "/guide/release-date", cta: "더 보기" },
      { icon: "compass", title: "초보자 가이드", desc: "첫 몇 시간: 클래스 선택, 비행 기초와 초반 성장.", href: "/guide/beginner-guide", cta: "더 보기" },
      { icon: "layers", title: "클래스 & 직업", desc: "출시 기준 8개 클래스 — 역할, 무기, 추천 플레이 스타일.", href: "/classes", cta: "더 보기" },
      { icon: "trophy", title: "티어표", desc: "현재 메타 기준 PvP·PvE·파밍 최고의 클래스.", href: "/guide/tier-list", cta: "더 보기" },
      { icon: "shield", title: "템플러", desc: "강한 방어와 어그로를 갖춘 초보자 친화적 최전방 탱커.", href: "/classes/templar", cta: "더 보기" },
      { icon: "heart", title: "클레릭", desc: "회복·정화·부활을 갖춘 필수 그룹 힐러.", href: "/classes/cleric", cta: "더 보기" },
    ],
  },
  codesSection: {
    kicker: "쿠폰 코드",
    title: "아이온 2 코드",
    empty: "아직 공개된 활성 코드가 없습니다.",
    cta: "공식 디스코드 확인",
  },
};

const ja: Home = {
  hero: {
    eyebrow: "NCSOFT MMORPG · Unreal Engine 5",
    line1: "空こそ",
    line2: "戦場",
    description: "NCSOFTがUnreal Engine 5で制作した空中戦MMORPG。原作の36倍の広さを持つ世界で勢力を選び、デーヴァとして3D飛行戦闘を繰り広げよう。",
    primaryCta: "Steamでプレイ",
    secondaryCta: "初心者ガイド",
    stats: [
      { value: "2026年10月5日", label: "世界同時発売" },
      { value: "無料", label: "プレイ" },
      { value: "8", label: "初期クラス" },
      { value: "2026年9月30日", label: "早期アクセス" },
    ],
    scroll: "スクロール",
  },
  whatIs: {
    kicker: "新たなサーガ",
    title: "アイオン2とは？",
    paragraphs: [
      "アイオン2は、Unreal Engine 5をベースに空中戦に特化したNCSOFTの基本無料MMORPGです。デーヴァとなり、原作の36倍の広さを持つ世界で戦います。",
      "初めての飛行を覚えるのも、勢力を選ぶのも、終盤の勢力戦に挑むのも——すべてが「空こそ戦場」という設計でつながっています。",
    ],
    quickFacts: [
      { label: "開発", value: "NCSOFT" },
      { label: "パブリッシャー", value: "NCSOFT" },
      { label: "ジャンル", value: "空中戦MMORPG" },
      { label: "プラットフォーム", value: "PC (Steam)" },
      { label: "プレイヤー", value: "オンラインマルチ" },
      { label: "価格", value: "基本無料" },
      { label: "エンジン", value: "Unreal Engine 5" },
      { label: "発売日", value: "2026年10月5日" },
    ],
    cta: "すべてのガイドを見る",
  },
  classesSection: { kicker: "道を選ぼう", title: "クラス", explore: "詳しく見る" },
  factionsSection: {
    kicker: "エリオス & アスモディアン",
    title: "勢力を選ぶ",
    cards: [
      { tag: "光の勢力", level: "光の子ら", title: "エリオス", desc: "アトレイアの空から降り立ち、アスモディアンの侵攻から世界を守る光の勢力です。", cta: "勢力ガイド" },
      { tag: "闇の勢力", level: "影より生まれし者", title: "アスモディアン", desc: "影の中で生き延び、粘り強い知略と強靭さで反撃する闇の翼の勢力です。", cta: "勢力ガイド" },
    ],
  },
  journeySection: {
    kicker: "デーヴァの書",
    title: "旅を始めよう",
    cards: [
      { icon: "calendar", title: "リリース日", desc: "世界同時発売、早期アクセスとファウンダーパックの日程。", href: "/guide/release-date", cta: "続きを読む" },
      { icon: "compass", title: "初心者ガイド", desc: "最初の数時間：クラス選び、飛行の基本、序盤の成長。", href: "/guide/beginner-guide", cta: "続きを読む" },
      { icon: "layers", title: "クラス一覧", desc: "初期8クラス — 役割・武器・おすすめの立ち回り。", href: "/classes", cta: "続きを読む" },
      { icon: "trophy", title: "ティア表", desc: "現在のメタで最強のクラスをPvP・PvE・周回別に解説。", href: "/guide/tier-list", cta: "続きを読む" },
      { icon: "shield", title: "テンプラー", desc: "高い防御とヘイトを持つ初心者向け前衛タンク。", href: "/classes/templar", cta: "続きを読む" },
      { icon: "heart", title: "クレリック", desc: "回復・浄化・蘇生を備えた必須のグループヒーラー。", href: "/classes/cleric", cta: "続きを読む" },
    ],
  },
  codesSection: {
    kicker: "コード入力",
    title: "アイオン2 コード",
    empty: "現在公開中のコードはありません。",
    cta: "公式Discordを見る",
  },
};

const data: Record<Locale, Home> = { en, de, ko, ja };

export function getHome(locale: Locale): Home {
  return data[locale] ?? en;
}

export type FinalCta = { eyebrow: string; title: string; primary: string; secondary: string };

const finalCta: Record<Locale, FinalCta> = {
  en: { eyebrow: "Ready to begin?", title: "Take to the skies today.", primary: "Play on Steam", secondary: "Start with Beginner Guide" },
  de: { eyebrow: "Bereit zum Aufbruch?", title: "Erhebe dich heute in die Lüfte.", primary: "Auf Steam spielen", secondary: "Mit dem Einsteiger-Guide starten" },
  ko: { eyebrow: "시작할 준비가 되셨나요?", title: "오늘 하늘로 날아오르세요.", primary: "Steam에서 플레이", secondary: "초보자 가이드로 시작" },
  ja: { eyebrow: "準備はいいですか？", title: "今日、空へ飛び立とう。", primary: "Steamでプレイ", secondary: "初心者ガイドで始める" },
};

export function getFinalCta(locale: Locale): FinalCta {
  return finalCta[locale] ?? finalCta.en;
}
