/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    accessToken: ''
  },
  images: {
    domains: ['a.storyblok.com'],
  }
}

module.exports = nextConfig
