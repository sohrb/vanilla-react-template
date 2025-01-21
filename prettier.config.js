/** @type {import("prettier").Config} */
const config = {
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
  plugins: ["prettier-plugin-packagejson"],
};

export default config;
