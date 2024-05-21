/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {},
      }
    ]
  ]
};

export default config;
