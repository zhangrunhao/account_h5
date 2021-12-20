const baseWebpackConfig = require("./webpack.base.js");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const { merge } = require("webpack-merge");

module.exports = smp.wrap(
  merge(baseWebpackConfig, {
    mode: "development",
    devtool: "source-map",
    devServer: {
      contentBase: "./",
      port: 9000,
      host: "0.0.0.0",
      compress: false,
      hot: true,
      proxy: {
        "/api": {
          target: "http://127.0.0.1:8080/api",
          pathRewrite: {
            "^/api": "",
          },
          secure: false,
          changeOrigin: true,
          logLevel: "debug",
        },
      },
    },
  })
);
