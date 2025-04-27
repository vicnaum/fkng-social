/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export", // Changed from 'standalone' to 'export' for static site generation
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
