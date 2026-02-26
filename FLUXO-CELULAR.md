# Desenvolver no celular e ver no PC (landing hospedada no PC)

Fluxo para editar no Cursor pelo celular, dar push, e no PC puxar as alterações e reiniciar o servidor.

## O que é automático e o que não é

- **Commit + push:** o Cursor no celular **não** faz sozinho. Você precisa pedir ao agente (“faz commit e push”) ou fazer no GitHub.
- **Pull + reiniciar no PC:** pode ser **manual** (rodar um script depois do push) ou **automático** (um script fica vigiando e reinicia quando detectar push). Veja abaixo.

---

## Opção A: Reinício automático no PC (recomendado)

No PC, **uma vez**, abra um PowerShell na pasta do projeto e rode:

```powershell
.\scripts\watch-and-sync.ps1
```

Esse script:
- sobe o servidor (se ainda não estiver rodando),
- a cada 30 segundos verifica se houve push no repositório,
- quando detectar push, faz **git pull** e **reinicia o servidor** sozinho.

Deixe essa janela aberta. No celular: edite no Cursor, peça **commit + push**. Em até ~30 s o PC puxa e reinicia; é só atualizar a página no celular.

---

## Opção B: Reinício manual no PC

### No PC (uma vez)

1. Inicie o servidor usando o script que guarda o PID (em vez de `pnpm dev` direto):

   ```powershell
   .\scripts\run-dev.ps1
   ```

   Isso abre uma janela com o servidor rodando e salva o PID em `.dev-server.pid`.

2. Deixe o PC ligado e acesse a landing pelo celular (ex.: `http://IP-DO-PC:5173` se estiver usando Vite em modo dev).

### No celular

1. Abra **cursor.com/agents** e conecte ao repositório deste projeto.
2. Peça as alterações que quiser (textos, layout, etc.).
3. Quando o agente terminar, peça para fazer **commit** e **push** para o GitHub (ou faça você pelo GitHub no celular, se o agente não fizer).

### No PC (depois do push)

1. No PowerShell, na pasta do projeto, execute:

   ```powershell
   .\scripts\sync-and-restart.ps1
   ```

   O script vai:
   - parar o servidor atual,
   - rodar `git pull`,
   - subir o servidor de novo.

2. Atualize a página no celular para ver as mudanças.

### Resumo (opção B)

| Onde   | Ação |
|--------|------|
| **PC** | Subir servidor com `.\scripts\run-dev.ps1` |
| **Celular** | Editar no Cursor Agents → commit + push |
| **PC** | Rodar `.\scripts\sync-and-restart.ps1` e atualizar a página no celular |

Se você costuma usar `pnpm dev` direto (sem o script), o `sync-and-restart.ps1` ainda faz o `git pull`, mas não consegue matar o processo antigo. Nesse caso, depois de rodar o script, cancele o `pnpm dev` manualmente (Ctrl+C) e inicie de novo com `pnpm dev` ou com `.\scripts\run-dev.ps1`.

---

## Resumo rápido

| Etapa | Automático? | O que fazer |
|-------|-------------|-------------|
| Editar no celular | Sim (Cursor) | Abrir cursor.com/agents e pedir as alterações |
| Commit + push | **Não** | Pedir ao agente: “faz commit e push” (ou fazer no GitHub) |
| Pull + reiniciar no PC | **Sim**, se usar `watch-and-sync.ps1` | Deixar `.\scripts\watch-and-sync.ps1` rodando no PC |
| Pull + reiniciar no PC | **Não**, se não usar o watch | Rodar `.\scripts\sync-and-restart.ps1` depois do push |
