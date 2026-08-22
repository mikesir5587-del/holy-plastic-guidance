// Post-processing for the GitHub Pages build (`bun run build:static`).
// Turns the prerendered SPA shell into `index.html`, writes a standalone
// (script-free, hydration-safe) Russian 404 page, and adds `.nojekyll` plus the
// custom-domain `CNAME`. Only touches `dist-static/`.
import { copyFile, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist-static", "client");
const shell = join(clientDir, "_shell.html");

await access(shell);
await copyFile(shell, join(clientDir, "index.html"));

// A standalone 404: copying the SPA shell here made React hydrate the home-page
// markup against a 404 URL (React error #418) and leaked home-page metadata.
const notFound = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>Страница не найдена — HolyPlastic</title>
    <meta name="description" content="Такой страницы на сайте HolyPlastic нет или она была перемещена." />
    <meta name="robots" content="noindex, follow" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta name="theme-color" content="#070708" />
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
    <style>
      :root { color-scheme: dark; }
      body {
        margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 1.5rem;
        background: #070708; color: #f4f2ed;
        font-family: Manrope, system-ui, -apple-system, "Segoe UI", sans-serif;
      }
      .card { max-width: 32rem; text-align: center; }
      img { width: min(240px, 62vw); height: auto; }
      h1 { font-size: clamp(3rem, 16vw, 5rem); margin: 1.5rem 0 0; letter-spacing: 0.04em; }
      h2 { font-size: 1.25rem; margin: 0.75rem 0 0; font-weight: 600; }
      p { margin: 0.75rem 0 0; color: rgba(244, 242, 237, 0.7); font-size: 0.95rem; line-height: 1.6; }
      a.home {
        display: inline-flex; align-items: center; justify-content: center; min-height: 48px;
        margin-top: 2rem; padding: 0 1.75rem; border-radius: 999px; background: #fff; color: #070708;
        font-size: 0.78rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
        text-decoration: none;
      }
      a:focus-visible { outline: 2px solid #7fe7ff; outline-offset: 3px; }
    </style>
  </head>
  <body>
    <main class="card">
      <img src="/media/holyplastic-logo-640.webp" width="1580" height="391" alt="HolyPlastic" />
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Такой страницы нет или она была перемещена. Вернитесь на главную или напишите нам в Telegram <a href="https://t.me/holy_plastic">@holy_plastic</a>.</p>
      <a class="home" href="/">На главную</a>
    </main>
  </body>
</html>
`;
await writeFile(join(clientDir, "404.html"), notFound);

await writeFile(join(clientDir, ".nojekyll"), "");
await writeFile(join(clientDir, "CNAME"), "holy-plastic.com\n");

console.log("[pages] dist-static/client is ready for GitHub Pages");
