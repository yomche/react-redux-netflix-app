const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  devtool: 'source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  target: 'web',

  entry: './src/index.jsx',

  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
    
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader',
          }
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets',
        },
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts",
        }
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Components',
      template: "./index.html"
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
};
