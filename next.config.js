/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    FIREBASE_SERVICE_ACCOUNT_KEY: process.env.FIREBASE_SERVICE_ACCOUNT_KEY,
    BRIGHTDATA_API_KEY: process.env.BRIGHTDATA_API_KEY,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
