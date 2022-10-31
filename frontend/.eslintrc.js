module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  plugins: [
    "react",
    "prettier"
  ],
  rules: {
    semi: [2, "always"],
    "comma-dangle": [2, "always-multiline"],
    "prettier/prettier": "warn",
    "react/prop-types": 0,
  },

};
