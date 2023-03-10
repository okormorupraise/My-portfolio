/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    topLevelAwait: true,
  },
  images : {
    domains : ['localhost', 'media.graphassets.com', "icons8.com"] ,
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/webp'],
  },
}

module.exports = nextConfig
