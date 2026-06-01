import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "@/app/[lang]/dictionaries";
import { getLocalePath, locales, type Locale } from "@/lib/i18n";

import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = Readonly<{
  dictionary: Dictionary["header"];
  locale: Locale;
}>;

export function Header({ dictionary, locale }: HeaderProps) {
  const languageOptions = locales.map((optionLocale) => ({
    href: getLocalePath(optionLocale),
    label: optionLocale.toUpperCase(),
    locale: optionLocale,
  }));

  return (
    <header className="header">
      <div className="m-container">
        <Link aria-label="CinCin home" className="logo" href="/">
          <Image
            alt=""
            height="60"
            src="/images/cincin-header-logo.svg"
            width="100"
          />
        </Link>

        <div className="header__right-part">
          <LanguageSwitcher
            currentLocale={locale}
            options={languageOptions}
          />
          <a className="s-button s-button--small" href={dictionary.cta.url}>
            {dictionary.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
