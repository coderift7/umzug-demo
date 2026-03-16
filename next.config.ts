import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/umzug-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
