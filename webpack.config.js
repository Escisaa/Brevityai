const path = require("path");
module.exports = {
  mode: "production", // Or 'development' for debugging
  entry: "./src/app/chrome-extension/popup.js",
  output: {
    filename: "popup.js", // Changed from bundle.js to match popup.html
    path: path.resolve(__dirname, "src/app/chrome-extension"), // Output directly to extension folder
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Fixed syntax
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
};
