const express = require('express'); /* Acesso ao express no package.json */
const cors = require('cors'); /* Sistema de segurança que define quem pode acessar a aplicação */
const routes = require('./routes'); /* Importando o arquivo de rotas. o './' serve para referenciar a mesma pasta e indicar que rotas não é um pacote e sim um arquivo */

const app = express(); /* criando variavel que vai armazenar a aplicação */

app.use(cors()); /* Em produção colocar o caminho que pode acessar app.use(cors({ origin: 'http://meusite.com' })); */

app.use(express.json()); /* Para que sera reconhecido o formato Json na aplicação */

app.use(routes); /* sempre abaixo do "app.use(express.json());" */

/** 
 * Criando a rotas 
 * Rota / Recurso
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" geralmente usados para (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, Cassandra, Amazon DynamoDB
   */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users).select('*').where()
   */
/*
app.post('/users', (request, response) =>{
    /* Acessar Query Params - get ('/users?nome=Leandro?idade=34) */
    //const parametros = request.query;

    /* Acessar Route Params - get ('/users/:id') */
    //const parametros = request.params;

    /* Acessar Request Body - post ('/users') - tem que passar um jason*/
    /*
    const parametros = request.body;

    console.log(parametros);

    //return response.send('Hello World');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Leandro Rafael'
    });
});
*/
app.listen(3333); /* Tendo acesso a porta 3333 para navegação no browser */

