import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { vitePluginMdToHTML } from "vite-plugin-md-to-html";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true,
        // additionalPrerenderRoutes: ["/404"],
        renderTarget: "#app",
        previewMiddlewareEnabled: true,
      },
    }),
    vitePluginMdToHTML(),
    sitemap({
      hostname: "https://krisfrasheri.com",
      generateRobotsTxt: false
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
