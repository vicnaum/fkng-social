/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "standalone", // This is important for containerized deployments
};

module.exports = nextConfig;
