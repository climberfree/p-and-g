module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  pwa: {
    name: 'Memorease',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      // swSrc is required in InjectManifest mode.
      // swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  }
}
