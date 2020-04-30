module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    $: false,
    Vue: false,
    mapv: false,
    maptalks: false,
    echarts: false,
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/no-v-html": "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
  extends: ["plugin:vue/essential", "@vue/prettier"],
};
