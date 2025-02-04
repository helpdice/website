// require('src/libs/Env');
const withNextIntl = require('next-intl/plugin')('./src/libs/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  // eslint: {
  //     dirs: ['.'],
  // },
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true
  // images: {
  //   domains: ["localhost"],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "cdn.sanity.io",
  //       port: "",
  //     },
  //   ],
  // },
})

module.exports = nextConfig;
