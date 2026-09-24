import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getStaticPage } from "@/lib/pages";
import ArticleHeader from "@/components/ArticleHeader";

function l(locale: Locale, href: string) {
  if (locale === "en") return href;
  return `/${locale}${href}`;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const page = getStaticPage("contact", locale);
  return { title: page ? page.title : "Contact AION 2 Wiki", description: page ? page.intro : "", alternates: { canonical: l(locale, "/contact") } };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const page = getStaticPage("contact", locale);
  if (!page) notFound();
  return (
    <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:px-16">
      <ArticleHeader eyebrow={page.eyebrow} title={page.title} description={page.intro} />
      <article className="prose-game max-w-3xl mx-auto pb-16">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((p) => <p key={p}>{p}</p>)}
          </section>
        ))}
      </article>
    </div>
  );
}
