import type { Locale } from "@/i18n/config";

export type NavItem = { label: string; href: string };
export type Language = { code: string; flag: string; label: string; href: string };

export type Dictionary = {
  siteName: string;
  tagline: string;
  playOnSteam: string;
  primaryNav: NavItem[];
  secondaryNav: NavItem[];
  languagesTitle: string;
  languages: Language[];
  footer: {
    about: string;
    guidesTitle: string;
    guides: NavItem[];
    classesTitle: string;
    classes: NavItem[];
    resourcesTitle: string;
    resources: NavItem[];
    official: { label: string; url: string }[];
    legal: { privacy: NavItem; terms: NavItem; about: NavItem; contact: NavItem };
    copyright: string;
    buyOnSteam: string;
  };
  article: { updated: string };
};

const en: Dictionary = {
  siteName: "AION 2",
  tagline: "The Sky is the Battlefield · Wiki",
  playOnSteam: "Play on Steam",
  primaryNav: [
    { label: "Classes", href: "/classes" },
    { label: "Guides", href: "/guide" },
    { label: "Themen", href: "/topics" },
    { label: "Topics", href: "/topics" },
    { label: "Release Date", href: "/guide/release-date" },
    { label: "Tier List", href: "/guide/tier-list" },
  ],
  secondaryNav: [
    { label: "Beginner Guide", href: "/guide/beginner-guide" },
    { label: "Release Date", href: "/guide/release-date" },
    { label: "Tier List", href: "/guide/tier-list" },
    { label: "Classes", href: "/classes" },
  ],
  languagesTitle: "Languages · Sprachen · 언어 · 言語",
  languages: [
    { code: "en", flag: "🇬🇧", label: "English", href: "/" },
    { code: "de", flag: "🇩🇪", label: "Deutsch", href: "/de" },
    { code: "ko", flag: "🇰🇷", label: "한국어", href: "/ko" },
    { code: "ja", flag: "🇯🇵", label: "日本語", href: "/ja" },
  ],
  footer: {
    about: "Unofficial fan-made guide for the NCSOFT aerial-combat MMORPG AION 2. All trademarks belong to their respective owners.",
    guidesTitle: "Guides",
    guides: [
      { label: "Beginner Guide", href: "/guide/beginner-guide" },
      { label: "Classes & Jobs", href: "/classes" },
      { label: "Topics", href: "/topics" },
      { label: "Release Date", href: "/guide/release-date" },
      { label: "Tier List", href: "/guide/tier-list" },
    ],
    classesTitle: "Classes",
    classes: [
      { label: "Templar", href: "/classes/templar" },
      { label: "Gladiator", href: "/classes/gladiator" },
      { label: "Assassin", href: "/classes/assassin" },
      { label: "Ranger", href: "/classes/ranger" },
    ],
    resourcesTitle: "Resources",
    resources: [
      { label: "Release Date", href: "/guide/release-date" },
      { label: "Tier List", href: "/guide/tier-list" },
      { label: "Beginner Guide", href: "/guide/beginner-guide" },
      { label: "Classes", href: "/classes" },
    ],
    official: [
      { label: "Official Website", url: "https://aion2.plaync.com/en-us/" },
      { label: "Official Discord", url: "https://discord.gg/aion2official" },
      { label: "Official YouTube", url: "https://www.youtube.com/@Aion2Official" },
    ],
    legal: { privacy: { label: "Privacy Policy", href: "/privacy" }, terms: { label: "Terms of Service", href: "/terms" }, about: { label: "About", href: "/about" }, contact: { label: "Contact", href: "/contact" } },
    copyright: "AION2 wiki · Fan site, not affiliated with NCSOFT.",
    buyOnSteam: "Play on Steam →",
  },
  article: { updated: "Updated" },
};

