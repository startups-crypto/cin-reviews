"use client";

import { useEffect, useRef } from "react";

type DeferredAlkatraTextProps = Readonly<{
  children: React.ReactNode;
}>;

export function DeferredAlkatraText({ children }: DeferredAlkatraTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      textRef.current?.classList.add("font-alkatra-medium");
    }, 1200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return <span ref={textRef}>{children}</span>;
}
