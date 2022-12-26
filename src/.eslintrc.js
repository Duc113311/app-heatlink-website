module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8,
    sourceType: "module",
  },
};
