import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  trailingSlash: true,
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
