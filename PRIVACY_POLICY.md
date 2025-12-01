# Política de Privacidade - MTR Auto Fill Extension

**Última atualização**: 1 de dezembro de 2025

## 1. Introdução

A extensão **MTR Auto Fill - Cadastro Automático** ("nós", "nossa" ou "extensão") respeita sua privacidade e está comprometida em proteger seus dados pessoais.

Esta Política de Privacidade explica como a extensão coleta, usa e protege suas informações.

## 2. Informações que Coletamos

### 2.1 Dados Processados Localmente

A extensão processa as seguintes informações **exclusivamente no seu navegador**:

- Dados de planilhas Excel (.xlsx/.xls) que você carrega voluntariamente
- Informações de usuários contidas nas planilhas (CPF, nome, cargo, email, senha)
- Dados temporários armazenados no localStorage do navegador durante o processamento

### 2.2 Dados NÃO Coletados

**A extensão NÃO coleta, armazena, transmite ou compartilha**:

- Nenhum dado pessoal com servidores externos
- Histórico de navegação
- Informações de outros sites
- Dados de formulários de outros sites
- Informações de identificação do usuário
- Métricas de uso ou analytics
- Cookies ou rastreadores

## 3. Como Usamos Suas Informações

Os dados das planilhas Excel são usados **exclusivamente** para:

1. Preencher automaticamente formulários nos sites MTR especificados
2. Validar a integridade e formato dos dados antes do preenchimento
3. Armazenar temporariamente os dados durante o processamento em lote

**Todo o processamento ocorre localmente no seu navegador**. Nenhum dado sai do seu dispositivo.

## 4. Armazenamento de Dados

### 4.1 Armazenamento Local

A extensão usa o `chrome.storage.local` para:

- Armazenar temporariamente dados do Excel durante o processamento
- Salvar configurações de preferências do usuário (se aplicável)

### 4.2 Retenção de Dados

- Os dados são armazenados **apenas durante a sessão de uso**
- Dados temporários são automaticamente limpos após o processamento
- Você pode limpar manualmente todos os dados removendo a extensão

### 4.3 Segurança

- Todos os dados permanecem no seu dispositivo
- Não há transmissão de dados para servidores externos
- A extensão funciona offline após carregamento inicial

## 5. Permissões da Extensão

A extensão solicita as seguintes permissões:

### 5.1 `activeTab`
**Por que precisamos**: Para acessar e preencher automaticamente os campos dos formulários na aba ativa dos sites MTR.

**O que fazemos**: Lemos e preenchemos campos de formulários apenas quando você clica no botão "Processar".

**O que NÃO fazemos**: Não acessamos outras abas, não lemos conteúdo de outros sites.

### 5.2 `storage`
**Por que precisamos**: Para armazenar temporariamente os dados processados do Excel durante a automação.

**O que fazemos**: Salvamos dados localmente no navegador apenas durante o processamento.

**O que NÃO fazemos**: Não enviamos dados para servidores, não compartilhamos com terceiros.

### 5.3 `host_permissions` (Sites MTR específicos)
**Por que precisamos**: Para executar a automação apenas nos sites MTR oficiais dos órgãos ambientais brasileiros.

**Sites autorizados**:
- mtr.cetesb.sp.gov.br
- mtr.fepam.rs.gov.br
- mtr.ima.sc.gov.br
- mtr.sinir.gov.br
- mtr.inea.rj.gov.br
- mtr.meioambiente.mg.gov.br
- mtr.iema.es.gov.br

**O que fazemos**: Executamos scripts de automação apenas nesses sites específicos.

**O que NÃO fazemos**: Não funcionamos em outros sites, não acessamos dados de outros domínios.

## 6. Compartilhamento de Dados

**Nós NÃO compartilhamos seus dados com terceiros**, porque:

- Não coletamos dados em servidores
- Não há comunicação com servidores externos
- Não usamos serviços de analytics
- Não vendemos ou alugamos informações

## 7. Código Aberto e Transparência

A extensão é **100% código aberto**:

- Todo o código-fonte está disponível no GitHub
- Qualquer pessoa pode auditar o código
- Não há código ofuscado ou oculto
- Repositório: https://github.com/gabriel/mtr-extension

## 8. Direitos do Usuário

Você tem o direito de:

- **Acessar**: Ver quais dados estão armazenados localmente (através das ferramentas de desenvolvedor do Chrome)
- **Deletar**: Remover todos os dados removendo a extensão
- **Controlar**: Decidir quando e como usar a extensão
- **Não usar**: Desinstalar a qualquer momento sem penalidades

## 9. Segurança de Dados

Implementamos medidas de segurança:

- Validação rigorosa de tipos de arquivo (apenas .xlsx/.xls)
- Limite de tamanho de arquivo (máximo 10MB)
- Sanitização de dados de entrada
- Timeout de segurança para operações
- Checksums de integridade
- Processamento isolado no navegador

## 10. Cookies e Rastreamento

**A extensão NÃO usa**:

- Cookies
- Web beacons
- Pixels de rastreamento
- Analytics ou telemetria
- Ferramentas de terceiros para rastreamento

## 11. Conformidade com Leis

Esta extensão está em conformidade com:

- **LGPD** (Lei Geral de Proteção de Dados - Brasil)
- **GDPR** (General Data Protection Regulation - EU)
- **Chrome Web Store Policies**

## 12. Uso da Extensão por Menores

A extensão não é destinada a menores de 18 anos. Não coletamos intencionalmente informações de menores.

## 13. Alterações nesta Política

Podemos atualizar esta Política de Privacidade ocasionalmente. Alterações significativas serão notificadas através de:

- Atualização da data "Última atualização" no topo deste documento
- Aviso na descrição da extensão na Chrome Web Store

## 14. Seus Consentimentos

Ao usar esta extensão, você concorda que:

- Leu e entendeu esta Política de Privacidade
- Concorda com o processamento local de dados conforme descrito
- Entende que você é responsável pelos dados que carrega na extensão

## 15. Isenção de Responsabilidade

A extensão é fornecida "como está". Não nos responsabilizamos por:

- Uso inadequado da extensão
- Dados incorretos fornecidos pelo usuário
- Problemas nos sites MTR de terceiros
- Perda de dados causada por problemas técnicos

## 16. Contato

Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:

- **GitHub Issues**: https://github.com/gabriel/mtr-extension/issues
- **Email**: gabriel@email.com

## 17. Resumo Executivo

**Em termos simples**:

- A extensão NÃO coleta seus dados
- A extensão NÃO envia dados para a internet
- Tudo funciona localmente no seu navegador
- Você tem controle total sobre seus dados
- O código é 100% aberto e auditável

---

**Versão**: 1.0.0
**Data**: 1 de dezembro de 2025
**Desenvolvedor**: Gabriel
**Licença**: MIT License
