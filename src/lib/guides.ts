import type { Locale } from "@/i18n/config";

export type GuideMeta = { slug: string; tag: string; title: string; desc: string };

const en: GuideMeta[] = [
  { slug: "beginner-guide", tag: "Beginner", title: "AION 2 Beginner Guide — Your First Hours", desc: "Choosing your class, flight basics, early leveling and the mistakes to avoid in your first hours as a Daeva." },
  { slug: "release-date", tag: "Release", title: "AION 2 Release Date — Global Launch & Early Access", desc: "The Oct 5, 2026 global launch, Sep 30 advance access and the Founder's Pack schedule explained." },
  { slug: "tier-list", tag: "Tier List", title: "AION 2 Class Tier List — Best Classes for PvP & PvE", desc: "Ranking every class across solo PvP, group PvP, dungeons and farming in the current meta." },
];

const de: GuideMeta[] = [
  { slug: "beginner-guide", tag: "Einsteiger", title: "AION 2 Einsteiger-Guide — Deine ersten Stunden", desc: "Klassenwahl, Flug-Grundlagen, frühes Leveln und die Fehler, die du als Daeva vermeiden solltest." },
  { slug: "release-date", tag: "Release", title: "AION 2 Release-Termin — Globaler Launch & Early Access", desc: "Der globale Launch am 5. Oktober 2026, Early Access ab 30. September und der Founder's-Pack-Zeitplan." },
  { slug: "tier-list", tag: "Tier-Liste", title: "AION 2 Klassen-Tier-Liste — Beste Klassen für PvP & PvE", desc: "Alle Klassen im Vergleich für Solo-PvP, Gruppen-PvP, Dungeons und Farming in der aktuellen Meta." },
];

const ko: GuideMeta[] = [
  { slug: "beginner-guide", tag: "초보자", title: "아이온 2 초보자 가이드 — 첫 몇 시간", desc: "클래스 선택, 비행 기초, 초반 레벨링과 데바로서 피해야 할 실수를 정리했습니다." },
  { slug: "release-date", tag: "출시일", title: "아이온 2 출시일 — 글로벌 출시 & 얼리 액세스", desc: "2026년 10월 5일 글로벌 출시, 9월 30일 얼리 액세스와 파운더 팩 일정을 설명합니다." },
  { slug: "tier-list", tag: "티어표", title: "아이온 2 클래스 티어표 — PvP·PvE 최고의 클래스", desc: "솔로 PvP, 그룹 PvP, 던전, 파밍별로 모든 클래스를 현재 메타 기준으로 평가합니다." },
];

const ja: GuideMeta[] = [
  { slug: "beginner-guide", tag: "初心者", title: "アイオン2 初心者ガイド — 最初の数時間", desc: "クラス選び、飛行の基本、序盤のレベル上げ、デーヴァとして避けるべき失敗を解説します。" },
  { slug: "release-date", tag: "リリース日", title: "アイオン2 リリース日 — 世界同時発売 & 早期アクセス", desc: "2026年10月5日の世界同時発売、9月30日の早期アクセスとファウンダーパックの日程。" },
  { slug: "tier-list", tag: "ティア表", title: "アイオン2 クラスティア表 — PvP・PvE最強クラス", desc: "ソロPvP、グループPvP、ダンジョン、周回別に全クラスを現メタでランク付けします。" },
];

const data: Record<Locale, GuideMeta[]> = { en, de, ko, ja };

export function getGuides(locale: Locale): GuideMeta[] {
  return data[locale] ?? en;
}

export const guideSlugs = en.map((g) => g.slug);
