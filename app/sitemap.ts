import type { MetadataRoute } from "next";

import { getLanguageAlternates, getLocalePath, locales } from "@/lib/i18n";
import { getAbsoluteUrl } from "@/lib/site";

const languageAlternates = Object.fromEntries(
  Object.entries(getLanguageAlternates()).map(([lang, pathname]) => [
    lang,
    getAbsoluteUrl(pathname),
  ]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: getAbsoluteUrl(getLocalePath(locale)),
    alternates: {
      languages: languageAlternates,
    },
  }));
}
