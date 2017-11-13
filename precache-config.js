const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [],
  stripPrefix: 'dist',
  root: '/dist',
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'ng-kickstarter',
      filename: 'service-worker.js',
      minify: true,
      stripPrefix: 'dist/assets/',
      mergeStaticsConfig: true,
      staticFileGlobs: [
        'dist/index.html',
        'dist/**.js',
        'dist/**.css'
      ],
    })
  ]
};
