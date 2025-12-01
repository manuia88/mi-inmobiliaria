/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Compatibilidad: mantener domains para máxima compatibilidad
    domains: [
      'placehold.co',
      'images.unsplash.com',
      'assets.easybroker.com',
      'api.easybroker.com',
      'cdn.easybroker.com',
      'img.easybroker.com',
      'media.easybroker.com',
    ],
    // Moderno: usar remotePatterns (recomendado por Next.js)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.easybroker.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.easybroker.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.easybroker.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.easybroker.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.easybroker.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.easybroker.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },
  // Configuración para producción
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
