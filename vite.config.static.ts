// Static build config used ONLY for GitHub Pages.
// The default `vite.config.ts` (Lovable / Cloudflare) and `netlify.toml` (SSR
// on Netlify) are untouched — this config disables the Nitro server build and
// emits a prerendered SPA shell that GitHub Pages can serve as plain files.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
  nitro: false,
  vite: { build: { outDir: "dist-static" } },
});
