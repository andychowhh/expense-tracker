/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.devServer = config.devServer || {};
    config.devServer.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = nextConfig;
