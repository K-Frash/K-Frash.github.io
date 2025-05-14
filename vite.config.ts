import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), vitePluginMdToHTML()],
  base: "/",
  resolve: {
    alias: {
      react: "@preact/compat",
      "react-dom/test-utils": "@preact/test-utils",
      "react-dom": "@preact/compat",
    },
  },
});
