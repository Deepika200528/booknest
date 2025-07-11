/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.madrasshoppe.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '**',
      },
      // Add scribdassets.com configuration
      {
        protocol: 'https',
        hostname: 'imgv2-1-f.scribdassets.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'imgv2-2-f.scribdassets.com',
        pathname: '**',
      },
      // Or use wildcard pattern for all subdomains
      {
        protocol: 'https',
        hostname: '**.scribdassets.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;