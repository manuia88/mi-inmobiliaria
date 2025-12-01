/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.easybroker.com',
      },
      {
        protocol: 'https',
        hostname: 'easybroker-assets.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'resizer.easybroker.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    unoptimized: false,
  },
}

module.exports = nextConfig
