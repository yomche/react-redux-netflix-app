const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'production',

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  entry: './src/index.tsx',

  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: '[fullhash].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          }
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
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
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        }
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new UglifyJSPlugin(),

    new CompressionPlugin(),

    new HtmlWebpackPlugin({
      title: 'Netflix EPAM',
      template: "./index.html"
    }),

    new MiniCssExtractPlugin({
      filename: '[fullhash].style.css',
    }),

    new FaviconsWebpackPlugin('./assets/netflix_logo.png')
  ]
};
