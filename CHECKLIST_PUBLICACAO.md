# ✅ Checklist de Publicação - Chrome Web Store

Use esta lista para garantir que você completou todos os passos necessários antes de publicar a extensão.

---

## 📦 Arquivos Preparados (Automático)

Estes arquivos já foram criados e configurados automaticamente:

- [x] `manifest.json` atualizado com referências aos ícones
- [x] `PRIVACY_POLICY.md` - Política de privacidade completa
- [x] `PUBLISHING_GUIDE.md` - Guia rápido de publicação
- [x] `docs/chrome-web-store-submission.md` - Guia detalhado com textos para o formulário
- [x] `build-extension.bat` - Script para gerar ZIP (Windows)
- [x] `build-extension.ps1` - Script PowerShell para gerar ZIP
- [x] `src/icons/README.md` - Instruções para criar ícones
- [x] Pasta `src/icons/` criada

---

## 🎨 Tarefas Manuais Necessárias

Você precisa fazer estas tarefas manualmente:

### 1. Criar Ícones (OBRIGATÓRIO)

- [ ] Criar `src/icons/icon16.png` (16x16 pixels)
- [ ] Criar `src/icons/icon48.png` (48x48 pixels)
- [ ] Criar `src/icons/icon128.png` (128x128 pixels)

**Ajuda**: Veja instruções em `src/icons/README.md`

**Ferramentas sugeridas**:
- Canva: https://www.canva.com
- Figma: https://www.figma.com
- Favicon Generator: https://www.favicon-generator.org

---

### 2. Criar Screenshots (OBRIGATÓRIO - mínimo 1)

- [ ] Screenshot 1: Interface da extensão (popup) - 1280x800px
- [ ] Screenshot 2 (opcional): Upload de Excel - 1280x800px
- [ ] Screenshot 3 (opcional): Formulário preenchido - 1280x800px

**Como fazer**:
1. Carregue a extensão localmente no Chrome
2. Use Print Screen para capturar
3. Redimensione para 1280x800 pixels

---

### 3. Conta Chrome Web Store

- [ ] Criar conta em: https://chrome.google.com/webstore/devconsole
- [ ] Pagar taxa de $5 USD (uma única vez, permanente)
- [ ] Aceitar termos do Chrome Web Store Developer Agreement

---

### 4. Hospedar Política de Privacidade Online

Escolha uma opção:

**Opção A: GitHub (Recomendado)**
- [ ] Fazer commit e push de `PRIVACY_POLICY.md` para o GitHub
- [ ] URL será: `https://github.com/seu-usuario/mtr-extension/blob/master/PRIVACY_POLICY.md`

**Opção B: GitHub Pages**
- [ ] Ativar GitHub Pages no repositório
- [ ] URL será: `https://seu-usuario.github.io/mtr-extension/privacy-policy.html`

**Opção C: Seu próprio site**
- [ ] Hospedar o arquivo em seu domínio
- [ ] URL será: `https://seusite.com/privacy-policy`

---

## 🚀 Processo de Publicação

### Passo 1: Gerar Pacote ZIP

- [ ] Executar `build-extension.bat` (duplo clique)

  **OU**

- [ ] Executar PowerShell: `.\build-extension.ps1`

- [ ] Verificar que o arquivo `mtr-extension-chrome-web-store.zip` foi criado

---

### Passo 2: Acessar Chrome Web Store Dashboard

- [ ] Acessar: https://chrome.google.com/webstore/devconsole
- [ ] Fazer login com sua conta Google
- [ ] Clicar em **"New Item"**

---

### Passo 3: Upload e Preenchimento do Formulário

#### 3.1 Upload do Pacote
- [ ] Fazer upload do arquivo ZIP ou pasta `src/`
- [ ] Aguardar validação automática do manifest.json

#### 3.2 Store Listing

**Detailed Description**
- [ ] Copiar texto de `docs/chrome-web-store-submission.md` (seção "Descrição Detalhada")
- [ ] Colar no campo "Detailed Description"

**Category**
- [ ] Selecionar: **Productivity**

**Language**
- [ ] Selecionar: **Portuguese (Brazil)**

#### 3.3 Graphic Assets

**Screenshots**
- [ ] Upload de pelo menos 1 screenshot (1280x800px)
- [ ] Upload de até 5 screenshots no total

**Small Promotional Tile** (opcional)
- [ ] Upload de imagem promocional 440x280px (se criou)

#### 3.4 Privacy Practices

**Single Purpose**
- [ ] Copiar texto de `docs/chrome-web-store-submission.md` (seção "Single Purpose")
- [ ] Colar no campo correspondente

