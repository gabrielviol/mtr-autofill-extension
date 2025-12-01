# Ícones da Extensão MTR Auto Fill

Esta pasta deve conter os ícones da extensão para a Chrome Web Store.

## 📋 Ícones Necessários

Você precisa criar 3 ícones PNG com os seguintes tamanhos:

- `icon16.png` - 16x16 pixels
- `icon48.png` - 48x48 pixels
- `icon128.png` - 128x128 pixels

---

## 🎨 Sugestões de Design

### Elementos Visuais

Considere incluir:

1. **Símbolo de documento/arquivo** (representando Excel)
2. **Símbolo de automação** (engrenagem, setas)
3. **Cores ambientais** (verde, azul)
4. **Letras "MTR"** (opcional, legível apenas em 128px)

### Exemplos de Conceitos:

**Opção 1: Documento + Engrenagem**
- Ícone de documento (folha)
- Pequena engrenagem no canto
- Cores: Verde #2ecc71 + Azul #3498db

**Opção 2: Folha + Seta**
- Folha (meio ambiente)
- Seta circular (automação)
- Cores: Verde #27ae60 + Cinza #7f8c8d

**Opção 3: Excel + Formulário**
- Símbolo de tabela/Excel (verde)
- Símbolo de formulário
- Cores: Verde Excel #217346 + Branco

---

## 🛠️ Ferramentas Gratuitas para Criar Ícones

### 1. Canva (Recomendado para Iniciantes)

**Link**: https://www.canva.com

**Passos**:
1. Crie uma conta gratuita
2. Clique em "Custom Size" (Tamanho Personalizado)
3. Digite 128x128 pixels
4. Procure por "document icon" ou "gear icon" no menu lateral
5. Arraste elementos para o canvas
6. Personalize cores
7. Download como PNG
8. Repita para 48x48 e 16x16

**Dica**: Crie primeiro o 128x128 e depois redimensione para os outros tamanhos.

---

### 2. Figma (Recomendado para Designers)

**Link**: https://www.figma.com

**Passos**:
1. Crie conta gratuita
2. Novo arquivo de design
3. Criar frame de 128x128
4. Use ferramentas de forma (retângulo, círculo, etc.)
5. Adicione ícones do Figma Community
6. Export as PNG
7. Criar frames menores (48x48, 16x16) e exportar

---

### 3. Favicon Generator (Mais Simples)

**Link**: https://www.favicon-generator.org/

**Passos**:
1. Faça upload de uma imagem base (pode ser logo simples)
2. O site gera automaticamente todos os tamanhos
3. Download do pacote
4. Renomeie os arquivos para icon16.png, icon48.png, icon128.png

---

### 4. GIMP (Software Desktop Gratuito)

**Link**: https://www.gimp.org/

**Passos**:
1. Baixe e instale GIMP
2. File > New > 128x128 pixels
3. Use ferramentas de desenho
4. Export as PNG
5. Redimensione (Image > Scale Image) para 48px e 16px

---

### 5. Photoshop / Illustrator (Se você tiver)

Use suas ferramentas habituais para criar os ícones nos tamanhos especificados.

---

## 📐 Especificações Técnicas

### Formato
- **Tipo**: PNG (Portable Network Graphics)
- **Transparência**: Suportada (recomendado fundo transparente)
- **Profundidade de cor**: 24-bit ou 32-bit (com alpha channel)

### Tamanhos e Usos

| Tamanho | Uso no Chrome |
|---------|---------------|
| 16x16   | Barra de extensões (quando a barra está cheia) |
| 48x48   | Página de gerenciamento de extensões |
| 128x128 | Chrome Web Store e instalação |

### Boas Práticas

1. **Mantenha simples**: Ícones pequenos (16px) precisam ser legíveis
2. **Evite muito texto**: Texto fica ilegível em 16x16
3. **Use cores contrastantes**: Para destacar em diferentes fundos
4. **Teste em diferentes fundos**: Claro e escuro
5. **Mantenha consistência**: Os 3 ícones devem ter o mesmo design

---

## 🎨 Paleta de Cores Sugerida

### Opção 1: Meio Ambiente
```
Verde Escuro: #27ae60
Verde Claro:  #2ecc71
Azul:         #3498db
Branco:       #ffffff
Cinza:        #7f8c8d
```

### Opção 2: Excel Theme
```
Verde Excel:  #217346
Verde Claro:  #00b050
Branco:       #ffffff
Cinza:        #a5a5a5
Preto:        #000000
```

### Opção 3: Profissional
```
Azul Escuro:  #2c3e50
Azul Médio:   #34495e
Verde:        #16a085
Branco:       #ecf0f1
```

---

## ✅ Checklist Após Criar os Ícones

Antes de fazer upload para a Chrome Web Store:

- [ ] Os 3 arquivos estão nesta pasta `src/icons/`
- [ ] Nomes corretos: `icon16.png`, `icon48.png`, `icon128.png`
- [ ] Formato PNG (não JPG ou outros)
- [ ] Tamanhos exatos (use verificador de propriedades de arquivo)
- [ ] Ícones são legíveis em todos os tamanhos
- [ ] Testou os ícones carregando a extensão localmente

---

## 🧪 Como Testar os Ícones

1. Coloque os ícones nesta pasta
2. Abra Chrome e vá para: `chrome://extensions/`
3. Ative "Modo do desenvolvedor"
4. Clique em "Carregar sem compactação"
5. Selecione a pasta `src/`
6. Verifique se o ícone aparece corretamente

---

## 🆘 Precisa de Ajuda?

Se você não tem experiência com design gráfico:

1. **Opção 1**: Use o Favicon Generator (mais simples)
2. **Opção 2**: Use o Canva com templates prontos
3. **Opção 3**: Peça ajuda a um designer ou amigo
4. **Opção 4**: Use ícones gratuitos de sites como:
   - https://www.flaticon.com/
   - https://icons8.com/
   - https://iconmonstr.com/

**Importante**: Certifique-se de que tem direito de usar os ícones (licença gratuita ou comercial).

---

## 📦 Após Criar os Ícones

1. Coloque os 3 arquivos PNG nesta pasta
2. Execute o script de build: `build-extension.bat`
3. O ZIP gerado incluirá automaticamente os ícones
4. Continue com o processo de publicação no Chrome Web Store

---

**Boa sorte criando seus ícones! 🎨**
