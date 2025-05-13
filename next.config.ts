import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'encrypted-tbn0.gstatic.com', 'chatgpt.com', 'www.google.com'],
    remotePatterns: [
      {
        hostname: '**',
        protocol: 'https',
        port: '',
      },
    ],
  }
};

export default nextConfig;
