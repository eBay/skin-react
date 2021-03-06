/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"

    },
    "plugins": [
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/parser":0,
        "@typescript-eslint/restrict-plus-operands":0,
        "@typescript-eslint/restrict-template-expressions":0,
        "@typescript-eslint/no-empty-function":0,
        "@typescript-eslint/ban-types":0,
        "@typescript-eslint/no-unsafe-call":0,
        "@typescript-eslint/no-unsafe-member-access":0,
        "@typescript-eslint/explicit-module-boundary-types":0,
        "@typescript-eslint/no-unused-vars":0,
        "@typescript-eslint/ban-ts-comment":0,
        "@typescript-eslint/no-unsafe-assignment":0,
        "@typescript-eslint/no-explicit-any":0,
        "@typescript-eslint/no-unsafe-return":0,
        "@typescript-eslint/await-thenable": 0,
        "@typescript-eslint/require-await":0
    }
};
