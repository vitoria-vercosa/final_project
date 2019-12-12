const user = require("../controller/user");
const estudo = require("../controller/estudo");
const disciplina = require("../controller/disciplina.js");
const login = require("../controller/login");
const cronoE = require("../controller/cronoEstudo");
const cronoR = require("../controller/cronoRevisao");

module.exports = function(app){

    app.post('/login', login.login);
    app.get('/cadastro', user.cadastraUser);

    // dados usuário
    app.get('/user', user.listaUser);
    app.get('/user/:nickname', user.obterUser);
    app.post('/user', user.inserirUser);
    app.put('/user/:id', user.atualizarUser);
    //app.delete('/user/:id', user.removerUser);
    app.delete('/user/:nickname',user.deleteUser);

    // dados estudos
    app.get('/estudo', estudo.listaEstudo);
    app.get('/estudo/:nickname', estudo.obterEstudo);
    app.post('/estudo', estudo.inserirEstudo);
    app.put('/estudo/:id', estudo.atualizarEstudo);
    app.delete('/user/:id', estudo.removerEstudo);

    // dados disciplina
    app.get('/disciplina', disciplina.listaDisciplina);
    app.get('/disciplina/:nickname', disciplina.obterDisciplina);
    app.post('/disciplina', disciplina.inserirDisciplina);
    app.put('/disciplina', disciplina.atualizarDisciplina);
    app.delete('/disciplina', disciplina.removerDisciplina);

    app.post('/adicionarTempoEstudo', disciplina.adicionarTempoEstudo);
    
    //dados conteudo
    app.delete('/conteudo', disciplina.removerConteudo);
    app.get('/conteudo/', disciplina.obterConteudos);

    // cronometro
    app.get('/cronoEstudo', cronoE.crono);
    //app.get('/cronoRevisao', cronoR.);
    //app.post('/cronometrarEstudo', estudo.cronometrarEstudo);
    //app.post('/cronometrarRevisao', revisao.cronometrarRevisao);




}