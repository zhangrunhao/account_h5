const baseWebpackConfig = require("./webpack.base.js");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const chalk = require("chalk");
const { merge } = require("webpack-merge");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item) => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
        },
      },
    },
  },
  plugins: [
    // 進度條
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
    // 打包體積分析
    // new BundleAnalyzerPlugin({
    //   port: 7788,
    // }),
  ],
});
