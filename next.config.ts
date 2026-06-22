import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Use webpack for builds instead of Turbopack
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;