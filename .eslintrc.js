module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'no-undef': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
};
