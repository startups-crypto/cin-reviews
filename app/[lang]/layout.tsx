import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary } from "@/app/[lang]/dictionaries";
import { alkatraMedium, inter } from "@/app/fonts";
import {
  getHtmlLang,
  getLanguageAlternates,
  getLocalePath,
  isLocale,
  locales,
} from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

import "../globals.css";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);
  const canonicalPath = getLocalePath(lang);
  const alternateLocaleDictionaries = await Promise.all(
    locales
      .filter((locale) => locale !== lang)
      .map((locale) => getDictionary(locale)),
  );

  return {
    metadataBase: siteConfig.url,
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: canonicalPath,
      languages: getLanguageAlternates(),
    },
    openGraph: {
      type: "website",
      url: canonicalPath,
      siteName: siteConfig.name,
      locale: dictionary.metadata.openGraphLocale,
      alternateLocale: alternateLocaleDictionaries.map(
        ({ metadata }) => metadata.openGraphLocale,
      ),
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: [siteConfig.socialImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: [siteConfig.socialImageUrl],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <html
      className={`${inter.variable} ${alkatraMedium.variable}`}
      lang={getHtmlLang(lang)}
    >
      <body>{children}</body>
    </html>
  );
}
