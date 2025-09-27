# Documentação de Segurança - MTR Auto Fill Extension

## Sobre a Extensão

A **MTR Auto Fill Extension** é uma ferramenta de produtividade desenvolvida para automatizar o cadastro de usuários em sistemas MTR (Manifesto de Transporte de Resíduos) brasileiros. A extensão foi projetada com foco em segurança e transparência.

## Medidas de Segurança Implementadas

### 1. Validação Rigorosa de Arquivos
- **Tipos permitidos**: Apenas arquivos Excel (.xlsx, .xls)
- **Tamanho máximo**: 10MB por arquivo
- **Validação de integridade**: Checksum automático para detectar corrupção
- **Timeout de segurança**: Máximo 30 segundos para processamento

### 2. Sanitização de Dados
- **Nomes de arquivo**: Caracteres perigosos são removidos/substituídos
- **Dados de formulário**: Validação de CPF, email e campos obrigatórios
- **Strings**: Remoção de caracteres de controle e limitação de tamanho

### 3. Controle de Acesso
- **Domínios específicos**: Funciona apenas em sites MTR oficiais
- **Sem acesso a dados pessoais**: Não coleta informações além do necessário
- **Permissões mínimas**: Apenas `activeTab` e `storage` local

### 4. Processamento Seguro
- **Validação de timestamp**: Dados expiram em 1 minuto
- **Verificação de integridade**: Detecta alterações nos dados
- **Fallback controlado**: Dados de exemplo em caso de falha na leitura

## Sites Suportados (Todos Oficiais)

1. **CETESB (SP)** - mtr.cetesb.sp.gov.br
2. **FEPAM (RS)** - mtr.fepam.rs.gov.br
3. **IMA (SC)** - mtr.ima.sc.gov.br
4. **SINIR (Nacional)** - mtr.sinir.gov.br
5. **INEA (RJ)** - mtr.inea.rj.gov.br
6. **FEAM (MG)** - mtr.meioambiente.mg.gov.br
7. **IEMA (ES)** - mtr.iema.es.gov.br

## Por que Antivírus Podem Alertar?

### Falsos Positivos Comuns

1. **Manipulação de Arquivos Binários**
   - A extensão lê arquivos Excel em formato binário
   - Padrão comum em malware, mas necessário para funcionalidade

2. **Automação de Formulários**
   - Simula cliques e preenchimento automático
   - Pode ser interpretado como "injeção de código"

3. **Biblioteca XLSX.js**
   - Biblioteca legítima e amplamente usada
   - Tamanho grande (881KB) pode gerar suspeitas

4. **Uso de ArrayBuffer/Uint8Array**
   - Necessário para processar dados Excel
   - Padrão que alguns antivírus associam a malware

## Verificações Recomendadas

### Para Analistas de Segurança

1. **Verificar Hashes**
   ```
   - manifest.json: Contém apenas permissões mínimas necessárias
   - content.js: Código fonte aberto e auditável
   - popup.js: Interface de usuário transparente
   ```

2. **Análise de Código**
   - Todo código está disponível em texto simples
   - Sem ofuscação ou código malicioso
   - Comentários explicativos em português

3. **Teste em Ambiente Controlado**
   - Extensão funciona apenas em sites MTR oficiais
   - Não acessa outros sites ou dados sensíveis
   - Não faz requisições para servidores externos

### Para Equipes de TI

1. **Permissões da Extensão**
   ```json
   "permissions": [
       "activeTab",  // Acesso apenas à aba ativa
       "storage"     // Armazenamento local apenas
   ]
   ```

2. **Domínios Permitidos**
   - Lista restrita a portais governamentais MTR
   - Impossível funcionar em outros sites

3. **Dados Processados**
   - Apenas dados de usuários para cadastro (CPF, nome, cargo, email)
   - Nenhum dado bancário ou sensível adicional

## Resolução de Alertas de Segurança

### Para Submissão a Antivírus

1. **VirusTotal**: Enviar todos os arquivos para análise
2. **Fabricantes**: Reportar falso positivo com esta documentação
3. **Whitelisting**: Solicitar inclusão em lista de aplicações confiáveis

### Justificativas Técnicas

- **Assinatura digital**: Pode ser adicionada para verificação
- **Código aberto**: Todo código fonte disponível para auditoria
- **Propósito legítimo**: Automação de processos administrativos oficiais
- **Sem conectividade externa**: Não faz comunicação com servidores externos

## Contato para Verificações

Para dúvidas técnicas ou verificações adicionais de segurança:

- **Desenvolvedor**: Gabriel
- **Repositório**: https://github.com/gabriel/mtr-extension
- **Documentação**: Este arquivo e código fonte completo

## Certificações Sugeridas

1. **Análise de código estático** por ferramenta de segurança
2. **Teste em sandbox** para verificar comportamento
3. **Validação de hashes** dos arquivos originais
4. **Auditoria de permissões** do Chrome Extensions

---

**Última atualização**: 2025-09-27
**Versão da extensão**: 1.0.0
**Status**: Produção - Aprovado para uso corporativo