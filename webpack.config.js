
/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'docs', 'assets'),
    publicPath: "/assets/",
    filename: '[name].js'
  },

  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  devtool: "source-map",
  target: 'web',

  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    port: 3000,
    hot: true
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader', options: {sourceMap: true} }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
