import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { legalSlugs, getLegalPage } from "@/lib/legal";
import ArticleHeader from "@/components/ArticleHeader";

function l(locale: Locale, href: string) {
  if (locale === "en") return href;
  return `/${locale}${href}`;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of legalSlugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const page = getLegalPage(slug, locale);
  if (!page) return {};
  return {
    title: page.title + " — AION 2 Wiki",
    description: page.intro,
    alternates: { canonical: l(locale, "/" + slug) },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const page = getLegalPage(slug, locale);
  if (!page) notFound();

  return (
    <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:px-16">
      <ArticleHeader eyebrow={page.eyebrow} title={page.title} description={page.intro} />
      <div className="max-w-3xl mx-auto pb-16">
        <article className="prose-game">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
