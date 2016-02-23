var webpack  = require('webpack');
var path     = require('path');
var HtmlPack = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './client/app/app'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPack({ template: './client/index.html' })
  ],

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.css/, loader: 'style!css' },
      {
        test: /\.js$/, loader: 'babel',
        exclude: [/client\/lib/, /node_modules/, /\.spec\.js/]
      }
    ]
  },

  devServer: {
    contentBase: './dist',
    hot: true
  }
};
