# Pasta de Logos dos Clientes

## 📁 Onde colocar as imagens

Coloque todas as logos dos clientes nesta pasta (`public/logos-clientes/`).

## 📝 Formato das imagens

- **Formatos aceitos:** PNG ou JPEG
- **Tamanho recomendado:** 200x200px a 400x400px
- **Nomes dos arquivos:** Use nomes sem espaços e sem caracteres especiais
  - ✅ BOM: `empresa-abc.png`, `cliente-xyz.jpg`
  - ❌ EVITE: `empresa abc.png`, `cliente@xyz.png`

## 🔗 Como usar no código

No arquivo `src/app/clientes/page.tsx`, você encontrará um array com 54 modelos prontos.

**Exemplo:**
```typescript
{ id: 1, nome: "Empresa ABC", logo: "/logos-clientes/empresa-abc.png", categoria: "Comércio" },
```

**Substitua:**
- `id`: número único (1, 2, 3, ... até 54)
- `nome`: nome da empresa
- `logo`: caminho da imagem (ex: `/logos-clientes/empresa-abc.png`)
- `categoria`: "Comércio", "Indústria", "Moda" ou "Serviços"

## 📊 Distribuição sugerida (54 clientes)

- **Comércio:** 14 clientes (IDs 1-14)
- **Indústria:** 14 clientes (IDs 15-28)
- **Moda:** 12 clientes (IDs 29-40)
- **Serviços:** 14 clientes (IDs 41-54)

## ✅ Checklist

- [ ] Coloquei todas as imagens nesta pasta
- [ ] Usei nomes sem espaços nos arquivos
- [ ] Atualizei o array `clientes` no arquivo `src/app/clientes/page.tsx`
- [ ] Verifiquei que os caminhos das imagens estão corretos
- [ ] Testei localmente antes de fazer deploy
