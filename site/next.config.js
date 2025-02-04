/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Nivelles Technologies',
    description: 'The official store for Nivelles supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://nivellessebastien.github.io/kasm-registry/',
    contactUrl: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
