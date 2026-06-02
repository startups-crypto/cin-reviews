export const siteConfig = {
  name: "CinCin",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  logoUrl: "/images/cincin-header-logo.svg",
  socialImage: {
    url: "/images/cin-reviews.png",
    width: 1200,
    height: 630,
    alt: "CinCin customer reviews",
  },
} as const;

export function getAbsoluteUrl(pathname: string): string {
  return new URL(pathname, siteConfig.url).toString();
}
