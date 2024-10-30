// import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from "node:url";
import remarkFlexibleParagraphs, {
  type FlexibleParagraphOptions,
} from "remark-flexible-paragraphs";
import linter from "vite-plugin-checker";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  vite: {
    plugins: [
      linter({
        eslint: {
          useFlatConfig: true,
          lintCommand: "eslint .",
        },
        typescript: true,
        overlay: {
          position: "br",
        },
      }),
    ],
    resolve: {
      alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    },
  },

  markdown: {
    remarkPlugins: [
      [
        remarkFlexibleParagraphs,
        {
          paragraphClassName: (alignment, classifications) => {
            return [
              "md-paragraph",
              ...(classifications ? classifications : []),
              ...(alignment ? [alignment] : []),
            ];
          },
        } as FlexibleParagraphOptions,
      ],
    ],
  },

  // final deployed url
  site: "https://www.cs.rpi.edu/",

  // output: "hybrid",

  // adapter: node({
  //   mode: "standalone",
  // }),
});
