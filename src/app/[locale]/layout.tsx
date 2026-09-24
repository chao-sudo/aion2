import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <>
      <Header locale={locale} />
      <main className="w-full">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
