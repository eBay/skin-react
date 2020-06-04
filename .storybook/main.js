const path = require('path');
const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs'
  ],
  webpackFinal: (config) => {
    return {...config, module: {...config.module, rules: custom.module.rules}};
  }
};
