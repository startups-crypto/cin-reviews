export const siteConfig = {
  name: "CinCin",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  socialImageUrl: "/images/cin-reviews.png",
} as const;

export function getAbsoluteUrl(pathname: string): string {
  return new URL(pathname, siteConfig.url).toString();
}
