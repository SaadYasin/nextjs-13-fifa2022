/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "api.cup2022.ir"],
  },
};

module.exports = nextConfig
