/**
 * Build para GitHub Pages.
 * Define VITE_BASE=/landing-page-nexxusCard/ e gera os arquivos em dist/gh-pages.
 */
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "dist", "gh-pages");

const env = { ...process.env, VITE_BASE: "/landing-page-nexxusCard/" };
execSync(`pnpm exec vite build --outDir "${outDir}"`, {
  cwd: root,
  stdio: "inherit",
  env,
});

console.log("\nBuild para GitHub Pages concluído: pasta dist/gh-pages");
console.log("Publicar: pnpm run deploy:gh-pages");
