module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs,ts,tsx}'],
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime', '<rootDir>/tools/polyfills.js'],
  setupFilesAfterEnv: [
    '<rootDir>/tools/jest/setup.js',
    '@testing-library/jest-dom'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}',
    '<rootDir>/src/**/*.(spec|test).{js,jsx,mjs,ts,tsx}'
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    '^.+\\.(css|svg)$': '<rootDir>/tools/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|ts|tsx|css|json)$)': '<rootDir>/tools/jest/fileTransform.js',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs)$'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'mjs', 'ts', 'tsx'],
  modulePathIgnorePatterns: ['<rootDir>/.yarn-cache/'],
  moduleNameMapper: {
    '^-!svg-react-loader.*$': '<rootDir>/tools/jest/svgImportMock.js'
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'global.d.ts'],
  coverageReporters: ['text', 'cobertura', 'html'],
  globals: {
    __BROWSER__: ''
  }
};
