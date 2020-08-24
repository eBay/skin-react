const path = require('path');
const custom = require('../webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs'
  ],
  webpackFinal: (config) => {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css'
      })
    );
    return {...config, module: {...config.module, rules: custom.module.rules}};
  }
};
