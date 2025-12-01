# Guia de Deploy - GitHub + Vercel

Este guia vai te ajudar a colocar o site no ar para que outras pessoas possam acessar.

## 📋 Pré-requisitos

1. Conta no GitHub (se não tiver, crie em: https://github.com)
2. Conta no Vercel (se não tiver, crie em: https://vercel.com)

## 🚀 Passo a Passo

### 1. Criar Repositório no GitHub

1. Acesse https://github.com e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `site-qs-consultoria` (ou o nome que preferir)
   - **Description**: "Site institucional QS Consultoria"
   - **Visibility**: Escolha **Public** ou **Private**
   - **NÃO marque** "Initialize with README" (já temos um)
5. Clique em **"Create repository"**

### 2. Conectar Repositório Local ao GitHub

Após criar o repositório, o GitHub vai mostrar uma página com instruções. Use estes comandos:

```bash
cd "/Users/roberta/Documents/trae_projects/Site QS/site-qs"

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/site-qs-consultoria.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer push do código
git push -u origin main
```

**Nota**: Você precisará fazer login no GitHub quando executar o `git push`. Se pedir credenciais:
- Use um **Personal Access Token** (não sua senha)
- Para criar um token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

### 3. Deploy no Vercel

#### Opção A: Via Interface Web (Mais Fácil)

1. Acesse https://vercel.com e faça login (pode usar sua conta do GitHub)
2. Clique em **"Add New..."** → **"Project"**
3. Importe o repositório que você acabou de criar
4. O Vercel vai detectar automaticamente que é um projeto Next.js
5. Clique em **"Deploy"**
6. Aguarde alguns minutos para o build
7. Pronto! Você receberá um link como: `https://site-qs-consultoria.vercel.app`

#### Opção B: Via CLI (Avançado)

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login
vercel login

# Deploy (na pasta do projeto)
cd "/Users/roberta/Documents/trae_projects/Site QS/site-qs"
vercel

# Para produção
vercel --prod
```

### 4. Configurar Deploy Automático

Após o primeiro deploy, o Vercel vai:
- ✅ Fazer deploy automático a cada push na branch `main`
- ✅ Criar previews para outras branches
- ✅ Atualizar o site automaticamente quando você fizer mudanças

## 🔗 Compartilhar o Link

Após o deploy, você receberá um link como:
- `https://site-qs-consultoria.vercel.app`

Você pode:
- Compartilhar este link com qualquer pessoa
- Personalizar o domínio (opcional, no Vercel)
- O site estará sempre atualizado quando você fizer push no GitHub

## 🔄 Atualizar o Site

Sempre que quiser atualizar o site:

```bash
cd "/Users/roberta/Documents/trae_projects/Site QS/site-qs"

# Fazer suas alterações...

# Commit
git add .
git commit -m "Descrição das mudanças"

# Push (o Vercel faz deploy automático)
git push origin main
```

## ❓ Problemas Comuns

### Erro de autenticação no GitHub
- Use Personal Access Token ao invés de senha
- Crie um token em: GitHub → Settings → Developer settings → Personal access tokens

### Build falha no Vercel
- Verifique os logs no Vercel
- Certifique-se que `npm run build` funciona localmente
- Verifique se todas as dependências estão no `package.json`

### Site não atualiza
- Verifique se fez push para a branch `main`
- Verifique os logs de deploy no Vercel

## 📞 Suporte

- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com

