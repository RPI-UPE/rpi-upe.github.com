// @ts-check

import eslint from "@eslint/js";
import markdown from "@eslint/markdown";
import astro from "eslint-plugin-astro";
// import mdx from "eslint-plugin-mdx";
import typescript from "typescript-eslint";

export default typescript.config(
  {
    ignores: [".astro/**"],
  },
  {
    name: "eslint/recommended",
    ...eslint.configs.recommended,
  },
  // @ts-expect-error eslint packages are dumb
  ...markdown.configs.processor,

  // {
  //   ...mdx.flat,
  //   ...mdx.flatCodeBlocks,
  //   processor: mdx.createRemarkProcessor({
  //     lintCodeBlocks: true,
  //     // optional, if you want to disable language mapper, set it to `false`
  //     // if you want to override the default language mapper inside, you can provide your own
  //     languageMapper: {},
  //   }),
  //   rules: {
  //     ...mdx.flatCodeBlocks.rules,
  //     // if you want to override some rules for code blocks
  //     // "no-var": "error",
  //     // "prefer-const": "error",
  //   },
  //   files: ["**/*.mdx"],
  // },

  ...typescript.configs.strictTypeChecked,
  ...typescript.configs.stylisticTypeChecked,
  ...astro.configs["flat/recommended"],
  ...astro.configs["flat/jsx-a11y-strict"],
  {
    name: "Disable some rules for env.d.ts",
    rules: { "@typescript-eslint/triple-slash-reference": "off" },
  },
  {
    name: "Type checking",
    files: ["**/*.{js,ts}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ["**/*.{astro,md}"],
    ...typescript.configs.disableTypeChecked,
  }
);
