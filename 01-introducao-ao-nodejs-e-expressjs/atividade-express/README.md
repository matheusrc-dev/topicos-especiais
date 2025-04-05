# Respostas sobre a API Express.js

## 1. O que faz `const app = express();`?


- Cria uma nova instância da aplicação Express
- Inicializa o objeto `app` que será usado para configurar e gerenciar todas as rotas e middlewares da aplicação
- É o ponto de entrada para começar a definir as rotas e comportamentos da API

Este objeto `app` é essencial pois é através dele que:
- Definimos as rotas (GET, POST, PUT, DELETE)
- Configuramos middlewares
- Iniciamos o servidor com `app.listen()`

## 2. Para que serve `app.use(express.json());`?

- Faz com que a API processe dados no formato JSON que chegam no corpo das requisições
- Converte automaticamente o corpo da requisição (body) de JSON para um objeto JavaScript
- É necessário para acessar os dados enviados em requisições POST e PUT através de `req.body`

Sem este middleware, não seria possível acessar os dados JSON enviados no corpo das requisições, o que impediria a criação e atualização de usuários.

## 3. Como você lê um parâmetro de rota, como o `id` em `/usuarios/:id`?


- Define o parâmetro na URL usando `:nomeDoParametro`
- Acessa o valor através de `req.params.nomeDoParametro`

Exemplo prático:
```javascript
app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);  // Captura o valor do parâmetro id
    // ... resto do código
});
```

Neste exemplo, se a requisição for feita para `/usuarios/1`, o valor de `req.params.id` será "1".

## 4. Códigos de status HTTP retornados pela API

### GET (requisição bem-sucedida)
- **Status 200 (OK)**
  - Indica que a requisição foi bem-sucedida
  - Retorna a lista de usuários

### POST (criação de recurso)
- **Status 201 (Created)**
  - Indica que um novo recurso foi criado com sucesso
  - Retorna o usuário recém-criado
- **Status 400 (Bad Request)**
  - Retornado quando faltam dados obrigatórios (nome ou email)

### PUT (atualização)
- **Status 200 (OK)**
  - Indica que a atualização foi bem-sucedida
  - Retorna o usuário atualizado
- **Status 400 (Bad Request)**
  - Retornado quando faltam dados obrigatórios
- **Status 404 (Not Found)**
  - Retornado quando o usuário não é encontrado

### DELETE (remoção)
- **Status 204 (No Content)**
  - Indica que a remoção foi bem-sucedida
  - Não retorna conteúdo
- **Status 404 (Not Found)**
  - Retornado quando o usuário não é encontrado

## 5. Visão geral das rotas da API

A API implementa um CRUD completo (Create, Read, Update, Delete) para usuários:

### GET /usuarios
- Retorna a lista completa de usuários
- Não requer parâmetros
- Retorna status 200 com a lista

### POST /usuarios
- Cria um novo usuário
- Requer dados no corpo da requisição (nome e email)
- Retorna status 201 com o usuário criado

### PUT /usuarios/:id
- Atualiza um usuário existente
- Requer ID na URL e dados no corpo da requisição
- Retorna status 200 com o usuário atualizado

### DELETE /usuarios/:id
- Remove um usuário existente
- Requer ID na URL
- Retorna status 204 em caso de sucesso

