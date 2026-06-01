import { notFound } from "next/navigation";

import { isLocale, locales } from "@/lib/i18n";

type LocalePageProps = Readonly<{
  params: Promise<{ lang: string }>;
}>;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <main>
      <h1>CinCin</h1>
    </main>
  );
}
