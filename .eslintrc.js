module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended'
  ],
  // add your custom rules here
  rules: {
    'indent': "off",
    'space-before-function-paren': "off",
    'no-console': 'off',
    'object-shorthand': 'off',
    'semi': 'off',
    'arrow-parens': 'off'
  }
}
