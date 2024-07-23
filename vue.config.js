const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "My Vue Pokédex",
    themeColor: "#2a75bb",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      start_url: "/",
      icons: [
        {
          src: "img/icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "img/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "img/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "img/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "img/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "img/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "img/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "img/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "img/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable any",
        },
      ],
    },

    // Workbox options
    workboxPluginMode: "GenerateSW", // or 'InjectManifest'
    workboxOptions: {
      // these options encourage the Service Workers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,

      // define runtime caching rules.
      runtimeCaching: [
        {
          // Match any request that ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

          // Apply a cache-first strategy.
          handler: "CacheFirst",

          options: {
            // Use a custom cache name.
            cacheName: "images",

            // Only cache 10 images.
            expiration: {
              maxEntries: 10,
              // Cache for a maximum of one month
              maxAgeSeconds: 24 * 60 * 60 * 30,
            },
          },
        },
        {
          // Match CSS and JS assets
          urlPattern: /\.(?:css|js)$/,
          // Use the 'StaleWhileRevalidate' strategy.
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "static-resources",
            expiration: {
              // Cache for a maximum of one month
              maxAgeSeconds: 24 * 60 * 60 * 30,
            },
          },
        },
      ],
    },
  },
});
