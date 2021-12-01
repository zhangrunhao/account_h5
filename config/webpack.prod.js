const baseWebpackConfig = require("./webpack.base.js");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const chalk = require("chalk");

const { merge } = require("webpack-merge");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    // 進度條
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
    // 打包體積分析
    new BundleAnalyzerPlugin({
      port: 7788,
    }),
  ]
});
