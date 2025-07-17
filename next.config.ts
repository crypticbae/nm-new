import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Für Docker deployment
  output: 'standalone',
  
  // Optimize für Produktion
  compress: true,
  
  // Image optimization
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
