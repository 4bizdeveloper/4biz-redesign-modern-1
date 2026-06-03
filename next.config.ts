import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Keeps your static export mode
  output: 'export',

  // 2. Improves SEO and ensures clean URL routing across static hosts
  trailingSlash: true,

  // 3. Strict Image Strategy for Static Exports
  images: {
    // Keeps unoptimized true ONLY because standard next/image demands a Node server.
    // To get an A-grade, see Section 2 below to handle your images properly.
    unoptimized: true,
    
    // Allows modern image formats if you use local imports
    formats: ['image/avif', 'image/webp'],
  },

  // 4. Production compiler optimizations
  compiler: {
    // Removes console logs in production to save bundle size
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 5. Ensures React's rendering optimizations are active
  reactStrictMode: true,
};

export default nextConfig;