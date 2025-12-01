# Guia de Submissão - Chrome Web Store

Este documento contém todas as informações necessárias para submeter a extensão MTR Auto Fill na Chrome Web Store.

---

## 📋 Informações Básicas da Extensão

### Nome
```
MTR Auto Fill - Cadastro Automático
```

### Descrição Resumida (132 caracteres máximo)
```
Automatize cadastros em sistemas MTR brasileiros com upload de Excel. Suporte a CETESB, FEPAM, IMA e mais.
```

### Categoria
```
Productivity (Produtividade)
```

### Idioma Principal
```
Português (Brasil)
```

---

## 📝 Descrição Detalhada

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

📖 Documentação completa: https://github.com/gabriel/mtr-extension
🐛 Suporte: https://github.com/gabriel/mtr-extension/issues

---

⚖️ TERMOS LEGAIS

Esta extensão é fornecida "como está" sob a Licença MIT. O desenvolvedor não é afiliado aos órgãos ambientais oficiais. Use a extensão por sua conta e risco.

📄 Política de Privacidade: https://github.com/gabriel/mtr-extension/blob/master/PRIVACY_POLICY.md
```

---

## 🔐 Justificativas de Permissões

### 1. Permission: `activeTab`

**Justificativa (em inglês para o formulário)**:
```
This permission is required to access and automatically fill form fields on the active tab of MTR government websites. The extension reads the DOM structure to locate form fields (CPF, name, email, position) and fills them with data from the user-uploaded Excel file. Without this permission, the extension cannot perform its core function of form automation.
```

**Justificativa (em português)**:
```
Esta permissão é necessária para acessar e preencher automaticamente os campos dos formulários na aba ativa dos sites governamentais MTR. A extensão lê a estrutura DOM para localizar campos de formulário (CPF, nome, email, cargo) e os preenche com dados do arquivo Excel carregado pelo usuário. Sem esta permissão, a extensão não pode executar sua função principal de automação de formulários.
```

---

### 2. Permission: `storage`

**Justificativa (em inglês para o formulário)**:
```
This permission is required to temporarily store processed Excel data in the browser's local storage during batch automation. The data is used to sequentially fill multiple user forms without requiring the user to re-upload the file for each entry. All data is stored locally in the browser and is never transmitted to external servers.
```

**Justificativa (em português)**:
```
Esta permissão é necessária para armazenar temporariamente os dados processados do Excel no armazenamento local do navegador durante a automação em lote. Os dados são usados para preencher sequencialmente múltiplos formulários de usuários sem exigir que o usuário recarregue o arquivo para cada entrada. Todos os dados são armazenados localmente no navegador e nunca são transmitidos para servidores externos.
```

---

### 3. Host Permissions (Sites MTR Específicos)

**Sites incluídos**:
- `*://mtr.cetesb.sp.gov.br/*`
- `*://mtr.fepam.rs.gov.br/*`
- `*://mtr.ima.sc.gov.br/*`
- `*://mtr.sinir.gov.br/*`
- `*://mtr.inea.rj.gov.br/*`
- `*://mtr.meioambiente.mg.gov.br/*`
- `*://mtr.iema.es.gov.br/*`

**Justificativa (em inglês para o formulário)**:
```
These host permissions are required to run content scripts exclusively on official Brazilian MTR (Waste Transport Manifest) government websites. The extension only works on these specific environmental agency portals and cannot access any other websites. This restriction ensures the extension operates only on authorized government platforms where form automation is intended to be used.
```

**Justificativa (em português)**:
```
Essas permissões de host são necessárias para executar scripts de conteúdo exclusivamente nos sites governamentais oficiais de MTR (Manifesto de Transporte de Resíduos) brasileiros. A extensão funciona apenas nesses portais específicos de órgãos ambientais e não pode acessar nenhum outro site. Esta restrição garante que a extensão opere apenas em plataformas governamentais autorizadas onde a automação de formulários é destinada a ser usada.
```

---

## 🎯 Single Purpose (Propósito Único)

