@echo off
REM Script para criar pacote ZIP da extensao MTR Auto Fill para Chrome Web Store
REM Uso: Duplo clique neste arquivo ou execute: build-extension.bat

echo ========================================
echo  MTR Auto Fill - Build Script
echo ========================================
echo.

REM Verificar se a pasta src existe
if not exist "src" (
    echo ERRO: Pasta 'src' nao encontrada!
    echo Certifique-se de executar este script na raiz do projeto.
    pause
    exit /b 1
)

REM Verificar se os icones existem
if not exist "src\icons\icon16.png" (
    echo AVISO: Icone 16x16 nao encontrado em src\icons\icon16.png
    echo Voce precisa criar os icones antes de submeter a extensao!
    echo.
)

if not exist "src\icons\icon48.png" (
    echo AVISO: Icone 48x48 nao encontrado em src\icons\icon48.png
    echo.
)

if not exist "src\icons\icon128.png" (
    echo AVISO: Icone 128x128 nao encontrado em src\icons\icon128.png
    echo.
)

REM Nome do arquivo ZIP
set ZIP_NAME=mtr-extension-chrome-web-store.zip

REM Remover ZIP anterior se existir
if exist "%ZIP_NAME%" (
    echo Removendo pacote anterior...
    del "%ZIP_NAME%"
)

echo Criando pacote ZIP...
echo.

REM Criar ZIP usando PowerShell
powershell -Command "Compress-Archive -Path 'src\*' -DestinationPath '%ZIP_NAME%' -Force"

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo  SUCESSO!
    echo ========================================
    echo.
    echo Pacote criado: %ZIP_NAME%
    echo.
    echo Proximo passo:
    echo 1. Verifique se os icones estao na pasta src\icons\
    echo 2. Acesse: https://chrome.google.com/webstore/devconsole
    echo 3. Clique em "New Item"
    echo 4. Faca upload do arquivo: %ZIP_NAME%
    echo.
    echo Leia o guia completo em: docs\chrome-web-store-submission.md
    echo.
) else (
    echo.
    echo ERRO ao criar o pacote ZIP!
    echo Tente criar manualmente ou use o script PowerShell.
    echo.
)

pause
