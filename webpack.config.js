const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const TsConfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

/**@type {import('webpack').Configuration}*/
const config = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    clean: true,
    compareBeforeEmit: true,
    filename: "[name].[contenthash:16].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "> 0.25%, not dead",
                }],
                ['@babel/preset-react', {
                  runtime: "automatic"
                }],
              ],
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg)/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"), 
      cache: true,
    }),
    new ESLintWebpackPlugin({
      extensions: ["ts", "tsx"]
    })
  ],
  stats: "errors-warnings",
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsConfigPathsWebpackPlugin()]
  }
};

module.exports = config;