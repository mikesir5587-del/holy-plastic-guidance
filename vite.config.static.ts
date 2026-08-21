// Static build config used only for GitHub Pages deployments.
// The default vite.config.ts (Lovable / Cloudflare) and netlify.toml (SSR on
// Netlify) are untouched — this file simply prerenders the landing page to
// plain static files via Nitro's `github-pages` preset.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "github-pages",
    output: {
      dir: "dist-static",
      publicDir: "dist-static/public",
    },
  },
});
