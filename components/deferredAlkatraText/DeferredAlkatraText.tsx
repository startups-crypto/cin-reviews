"use client";

import { useEffect, useRef } from "react";

type DeferredAlkatraTextProps = Readonly<{
  children: React.ReactNode;
}>;

const desktopBreakpoint = 1080;
const mobileDelay = 1400;

export function DeferredAlkatraText({ children }: DeferredAlkatraTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const delay = window.innerWidth < desktopBreakpoint ? mobileDelay : 0;

    const timeoutId = window.setTimeout(() => {
      textRef.current?.classList.add("font-alkatra-medium");
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return <span ref={textRef}>{children}</span>;
}
