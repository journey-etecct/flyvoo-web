/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false
};

module.exports = nextConfig;
