# MTR AutoFill Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue.svg)](https://chrome.google.com/webstore)
[![Security](https://img.shields.io/badge/Security-Verified-green.svg)](./SECURITY.md)

> Extensão Chrome para automatização de cadastros em sistemas MTR brasileiros usando dados de planilhas Excel.

## 📋 Sobre

A **MTR AutoFill Extension** automatiza o preenchimento de formulários de usuários em portais MTR (Manifesto de Transporte de Resíduos) de órgãos ambientais brasileiros. A extensão processa arquivos Excel (.xlsx/.xls) e preenche automaticamente os formulários de cadastro, eliminando o trabalho manual repetitivo.

## 🎯 Funcionalidades

- ✅ **Upload seguro de arquivos Excel** (.xlsx/.xls)
- ✅ **Preenchimento automático** de formulários
- ✅ **Suporte a múltiplos sites MTR** oficiais
- ✅ **Validação de dados** em tempo real
- ✅ **Interface intuitiva** com drag & drop
- ✅ **Processamento em lote** de usuários
- ✅ **Tratamento de erros** robusto

## 🌐 Sites Suportados

| Órgão | Estado | URL |
|-------|--------|-----|
| **CETESB** | São Paulo | mtr.cetesb.sp.gov.br |
| **FEPAM** | Rio Grande do Sul | mtr.fepam.rs.gov.br |
| **IMA** | Santa Catarina | mtr.ima.sc.gov.br |
| **SINIR** | Nacional | mtr.sinir.gov.br |
| **INEA** | Rio de Janeiro | mtr.inea.rj.gov.br |
| **FEAM** | Minas Gerais | mtr.meioambiente.mg.gov.br |
| **IEMA** | Espírito Santo | mtr.iema.es.gov.br |

## 🚀 Instalação

### Desenvolvimento Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/gabriel/mtr-autofill-extension.git
   cd mtr-autofill-extension
   ```

2. **Abra o Chrome e acesse:**
   ```
   chrome://extensions/
   ```

3. **Ative o "Modo do desenvolvedor"** (canto superior direito)

4. **Clique em "Carregar sem compactação"** e selecione a pasta `src/`

5. **A extensão aparecerá na barra de ferramentas** 🧩

### Chrome Web Store

🔜 Em breve disponível na Chrome Web Store

## 📖 Como Usar

### 1. Prepare sua planilha Excel

Crie uma planilha com as seguintes colunas:

| cpf | name | cargo | email | senha (opcional) |
|-----|------|-------|-------|------------------|
| 12345678901 | João Silva | Desenvolvedor | joao@email.com | 123456 |
| 98765432109 | Maria Santos | Analista | maria@email.com | 123456 |

### 2. Acesse um site MTR

Navegue até um dos [sites suportados](#-sites-suportados) e faça login.

### 3. Use a extensão

1. **Clique no ícone da extensão** na barra de ferramentas
2. **Arraste ou selecione** seu arquivo Excel
3. **Clique em "Processar & Clicar no Botão"**
4. **Aguarde** o preenchimento automático dos formulários

### 4. Monitore o progresso

A extensão processará cada linha da planilha automaticamente:
- ✅ Preenchimento dos campos
- ✅ Submissão do formulário
- ✅ Fechamento de popups de sucesso
- ✅ Abertura do próximo formulário

## 🔧 Especificações Técnicas

### Estrutura do Projeto

```
mtr-autofill-extension/
├── src/
│   ├── manifest.json      # Configuração da extensão
│   ├── popup.html         # Interface do usuário
│   ├── popup.js           # Lógica da interface
│   ├── content.js         # Script de automação
│   ├── background.js      # Service worker
│   └── xlsx.js            # Biblioteca de processamento Excel
├── docs/
│   └── setup-guide.md     # Guia de configuração
├── README.md              # Este arquivo
└── SECURITY.md            # Documentação de segurança
```

### Permissões

```json
{
  "permissions": [
    "activeTab",    // Acesso à aba ativa apenas
    "storage"       // Armazenamento local apenas
  ]
}
```

### Validações de Segurança

- 🔒 **Validação de tipos de arquivo** (.xlsx/.xls apenas)
- 🔒 **Limite de tamanho** (máximo 10MB)
- 🔒 **Checksums de integridade**
- 🔒 **Timeout de segurança** (30 segundos)
- 🔒 **Sanitização de dados** de entrada
- 🔒 **Validação de formulários** (CPF, email, etc.)

## 🛡️ Segurança

Esta extensão foi desenvolvida com foco em segurança:

- ✅ **Código aberto** - totalmente auditável
- ✅ **Permissões mínimas** - apenas o necessário
- ✅ **Domínios restritos** - funciona apenas em sites MTR oficiais
- ✅ **Sem comunicação externa** - não envia dados para servidores
- ✅ **Validações rigorosas** - múltiplas camadas de verificação

📖 **Leia nossa [documentação completa de segurança](./SECURITY.md)**

## 🔄 Formato dos Dados

### Campos Obrigatórios

| Campo | Tipo | Exemplo | Descrição |
|-------|------|---------|-----------|
| `cpf` | String | "12345678901" | CPF sem formatação |
| `name` | String | "João Silva" | Nome completo |
| `cargo` | String | "Desenvolvedor" | Cargo/função |
| `email` | String | "joao@email.com" | Email válido |

### Campos Opcionais

| Campo | Tipo | Padrão | Descrição |
|-------|------|--------|-----------|
| `senha` | String | "123456" | Senha (gerada automaticamente se não informada) |

## 🐛 Resolução de Problemas

### Problemas Comuns

1. **"Botão Adicionar Usuário não encontrado"**
   - Verifique se está na página correta do sistema MTR
   - Certifique-se de estar logado no sistema

2. **"Arquivo Excel inválido"**
   - Verifique se o arquivo está no formato .xlsx ou .xls
   - Confirme se as colunas estão nomeadas corretamente

3. **"Campos não preenchidos"**
   - Aguarde a página carregar completamente
   - Verifique se os dados no Excel estão corretos

### Logs de Debug

Abra o **DevTools** (F12) e verifique o console para mensagens detalhadas.

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Diretrizes

- ✅ Mantenha o código limpo e documentado
- ✅ Adicione testes para novas funcionalidades
- ✅ Siga as convenções de código existentes
- ✅ Atualize a documentação quando necessário

## 📝 Changelog

### v1.0.0 (2025-09-27)

- 🎉 **Lançamento inicial**
- ✅ Suporte a 7 sites MTR brasileiros
- ✅ Upload e processamento de Excel
- ✅ Automação completa de formulários
- ✅ Validações de segurança robustas
- ✅ Interface intuitiva com drag & drop

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Gabriel**
- GitHub: [@gabriel](https://github.com/gabriel)
- Email: gabriel@email.com

## 🙏 Agradecimentos

- Biblioteca [SheetJS](https://sheetjs.com/) para processamento de Excel
- Comunidade brasileira de desenvolvedores
- Órgãos ambientais brasileiros pelos sistemas MTR

---

<div align="center">

**🌱 Desenvolvido com ❤️ para simplificar processos ambientais no Brasil**

[⭐ Star este projeto](https://github.com/gabriel/mtr-autofill-extension) | [🐛 Reportar Bug](https://github.com/gabriel/mtr-autofill-extension/issues) | [💡 Solicitar Feature](https://github.com/gabriel/mtr-autofill-extension/issues)

</div>