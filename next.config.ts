import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: 'images.squarespace-cdn.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'randomuser.me' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
