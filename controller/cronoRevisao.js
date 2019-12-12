const User = require('../models/user_model');
const Disc = require('../models/disciplina');
const Revisao = require('../models/revisao');

module.exports = {

    async crono(req, res){
        
        const {nickname, senha} = req.body;
        const userExists = await User.findOne({
            $and: [
                {nickname},
                {senha}
            ]
        })

        if(!userExists){
            return res.send('Usuário ou senha incorretos! <a href="/">Voltar a tela inicial</a>')
        }
        const user = await User.findOne({nickname})
        const disc = await Disc.find({user_id : user._id})
        console.log(disc)
        console.log(Object.keys(disc[0].conteudo).length);
        return res.render("Home.ejs",{user,disc});
    }
}