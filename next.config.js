/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  // Optimize for Vercel
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
