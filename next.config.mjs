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
    ],
  },
};

export default nextConfig;
