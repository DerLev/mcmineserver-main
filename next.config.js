/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    buildDate: new Date().toISOString(),
    rootUrl: 'https://mc-mineserver.de'
  },
  images: {
    domains: [ 'cdn.discordapp.com' ],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
