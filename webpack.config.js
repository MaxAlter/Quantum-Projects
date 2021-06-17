const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `[name].${ext}` : `./[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./js/main.js",
  output: {
    filename: `./js/${filename("js")}`,
    path: path.resolve(__dirname, "app"),
    publicPath: "",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "app"),
    historyApiFallback: true,
    hot: false,
    compress: true,
    open: true,
    port: 9080,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename("css")}`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./[name].[ext]",
              outputPath: "./img",
            },
          },
          "img-loader",
        ],
      },
      // {
      //   test: /\.(?:|gif|png|jpg|jpeg|svg)$/,

      //   use: [
      //     {
      //       loader: "img-loader",

      //       options: {
      //         name: `./img/${filename("[ext]")}`,

      //       },
      //     },
      //   ],
      // },
    ],
  },
};
// name: `./img/${filename("[ext]")}`,  //  image/[name].[ext] //  name: "./img/[name].[ext]",
// name: `./img/${filename('[ext]')}`   ["img-loader", "url-loader"],

// {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"},
// name: `./img/${filename("[ext]")}`,
