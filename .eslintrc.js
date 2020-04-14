module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'space-before-function-paren': 0,
    'func-names': 0,
    'import/prefer-default-export': 0,
  },
};
