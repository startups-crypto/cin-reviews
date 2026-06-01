import { notFound } from "next/navigation";

import { getDictionary } from "@/app/[lang]/dictionaries";
import { FooterLogo } from "@/components/footer/FooterLogo";
import { Header } from "@/components/header/Header";
import { WhiteLabelHero } from "@/components/hero/WhiteLabelHero";
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

  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary.header} locale={lang} />
      <main className="white-label-page">
        <WhiteLabelHero
          imageAlt={dictionary.hero.imageAlt}
          title={dictionary.hero.title}
        />
      </main>
      <FooterLogo />
    </>
  );
}
