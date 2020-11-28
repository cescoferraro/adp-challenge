// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: [
    "eslint-config-airbnb",
    "eslint-config-standard",
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/extensions": "off",
  },
  settings: {
    react: {
      version: "999.999.999",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  env: {
    mocha: true,
  },
};
