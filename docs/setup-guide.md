# Guia de Configuração - MTR AutoFill Extension

## 📋 Pré-requisitos

### Navegador
- **Google Chrome** versão 88+ ou superior
- **Microsoft Edge** (baseado em Chromium) versão 88+ ou superior

### Sistema Operacional
- ✅ Windows 10/11
- ✅ macOS 10.14+
- ✅ Linux Ubuntu 18.04+

### Permissões Necessárias
- Acesso aos sites MTR (lista completa no README)
- Permissão para instalar extensões no navegador

## 🚀 Instalação Detalhada

### Método 1: Desenvolvimento Local (Recomendado para testes)

#### Passo 1: Download do Código
```bash
# Opção A: Git
git clone https://github.com/gabriel/mtr-autofill-extension.git
cd mtr-autofill-extension

# Opção B: Download ZIP
# Baixe o ZIP do GitHub e extraia para uma pasta
```

#### Passo 2: Configuração no Chrome

1. **Abra o Google Chrome**

2. **Acesse a página de extensões:**
   - Digite na barra de endereços: `chrome://extensions/`
   - Ou vá em Menu (⋮) → Mais ferramentas → Extensões

3. **Ative o Modo Desenvolvedor:**
   - No canto superior direito, ative a opção "Modo do desenvolvedor"

4. **Carregue a extensão:**
   - Clique em "Carregar sem compactação"
   - Navegue até a pasta `src/` do projeto
   - Selecione a pasta e clique em "Abrir"

5. **Verifique a instalação:**
   - A extensão deve aparecer na lista com um ícone 🧩
   - Verifique se está habilitada (toggle azul)

#### Passo 3: Fixar na Barra de Ferramentas

1. **Clique no ícone de extensões** na barra do Chrome (🧩)
2. **Encontre "MTR Auto Fill"** na lista
3. **Clique no ícone de "pin"** 📌 para fixar na barra

### Método 2: Chrome Web Store (Futuro)

🔜 **Em breve:** A extensão será disponibilizada na Chrome Web Store para instalação com um clique.

## 📊 Configuração da Planilha Excel

### Estrutura Obrigatória

Sua planilha deve ter **exatamente** estas colunas (case-sensitive):

| Coluna | Tipo | Obrigatório | Exemplo | Observações |
|--------|------|-------------|---------|-------------|
| `cpf` | Texto | ✅ Sim | "12345678901" | Apenas números, 11 dígitos |
| `name` | Texto | ✅ Sim | "João Silva" | Nome completo |
| `cargo` | Texto | ✅ Sim | "Desenvolvedor" | Cargo/função |
| `email` | Texto | ✅ Sim | "joao@email.com" | Email válido |
| `senha` | Texto | ❌ Não | "123456" | Se vazio, usa "123456" |

### Exemplo de Planilha Válida

```
| cpf         | name           | cargo        | email              | senha  |
|-------------|----------------|--------------|--------------------|--------|
| 12345678901 | João Silva     | Desenvolvedor| joao@email.com     | 123456 |
| 98765432109 | Maria Santos   | Analista     | maria@email.com    | abc123 |
| 11122233344 | Pedro Costa    | Gerente      | pedro@email.com    |        |
```

### Validações Automáticas

A extensão validará automaticamente:

- **CPF:** Deve ter exatamente 11 dígitos numéricos
- **Email:** Formato válido (contém @ e domínio)
- **Campos obrigatórios:** Não podem estar vazios
- **Tamanho do arquivo:** Máximo 10MB

## 🌐 Configuração por Site

### Sites com Interface Angular (CETESB, SINIR)

**Características:**
- Formulários modernos com Material Design
- Campos com `formcontrolname`
- Botões com `mat-raised-button`

**Configuração especial:** Nenhuma configuração adicional necessária.

### Sites com Interface Clássica (FEPAM, IMA, INEA, FEAM, IEMA)

**Características:**
- Formulários HTML tradicionais
- Popups de sucesso com jQuery UI
- Recarregamento de página após submissão

**Configuração especial:** A extensão gerencia automaticamente os popups e recarregamentos.

