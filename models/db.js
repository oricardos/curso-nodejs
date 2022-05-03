const Sequelize = require('sequelize');
//CONEXAO COM O BANCO DE DADOS MYSQL
    // 1º PARAM QUAL BANCO QUER CONECTAR
    // 2º PARAM USUARIO DO BANCO
    // 3º PARAM SENHA
    // 4º UM OBJETO JSON
    const sequelize = new Sequelize('postapp', 'root', '12345678', {
        host: 'localhost',
        dialect: 'mysql',
        query:{raw:true} //essa linha fez as postagens aparecerem no front
    });

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize,
    }
