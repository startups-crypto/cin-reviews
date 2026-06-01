import localFont from "next/font/local";

export const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});

export const alkatraMedium = localFont({
  src: "./fonts/Alkatra-Medium.ttf",
  display: "swap",
  variable: "--font-alkatra-medium",
  weight: "500",
});
