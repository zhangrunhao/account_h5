const baseWebpackConfig = require('./webpack.base.js')
const {
  merge
} = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  mode: 'production'
})