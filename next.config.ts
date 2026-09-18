import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/concepts/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/en/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
