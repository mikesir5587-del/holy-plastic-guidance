// Post-processing for the GitHub Pages build (`bun run build:static`).
// Turns the prerendered SPA shell into `index.html` / `404.html`, adds
// `.nojekyll` and the custom-domain `CNAME`. Only touches `dist-static/`.
import { copyFile, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist-static", "client");
const shell = join(clientDir, "_shell.html");

await access(shell);
await copyFile(shell, join(clientDir, "index.html"));
await copyFile(shell, join(clientDir, "404.html"));
await writeFile(join(clientDir, ".nojekyll"), "");
await writeFile(join(clientDir, "CNAME"), "holy-plastic.com\n");

console.log("[pages] dist-static/client is ready for GitHub Pages");
