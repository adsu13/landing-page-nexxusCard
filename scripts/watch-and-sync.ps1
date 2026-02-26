# Fica rodando no PC e, quando detectar um novo push (ex.: do celular), faz pull e reinicia o servidor.
# Deixe este script aberto em um terminal no PC junto com o run-dev.ps1 (ou rode o servidor antes).

$projectRoot = Split-Path -Parent $PSScriptRoot
if (-not (Test-Path (Join-Path $projectRoot "package.json"))) {
    $projectRoot = (Get-Location).Path
}

$pidFile = Join-Path $projectRoot ".dev-server.pid"
$intervalSeconds = 30  # verifica a cada 30 segundos

Set-Location $projectRoot

function Restart-Server {
    if (Test-Path $pidFile) {
        $savedPid = Get-Content $pidFile -ErrorAction SilentlyContinue
        if ($savedPid) { taskkill /PID $savedPid /T /F 2>$null }
        Remove-Item $pidFile -Force -ErrorAction SilentlyContinue
    }
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] git pull..."
    git pull 2>&1 | Out-Host
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Reiniciando servidor..."
    $p = Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "pnpm dev" -PassThru -NoNewWindow:$false
    $p.Id | Set-Content $pidFile
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Servidor reiniciado (PID $($p.Id))."
}

# Verifica se existe commit novo no remoto (branch atual)
function Has-NewCommits {
    $branch = (git rev-parse --abbrev-ref HEAD 2>$null)
    if (-not $branch) { return $false }
    git fetch origin 2>$null
    $behind = git rev-list --count "HEAD..origin/$branch" 2>$null
    return ($behind -and [int]$behind -gt 0)
}

# Verifica se o processo do PID file ainda esta rodando
function Server-IsRunning {
    if (-not (Test-Path $pidFile)) { return $false }
    $savedPid = Get-Content $pidFile -ErrorAction SilentlyContinue
    if (-not $savedPid) { return $false }
    $proc = Get-Process -Id $savedPid -ErrorAction SilentlyContinue
    return ($null -ne $proc)
}

# Inicia o servidor se ainda nao estiver rodando (ou se o processo morreu)
if (-not (Server-IsRunning)) {
    if (Test-Path $pidFile) { Remove-Item $pidFile -Force -ErrorAction SilentlyContinue }
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Iniciando servidor..."
    $p = Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "pnpm dev" -PassThru -NoNewWindow:$false
    $p.Id | Set-Content $pidFile
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Servidor iniciado (PID $($p.Id)). Monitorando pushes a cada ${intervalSeconds}s..."
} else {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Servidor ja rodando. Monitorando pushes a cada ${intervalSeconds}s..."
}

while ($true) {
    Start-Sleep -Seconds $intervalSeconds
    if (Has-NewCommits) {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Novo push detectado!"
        Restart-Server
    }
}
