import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getClasses } from "@/lib/classes";
import { getHome } from "@/lib/home";
import { getDictionary } from "@/i18n/dictionaries";
import { Icon, type IconName } from "@/components/icons";
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
  return {
    title: `AION 2 ${d.primaryNav.find((i) => i.href === "/classes")?.label ?? "Classes"} — All Classes Explained`,
    alternates: { canonical: l(locale, "/classes") },
  };
}

export default async function ClassesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const d = getDictionary(locale);
  const classes = getClasses(locale);
  const home = getHome(locale);

  const classesLabel = d.primaryNav.find((i) => i.href === "/classes")?.label ?? "Classes";
  const hubIntro = home.journeySection.cards.find((c) => c.href === "/classes")?.desc ?? "";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `AION 2 ${classesLabel}`,
            description: hubIntro,
            inLanguage: locale,
          }),
        }}
      />
      <ArticleHeader
        eyebrow={classesLabel}
        title={`AION 2 ${classesLabel}`}
        description={hubIntro}
      />

      <article className="prose-game max-w-3xl mx-auto">
        <p>{hubIntro}</p>
        <p>
          {home.whatIs.paragraphs[0]}
        </p>
      </article>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto pb-20">
        {classes.map((c) => (
          <Link key={c.slug} href={l(locale, `/classes/${c.slug}`)} className="card p-6 block group">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gold text-[10px] uppercase tracking-[0.4em]">{c.role}</div>
              <div className="text-cyan text-[10px] uppercase tracking-[0.3em]">{c.weapon}</div>
            </div>
            <h3 className="font-display text-lg md:text-xl text-ink mt-2 group-hover:text-gold2 transition flex items-center gap-3">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded border border-gold/30 text-gold2">
                <Icon name={c.icon as IconName} width={16} height={16} />
              </span>
              {c.name}
            </h3>
            <p className="text-muted mt-3 text-sm leading-relaxed">{c.description}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.3em] group-hover:text-gold2 transition">
              {home.classesSection.explore}
              <Icon name="arrow-right" width={14} height={14} className="group-hover:translate-x-1 transition" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}




