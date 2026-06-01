export const locales = ["en", "ua", "ru", "es", "pt", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const htmlLangByLocale: Record<Locale, string> = {
  en: "en",
  ua: "uk",
  ru: "ru",
  es: "es",
  pt: "pt",
  de: "de",
};

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getHtmlLang(locale: Locale): string {
  return htmlLangByLocale[locale];
}

export function getLocalePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}/`;
}
