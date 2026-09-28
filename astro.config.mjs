import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kevinmazur.dev",
  output: "static",
  integrations: [sitemap()],
});
