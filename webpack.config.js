const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    vendor: path.resolve(__dirname, './src/vendor'),
    app: path.resolve(__dirname, './src/app'),
    discovery : path.resolve(__dirname, './src/discovery'),
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      api: path.resolve(__dirname, './src/api'),
      components: path.resolve(__dirname, './src/components'),
      uri: path.resolve(__dirname, './src/uri'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          // 'eslint-loader',
        ]
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(BUILD_DIR),
    new HtmlWebpackPlugin({
      inject: true,
      excludeChunks: ['discovery'],
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      excludeChunks: ['app'],
      template: path.resolve(__dirname, 'public/discovery.html'),
      filename: 'discovery.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
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
    new webpack.HashedModuleIdsPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ]);
  module.exports.devtool = '#source-map';
}
