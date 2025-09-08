import type { NextConfig } from "next";
import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = withNextIntl('./src/libs/i18n.ts')({
  // eslint: {
  //   dirs: ['.'],
  // },
  // output: "export",
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
});

export default nextConfig;
