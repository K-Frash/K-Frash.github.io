import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { vitePluginMdToHTML } from "vite-plugin-md-to-html";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    vitePluginMdToHTML(),
    sitemap({
      hostname: "https://krisfrasheri.com",
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
