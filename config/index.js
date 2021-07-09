'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const target = 'https://dev.estore.d1m.cn'

module.exports = {
  dev: {
    autoOpenBrowser: true,
    host: 'localhost', // can be overwritten by process.env.HOST
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    port: 8075,
    
    // Various Dev Server settings
    proxyTable: {
      "/manage": {
        target,
        changeOrigin: true,
        pathRewrite: {},
        onProxyReq: function(proxyReq, req, res) {}
      },
      "/auth/manage": {
        target,
        changeOrigin: true,
        pathRewrite: {},
        onProxyReq: function(proxyReq, req, res) {}
      }
    },
    // errorOverlay: true,
    // notifyOnErrors: true,
    // useEslint: true,
    // showEslintErrorsInOverlay: false,
    poll: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
