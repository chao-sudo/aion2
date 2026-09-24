import type { Locale } from "@/i18n/config";

export type StaticPage = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const enAbout: StaticPage = {
  eyebrow: "About",
  title: "About AION 2 Wiki",
  intro: "AION 2 Wiki is an independent, fan-made guide site for NCSOFT's aerial-combat MMORPG.",
  sections: [
    {
      heading: "What we cover",
      body: [
        "We publish the AION 2 release date, early access and beta schedules, all launch classes, tier lists, PvP, builds, and platform guides.",
        "Every page is written from official sources and community research, with unverified details clearly marked.",
      ],
    },
    {
      heading: "Fan site disclaimer",
      body: [
        "AION 2 Wiki is not affiliated with, endorsed by, or sponsored by NCSOFT.",
        "All game names, logos, and trademarks belong to their respective owners.",
      ],
    },
  ],
};

const enContact: StaticPage = {
  eyebrow: "Contact",
  title: "Contact AION 2 Wiki",
  intro: "Reach the wiki team for corrections, content requests, or partnership questions.",
  sections: [
    {
      heading: "Get in touch",
      body: [
        "For factual corrections or new guide requests, email hello@aion2.wiki.",
        "For the fastest community answers, join the official AION 2 Discord and ask in the community channels.",
      ],
    },
    {
      heading: "What to include",
      body: [
        "Link the page you are reporting, describe the issue, and attach a source if you have one.",
        "We cannot respond to game-support or account issues — those belong to NCSOFT support.",
      ],
    },
  ],
};

const deAbout: StaticPage = {
  eyebrow: "Über uns",
  title: "Über das AION 2 Wiki",
  intro: "Das AION 2 Wiki ist eine unabhängige, von Fans erstellte Ratgeberseite zu NCSOFTs Luftkampf-MMORPG.",
  sections: [
    {
      heading: "Was wir abdecken",
      body: [
        "Wir veröffentlichen Release-Termin, Early Access und Beta-Zeitplan, alle Startklassen, Tier-Listen, PvP, Builds und Plattform-Guides.",
        "Jede Seite basiert auf offiziellen Quellen und Community-Recherche; unbestätigte Details sind klar markiert.",
      ],
    },
    {
      heading: "Haftungsausschluss",
      body: [
        "Das AION 2 Wiki ist nicht mit NCSOFT verbunden, unterstützt oder gesponsert.",
        "Alle Spielnamen, Logos und Marken gehören ihren jeweiligen Inhabern.",
      ],
    },
  ],
};

const deContact: StaticPage = {
  eyebrow: "Kontakt",
  title: "Kontakt zum AION 2 Wiki",
  intro: "Erreiche das Wiki-Team für Korrekturen, Inhaltswünsche oder Partnerschaftsanfragen.",
  sections: [
    {
      heading: "Kontakt aufnehmen",
      body: [
        "Für Korrekturen oder neue Guide-Wünsche schreibe an hello@aion2.wiki.",
        "Für schnelle Community-Antworten tritt dem offiziellen AION 2 Discord bei und frage in den Community-Kanälen.",
      ],
    },
    {
      heading: "Was angeben",
      body: [
        "Verlinke die betroffene Seite, beschreibe das Problem und füge nach Möglichkeit eine Quelle an.",
        "Wir können keine Spiel-Support- oder Account-Anfragen bearbeiten — diese gehören zum NCSOFT-Support.",
      ],
    },
  ],
};

const koAbout: StaticPage = {
  eyebrow: "소개",
  title: "아이온 2 위키 소개",
  intro: "아이온 2 위키는 엔씨소프트의 공중 전투 MMORPG를 다루는 독립 팬 가이드 사이트입니다.",
  sections: [
    {
      heading: "다루는 내용",
      body: [
        "출시일, 얼리 액세스·베타 일정, 모든 출시 클래스, 티어표, PvP, 빌드, 플랫폼 가이드를 제공합니다.",
        "모든 페이지는 공식 소스와 커뮤니티 조사를 바탕으로 작성되며, 확인되지 않은 내용은 명확히 표시됩니다.",
      ],
    },
    {
      heading: "팬 사이트 고지",
      body: [
        "아이온 2 위키는 엔씨소프트와 제휴·승인·후원 관계가 없습니다.",
        "모든 게임 이름, 로고, 상표는 각 소유자에게 있습니다.",
      ],
    },
  ],
};

const koContact: StaticPage = {
  eyebrow: "문의",
  title: "아이온 2 위키 문의",
  intro: "정정 요청, 콘텐츠 제안, 제휴 문의를 위해 위키 팀에 연락하세요.",
  sections: [
    {
      heading: "연락 방법",
      body: [
        "사실관계 정정이나 새 가이드 요청은 hello@aion2.wiki로 보내주세요.",
        "빠른 커뮤니티 답변은 공식 아이온 2 디스코드에서 확인할 수 있습니다.",
      ],
    },
    {
      heading: "포함할 내용",
      body: [
        "해당 페이지 링크와 문제 설명, 가능하면 출처를 함께 보내주세요.",
        "게임 지원이나 계정 문제는 엔씨소프트 고객지원을 이용해 주세요.",
      ],
    },
  ],
};

const jaAbout: StaticPage = {
  eyebrow: "サイトについて",
  title: "アイオン2 Wiki について",
  intro: "アイオン2 Wikiは、NCSOFTの空中戦MMORPGを扱う独立したファンガイドサイトです。",
  sections: [
    {
      heading: "取り扱う内容",
      body: [
        "発売日、早期アクセス・ベータ日程、全初期クラス、ティア表、PvP、ビルド、プラットフォーム情報をまとめています。",
        "各ページは公式情報とコミュニティ調査をもとに作成し、未確認の内容は明示しています。",
      ],
    },
    {
      heading: "ファンサイト免責事項",
      body: [
        "アイオン2 WikiはNCSOFTとは提携・承認・スポンサー関係にありません。",
        "すべてのゲーム名・ロゴ・商標は各権利者に帰属します。",
      ],
    },
  ],
};

const jaContact: StaticPage = {
  eyebrow: "お問い合わせ",
  title: "アイオン2 Wiki へのお問い合わせ",
  intro: "修正依頼、コンテンツのご要望、提携のお問い合わせはこちらからどうぞ。",
  sections: [
    {
      heading: "連絡方法",
      body: [
        "事実の修正や新しいガイドのご要望は hello@aion2.wiki までお送りください。",
        "早めの回答が欲しい場合は、公式アイオン2 Discordのコミュニティチャンネルをご利用ください。",
      ],
    },
    {
      heading: "記載内容",
      body: [
        "対象ページのURL、問題の内容、可能であれば出典を添えてご連絡ください。",
        "ゲームサポートやアカウントに関する問題は、NCSOFTサポートをご利用ください。",
      ],
    },
  ],
};

export const staticPages: Record<string, Record<Locale, StaticPage>> = {
  about: { en: enAbout, de: deAbout, ko: koAbout, ja: jaAbout },
  contact: { en: enContact, de: deContact, ko: koContact, ja: jaContact },
};

export const staticPageSlugs = Object.keys(staticPages);

export function getStaticPage(slug: string, locale: Locale): StaticPage | null {
  const byLocale = staticPages[slug];
  if (!byLocale) return null;
  return byLocale[locale] ?? byLocale.en;
}
