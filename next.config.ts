import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
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
