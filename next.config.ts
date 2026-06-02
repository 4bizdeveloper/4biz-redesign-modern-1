import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static export mode
  output: 'export',
  
  // Optional: If you are deploying to a subdirectory (like GitHub Pages), 
  // you must set the base path. Otherwise, leave it commented out.
  // basePath: '/your-repo-name',

  // Optional: Recommended for static exports to ensure image optimization works
  // Note: Standard 'next/image' optimization does not work with 'output: export'.
  // You may need to use a custom loader or static imports.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;