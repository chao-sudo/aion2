import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { topics, getTopicByLocale } from "@/lib/topics";
import ArticleHeader from "@/components/ArticleHeader";
import MDXContent from "@/components/MDXContent";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const topic of topics) {
      params.push({ locale, slug: topic.slug });
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
  const topic = getTopicByLocale(slug, locale);
  if (!topic) return {};
  return {
    title: topic.title,
    description: topic.description,
    keywords: topic.keywords,
    alternates: { canonical: `/${locale}/topics/${slug}` },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const topic = getTopicByLocale(slug, locale);
  if (!topic) notFound();
  return (
    <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:px-16">
      <ArticleHeader eyebrow={topic.category} title={topic.title} description={topic.description} />
      <article className="prose-game max-w-3xl mx-auto pb-16">
        <MDXContent source={topic.body} locale={locale} />
      </article>
    </div>
  );
}