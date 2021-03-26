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
    contentBase: path.resolve(__dirname, '../dist'),
    port: 9000,
    compress: true,
    hot: true
  },
})