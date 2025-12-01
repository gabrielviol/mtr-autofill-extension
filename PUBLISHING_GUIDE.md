# 🚀 Guia Rápido de Publicação - Chrome Web Store

Este guia fornece os passos essenciais para publicar a extensão MTR Auto Fill na Chrome Web Store.

---

## ✅ Checklist Pré-Publicação

Antes de começar, você precisa:

### 1. Criar os Ícones (OBRIGATÓRIO)

Crie 3 ícones PNG e coloque em `src/icons/`:

- [ ] `icon16.png` - 16x16 pixels
- [ ] `icon48.png` - 48x48 pixels
- [ ] `icon128.png` - 128x128 pixels

**Ferramentas recomendadas**:
- Canva: https://www.canva.com (gratuito)
- Figma: https://www.figma.com (gratuito)
- Favicon Generator: https://www.favicon-generator.org/

**Dica de design**: Use cores verdes/azuis (meio ambiente) + símbolo de documento/Excel

---

### 2. Criar Screenshots (OBRIGATÓRIO - mínimo 1)

Tire pelo menos 1 screenshot da extensão funcionando:

- [ ] Screenshot 1: Interface da extensão (popup)
- [ ] Screenshot 2 (opcional): Processo de upload
- [ ] Screenshot 3 (opcional): Formulário sendo preenchido

**Tamanho**: 1280x800 pixels ou 640x400 pixels
**Formato**: PNG ou JPEG

**Como fazer**:
1. Abra a extensão no Chrome
2. Use Print Screen ou ferramenta de captura
3. Redimensione para 1280x800 pixels

---

### 3. Conta de Desenvolvedor Chrome Web Store

- [ ] Criar conta em: https://chrome.google.com/webstore/devconsole
- [ ] Pagar taxa única de $5 USD (pagamento permanente)
- [ ] Aceitar termos do Chrome Web Store Developer Agreement

---

### 4. Hospedar Política de Privacidade

Você tem 3 opções:

**Opção A: GitHub (Recomendado - já está pronto!)**
```
https://github.com/gabriel/mtr-extension/blob/master/PRIVACY_POLICY.md
```

**Opção B: GitHub Pages**
1. Vá em Settings do repositório
2. Ative GitHub Pages
3. Use: `https://gabriel.github.io/mtr-extension/privacy-policy.html`

**Opção C: Seu próprio site**
- Hospede o arquivo PRIVACY_POLICY.md no seu site
- Use a URL gerada

---

## 📦 Passo 1: Criar o Pacote ZIP

### Opção A: Usar o Script (Mais Fácil)

```bash
# No Windows - Opção 1 (Duplo clique):
build-extension.bat

# No Windows - Opção 2 (PowerShell):
.\build-extension.ps1
```

Isso criará o arquivo: `mtr-extension-chrome-web-store.zip`

### Opção B: Manual (PowerShell)

```powershell
Compress-Archive -Path src\* -DestinationPath mtr-extension.zip
```

### Opção C: Manual (Sem ZIP)

Você pode fazer upload da pasta `src/` diretamente sem zipar.

---

## 🌐 Passo 2: Acessar o Chrome Web Store Dashboard

1. Acesse: https://chrome.google.com/webstore/devconsole
2. Faça login com sua conta Google (a mesma que pagou os $5)
3. Clique em **"New Item"** (botão azul)

---

## 📝 Passo 3: Preencher o Formulário

### 3.1 Upload do Pacote

- Clique em **"Choose File"** ou arraste o arquivo ZIP
- Aguarde o upload completar
- O Chrome validará o manifest.json automaticamente

---

### 3.2 Store Listing (Informações da Listagem)

#### **Detailed Description** (Descrição Detalhada)

Cole isto:

```
🌱 MTR Auto Fill - Automatização de Cadastros MTR

Economize horas de trabalho manual! A extensão MTR Auto Fill automatiza o preenchimento de formulários de usuários em portais MTR (Manifesto de Transporte de Resíduos) de órgãos ambientais brasileiros.

🎯 FUNCIONALIDADES PRINCIPAIS

✅ Upload seguro de arquivos Excel (.xlsx/.xls)
✅ Preenchimento automático de formulários
✅ Processamento em lote de múltiplos usuários
✅ Validação de dados em tempo real
✅ Interface intuitiva com drag & drop
✅ Tratamento robusto de erros

🌐 SITES SUPORTADOS

• CETESB - São Paulo (mtr.cetesb.sp.gov.br)
• FEPAM - Rio Grande do Sul (mtr.fepam.rs.gov.br)
• IMA - Santa Catarina (mtr.ima.sc.gov.br)
• SINIR - Nacional (mtr.sinir.gov.br)
• INEA - Rio de Janeiro (mtr.inea.rj.gov.br)
• FEAM - Minas Gerais (mtr.meioambiente.mg.gov.br)
• IEMA - Espírito Santo (mtr.iema.es.gov.br)

📋 COMO USAR

1. Prepare uma planilha Excel com as colunas: cpf, name, cargo, email, senha
2. Acesse um dos sites MTR suportados e faça login
3. Clique no ícone da extensão
4. Faça upload do arquivo Excel
5. Clique em "Processar" e aguarde a automação

🛡️ SEGURANÇA E PRIVACIDADE

• Código 100% aberto e auditável
• Permissões mínimas necessárias
• Funciona apenas em sites MTR oficiais
• Sem comunicação com servidores externos
• Validações rigorosas de dados
• Processamento local apenas

💼 IDEAL PARA

• Empresas de gestão ambiental
• Consultores ambientais
• Órgãos públicos
• Empresas com múltiplos usuários MTR

📖 Documentação: https://github.com/gabriel/mtr-extension
🐛 Suporte: https://github.com/gabriel/mtr-extension/issues
📄 Privacidade: https://github.com/gabriel/mtr-extension/blob/master/PRIVACY_POLICY.md
```

