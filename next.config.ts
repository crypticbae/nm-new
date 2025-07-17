import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Für Docker deployment
  output: 'standalone',
  
  // Image optimization für Docker
  images: {
    unoptimized: true, // Wichtig für Docker builds
  },
  
  // TypeScript/ESLint Fehler ignorieren für Build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Optimierungen deaktivieren für stabileren Build
  experimental: {},
  swcMinify: false, // Deaktiviere SWC Minification
};

export default nextConfig;
