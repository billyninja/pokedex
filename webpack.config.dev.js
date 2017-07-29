var path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
              test: /\.jsx|.js?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'es2015']
              }
          }
      ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
};