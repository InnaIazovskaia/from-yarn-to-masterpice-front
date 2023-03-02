module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "xo", "prettier"],
  overrides: [
    {
      rules: {},
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
    },
    {
      files: ["src/vite-env.d.ts"],
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
