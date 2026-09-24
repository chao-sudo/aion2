import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getGuides, guideSlugs } from "@/lib/guides";
import { loadArticle } from "@/lib/content";
import ArticleHeader from "@/components/ArticleHeader";
import MDXContent from "@/components/MDXContent";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of guideSlugs) {
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
  const g = getGuides(locale).find((x) => x.slug === slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.desc,
    alternates: { canonical: `/${locale}/guide/${slug}` },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const g = getGuides(locale).find((x) => x.slug === slug);
  if (!g) notFound();
  const article = loadArticle(locale, "guide", slug);
  if (!article) notFound();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: g.title,
            description: g.desc,
            inLanguage: locale,
            datePublished: article.frontmatter.datePublished ?? "2026-09-01",
            dateModified: article.frontmatter.dateModified ?? "2026-09-01",
          }),
        }}
      />
      <ArticleHeader eyebrow={g.tag} title={g.title} description={g.desc} />
      <article className="prose-game max-w-3xl mx-auto">
        <MDXContent source={article.source} locale={locale} />
      </article>
    </div>
  );
}

