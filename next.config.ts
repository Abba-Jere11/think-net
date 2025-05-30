/** @type {import('next').NextConfig} */
const nextConfig = {
  turbo: {
    rules: {
      '*.md': {
        loaders: ['ignore-loader'],
        as: '*.js',
      },
    },
  },
};

module.exports = nextConfig;