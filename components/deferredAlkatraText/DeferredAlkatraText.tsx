"use client";

import { useEffect, useRef } from "react";

type DeferredAlkatraTextProps = Readonly<{
  children: React.ReactNode;
}>;

const mobileDelay = 1400;

export function DeferredAlkatraText({ children }: DeferredAlkatraTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      textRef.current?.classList.add("font-alkatra-medium");
    }, mobileDelay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return <span ref={textRef}>{children}</span>;
}
