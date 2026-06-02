import { getAbsoluteUrl, siteConfig } from "@/lib/site";

const websiteId = getAbsoluteUrl("/#website");
const organizationId = getAbsoluteUrl("/#organization");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: getAbsoluteUrl("/"),
      name: siteConfig.name,
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@type": "Organization",
      "@id": organizationId,
      url: getAbsoluteUrl("/"),
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteUrl(siteConfig.logoUrl),
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
