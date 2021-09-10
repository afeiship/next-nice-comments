const merge = require('webpack-merge').default;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const mapEntries = require('@jswork/webpack-mpa-entries');
const entry = mapEntries('./src/packages/**/main.ts', ['./src/packages', 'main.ts']);

module.exports = (inEnv) => {
  return merge(baseConfig(inEnv), {
    mode: 'production',
    entry,
    output: {
      path: path.resolve(__dirname, '..', 'dist/lib'),
      filename: '[name]/index.js',
      library: '[name]',
      libraryTarget: 'umd'
    },
    plugins: [new CleanWebpackPlugin()]
  });
};
