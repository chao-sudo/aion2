import type { Locale } from "@/i18n/config";

export type LegalPage = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const enPrivacy: LegalPage = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  intro: "This fan-made wiki is an independent community project for AION 2.",
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "We do not require an account and do not collect personal information to browse this wiki.",
        "Standard web analytics may record anonymized, aggregate data such as pages visited and approximate region.",
      ],
    },
    {
      heading: "Third-Party Links",
      body: [
        "Links to NCSOFT, Steam, Discord and YouTube open external services that operate under their own privacy policies.",
      ],
    },
  ],
};

const enTerms: LegalPage = {
  eyebrow: "Legal",
  title: "Terms of Service",
  intro: "By using this site you agree to the following terms.",
  sections: [
    {
      heading: "Fan Site Disclaimer",
      body: [
        "AION 2 Wiki is an unofficial fan site and is not affiliated with, endorsed by, or sponsored by NCSOFT.",
        "All game names, logos and trademarks belong to their respective owners.",
      ],
    },
    {
      heading: "Content & Accuracy",
      body: [
        "Guides are provided for general information only and may change as the game is updated.",
        "Game statistics marked as unconfirmed should be treated as provisional until verified against official sources.",
      ],
    },
  ],
};

const dePrivacy: LegalPage = {
  eyebrow: "Rechtliches",
  title: "Datenschutzerklärung",
  intro: "Dieses Fan-Wiki ist ein unabhängiges Community-Projekt zu AION 2.",
  sections: [
    {
      heading: "Erhobene Daten",
      body: [
        "Zum Stöbern ist kein Konto nötig; wir erfassen keine personenbezogenen Daten.",
        "Standard-Webanalysen können anonymisierte, aggregierte Daten wie besuchte Seiten und ungefähre Region erfassen.",
      ],
    },
    {
      heading: "Externe Links",
      body: [
        "Links zu NCSOFT, Steam, Discord und YouTube führen zu externen Diensten mit eigenen Datenschutzrichtlinien.",
      ],
    },
  ],
};

const deTerms: LegalPage = {
  eyebrow: "Rechtliches",
  title: "Nutzungsbedingungen",
  intro: "Mit der Nutzung dieser Website stimmst du den folgenden Bedingungen zu.",
  sections: [
    {
      heading: "Haftungsausschluss",
      body: [
        "AION 2 Wiki ist eine inoffizielle Fanseite und nicht mit NCSOFT verbunden, unterstützt oder gesponsert.",
        "Alle Spielnamen, Logos und Marken gehören ihren jeweiligen Inhabern.",
      ],
    },
    {
      heading: "Inhalt und Genauigkeit",
      body: [
        "Guides dienen nur der allgemeinen Information und können sich mit Spielupdates ändern.",
        "Als unbestätigt markierte Werte sind vorläufig, bis sie durch offizielle Quellen bestätigt werden.",
      ],
    },
  ],
};

const koPrivacy: LegalPage = {
  eyebrow: "법률",
  title: "개인정보 처리방침",
  intro: "이 팬 위키는 아이온 2를 다루는 독립 커뮤니티 프로젝트입니다.",
  sections: [
    {
      heading: "수집 정보",
      body: [
        "둘러보기에 계정이 필요하지 않으며, 개인정보를 수집하지 않습니다.",
        "표준 웹 분석은 방문 페이지와 대략적인 지역 등 익명·집계 데이터를 기록할 수 있습니다.",
      ],
    },
    {
      heading: "외부 링크",
      body: [
        "엔씨소프트, Steam, 디스코드, 유튜브 링크는 각자의 개인정보 처리방침을 따르는 외부 서비스로 연결됩니다.",
      ],
    },
  ],
};

const koTerms: LegalPage = {
  eyebrow: "법률",
  title: "이용약관",
  intro: "이 사이트를 이용하면 다음 약관에 동의하게 됩니다.",
  sections: [
    {
      heading: "팬 사이트 고지",
      body: [
        "아이온 2 위키는 비공식 팬 사이트이며 엔씨소프트와 제휴·승인·후원 관계가 없습니다.",
        "모든 게임 이름, 로고, 상표는 각 소유자에게 있습니다.",
      ],
    },
    {
      heading: "콘텐츠와 정확성",
      body: [
        "가이드는 일반 정보용이며 게임 업데이트에 따라 달라질 수 있습니다.",
        "미확인으로 표시된 수치는 공식 소스로 확인되기 전까지 잠정적으로 봐야 합니다.",
      ],
    },
  ],
};

const jaPrivacy: LegalPage = {
  eyebrow: "法的情報",
  title: "プライバシーポリシー",
  intro: "このファンWikiは『アイオン2』を扱う独立したコミュニティ企画です。",
  sections: [
    {
      heading: "収集する情報",
      body: [
        "閲覧にアカウントは不要で、個人情報を収集しません。",
        "標準的なウェブ解析により、訪問ページやおおよその地域などの匿名・集計データを記録する場合があります。",
      ],
    },
    {
      heading: "外部リンク",
      body: [
        "NCSOFT、Steam、Discord、YouTubeへのリンクは、それぞれ独自のプライバシーポリシーを持つ外部サービスへ移動します。",
      ],
    },
  ],
};

const jaTerms: LegalPage = {
  eyebrow: "法的情報",
  title: "利用規約",
  intro: "本サイトを利用することで、以下の規約に同意したものとみなします。",
  sections: [
    {
      heading: "ファンサイト免責事項",
      body: [
        "アイオン2 Wikiは非公式のファンサイトであり、NCSOFTとは提携・承認・スポンサー関係にありません。",
        "すべてのゲーム名・ロゴ・商標は各権利者に帰属します。",
      ],
    },
    {
      heading: "コンテンツと正確性",
      body: [
        "ガイドは一般的な情報提供を目的とし、ゲームの更新に伴い変更される場合があります。",
        "未確認と記載された数値は、公式情報で確認されるまで暫定的なものとして扱ってください。",
      ],
    },
  ],
};

export const legalPages: Record<string, Record<Locale, LegalPage>> = {
  privacy: { en: enPrivacy, de: dePrivacy, ko: koPrivacy, ja: jaPrivacy },
  terms: { en: enTerms, de: deTerms, ko: koTerms, ja: jaTerms },
};

export const legalSlugs = Object.keys(legalPages);

export function getLegalPage(slug: string, locale: Locale): LegalPage | null {
  const byLocale = legalPages[slug];
  if (!byLocale) return null;
  return byLocale[locale] ?? byLocale.en;
}
