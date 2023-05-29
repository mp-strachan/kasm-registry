/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Matt S',
    description: 'Matt S Kasm workspaces.',
    icon: 'https://mp-strachan.github.io/kasm-registry/1.0/github.png',
    listUrl: 'https://mp-strachan.github.io/kasm-registry/',
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
