const User = require('../models/user_model');
const Disc = require('../models/disciplina');

module.exports = {

    async login(req, res){
        
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
        return res.render("Home.ejs",{user,disc});
    }
}