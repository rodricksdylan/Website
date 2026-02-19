/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.insurancenews.com.au', pathname: '/**' },
      { protocol: 'https', hostname: 'insurancenews.com.au', pathname: '/**' },
      { protocol: 'https', hostname: 'media.licdn.com', pathname: '/**' },
    ],
  },
  // Optimize for Vercel
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
