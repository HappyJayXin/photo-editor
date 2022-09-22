const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {
    reactMode: 'concurrent',
  },
  reactStrictMode: true,
  i18n,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
  },
  experimental: {
    styledComponents: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
