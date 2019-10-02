// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

/* eslint-disable */
const fs = require('fs');
const { resolve } = require('path');

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'i18n',
      'axios',
      // 'analytics',
    ],

    css: [
      'app.styl'
    ],

    extras: [
      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'ionicons-v4',
      // lang: 'de', // Quasar language

      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QFooter',
        'QSpace',
        'QSeparator',
        'QBreadcrumbs',
        'QBreadcrumbsEl',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QTabs',
        'QTab',
        'QRouteTab',
        'QTabPanels',
        'QTabPanel',
        'QSplitter',
        'QLinearProgress',
        'QCircularProgress',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QBtn',
        'QBtnDropdown',
        'QIcon',
        'QAvatar',
        'QImg',
        'QChip',
        'QBadge',
        'QBanner',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QDialog',
        'QBar',
        'QTooltip',
        'QSpinnerPuff',
        'QSpinnerHourglass',

        // Form Related
        'QForm',
        'QInput',
      ],

      directives: [
        'Ripple',
        'ClosePopup'
      ],

      // Quasar plugins
      plugins: [
        'Notify'
      ]
    },

    supportIE: false,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish')
          }
        });

        cfg.resolve.alias = {
          ...cfg.resolve.alias, // Add the existing aliases

          config: resolve(__dirname, './src/config'),
          constants: resolve(__dirname, './src/constants'),
          helpers: resolve(__dirname, './src/helpers'),
          services: resolve(__dirname, './src/services'),
        };
      }
    },

    devServer: {
      https: ctx.dev
        ? {
          key: fs.readFileSync('./localhost+1-key.pem'),
          cert: fs.readFileSync('./localhost+1.pem'),
        }
        : false,
      host: '0.0.0.0',
      port: 9090,
      open: true // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      workboxOptions: { // only for NON InjectManifest
        skipWaiting: true,
        clientsClaim: true
      },
      manifest: {
        // name: 'Your product name',
        // short_name: 'Your product name',
        // description: 'PWA base code using Vue + Quasar',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#FFB300',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.ecobici.app',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack(cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'ecobici'
      }
    }
  }
}
