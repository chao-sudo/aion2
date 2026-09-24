import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

export function localizedPath(locale: Locale, path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale ? normalizedPath : `/${locale}${normalizedPath}`;
}

export function localizedAlternates(
  locale: Locale,
  path: string
): NonNullable<Metadata["alternates"]> {
  const languages = locales.reduce<Record<string, string>>((alternates, alternateLocale) => {
    alternates[alternateLocale] = localizedPath(alternateLocale, path);
    return alternates;
  }, {});

  languages["x-default"] = localizedPath(defaultLocale, path);

  return {
    canonical: localizedPath(locale, path),
    languages,
  };
}
const socialImage = {
  url: "/og.png",
  width: 512,
  height: 512,
  alt: "AION 2 Wiki",
  type: "image/png",
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  ko: "ko_KR",
  ja: "ja_JP",
};

export function socialMetadata({
  locale,
  path,
  title,
  description,
  type = "website",
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type,
      url: localizedPath(locale, path),
      title,
      description,
      siteName: "AION 2 Wiki",
      locale: openGraphLocales[locale],
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      site: "@aion2world",
      title,
      description,
      images: [socialImage],
    },
  };
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  type = "website",
  keywords,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  keywords?: string;
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: localizedAlternates(locale, path),
    ...socialMetadata({ locale, path, title, description, type }),
  };
}