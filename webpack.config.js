const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: path.resolve(__dirname,'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'title',
            filename: 'index.html',
            template: './src/html-template/template.html'
        }),
        new CleanWebpackPlugin (['./build']),
        new ExtractTextPlugin('css/style.css')
    ],
    devtool: 'source-map',
    devServer: {
      contentBase: "./build",
      port: 3000, 
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react','babel-preset-env', 'stage-2']
            }
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        }
      ]
    }
  };