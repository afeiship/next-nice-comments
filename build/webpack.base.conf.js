const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = (inEnv) => {
  return {
    mode: 'development',
    entry: './public/index.js',
    stats: 'errors-only',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@': resolve(__dirname, '..'),
        'packages': resolve(__dirname, '..', 'packages')
      }
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.snippet$/,
          exclude: /node_modules/,
          use: ['raw-loader']
        },
        {
          test: /\.(woff|eot|ttf)\??.*$/,
          use: ['url-loader']
        }
      ]
    },
    plugins: [
      new ProgressBarPlugin(),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom'
      })
    ]
  };
};