#### **Primary Category**
```
Productivity
```

#### **Language**
```
Portuguese (Brazil)
```

---

### 3.3 Graphic Assets (Imagens)

#### **Screenshots** (OBRIGATÓRIO)

- Clique em **"Add Screenshot"**
- Faça upload de pelo menos 1 screenshot (máximo 5)
- Tamanho: 1280x800px ou 640x400px

#### **Small Promotional Tile** (Opcional mas recomendado)

- Tamanho: 440x280 pixels
- Use para melhorar aparência nas buscas

---

### 3.4 Privacy Practices (Práticas de Privacidade)

#### **Single Purpose**

Cole isto:

```
The single purpose of this extension is to automate the filling of user registration forms on Brazilian MTR (Waste Transport Manifest) government websites by processing data from Excel files.
```

#### **Privacy Policy URL**

```
https://github.com/gabriel/mtr-extension/blob/master/PRIVACY_POLICY.md
```

(Ou sua URL do GitHub Pages / site próprio)

#### **Permissions Justifications**

**activeTab:**
```
This permission is required to access and automatically fill form fields on the active tab of MTR government websites. The extension reads the DOM structure to locate form fields and fills them with data from the user-uploaded Excel file.
```

**storage:**
```
This permission is required to temporarily store processed Excel data in the browser's local storage during batch automation. All data is stored locally and never transmitted to external servers.
```

**Host Permissions (MTR sites):**
```
These host permissions are required to run content scripts exclusively on official Brazilian MTR government websites. The extension only works on these specific environmental agency portals.
```

#### **Remote Code**

```
Are you using remote code? NO
```

#### **Data Handling**

```
Do you collect user data? NO

Explanation: While the extension processes user data from uploaded Excel files, it does not "collect" this data. All data remains in the user's browser and is never transmitted to external servers.
```

---

### 3.5 Distribution

#### **Visibility**
```
Public (Público)
```

#### **Regions**
```
All regions (ou selecione apenas Brazil)
```

#### **Pricing**
```
Free
```

---

## 🎯 Passo 4: Revisar e Submeter

1. Revise todas as informações preenchidas
2. Certifique-se de que:
   - Todos os campos obrigatórios estão preenchidos
   - Ícones estão no pacote
   - Pelo menos 1 screenshot foi adicionado
   - URL da política de privacidade está acessível
   - Justificativas de permissões estão completas

3. Clique em **"Submit for Review"** (Enviar para Revisão)

4. Aguarde a confirmação por email

---

## ⏳ Passo 5: Aguardar Aprovação

### Tempo de Revisão

- **Primeira submissão**: 1-3 dias úteis (até 7 dias em alguns casos)
- **Updates futuros**: Algumas horas

### Status da Revisão

Acompanhe em: https://chrome.google.com/webstore/devconsole

**Status possíveis**:
- ⏳ **Pending Review** - Aguardando revisão
- 🔍 **In Review** - Sendo revisado
- ✅ **Published** - Publicado (sucesso!)
- ❌ **Rejected** - Rejeitado (veja motivos e corrija)

---

## ✅ Após Aprovação

### Sua extensão estará disponível em:

```
https://chrome.google.com/webstore/detail/[ID-GERADO]
```

### Próximos Passos:

1. **Compartilhe o link** com usuários
2. **Atualize o README.md** com o link da Chrome Web Store
3. **Monitore reviews** e responda comentários
4. **Colete feedback** para melhorias

### Para Fazer Updates:

1. Aumente a versão no `manifest.json` (ex: 1.0.0 → 1.0.1)
2. Faça alterações necessárias no código
3. Gere novo ZIP com o script `build-extension`
4. Faça upload do novo ZIP no dashboard
5. Aguarde aprovação (geralmente mais rápida)

---

## ❌ Se For Rejeitado

### Motivos Comuns de Rejeição:

- Falta de ícones ou screenshots
- Política de privacidade inadequada ou inacessível
- Permissões não justificadas corretamente
- Descrição unclear ou enganosa
- Código com problemas de segurança
- Violação de políticas do Chrome Web Store

### Como Proceder:

1. Leia atentamente o **email de feedback** do Google
2. **Corrija os problemas** apontados
3. **Resubmeta** a extensão no dashboard
4. Segunda revisão geralmente é **mais rápida**

---

## 📚 Documentação Adicional

Para mais detalhes, consulte:

- **Guia Completo**: `docs/chrome-web-store-submission.md`
- **Política de Privacidade**: `PRIVACY_POLICY.md`
- **Chrome Web Store Policies**: https://developer.chrome.com/docs/webstore/program-policies/

---

## 🆘 Precisa de Ajuda?

- **Problemas durante publicação**: https://support.google.com/chrome_webstore/
- **Issues do projeto**: https://github.com/gabriel/mtr-extension/issues

---

## 📊 Resumo Visual

```
┌─────────────────────────────────────────┐
│ 1. Criar Ícones (16, 48, 128px)       │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│ 2. Tirar Screenshots (1280x800)       │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│ 3. Gerar ZIP (build-extension.bat)    │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│ 4. Criar Conta ($5 USD)               │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│ 5. Upload + Preencher Formulário       │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│ 6. Submit for Review                   │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│ 7. Aguardar Aprovação (1-3 dias)      │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│ 🎉 PUBLICADO!                          │
└─────────────────────────────────────────┘
```

---

**Boa sorte com a publicação! 🚀**

Se tiver dúvidas, consulte o guia completo em `docs/chrome-web-store-submission.md`
