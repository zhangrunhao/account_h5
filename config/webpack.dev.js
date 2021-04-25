const path = require('path')
const baseWebpackConfig = require('./webpack.base.js')
const {
  merge
} = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 9000,
    compress: false,
    hot: true
  },
})