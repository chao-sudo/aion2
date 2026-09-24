import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getClass, classSlugs } from "@/lib/classes";
import { getDictionary } from "@/i18n/dictionaries";
import { loadArticle } from "@/lib/content";
import ArticleHeader from "@/components/ArticleHeader";
import MDXContent from "@/components/MDXContent";

function l(locale: Locale, href: string) {
  if (locale === "en") return href;
  return `/${locale}${href}`;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of classSlugs) {
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
  const c = getClass(locale, slug);
  if (!c) return {};
  return {
    title: `${c.name} Guide — AION 2 ${c.role}`,
    description: c.description,
    alternates: { canonical: l(locale, "/classes/${slug}") },
  };
}

export default async function ClassPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const c = getClass(locale, slug);
  if (!c) notFound();
  const article = loadArticle(locale, "classes", slug);
  if (!article) notFound();

  const d = getDictionary(locale);
  const classesLabel = d.primaryNav.find((i) => i.href === "/classes")?.label ?? "Classes";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${c.name} — AION 2 ${c.role} Guide`,
            description: c.description,
            inLanguage: locale,
            datePublished: article.frontmatter.datePublished ?? "2026-09-01",
            dateModified: article.frontmatter.dateModified ?? "2026-09-01",
          }),
        }}
      />
      <ArticleHeader
        eyebrow={`${classesLabel} · ${c.weapon}`}
        title={c.name}
        description={c.description}
      />
      <article className="prose-game max-w-3xl mx-auto">
        <MDXContent source={article.source} locale={locale} />
      </article>
    </div>
  );
}

