module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['./src']
    }),
    require('postcss-nested')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')({
      overrideBrowserslist: ['defaults']
    }),
    require('postcss-custom-properties')(),
    require('postcss-assets')({
      basePath: './assets'
    }),
    require('postcss-normalize')()
  ],
  sourceMap: true
};
