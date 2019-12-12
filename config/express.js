const express = require('express');
const Router = require('../route/rotas.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

module.exports = function() {
    var app = express();
    app.use(express.static('public'));
    app.set("port", 4000);
    app.set("views", "views");
    app.set("view engine", "ejs");
    app.use(bodyParser.json());       
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(methodOverride('_method'));
    Router(app);
    // app.get('/',function(req,res){
    //     res.render('index', {title:'Hey',message: 'Hello there'})
    // });
    app.get('/', function(req, res) {
        res.render('Login.ejs');
    });

    return app;
};