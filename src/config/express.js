const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const Router = require('../route/rotas.js')
const controller;
const user;

module.exports = function() {

    var app = express();

    app.set("port", 3000);
    app.set("views", "views");
    //app.set("view engine", "ejs");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static('./views'));
    app.use(methodOverride('_method'));

    Router(app);

    app.get('/', function(req, res){
        res.render(index.html);
    })

    return app;
    
}