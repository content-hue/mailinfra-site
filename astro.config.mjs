import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel"; // CHANGED: removed /serverless

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import path from "path";

export default defineConfig({

  site: "https://mailinfra.co",

  output: "server",

  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),

  integrations: [
    react(),
    sitemap(),
    tailwind()
  ],

  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }]
    ]
  },

  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    }
  }

});