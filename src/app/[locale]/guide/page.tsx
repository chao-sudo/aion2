import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { getGuides } from "@/lib/guides";
import { getDictionary } from "@/i18n/dictionaries";
import { Icon } from "@/components/icons";
import ArticleHeader from "@/components/ArticleHeader";

function l(locale: Locale, href: string) {
  if (locale === "en") return href;
  return `/${locale}${href}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const d = getDictionary(locale);
  const title = `AION 2 ${d.primaryNav.find((i) => i.href === "/guide")?.label ?? "Guides"} — All Long-Form Guides`;
  return pageMetadata({
    locale,
    path: "/guide",
    title,
    description: "Browse long-form AION 2 guides for beginners, release information, and class rankings.",
  });
}

export default async function GuideHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const d = getDictionary(locale);
  const guides = getGuides(locale);
  const guidesLabel = d.primaryNav.find((i) => i.href === "/guide")?.label ?? "Guides";

  return (
    <div>
      <ArticleHeader eyebrow={guidesLabel} title={`AION 2 ${guidesLabel}`} description={guidesLabel} />
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto pb-20">
        {guides.map((g) => (
          <Link key={g.slug} href={l(locale, `/guide/${g.slug}`)} className="card p-6 block group">
            <div className="text-gold text-[10px] uppercase tracking-[0.4em]">{g.tag}</div>
            <h3 className="font-display text-lg md:text-xl text-ink mt-2 group-hover:text-gold2 transition">{g.title}</h3>
            <p className="text-muted mt-3 text-sm leading-relaxed">{g.desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.3em] group-hover:text-gold2 transition">
              Read More
              <Icon name="arrow-right" width={14} height={14} className="group-hover:translate-x-1 transition" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



