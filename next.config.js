/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');

dotenv.config();
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;