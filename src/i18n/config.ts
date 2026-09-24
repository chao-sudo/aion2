export const locales = ["en", "de", "ko", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  ko: "한국어",
  ja: "日本語",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
