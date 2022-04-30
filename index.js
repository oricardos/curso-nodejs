// modo normal de criar um servidor com nodejs
// const http = require('http');
// http.createServer().listen(8081);

const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

// CONFIG
    //HANDLEBARS
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //CONEXAO COM O BANCO DE DADOS MYSQL
    const Sequelize = require('sequelize');
    // 1º PARAM QUAL BANCO QUER CONECTAR
    // 2º PARAM USUARIO DO BANCO
    // 3º PARAM SENHA
    // 4º UM OBJETO JSON
    const sequelize = new Sequelize('test', 'root', '12345678', {
        host: 'localhost',
        dialect: 'mysql'
    })

// modo de criar um servidor com express
app.listen(8081, () => console.log('Server On')) //deve vir por último / localhost:8081
