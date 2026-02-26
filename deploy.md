# Deploy no GitHub Pages

## Se aparecer 404 "File not found"

1. No repositório no GitHub: **Settings → Pages** (menu lateral).
2. Em **Build and deployment**, em **Source** escolha uma das opções abaixo e confira:

   - **Se usar branch `gh-pages`:** Source = **Deploy from a branch** → Branch = **gh-pages** → Folder = **/ (root)** → Save.
   - **Se usar GitHub Actions:** Source = **GitHub Actions**.

3. Acesse sempre: **https://SEU-USUARIO.github.io/landing-page-nexxusCard/** (com o nome do repositório no final).

---

## Opção A: Deploy manual (branch gh-pages)

1. Build e publicação:
   ```bash
   pnpm run deploy:gh-pages
   ```

2. No GitHub: **Settings → Pages → Source** = **Deploy from a branch**, Branch = **gh-pages**, Folder = **/ (root)**.

---

## Opção B: GitHub Actions (recomendado)

O workflow em `.github/workflows/deploy-gh-pages.yml` faz build e deploy a cada push em `main`.

1. Faça commit e push do workflow (e do resto do projeto) para o GitHub.
2. Em **Settings → Pages → Source** escolha **GitHub Actions**.
3. No próximo push em `main` (ou em **Actions → Deploy GitHub Pages → Run workflow**) o site será publicado.

URL do site: **https://SEU-USUARIO.github.io/landing-page-nexxusCard/**

---

**Se o repositório tiver outro nome**, altere `/landing-page-nexxusCard/` em `scripts/build-gh-pages.mjs` e no `vite.config.ts` (variável `base`).
