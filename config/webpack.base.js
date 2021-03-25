const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'js/index.js',
    path: path.join(__dirname, '../dist')
  }
}
