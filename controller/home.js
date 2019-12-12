const User = require('../models/user_model');
const Disciplina = require('../models/disciplina');
const Estudo = require('../models/estudo');
const Revisao = require('../models/revisao');

module.exports = {

    async home(req, res){
        
        // const {nickname, senha} = req.body;
        // const userExists = await User.findOne({
        //     $and: [
        //         {nickname},
        //         {senha}
        //     ]
        // })

        // if(!userExists){
        //     return res.send('Usuário ou senha incorretos! <a href="/">Voltar a tela inicial</a>')
        // }
        // return res.render("Home.ejs");
    }
}