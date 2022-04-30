// modo normal de criar um servidor com nodejs
// const http = require('http');
// http.createServer().listen(8081);

const express = require('express');
const app = express();
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser');

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
        res.send('inicio');
    });

    app.get('/register', function(req, res){
        res.render('form');
    });

    app.post('/save', function(req, res){ //rota só é acessada usando método post
        req.body.title
        res.send(`${req.body.title} ${req.body.content}`)
        // res.render('formSuccess');
    })



// modo de criar um servidor com express
app.listen(8081, () => console.log('Server On')); //deve vir por último / localhost:8081
