/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['upload.wiki']
  }
}

module.exports = nextConfig
