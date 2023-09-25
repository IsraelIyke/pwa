// next.config.js
const withPWA = require("next-pwa");

module.exports = (phase, { defaultConfig }) => {
  const pwaConfig = {
    pwa: {
      dest: "public",
      register: true,
      scope: "/",
      sw: "service-worker.js", // You can customize the service worker filename
    },
  };

  // Merge your PWA configuration with the default configuration
  const mergedConfig = {
    ...defaultConfig,
    ...pwaConfig,
    // Add other Next.js configurations here
  };

  return withPWA(mergedConfig);
};
