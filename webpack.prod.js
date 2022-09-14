const { merge } = require("webpack-merge");
const common = require("./webpack.config");

/**@type {import('webpack').Configuration}*/
const config = {
  devtool: "source-map",
  mode: "production",
};

module.exports = merge(common, config);