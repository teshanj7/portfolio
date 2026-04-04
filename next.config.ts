import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  trailingSlash: true,
  basePath: "/portfolio-teshan",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
