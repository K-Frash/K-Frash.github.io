import {
  defineConfig,
  type IndexHtmlTransformContext,
  type Plugin,
} from "vite";
import preact from "@preact/preset-vite";
import { vitePluginMdToHTML } from "vite-plugin-md-to-html";
import sitemap from "vite-plugin-sitemap";

// function headInjector(): Plugin {
//   return {
//     name: "html-head-injector",
//     transformIndexHtml: {
//       enforce: "pre",
//       transform(html: string, ctx: IndexHtmlTransformContext): string {
//         // Only modify the /teaching page
//         if (ctx.path.endsWith("/teaching/index.html")) {
//           return html.replace(
//             /<head>/,
//             `<head>
//       <title>Teaching | Kris Frasheri</title>
//       <meta name="description" content="Explore all courses taught by Kris Frasheri at UW: lecture notes, assignments, resources for CS115, CS116, CS241, CS245, CS246, CS349." />`
//           );
//         }
//         return html;
//       },
//     },
//   };
// }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: "#app",
        previewMiddlewareEnabled: true,
      },
    }),
    // headInjector(),
    vitePluginMdToHTML(),
    sitemap({
      hostname: "https://krisfrasheri.com",
      generateRobotsTxt: false,
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
