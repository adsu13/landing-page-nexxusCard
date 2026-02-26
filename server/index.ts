import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public (production) or dist/public when running server in dev
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  const indexHtmlPath = path.join(staticPath, "index.html");
  const hasBuild = fs.existsSync(indexHtmlPath);

  if (hasBuild) {
    app.use(express.static(staticPath));
  }

  // Handle client-side routing - serve index.html for all routes (or instrução se não houver build)
  app.get("*", (_req, res) => {
    if (hasBuild) {
      res.sendFile(indexHtmlPath);
    } else {
      res.status(503).send(
        "<!DOCTYPE html><html><head><meta charset='utf-8'><title>Build necessário</title></head><body style='font-family:sans-serif;max-width:560px;margin:80px auto;padding:20px;'><h1>Build não encontrado</h1><p>A pasta <code>dist/public</code> não existe. Rode na raiz do projeto:</p><pre>pnpm build</pre><p>Depois inicie o servidor com <code>pnpm start</code>.</p><p>Para desenvolvimento do frontend, use <code>pnpm dev</code> (Vite).</p></body></html>"
      );
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
