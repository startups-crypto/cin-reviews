"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

import type { Locale } from "@/lib/i18n";

type LanguageOption = Readonly<{
  href: string;
  label: string;
  locale: Locale;
}>;

type LanguageSwitcherProps = Readonly<{
  currentLocale: Locale;
  options: readonly LanguageOption[];
}>;

export function LanguageSwitcher({
  currentLocale,
  options,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    function closeOnOutsideClick(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const alternateOptions = options.filter(
    ({ locale }) => locale !== currentLocale,
  );

  return (
    <div className={`lang-menu${isOpen ? " active" : ""}`} ref={rootRef}>
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="lang-menu__active"
        onClick={() => setIsOpen((currentState) => !currentState)}
        ref={buttonRef}
        type="button"
      >
        <span className="lang-menu__cur-lang">{currentLocale}</span>
        <span aria-hidden="true" className="shevron">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z"
              fill="white"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div className="lang-menu__drop" id={menuId} ref={menuRef}>
        <ul aria-label="Languages" role="menu">
          {alternateOptions.map(({ href, label, locale }) => (
            <li key={locale} role="none">
              <Link href={href} onClick={() => setIsOpen(false)} role="menuitem">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
