// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: '**.madrasshoppe.com',
      },
      {
        protocol: 'https',
        hostname: '**.scribdassets.com',
      },
    ],
  },
};

export default nextConfig;
