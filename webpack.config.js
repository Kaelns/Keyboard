// TODO https://www.youtube.com/watch?v=gVenbqg9Rww
// TODO https://www.youtube.com/watch?v=eSaF8NXeNsA
let outputFolder = "keyboard";

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV;
const isDev = mode === "development";
console.log("IsDev:", isDev);
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  };

  if (isProd) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      // * TerserWebpackPlugin uses terser to minify/minimize JavaScript.
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const filename = (dir, ext) =>
  isDev ? `${dir}/[name].${ext}` : `${dir}/[name].[hash].${ext}`;

const isItDev = (yes, no) => (isDev ? yes : no);

module.exports = {
  // TODO The context is the base folder from which webpack starts. Therefore we can not to set this folder in the paths between the slashes
  context: path.resolve(__dirname, "src"),
  mode: mode,

  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, outputFolder),
    filename: filename("script", "js"),
    sourceMapFilename: "maps/[file].map",
    // * Cleans the folder before packing
    clean: true,
  },

  resolve: {
    // * Extensions that webpack can understand by default and they don't need to be written in paths
    extensions: [".js", ".json"],
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src"),
    },
  },

  // TODO Optimize output files (takes out identical code in a separate file)
  optimization: optimization(),

  // TODO https://webpack.js.org/configuration/dev-server
  devServer: {
    port: 8080,
    // open: true,
    compress: true,
    // * Enable webpack's Hot Module Replacement feature https://webpack.js.org/concepts/hot-module-replacement
    hot: true,
    // * Serves everything from our src/ directory in the project root (The folder called "public" is by default,
    // * so that's why we need to specify a different path to our working folder)
    static: {
      directory: path.join(__dirname, "src"),
      watch: true,
    },
  },

  // TODO adds a map to the styles in the browser inspect
  devtool: /* isItDev("source-map", "") */ "source-map",

  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      minify: false,
      inject: "body",
      chunks: ["index"],
    }),

    new MiniCssExtractPlugin({
      filename: filename("styles", "css"),
    }),
    /*     new CopyWebpackPlugin({
      patterns: [
        {
          from: "assets/images/our-friends/*",
          to: path.resolve(__dirname, "shelter/assets/images/[name][ext]"),
        },
      ],
    }), */
  ],

  module: {
    rules: [
      // * replaces all images, compresses depending on the mode
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        // * Webpack goes from right to left
        use: [
          // * Style-loader adds styles to the head section and plugin in a separate file
          /* isItDev("style-loader",  */ MiniCssExtractPlugin.loader,
          "css-loader",
          // * Styles from different browsers
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        // * Webpack 5 allows us not to use third-party loaders  https://webpack.js.org/guides/asset-modules/#root
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(svg|gif|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/icons/[name][ext]",
        },
      },
      {
        test: /\.(ttf|wof|wof2|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext]",
        },
      },
    ],
  },
};
