module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-new": "off",
  },
};
