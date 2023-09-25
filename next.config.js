// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// next.config.js
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    scope: "/",
    sw: "service-worker.js", // You can customize the service worker filename
  },
  // Other Next.js configurations go here
});