**Em inglês (para o formulário)**:
```
The single purpose of this extension is to automate the filling of user registration forms on Brazilian MTR (Waste Transport Manifest) government websites by processing data from Excel files (.xlsx/.xls). The extension provides a productivity tool for environmental professionals who need to register multiple users in these systems.
```

**Em português**:
```
O propósito único desta extensão é automatizar o preenchimento de formulários de cadastro de usuários em sites governamentais brasileiros de MTR (Manifesto de Transporte de Resíduos) através do processamento de dados de arquivos Excel (.xlsx/.xls). A extensão fornece uma ferramenta de produtividade para profissionais ambientais que precisam registrar múltiplos usuários nesses sistemas.
```

---

## 🌐 Política de Privacidade

**URL da Política de Privacidade**:
```
https://github.com/gabriel/mtr-extension/blob/master/PRIVACY_POLICY.md
```

Alternativamente, você pode hospedar em:
- GitHub Pages: `https://gabriel.github.io/mtr-extension/privacy-policy.html`
- Seu próprio domínio: `https://seusite.com/privacy-policy`

---

## ❓ Perguntas do Formulário Chrome Web Store

### Are you using remote code?
```
NO (Não)
```

**Explicação**: Todo o código está incluído no pacote da extensão. Não há carregamento de código externo.

---

### Does this extension process personal or sensitive user data?
```
YES (Sim)
```

**Explicação adicional**:
```
The extension processes personal data (CPF, name, email) from user-uploaded Excel files. However, all data processing occurs locally in the user's browser. No data is transmitted to external servers or third parties. Data is temporarily stored in local browser storage only during the automation process.
```

**Em português**:
```
A extensão processa dados pessoais (CPF, nome, email) de arquivos Excel carregados pelo usuário. No entanto, todo o processamento de dados ocorre localmente no navegador do usuário. Nenhum dado é transmitido para servidores externos ou terceiros. Os dados são armazenados temporariamente no armazenamento local do navegador apenas durante o processo de automação.
```

---

### Data Usage Certification

Se perguntado sobre coleta de dados, responda:

**Do you collect user data?**
```
NO (Não)
```

**Explicação**:
```
While the extension processes user data from uploaded Excel files, it does not "collect" this data in the traditional sense. All data remains in the user's browser and is never transmitted to external servers or stored persistently. The extension operates entirely offline after initial installation.
```

---

## 🖼️ Requisitos de Imagens

### Ícones (Obrigatórios)

Você precisa criar 3 ícones PNG:

1. **icon16.png** - 16x16 pixels
2. **icon48.png** - 48x48 pixels
3. **icon128.png** - 128x128 pixels

**Localização**: `src/icons/`

**Sugestões de design**:
- Use cores relacionadas ao meio ambiente (verde, azul)
- Inclua um símbolo de arquivo ou documento (Excel)
- Símbolo de automação ou engrenagem
- Mantenha simples e legível em tamanhos pequenos

**Ferramentas para criar ícones**:
- Canva (gratuito): https://www.canva.com
- Figma (gratuito): https://www.figma.com
- Photoshop / GIMP
- Conversor online: https://www.favicon-generator.org/

---

### Screenshots (Obrigatório - mínimo 1, máximo 5)

**Tamanho**: 1280x800 pixels ou 640x400 pixels
**Formato**: PNG ou JPEG

**Sugestões do que mostrar**:

1. **Screenshot 1**: Popup da extensão com interface de upload
2. **Screenshot 2**: Processo de upload de arquivo Excel
3. **Screenshot 3**: Formulário sendo preenchido automaticamente
4. **Screenshot 4**: Status de processamento em lote
5. **Screenshot 5**: Mensagem de sucesso

**Como tirar screenshots**:
- Use a tecla `Print Screen` ou ferramentas como Lightshot
- Redimensione para 1280x800 pixels
- Destaque elementos importantes com setas ou caixas

---

### Promotional Tile (Opcional mas recomendado)

**Small Promotional Tile**: 440x280 pixels

Usado nas buscas e listagens da Chrome Web Store.

