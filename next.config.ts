import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Für Docker optimierte Konfiguration
  output: 'standalone',
  
  // Image Optimierung
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  
  // Performance Optimierungen
  experimental: {
    optimizeCss: true,
  },
  
  // Disable telemetry
  telemetry: false,
};

export default nextConfig;
