const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const skinDir = path.dirname(require.resolve('@ebay/skin/package.json'));
const svgDir = path.join(skinDir, 'src/svg');
const outputDir = path.join(__dirname, '../src/Icon/components');
const outputStorybookUtilDir = path.join(__dirname, '../.storybook/util');
const packageFile = fs.readFileSync(path.join(skinDir, 'package.json'), 'utf-8');
const packageJson = JSON.parse(packageFile);

const icons = {};
const THEMES = {
  ds6: {
    flags: {'if-not-flag': 'ds-4'},
    file: './index[skin-ds6].marko'
  }
};

const THEME_NAMES = Object.keys(THEMES);

for (const theme of THEME_NAMES) {
  const svgFile = path.join(svgDir, theme, 'icons.svg');
  const svgContent = fs.readFileSync(svgFile, 'utf-8');
  const $ = cheerio.load(svgContent);
  for (const el of Array.from($('symbol'))) {
    const $symbol = $(el);
    const name = $symbol.attr('id').replace(/^(?:svg-)?icon-/, '');
    icons[name] = true;
  }
  fs.copyFileSync(path.join(__dirname, 'icon-symbols.text'), path.join(outputDir, 'icon-symbols.tsx'));
  const iconSymbolsContent = fs.readFileSync(path.join(outputDir, 'icon-symbols.tsx'), 'utf-8');
  let newIconSymbolsContent =iconSymbolsContent.replace(/TODO_REPLACE/,svgContent);
  newIconSymbolsContent = newIconSymbolsContent.replace(/<\?xml version="1.0" encoding="utf-8"\?>/,'');
  newIconSymbolsContent = newIconSymbolsContent.replace(/file-rule/g,'fileRule')
  newIconSymbolsContent = newIconSymbolsContent.replace(/fill-rule/g,'fillRule');
  newIconSymbolsContent = newIconSymbolsContent.replace(/clip-rule/g,'clipRule');
  newIconSymbolsContent = newIconSymbolsContent.replace(/stroke-width/g,'strokeWidth');
  fs.writeFileSync(path.join(outputDir, 'icon-symbols.tsx'), newIconSymbolsContent);
}
const iconsList = Object.keys(icons);

const filePath = path.join(outputDir, 'iconName.ts');
fs.writeFileSync(filePath, `export type IconName = '${iconsList.join(`'|'`)}';`);

fs.writeFileSync(path.join(outputStorybookUtilDir, 'icons.ts'), `export const icons = ['${iconsList.join(`','`)}'];`);
fs.writeFileSync(
  path.join(outputStorybookUtilDir, 'skincss.ts'),
  `import '@ebay/skin/_cdn/skin/v${packageJson.version}/ds6/skin.min.css';`
);
