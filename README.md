# 🎯 Aposta Web

Aplicação web desenvolvida em **React + TypeScript (Vite)** para geração de apostas da lotofacil de forma simples, rápida e responsiva.

A aplicação consome uma API REST segura desenvolvida em .NET, responsável por gerar combinações utilizando regras heurísticas.

---

## 🌐 Acesso

🔗 Frontend (Vercel):  
https://aposta-web.vercel.app/

🔗 API (Render):  
Documentação swagger apenas em DEV.

---

## 🚀 Funcionalidades

- Geração de apostas com 1 clique
- Exibição de 3 apostas simultâneas
- Interface responsiva (mobile-first)
- Integração com API segura via JWT
- Consumo de API via Axios
- Layout moderno com gradiente em tons de cinza

---

## 🧠 Como funciona

O frontend realiza:

1. Autenticação na API (`/api/v1/login`)
2. Recebimento de um token JWT
3. Requisição protegida para:
   GET /api/v1/apostas
4. Exibição dos resultados na tela

---

## 🔐 Segurança

- Autenticação via JWT
- Token enviado no header:
  Authorization: Bearer {token}
- Variáveis sensíveis protegidas via `.env` (não versionado)
- CORS configurado no backend para permitir apenas o domínio do Vercel

---

## ⚙️ Configuração local

### 1. Clone o repositório

git clone https://github.com/seu-usuario/aposta-web.git
cd aposta-web

### 2. Instale as dependências

npm install

### 3. Configure o ambiente

Crie um arquivo `.env`:

VITE_API_URL=https://sua-api.onrender.com

### 4. Execute o projeto

npm run dev

---

## 📦 Build para produção

npm run build

Preview local:

npm run preview

---

## 🛠️ Tecnologias utilizadas

- React
- TypeScript
- Vite
- Axios
- CSS (custom, responsivo)
- JWT (autenticação)
- .NET 10 (backend)
- Render (API)
- Vercel (frontend)

---

## 📡 Estrutura do projeto

src/
 ├── pages/
 │    └── Home.tsx
 ├── services/
 │    └── api.ts
 ├── types/
 │    └── aposta.ts
 └── App.tsx

---

## 🔄 Fluxo da aplicação

Usuário (Vercel)
   ↓
React App
   ↓
Axios (JWT)
   ↓
API .NET (Render)
   ↓
Geração de apostas

---

## ⚠️ Observações

- A API hospedada no Render pode entrar em modo de inatividade (cold start)
- A primeira requisição pode levar alguns segundos
- Todas as apostas possuem a mesma probabilidade matemática

---

## 📌 Melhorias futuras

- Tela de login real
- Refresh token
- Animações e UX aprimorada
- Histórico de apostas
- PWA

---

## 👨‍💻 Autor

Emmanuel Martins
