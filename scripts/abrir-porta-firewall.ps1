# Abre a porta 5177 no Firewall do Windows para acessar a landing pelo celular.
# Execute como Administrador: botao direito no PowerShell -> "Executar como administrador"

$port = 5177
$ruleName = "Vite Dev - landing-page-nexxusCard"

# Remove regra antiga se existir
Remove-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue

# Cria regra de entrada (inbound) para TCP na porta
New-NetFirewallRule -DisplayName $ruleName -Direction Inbound -Protocol TCP -LocalPort $port -Action Allow

Write-Host "Porta $port liberada. Tente acessar do celular: http://192.168.0.100:$port"
Write-Host "Se ainda falhar, verifique se o antivirus nao esta bloqueando."
