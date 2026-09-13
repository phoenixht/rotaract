import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/assets/**" },
    ],
  },
};

export default nextConfig;

