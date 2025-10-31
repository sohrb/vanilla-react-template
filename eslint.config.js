import react from "@eslint-react/eslint-plugin";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

const config = tseslint.config(
  {
    ignores: ["dist"],
  },
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  react.configs["recommended-typescript"],
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,
  jsxA11y.flatConfigs.recommended,
  prettier,
);

export default config;
