import react from "@eslint-react/eslint-plugin";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
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
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [
      react.configs["recommended-typescript"],
      reactHooks.configs["recommended-latest"],
      jsxA11y.flatConfigs.recommended,
    ],
  },
  prettier,
);

export default config;
