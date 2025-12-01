# Script PowerShell para criar pacote ZIP da extensão MTR Auto Fill
# Uso: .\build-extension.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " MTR Auto Fill - Build Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se a pasta src existe
if (-not (Test-Path "src")) {
    Write-Host "ERRO: Pasta 'src' não encontrada!" -ForegroundColor Red
    Write-Host "Certifique-se de executar este script na raiz do projeto." -ForegroundColor Red
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Verificar se os ícones existem
$iconWarnings = @()

if (-not (Test-Path "src\icons\icon16.png")) {
    $iconWarnings += "Ícone 16x16 não encontrado em src\icons\icon16.png"
}

if (-not (Test-Path "src\icons\icon48.png")) {
    $iconWarnings += "Ícone 48x48 não encontrado em src\icons\icon48.png"
}

if (-not (Test-Path "src\icons\icon128.png")) {
    $iconWarnings += "Ícone 128x128 não encontrado em src\icons\icon128.png"
}

if ($iconWarnings.Count -gt 0) {
    Write-Host "AVISOS:" -ForegroundColor Yellow
    foreach ($warning in $iconWarnings) {
        Write-Host "  - $warning" -ForegroundColor Yellow
    }
    Write-Host ""
    Write-Host "Você precisa criar os ícones antes de submeter a extensão!" -ForegroundColor Yellow
    Write-Host "Veja o guia em: docs\chrome-web-store-submission.md" -ForegroundColor Yellow
    Write-Host ""
}

# Nome do arquivo ZIP
$zipName = "mtr-extension-chrome-web-store.zip"

# Remover ZIP anterior se existir
if (Test-Path $zipName) {
    Write-Host "Removendo pacote anterior..." -ForegroundColor Gray
    Remove-Item $zipName -Force
}

Write-Host "Criando pacote ZIP..." -ForegroundColor Green
Write-Host ""

try {
    # Criar ZIP
    Compress-Archive -Path "src\*" -DestinationPath $zipName -Force

    # Obter tamanho do arquivo
    $fileSize = (Get-Item $zipName).Length / 1MB

    Write-Host "========================================" -ForegroundColor Green
    Write-Host " SUCESSO!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Pacote criado: $zipName" -ForegroundColor Cyan
    Write-Host "Tamanho: $("{0:N2}" -f $fileSize) MB" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Próximos passos:" -ForegroundColor Yellow
    Write-Host "1. Verifique se os ícones estão na pasta src\icons\" -ForegroundColor White
    Write-Host "2. Acesse: https://chrome.google.com/webstore/devconsole" -ForegroundColor White
    Write-Host "3. Clique em 'New Item'" -ForegroundColor White
    Write-Host "4. Faça upload do arquivo: $zipName" -ForegroundColor White
    Write-Host ""
    Write-Host "Leia o guia completo em: docs\chrome-web-store-submission.md" -ForegroundColor Cyan
    Write-Host ""

} catch {
    Write-Host ""
    Write-Host "ERRO ao criar o pacote ZIP!" -ForegroundColor Red
    Write-Host "Erro: $_" -ForegroundColor Red
    Write-Host ""
}

Read-Host "Pressione Enter para sair"
