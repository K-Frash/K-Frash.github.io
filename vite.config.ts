import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    viteStaticCopy({
      targets: [
        {
          src: "index.html",
          dest: "",
          rename: "404.html",
        },
      ],
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      react: "@preact/compat",
      "react-dom/test-utils": "@preact/test-utils",
      "react-dom": "@preact/compat",
    },
  },
});
