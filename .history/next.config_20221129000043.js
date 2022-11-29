/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['upload.wikimedia']
  }
}

module.exports = nextConfig