**Dicas**:
- Inclua o logo/ícone da extensão
- Adicione texto curto descritivo
- Use cores atrativas
- Mantenha profissional

---

### Marquee (Opcional)

**Tamanho**: 1400x560 pixels

Usado em destaque na Chrome Web Store (apenas para extensões em destaque).

---

## 📦 Preparação do Pacote

### Estrutura de Diretórios Final

```
src/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── background.js
└── xlsx.js
```

### Arquivos a EXCLUIR do pacote

NÃO inclua no ZIP:
- `.git/`
- `node_modules/`
- `.gitignore`
- `README.md` (fica no GitHub)
- `SECURITY.md`
- `CHANGELOG.md`
- `docs/`
- Arquivos de teste
- `.DS_Store`, `Thumbs.db`

---

## 🚀 Checklist Pré-Submissão

Antes de submeter, verifique:

- [ ] Ícones criados (16px, 48px, 128px) e colocados em `src/icons/`
- [ ] Manifest.json atualizado com referências aos ícones
- [ ] Pelo menos 1 screenshot criado (1280x800px)
- [ ] Conta de desenvolvedor Chrome Web Store criada ($5 USD pago)
- [ ] Política de privacidade disponível online (GitHub ou site)
- [ ] Descrições escritas (resumida e detalhada)
- [ ] Justificativas de permissões preparadas
- [ ] Extensão testada localmente e funcionando
- [ ] Arquivo ZIP criado ou pasta src/ pronta

---

## 📤 Processo de Upload

1. Acesse: https://chrome.google.com/webstore/devconsole
2. Clique em **"New Item"**
3. Faça upload do arquivo **ZIP** ou da pasta `src/`
4. Preencha todos os campos do formulário
5. Adicione screenshots e imagens promocionais
6. Cole a URL da política de privacidade
7. Preencha justificativas de permissões
8. Revise tudo cuidadosamente
9. Clique em **"Submit for Review"**
10. Aguarde aprovação (1-3 dias úteis)

---

## ⏱️ Após Submissão

### Status da Revisão

Você pode acompanhar em: https://chrome.google.com/webstore/devconsole

**Status possíveis**:
- **Pending Review**: Em análise
- **In Review**: Sendo revisado
- **Published**: Publicado (sucesso!)
- **Rejected**: Rejeitado (veja os motivos e corrija)

### Se For Rejeitado

Motivos comuns:
- Falta de ícones ou screenshots
- Política de privacidade inadequada
- Permissões não justificadas
- Descrição unclear
- Problemas de segurança no código

**Como proceder**:
1. Leia atentamente o feedback do Google
2. Corrija os problemas apontados
3. Resubmeta a extensão
4. Segunda revisão geralmente é mais rápida

---

## 🎉 Após Aprovação

Sua extensão estará disponível em:
```
https://chrome.google.com/webstore/detail/[ID-DA-EXTENSÃO]
```

### Próximos Passos

1. Compartilhe o link da extensão
2. Atualize o README.md com o link da Chrome Web Store
3. Monitore reviews e feedback dos usuários
4. Responda a comentários e perguntas

### Atualizações Futuras

Para atualizar a extensão:
1. Aumente a versão no `manifest.json`
2. Faça upload do novo ZIP
3. Revisão de updates é mais rápida (algumas horas)

---

## 📞 Suporte

Se tiver problemas durante a submissão:

- **Chrome Web Store Developer Support**: https://support.google.com/chrome_webstore/
- **Chrome Web Store Policy**: https://developer.chrome.com/docs/webstore/program-policies/

---

## 📚 Recursos Úteis

- [Chrome Web Store Developer Documentation](https://developer.chrome.com/docs/webstore/)
- [Publishing Tutorial](https://developer.chrome.com/docs/webstore/publish/)
- [Best Practices](https://developer.chrome.com/docs/webstore/best-practices/)
- [Program Policies](https://developer.chrome.com/docs/webstore/program-policies/)

---

**Boa sorte com a publicação! 🚀**
