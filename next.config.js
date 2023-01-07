/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
}

const path = require('path')

const sassOptions = {
  includePaths: [path.join(__dirname, 'styles')],

}

module.exports = nextConfig, sassOptions;