const de: Dictionary = {
  siteName: "AION 2",
  tagline: "Der Himmel ist das Schlachtfeld · Wiki",
  playOnSteam: "Auf Steam spielen",
  primaryNav: [
    { label: "Klassen", href: "/classes" },
    { label: "Guides", href: "/guide" },
    { label: "Themen", href: "/topics" },
    { label: "Topics", href: "/topics" },
    { label: "Release-Termin", href: "/guide/release-date" },
    { label: "Tier-Liste", href: "/guide/tier-list" },
  ],
  secondaryNav: [
    { label: "Einsteiger-Guide", href: "/guide/beginner-guide" },
    { label: "Release-Termin", href: "/guide/release-date" },
    { label: "Tier-Liste", href: "/guide/tier-list" },
    { label: "Klassen", href: "/classes" },
  ],
  languagesTitle: "Languages · Sprachen · 언어 · 言語",
  languages: [
    { code: "en", flag: "🇬🇧", label: "English", href: "/" },
    { code: "de", flag: "🇩🇪", label: "Deutsch", href: "/de" },
    { code: "ko", flag: "🇰🇷", label: "한국어", href: "/ko" },
    { code: "ja", flag: "🇯🇵", label: "日本語", href: "/ja" },
  ],
  footer: {
    about: "Inoffizieller Fan-Guide zum Luftkampf-MMORPG AION 2 von NCSOFT. Alle Marken gehören ihren jeweiligen Inhabern.",
    guidesTitle: "Guides",
    guides: [
      { label: "Einsteiger-Guide", href: "/guide/beginner-guide" },
      { label: "Klassen & Berufe", href: "/classes" },
      { label: "Themen", href: "/topics" },
      { label: "Release-Termin", href: "/guide/release-date" },
      { label: "Tier-Liste", href: "/guide/tier-list" },
    ],
    classesTitle: "Klassen",
    classes: [
      { label: "Templar", href: "/classes/templar" },
      { label: "Gladiator", href: "/classes/gladiator" },
      { label: "Assassin", href: "/classes/assassin" },
      { label: "Ranger", href: "/classes/ranger" },
    ],
    resourcesTitle: "Ressourcen",
    resources: [
      { label: "Release-Termin", href: "/guide/release-date" },
      { label: "Tier-Liste", href: "/guide/tier-list" },
      { label: "Einsteiger-Guide", href: "/guide/beginner-guide" },
      { label: "Klassen", href: "/classes" },
    ],
    official: [
      { label: "Offizielle Website", url: "https://aion2.plaync.com/en-us/" },
      { label: "Offizieller Discord", url: "https://discord.gg/aion2official" },
      { label: "Offizieller YouTube", url: "https://www.youtube.com/@Aion2Official" },
    ],
    legal: { privacy: { label: "Datenschutz", href: "/privacy" }, terms: { label: "Nutzungsbedingungen", href: "/terms" }, about: { label: "Über uns", href: "/about" }, contact: { label: "Kontakt", href: "/contact" } },
    copyright: "AION2 Wiki · Fanseite, nicht mit NCSOFT verbunden.",
    buyOnSteam: "Auf Steam spielen →",
  },
  article: { updated: "Aktualisiert" },
};

const ko: Dictionary = {
  siteName: "AION 2",
  tagline: "하늘은 전장이다 · 위키",
  playOnSteam: "Steam에서 플레이",
  primaryNav: [
    { label: "클래스", href: "/classes" },
    { label: "가이드", href: "/guide" },
    { label: "토픽", href: "/topics" },
    { label: "출시일", href: "/guide/release-date" },
    { label: "티어표", href: "/guide/tier-list" },
  ],
  secondaryNav: [
    { label: "초보자 가이드", href: "/guide/beginner-guide" },
    { label: "출시일", href: "/guide/release-date" },
    { label: "티어표", href: "/guide/tier-list" },
    { label: "클래스", href: "/classes" },
  ],
  languagesTitle: "Languages · Sprachen · 언어 · 言語",
  languages: [
    { code: "en", flag: "🇬🇧", label: "English", href: "/" },
    { code: "de", flag: "🇩🇪", label: "Deutsch", href: "/de" },
    { code: "ko", flag: "🇰🇷", label: "한국어", href: "/ko" },
    { code: "ja", flag: "🇯🇵", label: "日本語", href: "/ja" },
  ],
  footer: {
    about: "엔씨소프트의 공중 전투 MMORPG 아이온 2를 다루는 비공식 팬 가이드입니다. 모든 상표는 각 소유자에게 있습니다.",
    guidesTitle: "가이드",
    guides: [
      { label: "초보자 가이드", href: "/guide/beginner-guide" },
      { label: "클래스 & 직업", href: "/classes" },
      { label: "토픽", href: "/topics" },
      { label: "출시일", href: "/guide/release-date" },
      { label: "티어표", href: "/guide/tier-list" },
    ],
    classesTitle: "클래스",
    classes: [
      { label: "템플러", href: "/classes/templar" },
      { label: "글라디에이터", href: "/classes/gladiator" },
      { label: "어쌔신", href: "/classes/assassin" },
      { label: "레인저", href: "/classes/ranger" },
    ],
    resourcesTitle: "리소스",
    resources: [
      { label: "출시일", href: "/guide/release-date" },
      { label: "티어표", href: "/guide/tier-list" },
      { label: "초보자 가이드", href: "/guide/beginner-guide" },
      { label: "클래스", href: "/classes" },
    ],
    official: [
      { label: "공식 웹사이트", url: "https://aion2.plaync.com/en-us/" },
      { label: "공식 디스코드", url: "https://discord.gg/aion2official" },
      { label: "공식 유튜브", url: "https://www.youtube.com/@Aion2Official" },
    ],
    legal: { privacy: { label: "개인정보 처리방침", href: "/privacy" }, terms: { label: "이용약관", href: "/terms" }, about: { label: "소개", href: "/about" }, contact: { label: "문의", href: "/contact" } },
    copyright: "AION2 위키 · 엔씨소프트와 무관한 팬 사이트.",
    buyOnSteam: "Steam에서 플레이 →",
  },
  article: { updated: "업데이트" },
};

