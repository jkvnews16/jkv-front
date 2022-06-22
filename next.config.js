/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["http://192.46.209.142:1337/", "	https://res.cloudinary.com/"],
  },
};

module.exports = nextConfig;
