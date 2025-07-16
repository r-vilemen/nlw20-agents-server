# NLW20 - Agents Server

## 🚀 Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extensão PostgreSQL para vetores
- **Zod** - Validação de schemas e tipos

### Ferramentas de Desenvolvimento

- **Biome** - Linter e formatter (substitui ESLint + Prettier)
- **Ultracite** - Configuração de linting otimizada
- **Docker Compose** - Containerização do banco de dados

## 📁 Estrutura do Projeto

```
server/
├── src/
│   ├── db/
│   │   ├── connection.ts      # Conexão com banco de dados
│   │   ├── migrations/        # Migrações do Drizzle
│   │   ├── schema/           # Schemas das tabelas
│   │   └── seed.ts           # Dados iniciais
│   ├── http/
│   │   └── routes/           # Rotas da API
│   ├── env.ts               # Configuração de variáveis de ambiente
│   └── server.ts            # Servidor Fastify
├── docker/
│   └── setup.sql            # Script de inicialização do banco
├── drizzle.config.ts        # Configuração do Drizzle
├── docker-compose.yml       # Configuração do Docker
└── biome.jsonc             # Configuração do Biome
```

## 🛠️ Padrões de Projeto

### Arquitetura

- **Clean Architecture** - Separação clara entre camadas
- **Repository Pattern** - Abstração do acesso a dados
- **Dependency Injection** - Injeção de dependências via Fastify plugins

### Validação e Tipagem

- **Zod Schemas** - Validação de entrada e saída
- **TypeScript** - Tipagem estática em todo o projeto
- **Fastify Type Provider** - Integração de tipos com Fastify

### Banco de Dados

- **Drizzle ORM** - ORM type-safe com TypeScript
- **Migrations** - Controle de versão do banco
- **Snake Case** - Convenção de nomenclatura para colunas

## ⚙️ Configuração e Setup

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

### 1. Clone o repositório

```bash
git clone <repository-url>
cd server
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

### 4. Inicie o banco de dados

```bash
docker-compose up -d
```

### 5. Execute as migrações (se necessário)

```bash
npx drizzle-kit migrate
```

### 6. Execute o seed (opcional)

```bash
npm run db:seed
```

### 7. Inicie o servidor

**Desenvolvimento:**

```bash
npm run dev
```

**Produção:**

```bash
npm start
```

O servidor estará disponível em `http://localhost:3333`

## 📋 Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor em modo desenvolvimento com hot reload
- `npm run db:seed` - Executa o seed do banco de dados

## 🔗 Endpoints da API

### Health Check

- `GET /health` - Verifica se o servidor está funcionando

### Rooms

- `GET /rooms` - Lista todas as salas disponíveis

## 🐳 Docker

O projeto utiliza Docker para o banco de dados PostgreSQL com a extensão pgvector:

```yaml
services:
  nlw-agentes-pg:
    image: pgvector/pgvector:pg17
    environment:
      POSTGRES_USER: docker
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: agents
    ports:
      - "5432:5432"
```

## 🔧 Configurações

### Biome (Linting e Formatação)

O projeto utiliza Biome para linting e formatação, configurado com o preset Ultracite para máxima performance.

### TypeScript

Configurado para ES2022 com módulos ESM e strict mode habilitado.

### Drizzle ORM

- Dialect: PostgreSQL
- Casing: snake_case
- Migrations: Automáticas via drizzle-kit

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

---

\*Este projeto foi Desenvolvido e baseado no NLW20 - Agents da Rocketseat
