const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    vendor: SRC_DIR + '/vendor',
    app: SRC_DIR + '/index'
  },

  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ]
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin(BUILD_DIR),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],

  devtool: '#eval-source-map',

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.output = {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js',
  },

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ]);

  module.exports.devtool = '#source-map';
}
