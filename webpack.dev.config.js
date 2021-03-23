const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',

  devtool: 'source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  target: 'web',

  entry: './src/index.tsx',

  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: '[fullhash].bundle.js'
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
            options: { sourceMap: true }
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
            options: { sourceMap: true },
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

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    port: 3000,
  },

  plugins: [
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