## 🔧 Solução de Problemas

### Problema: "Extensão não aparece na barra"

**Soluções:**
1. Verifique se o "Modo desenvolvedor" está ativado
2. Recarregue a extensão em `chrome://extensions/`
3. Certifique-se de que selecionou a pasta `src/` correta

### Problema: "Botão Adicionar Usuário não encontrado"

**Verificações:**
1. **Site correto:** Confirme que está em um dos sites MTR suportados
2. **Login realizado:** Faça login no sistema antes de usar a extensão
3. **Página correta:** Navegue até a página de gerenciamento de usuários
4. **Carregamento completo:** Aguarde a página carregar completamente

### Problema: "Arquivo Excel não aceito"

**Verificações:**
1. **Formato:** Use apenas .xlsx ou .xls
2. **Tamanho:** Máximo 10MB
3. **Colunas:** Verifique os nomes das colunas (case-sensitive)
4. **Dados:** Certifique-se de que os dados obrigatórios estão preenchidos

### Problema: "Campos não preenchidos corretamente"

**Soluções:**
1. **Aguarde:** Deixe a página carregar completamente antes de iniciar
2. **Dados válidos:** Verifique CPF (11 dígitos) e email (formato válido)
3. **Velocidade:** A extensão tem delays intencionais para estabilidade

### Problema: "Processo interrompido"

**Verificações:**
1. **Conexão:** Mantenha conexão estável com a internet
2. **Navegador:** Não feche ou mude de aba durante o processo
3. **Sistema:** Evite usar o sistema MTR manualmente durante a automação

## 🔍 Debug e Logs

### Habilitando Logs Detalhados

1. **Abra DevTools:** Pressione F12 no site MTR
2. **Vá para Console:** Clique na aba "Console"
3. **Execute a extensão:** Os logs aparecerão em tempo real

### Logs Importantes

```javascript
// Logs de sucesso
✅ Extension loaded - Site: cetesb
✅ Arquivo processado e botão clicado com sucesso
✅ Preenchendo registro 1/5: João Silva

// Logs de erro
❌ Botão Adicionar Usuário não encontrado
❌ Campo name NÃO encontrado!
❌ Dados inválidos no registro 3
```

## 📱 Diferentes Navegadores

### Google Chrome
- ✅ **Totalmente suportado** - Testado e otimizado
- Siga o guia padrão acima

### Microsoft Edge (Chromium)
- ✅ **Compatível** - Mesma base do Chrome
- Use as mesmas instruções, substituindo por `edge://extensions/`

### Firefox
- ❌ **Não suportado** - Usa Manifest V2
- Considere usar Chrome ou Edge para esta extensão

### Safari
- ❌ **Não suportado** - API diferente
- Use Chrome ou Edge

## 🔒 Configurações de Segurança

### Antivírus Corporativo

Se sua empresa usa antivírus que bloqueia a extensão:

1. **Mostre a documentação:** Compartilhe o arquivo `SECURITY.md`
2. **Solicite whitelist:** Peça para adicionar à lista de aplicações confiáveis
3. **Teste em sandbox:** Sugira teste em ambiente isolado primeiro

### Políticas de Empresa

Para ambientes corporativos restritivos:

1. **IT Review:** Compartilhe o código fonte completo para auditoria
2. **Permissões mínimas:** Destaque que usa apenas `activeTab` e `storage`
3. **Sem dados externos:** Enfatize que não envia dados para servidores

## 📞 Suporte

### Problemas Técnicos
- **GitHub Issues:** [Reportar problema](https://github.com/gabriel/mtr-autofill-extension/issues)
- **Email:** gabriel@email.com

### Dúvidas de Uso
- **Documentação:** Consulte este guia e o README.md
- **Exemplos:** Veja os arquivos de exemplo na pasta `docs/`

### Solicitações de Novas Funcionalidades
- **GitHub:** [Solicitar feature](https://github.com/gabriel/mtr-autofill-extension/issues)
- **Discussões:** Use as GitHub Discussions para ideias

---

**💡 Dica:** Mantenha sempre uma cópia de backup dos seus dados Excel antes de usar a automação.