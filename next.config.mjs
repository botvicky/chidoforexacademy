/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable Turbopack for cPanel compatibility
  experimental: {
    forceSwcTransforms: true,
  },
  // Use webpack instead of turbopack
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
