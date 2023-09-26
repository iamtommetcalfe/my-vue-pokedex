const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/my-vue-pokedex/'
      : '/',
  pwa: {
    name: 'My Vue Pokedex',
    themeColor: '#2a75bb',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // Workbox options
    workboxPluginMode: 'GenerateSW', // or 'InjectManifest'
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
          handler: 'CacheFirst',

          options: {
            // Use a custom cache name.
            cacheName: 'images',

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
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
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
