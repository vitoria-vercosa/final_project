const User = require('../models/user_model');
const Disc = require('../models/disciplina');
const Estudo = require('../models/estudo');

module.exports = {

    async crono(req, res){
        var nickname = req.query.nickname
        const user = await User.findOne({nickname: nickname});
        console.log(user)
        const disc = await Disc.find({user_id : user._id});

        res.render("Estudo.ejs",{disc})
        
        // const {nickname, disciplina, conteudo} = req.query;

        // const user = await User.findOne({nickname});
        // const user_id = user._id;

        // const user_disci = await Disc.findOne({user_id : user._id});
        // const disc_id = user_disci._id;


        // res.render("Estudo.ejs",{user_id , disc_id})

        //-----------------------------------------------------------------------

        // if(!userExists){
        //     return res.send('Usuário ou senha incorretos! <a href="/">Voltar a tela inicial</a>')
        // }
        // const user = await User.findOne({nickname})
        // const disc = await Disc.find({user_id : user._id})
        // console.log(disc)
        // console.log(Object.keys(disc[0].conteudo).length);
        // return res.render("Home.ejs",{user,disc});
    }
}