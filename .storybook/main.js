const path = require('path');
const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config) => {
    config.plugins.push(...custom.plugins);
    return {...config, module: {...config.module, rules: custom.module.rules}};
  }
};
