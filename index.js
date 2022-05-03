// modo normal de criar um servidor com nodejs
// const http = require('http');
// http.createServer().listen(8081);

const express = require('express');
const app = express();
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser');

const Post = require('./models/Post');

// CONFIG
    //HANDLEBARS - TEMPLATE ENGINE
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', './views');

    //BODY-PARSER
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json())

//ROTAS
    app.get('/', function(req,res){
        // PASSANDO DADOS PARA O FRONT-END (HANDLEBARS)
        Post.findAll({
            //ordenando as postagens, as mais recentes aparecem no topo
            order:[['id', 'DESC']]
        }).then(posts => {
            res.render('home', {
                posts: posts
            });
        })

    });

    app.get('/error', function(req, res){
        res.render('error');
    })

    app.get('/register', function(req, res){
        res.render('form');
    });

    app.post('/save', function(req, res){ //rota só é acessada usando método post
        // CRIANDO UMA POSTAGEM
        Post.create({
            title: req.body.title,
            content: req.body.content
        }).then(() => {
            res.redirect('/');
        }).catch((err) => {
            res.redirect('/error');
        })
    })

    //ROTA PARA DELETAR
    app.get('/delete/:id', function(req, res){
        // DELETA O POST ONDE O ID FOR IGUAL AO DO PARAMS
        Post.destroy({where: {'id': req.params.id}}).then(() => {
            res.send('Post deleted successfully!')
        }).catch((err) => {
            res.send('This post does not exist');
        })
    })



// modo de criar um servidor com express
app.listen(8081, () => console.log('Server On')); //deve vir por último / localhost:8081
