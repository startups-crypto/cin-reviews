import "next/dist/compiled/server-only";

import type { Locale } from "@/lib/i18n";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ua: () => import("./dictionaries/ua.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
    openGraphLocale: string;
  };
  header: {
    cta: {
      label: string;
      url: string;
    };
  };
  hero: {
    title: string;
    description: string;
    imageAlt: string;
    features: string[];
  };
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
