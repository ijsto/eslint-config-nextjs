// see https://github.com/ijsto/eslint-config-ijs

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true }
  },

  plugins: ['react', 'prettier'],
  rules: {
    // __ CORE
    'no-console': 'warn',
    'no-nested-ternary': 0,
    camelcase: 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx']
      }
    ],
    // __ REACT
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    // __ ACCESSIBILITY
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-is-valid': 0,
    // __ NEXT.JS
    'react/react-in-jsx-scope': 0,
    // __ PRETTIER
    'prettier/prettier': ['error', { singleQuote: true }]
  }
};
