module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/eslint-config-prettier",
    "@vue/eslint-config-typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    // Custom rules can be added here
  },
};
