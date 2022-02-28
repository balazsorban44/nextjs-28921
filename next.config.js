// @ts-check
/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/js/index.js",
        destination: "https://plausible.io/js/plausible.outbound-links.js",
      },
      {
        source: "/api/event", // Or '/api/event/' if you have `trailingSlash: true` in this config
        destination: "https://plausible.io/api/event",
      },
    ]
  },
}