const ja: Dictionary = {
  siteName: "AION 2",
  tagline: "空こそ戦場 · Wiki",
  playOnSteam: "Steamでプレイ",
  primaryNav: [
    { label: "クラス", href: "/classes" },
    { label: "ガイド", href: "/guide" },
    { label: "トピック", href: "/topics" },
    { label: "リリース日", href: "/guide/release-date" },
    { label: "ティア表", href: "/guide/tier-list" },
  ],
  secondaryNav: [
    { label: "初心者ガイド", href: "/guide/beginner-guide" },
    { label: "リリース日", href: "/guide/release-date" },
    { label: "ティア表", href: "/guide/tier-list" },
    { label: "クラス", href: "/classes" },
  ],
  languagesTitle: "Languages · Sprachen · 언어 · 言語",
  languages: [
    { code: "en", flag: "🇬🇧", label: "English", href: "/" },
    { code: "de", flag: "🇩🇪", label: "Deutsch", href: "/de" },
    { code: "ko", flag: "🇰🇷", label: "한국어", href: "/ko" },
    { code: "ja", flag: "🇯🇵", label: "日本語", href: "/ja" },
  ],
  footer: {
    about: "NCSOFTの空中戦MMORPG『アイオン2』を扱う非公式ファンガイドです。すべての商標は各権利者に帰属します。",
    guidesTitle: "ガイド",
    guides: [
      { label: "初心者ガイド", href: "/guide/beginner-guide" },
      { label: "クラス一覧", href: "/classes" },
      { label: "トピック", href: "/topics" },
      { label: "リリース日", href: "/guide/release-date" },
      { label: "ティア表", href: "/guide/tier-list" },
    ],
    classesTitle: "クラス",
    classes: [
      { label: "テンプラー", href: "/classes/templar" },
      { label: "グラディエーター", href: "/classes/gladiator" },
      { label: "アサシン", href: "/classes/assassin" },
      { label: "レンジャー", href: "/classes/ranger" },
    ],
    resourcesTitle: "リソース",
    resources: [
      { label: "リリース日", href: "/guide/release-date" },
      { label: "ティア表", href: "/guide/tier-list" },
      { label: "初心者ガイド", href: "/guide/beginner-guide" },
      { label: "クラス", href: "/classes" },
    ],
    official: [
      { label: "公式サイト", url: "https://aion2.plaync.com/en-us/" },
      { label: "公式Discord", url: "https://discord.gg/aion2official" },
      { label: "公式YouTube", url: "https://www.youtube.com/@Aion2Official" },
    ],
    legal: { privacy: { label: "プライバシーポリシー", href: "/privacy" }, terms: { label: "利用規約", href: "/terms" }, about: { label: "サイトについて", href: "/about" }, contact: { label: "お問い合わせ", href: "/contact" } },
    copyright: "AION2 Wiki · NCSOFTとは無関係のファンサイト。",
    buyOnSteam: "Steamでプレイ →",
  },
  article: { updated: "更新日" },
};

const dict: Record<Locale, Dictionary> = { en, de, ko, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dict[locale] ?? en;
}

