const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    javascript: './Containers/App.jsx',
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  resolve: {
    // add alias for application code directory
    alias:{
        'bootstrap-path': path.join(__dirname, '../node_modules/bootstrap-sass/assets/stylesheets/')
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader':{
        includePaths: [
        	path.resolve(__dirname, 'app/styles')
        ]
          
          
          
          :[includePath=path.join(__dirname, '../node_modules/bootstrap-sass/assets/stylesheets/')]          

        ],
      },
      {
        test: /\.(?:png|jpg|svg)$/,
        loader: 'url-loader',
        query: {
        // Inline images smaller than 10kb as data URIs        limit: 10000
            },
      }
    ],
  },
      sassLoader: {
        includePaths: [
        	path.resolve(__dirname, 'app/styles')
        ]
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.tpl.ejs',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version'],
          }),
          precss(),
        ],
      },
    }),
  ],
};
