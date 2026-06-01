export const siteConfig = {
  name: "CinCin",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
} as const;
