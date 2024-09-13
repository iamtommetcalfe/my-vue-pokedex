import { defineConfig } from "@vue/cli-service";

export default defineConfig({
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
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      clientsClaim: true,
      skipWaiting: true,

      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 24 * 60 * 60 * 30,
            },
          },
        },
        {
          urlPattern: /\.(?:css|js)$/,
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "static-resources",
            expiration: {
              maxAgeSeconds: 24 * 60 * 60 * 30,
            },
          },
        },
      ],
    },
  },
});