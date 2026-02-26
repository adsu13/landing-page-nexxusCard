# Puxa as alteracoes do Git (push feito no celular) e reinicia o servidor.
# Execute este script no PC depois de dar commit + push pelo Cursor no celular.

$projectRoot = Split-Path -Parent $PSScriptRoot
if (-not (Test-Path (Join-Path $projectRoot "package.json"))) {
    $projectRoot = (Get-Location).Path
}

$pidFile = Join-Path $projectRoot ".dev-server.pid"
Set-Location $projectRoot

# 1. Mata o servidor atual (se foi iniciado com run-dev.ps1)
if (Test-Path $pidFile) {
    $savedPid = Get-Content $pidFile -ErrorAction SilentlyContinue
    if ($savedPid) {
        Write-Host "Parando servidor (PID $savedPid)..."
        taskkill /PID $savedPid /T /F 2>$null
    }
    Remove-Item $pidFile -Force -ErrorAction SilentlyContinue
}

# 2. Puxa as alteracoes do remoto
Write-Host "Executando git pull..."
$pullResult = git pull 2>&1
Write-Host $pullResult

# 3. Reinicia o servidor
Write-Host "Reiniciando servidor..."
$p = Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "pnpm dev" -PassThru -NoNewWindow:$false
$p.Id | Set-Content $pidFile
Write-Host "Servidor reiniciado (PID $($p.Id))."
Write-Host "Pronto. Acesse a landing pelo celular para ver as alteracoes."
