/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    buildDate: new Date().toISOString(),
    rootUrl: 'https://mc-mineserver.de'
  },
}
