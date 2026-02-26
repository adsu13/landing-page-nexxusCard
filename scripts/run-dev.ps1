# Inicia o servidor de desenvolvimento e guarda o PID para poder reiniciar depois.
# Use este script em vez de "pnpm dev" quando quiser usar sync-and-restart.ps1 no celular.

$projectRoot = Split-Path -Parent $PSScriptRoot
if (-not (Test-Path (Join-Path $projectRoot "package.json"))) {
    $projectRoot = (Get-Location).Path
}

$pidFile = Join-Path $projectRoot ".dev-server.pid"

# Mata processo anterior se existir (ex.: reinício)
if (Test-Path $pidFile) {
    $savedPid = Get-Content $pidFile -ErrorAction SilentlyContinue
    if ($savedPid) {
        taskkill /PID $savedPid /T /F 2>$null
        Remove-Item $pidFile -Force -ErrorAction SilentlyContinue
    }
}

Set-Location $projectRoot
$p = Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "pnpm dev" -PassThru -NoNewWindow:$false
$p.Id | Set-Content $pidFile
Write-Host "Servidor iniciado (PID $($p.Id)). PID salvo em .dev-server.pid"
Write-Host "Para puxar alteracoes do celular e reiniciar, execute: .\scripts\sync-and-restart.ps1"
