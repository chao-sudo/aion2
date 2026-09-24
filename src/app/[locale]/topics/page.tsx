import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getTopics, topicCategories } from "@/lib/topics";
import ArticleHeader from "@/components/ArticleHeader";
import { Icon } from "@/components/icons";

function l(locale: Locale, href: string) {
  return `/${locale}${href}`;
}

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return {
    title: "AION 2 Topics — Guides, Classes, Release & More",
    description: "Browse the AION 2 topic hub: release date, classes, tier list, PvP, builds, reviews, platform and server guides.",
    alternates: { canonical: `/${locale}/topics` },
  };
}

export default async function TopicsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  return (
    <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:px-16">
      <ArticleHeader eyebrow="Topics" title="AION 2 Topics" description="Every keyword hub in one place, filtered from multi-source research." />
      <div className="max-w-5xl mx-auto pb-20 space-y-12">
        {topicCategories.map((category) => {
          const items = getTopics(locale).filter((t) => t.category === category);
          if (items.length === 0) return null;
          return (
            <section key={category}>
              <h2 className="font-display text-2xl text-gold2 mb-5">{category}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((t) => (
                  <Link key={t.slug} href={l(locale, `/topics/${t.slug}`)} className="card p-6 block group">
                    <h3 className="font-display text-lg text-ink group-hover:text-gold2 transition">{t.title}</h3>
                    <p className="text-muted text-sm mt-3 leading-relaxed">{t.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.3em] group-hover:text-gold2 transition">
                      Read
                      <Icon name="arrow-right" width={14} height={14} className="group-hover:translate-x-1 transition" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}