import { notFound } from "next/navigation";

import { getHtmlLang, isLocale, locales } from "@/lib/i18n";

import "../globals.css";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
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
    <html lang={getHtmlLang(lang)}>
      <body>{children}</body>
    </html>
  );
}
