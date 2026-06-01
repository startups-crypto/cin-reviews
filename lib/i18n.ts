export const locales = ["en", "ua", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const htmlLangByLocale: Record<Locale, string> = {
  en: "en",
  ua: "uk",
  ru: "ru",
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

export function getLanguageAlternates(): Record<string, string> {
  return Object.fromEntries([
    ...locales.map((locale) => [getHtmlLang(locale), getLocalePath(locale)]),
    ["x-default", getLocalePath(defaultLocale)],
  ]);
}
