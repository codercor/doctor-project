/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [ 'nazanuysalharzadin.s3.eu-west-2.amazonaws.com' ],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
