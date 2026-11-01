import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://marcopianaroli.com",
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  devToolbar: { enabled: false },
});
