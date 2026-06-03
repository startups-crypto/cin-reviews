"use client";

import { useEffect, useRef } from "react";

type DeferredAlkatraTextProps = Readonly<{
  children: React.ReactNode;
}>;

export function DeferredAlkatraText({ children }: DeferredAlkatraTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => {
      textRef.current?.classList.add("font-alkatra-medium");
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <span ref={textRef}>{children}</span>;
}