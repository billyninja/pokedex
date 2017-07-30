var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
              test: /\.jsx|\.js?$/,
              exclude: /node_modules/,
              loader: require.resolve('babel-loader'),
              query: {
                  presets: ['react', 'es2015']
              }
          }
      ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    //hot: true
  },
};
