const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    filename: "js/[name].[chunkhash:6].js",
    chunkFilename: "js/[name].[chunkhash:8].chunk.js",
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: "file-loader",
      },
      {
        test: /\.svg$/,
        use: "svg-url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
  ],
};
