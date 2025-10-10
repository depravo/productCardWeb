import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
     {
        protocol: 'https',
        hostname: 'images.metmuseum.org',
        pathname: '/**',
     },
    ],
}
};

export default nextConfig;
