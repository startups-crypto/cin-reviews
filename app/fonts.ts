import localFont from "next/font/local";

export const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});

export const alkatraMedium = localFont({
  src: "./fonts/Alkatra-Medium.woff2",
  display: "optional",
  preload: false,
  variable: "--font-alkatra-medium",
  weight: "500",
});