**Privacy Policy URL**
- [ ] Colar URL da política de privacidade hospedada

**Permission Justifications**

Para cada permissão, copiar de `docs/chrome-web-store-submission.md`:

- [ ] **activeTab**: Copiar justificativa em inglês
- [ ] **storage**: Copiar justificativa em inglês
- [ ] **Host Permissions**: Copiar justificativa em inglês

**Remote Code**
- [ ] Selecionar: **NO**

**Data Collection**
- [ ] "Do you collect user data?": **NO**
- [ ] Adicionar explicação fornecida no guia

#### 3.5 Distribution

- [ ] **Visibility**: Public
- [ ] **Regions**: All regions (ou só Brazil)
- [ ] **Pricing**: Free

---

### Passo 4: Revisar e Submeter

- [ ] Revisar todos os campos preenchidos
- [ ] Verificar que não há erros ou avisos
- [ ] Clicar em **"Save Draft"** (salvar rascunho)
- [ ] Clicar em **"Submit for Review"** (enviar para revisão)

---

### Passo 5: Aguardar Aprovação

- [ ] Confirmar recebimento de email do Google
- [ ] Aguardar 1-3 dias úteis (até 7 dias em alguns casos)
- [ ] Acompanhar status em: https://chrome.google.com/webstore/devconsole

---

## ✅ Após Aprovação

- [ ] Anotar ID da extensão gerado
- [ ] Anotar URL da Chrome Web Store: `chrome.google.com/webstore/detail/[ID]`
- [ ] Atualizar README.md com link da Chrome Web Store
- [ ] Compartilhar link com usuários
- [ ] Monitorar reviews e comentários

---

## ❌ Se For Rejeitado

- [ ] Ler email com motivos da rejeição
- [ ] Corrigir problemas apontados
- [ ] Resubmeter a extensão
- [ ] Aguardar nova revisão (geralmente mais rápida)

---

## 📚 Documentação de Referência

Todos os textos e justificativas que você precisa estão em:

1. **PUBLISHING_GUIDE.md** - Guia rápido, passo a passo
2. **docs/chrome-web-store-submission.md** - Guia detalhado com todos os textos
3. **PRIVACY_POLICY.md** - Política de privacidade completa
4. **src/icons/README.md** - Como criar os ícones

---

## 🆘 Precisa de Ajuda?

### Problemas Comuns

**"Não sei criar ícones"**
- Veja: `src/icons/README.md`
- Use Canva ou Favicon Generator (super fácil)

**"Não sei tirar screenshots"**
- Use Print Screen no Windows
- Abra no Paint e redimensione para 1280x800
- Salve como PNG

**"Conta do Chrome Web Store não aceita meu cartão"**
- Tente outro cartão
- Use PayPal se disponível
- Entre em contato com suporte do Google

**"Extensão foi rejeitada"**
- Leia o email com atenção
- Geralmente é algo simples (falta de ícones, screenshot, etc.)
- Corrija e resubmeta

### Suporte

- **Chrome Web Store Support**: https://support.google.com/chrome_webstore/
- **Issues do Projeto**: https://github.com/gabriel/mtr-extension/issues

---

## 📊 Progresso Atual

Marque o que você já completou:

**Preparação Automática (Feito pelo Script)**
- [x] Manifest.json configurado
- [x] Documentação criada
- [x] Scripts de build criados
- [x] Política de privacidade escrita

**Suas Tarefas**
- [ ] Ícones criados
- [ ] Screenshots criados
- [ ] Conta Chrome Web Store criada
- [ ] Política hospedada online
- [ ] ZIP gerado
- [ ] Formulário preenchido
- [ ] Submetido para revisão
- [ ] APROVADO E PUBLICADO! 🎉

---

## 🎯 Próximos Passos Imediatos

1. **AGORA**: Criar os 3 ícones (veja `src/icons/README.md`)
2. **AGORA**: Tirar pelo menos 1 screenshot da extensão
3. **DEPOIS**: Criar conta no Chrome Web Store ($5 USD)
4. **DEPOIS**: Fazer commit/push para hospedar política de privacidade
5. **DEPOIS**: Gerar ZIP com `build-extension.bat`
6. **DEPOIS**: Preencher formulário (use textos de `docs/chrome-web-store-submission.md`)
7. **DEPOIS**: Submeter e aguardar aprovação

---

**Boa sorte! Você está quase lá! 🚀**

Qualquer dúvida, consulte os guias detalhados mencionados acima.
