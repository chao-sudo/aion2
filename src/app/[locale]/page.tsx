import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getHome, getFinalCta } from "@/lib/home";
import { getDictionary } from "@/i18n/dictionaries";
import { getClasses } from "@/lib/classes";
import { Icon, type IconName } from "@/components/icons";
import SectionTitle from "@/components/SectionTitle";
import { STEAM_URL, DISCORD_URL } from "@/components/Header";

function l(locale: Locale, href: string) {
  if (locale === "en") return href;
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
  const home = getHome(locale);
  return {
    title: `AION 2 Wiki — Aerial Combat MMORPG, Classes & Guides`,
    description:
      "AION 2 Wiki: fan-made guides for NCSOFT's Unreal Engine 5 aerial-combat MMORPG. Classes, tier list, release date and beginner tips in 4 languages.",
    keywords: "AION 2, NCSOFT, MMORPG, classes, guides, release date, tier list, Templar",
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: { en: "/", de: "/de", ko: "/ko", ja: "/ja" },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const home = getHome(locale);
  const d = getDictionary(locale);
  const classes = getClasses(locale);
  const finalCta = getFinalCta(locale);

  const hero = home.hero;
  const featured = classes.slice(0, 4);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AION 2 Wiki",
            url: "https://aion2.wiki",
            description: home.hero.description,
            inLanguage: locale,
            potentialAction: {
              "@type": "SearchAction",
              target: "https://aion2.wiki/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative -mt-10 mb-20 min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.35)_0%,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(94,226,240,0.18)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(60,154,221,0.18)_0%,transparent_50%)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[95vw] max-h-[95vw] rounded-full border border-gold/15 animate-pulseGlow" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] max-w-[80vw] max-h-[80vw] rounded-full border border-violet/15 animate-rotateSlow" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] max-w-[65vw] max-h-[65vw] rounded-full border border-cyan/10" />
          <div className="noise" />
        </div>

        <div className="relative text-center px-6 max-w-5xl mx-auto py-16 animate-fadeUp">
          <div className="relative mx-auto w-28 h-28 md:w-36 md:h-36 mb-8 animate-floaty">
            <div className="absolute inset-0 bg-gold/40 blur-3xl rounded-full" />
            <div className="absolute inset-[-12px] rounded-full border border-gold/40" />
            <div className="absolute inset-[-30px] rounded-full border border-gold/15" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={d.siteName}
              fetchPriority="high"
              decoding="async"
              className="relative rounded-xl object-cover ring-2 ring-gold/50 shadow-gold w-full h-full"
              src="/icon.png"
            />
          </div>

          <div className="inline-flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.5em] text-gold mb-6">
            <span className="diamond-bullet" />
            {hero.eyebrow}
            <span className="diamond-bullet" />
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-wide">
            <span className="block">{hero.line1}</span>
            <span className="block text-gradient mt-2">{hero.line2}</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-lg md:text-xl text-muted leading-relaxed">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a className="btn-primary" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
              <Icon name="sword" width={16} height={16} />
              {hero.primaryCta}
            </a>
            <Link className="btn-ghost" href={l(locale, "/guide/beginner-guide")}>
              <Icon name="compass" width={16} height={16} />
              {hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/15 border border-gold/15 max-w-3xl mx-auto">
            {hero.stats.map((s) => (
              <div key={s.label} className="bg-[#050a12] px-4 py-5 text-center">
                <div className="font-display text-xl md:text-2xl text-gold2">{s.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-2 text-gold/60 text-xs uppercase tracking-[0.5em] animate-pulseGlow">
            {hero.scroll}
            <Icon name="chevron-down" width={18} height={18} />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:px-16">
        {/* What is AION 2 */}
        <section className="relative py-16 md:py-24">
          <SectionTitle kicker={home.whatIs.kicker} title={home.whatIs.title} />
          <div className="grid md:grid-cols-5 gap-10 items-center max-w-5xl mx-auto">
            <div className="md:col-span-3 prose-game !max-w-none">
              {home.whatIs.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="md:col-span-2">
              <div className="card-grad p-6">
                <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Quick Facts</div>
                <dl className="space-y-3 text-sm">
                  {home.whatIs.quickFacts.map((f) => (
                    <div key={f.label} className="flex justify-between gap-4 border-b border-gold/10 pb-2 last:border-0">
                      <dt className="text-muted uppercase tracking-[0.18em] text-[11px]">{f.label}</dt>
                      <dd className="text-ink text-right">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Redeem Codes */}
        <section className="relative py-16 md:py-24">
          <SectionTitle kicker={home.codesSection.kicker} title={home.codesSection.title} />
          <div className="max-w-2xl mx-auto">
            <div className="card-grad p-8 text-center">
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold mb-3">
                <span className="diamond-bullet" />
                {home.codesSection.kicker}
                <span className="diamond-bullet" />
              </div>
              <p className="text-muted leading-relaxed">{home.codesSection.empty}</p>
              <div className="mt-6">
                <a className="btn-ghost" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                  {home.codesSection.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Classes */}
        <section className="relative py-16 md:py-24">
          <SectionTitle kicker={home.classesSection.kicker} title={home.classesSection.title} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {featured.map((c, i) => (
              <Link key={c.slug} href={l(locale, `/classes/${c.slug}`)} className="card relative p-7 group overflow-hidden">
                <div
                  className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity ${
                    i === 0 ? "bg-gradient-to-br from-gold/30 to-violet/10"
                    : i === 1 ? "bg-gradient-to-br from-cyan/30 to-violet/10"
                    : i === 2 ? "bg-gradient-to-br from-violet/40 to-gold/10"
                    : "bg-gradient-to-br from-cyan/30 to-gold/10"
                  }`}
                />
                <div className="relative">
                  <div className="w-14 h-14 mb-5 flex items-center justify-center rounded border border-gold/40 bg-[rgba(5,10,18,0.6)] text-gold2 group-hover:border-gold transition">
                    <Icon name={c.icon as IconName} width={26} height={26} />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{c.tag}</div>
                  <h3 className="font-display text-2xl text-ink group-hover:text-gold2 transition tracking-wider">{c.name}</h3>
                  <p className="text-muted text-sm mt-3 leading-relaxed">{c.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.3em] group-hover:text-gold2 transition">
                    {home.classesSection.explore}
                    <Icon name="arrow-right" width={14} height={14} className="group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Factions */}
        <section className="relative py-16 md:py-24">
          <SectionTitle kicker={home.factionsSection.kicker} title={home.factionsSection.title} />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {home.factionsSection.cards.map((card) => (
              <Link key={card.title} href={l(locale, "/classes")} className="card-grad p-8 block group relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-violet/20 blur-3xl opacity-50 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-cyan">{card.tag}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{card.level}</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-ink group-hover:text-gold2 transition leading-tight">{card.title}</h3>
                  <div className="ornament !my-5"><span className="diamond" /></div>
                  <p className="text-muted">{card.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.3em] group-hover:text-gold2 transition">
                    {card.cta}
                    <Icon name="arrow-right" width={14} height={14} className="group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Start Your Journey */}
        <section className="relative py-16 md:py-24">
          <SectionTitle kicker={home.journeySection.kicker} title={home.journeySection.title} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {home.journeySection.cards.map((card) => (
              <Link key={card.href} href={l(locale, card.href)} className="card p-7 block group h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-11 h-11 flex items-center justify-center rounded-md border border-gold/30 bg-gradient-to-br from-violet/20 to-gold/10 text-gold2 group-hover:text-gold2 group-hover:border-gold transition">
                    <div className="absolute inset-0 rounded-md bg-gold/10 blur-md opacity-0 group-hover:opacity-100 transition" />
                    <div className="relative">
                      <Icon name={card.icon as IconName} width={22} height={22} />
                    </div>
                  </div>
                  <h3 className="font-display text-lg md:text-xl text-ink group-hover:text-gold2 transition tracking-wide">{card.title}</h3>
                </div>
                <p className="text-muted text-[15px] leading-relaxed">{card.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.3em] group-hover:text-gold2 transition">
                  {card.cta}
                  <Icon name="arrow-right" width={14} height={14} className="group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="relative py-20 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_350px_at_50%_50%,rgba(60,154,221,0.18),transparent_70%)]" />
        <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold mb-4">
          <span className="diamond-bullet" /> {finalCta.eyebrow} <span className="diamond-bullet" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-gradient">{finalCta.title}</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="btn-primary" href={STEAM_URL} target="_blank" rel="noopener noreferrer">{finalCta.primary}</a>
          <Link className="btn-ghost" href={l(locale, "/guide/beginner-guide")}>{finalCta.secondary}</Link>
        </div>
      </section>
    </div>
  );
}


