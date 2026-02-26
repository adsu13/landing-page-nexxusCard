/**
 * Publica a pasta dist/gh-pages na branch gh-pages (para GitHub Pages).
 * Rode depois de: pnpm run build:gh-pages
 */
import { publish } from "gh-pages";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dir = path.join(root, "dist", "gh-pages");

if (!fs.existsSync(dir)) {
  console.error("Erro: pasta dist/gh-pages não existe. Rode antes: pnpm run build:gh-pages");
  process.exit(1);
}

publish(dir, { cwd: root }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Deploy concluído. Site em https://SEU-USUARIO.github.io/landing-page-nexxusCard/");
});
