export const siteConfig = {
  name: "CinCin",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  socialImageUrl:
    process.env.NEXT_PUBLIC_SOCIAL_IMAGE_URL ??
    "https://example.com/social-preview-placeholder.png",
} as const;

export function getAbsoluteUrl(pathname: string): string {
  return new URL(pathname, siteConfig.url).toString();
}
