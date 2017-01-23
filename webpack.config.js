const path = require('path');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'bundle');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = DEVELOPMENT
    ? ['./src/index.jsx',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
      ]
    : ['./src/index.jsx'];

const plugin = DEVELOPMENT
      ? [ new webpack.HotModuleReplacementPlugin() ]
      : [];
 
module.exports = {
  entry: entry,
  plugins: plugin,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }
    ]
  },
  output: { 
    path: BUILD_DIR, 
    filename: 'bundle.js' 
  },
};