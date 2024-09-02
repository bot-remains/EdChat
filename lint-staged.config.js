export default {
  '*.{js,jsx}': () => [
    'eslint --config eslint.config.js --fix .',
    'prettier --write .',
    'eslint --config eslint.config.js .',
  ],
};