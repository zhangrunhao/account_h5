const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'js/index.js',
    path: path.join(__dirname, '../dist')
  },  
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/, // 不需要转移'node_modules里面的文件'
      }, 
      {
        test: /.(css|less)$/,
        use: [ // 先使用加载器, 在解析到style标签. 从后向前执行.
          'style-loader', //最后计算完的css, 使用'style-loader'生成style标签, 放到head中
          'css-loader', // 加载解析文件, 遇到@import, 就把相应样式文件引入
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
}
