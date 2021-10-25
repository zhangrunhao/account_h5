const baseWebpackConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    port: 9000,
    host: "0.0.0.0",
    compress: false,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080/api',
        pathRewrite: {
          '^/api': ''
        },
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  },
});
