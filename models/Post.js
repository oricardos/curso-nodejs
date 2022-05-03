const db = require('./db');
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

const Post = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.TEXT,
    }
});

module.exports = Post;

// Post.sync({force: true}) essa linha deve ser executada apenas na criação,
// sempre comentar ou excluir
