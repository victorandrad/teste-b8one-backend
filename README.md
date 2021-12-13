# Passos para executar a api de Pokemon

Passo a passo para configurar e rodar o projeto:

1. Rode o comando `yarn` ou `npm i` para instalar as dependências do projeto

2. Renomeie ou copie o arquivo `.env.example` para `.env`

3. Configure seus dados de conexão do Mysql no arquivo `.env`

4. Rode o comando `yarn migrate` ou `npm run migrate` para criar a tabela de Pokemon

5. Rode o comando `yarn seed` ou `npm run seed` para inserir um registro na tabela

6. Rode o comando `yarn dev` ou `npm run dev` para executar a api no endereço `http://localhost:3000`

7. O endpoint principal para testar a api é `http://localhost:3000/pokemon` e `http://localhost:3000/pokemon/:id`

8. Os métodos disponíveis do projeto são: `GET` para vizualizar com ou sem o parametro de ID, `PUT` para atualizar algum registro com o parametro de ID e body, `DELETE` para deletar um registro com o parametro de ID, `POST` para inserir um novo registro

9. No arquivo .http tem as requisições para testar, você pode instalar a extensão `REST Client` no VSCode para testar sem precisar de outro software

# Caso alguma coisa pegar fogo no banco de dados

### Rode o comando `yarn migrate:rollback` ou `npm run migrate:rollback` para deletar a tabela de Pokemon

### ou

### Rode o comando `yarn typeorm schema:drop` ou `npm run typeorm schema:drop` para deletar todas as tabelas do banco