const webpack = require('webpack');
const path = require('path');

/**
 * @type {webpack.Configuration} option
 */
const option = {
  mode: 'production',
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
    filename: 'index.js',
    path: path.resolve(__dirname, './lib'),
    libraryTarget: 'umd',
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
};

module.exports = option;
