/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Matt S',
    description: 'Matt S Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/mp-strachan/kasm-registry/',
    contactUrl: 'https://github.com/mp-strachan',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
