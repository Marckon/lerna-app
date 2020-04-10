const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * @type {webpack.Configuration} option
 */
const option = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8096,
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
};

module.exports = option;
