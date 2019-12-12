const Estudo = require("../models/estudo.js");
const User = require("../models/user_model.js");

module.exports = {

    async listaEstudo(req, res) {
        //const estudo = ;
        await Estudo.find({})
            .then(estudo=>{
                res.status(201).json(estudo).send(estudo)
            }).catch( error=>{
                console.error(error);
                
            })
        //return res.status(200).json(estudo).send(estudo);
    },
    async index(req, res) {
        const { page = 1 } = req.query;
        const estudo = await Estudo.paginate({}, { page, limit: 10 });
        return res.json(estudo);
    },

    async inserirEstudo(req, res) {
        // const estudo = ;
        await Estudo.create(req.body)
            .then(estudo=>{
                res.status(201).json(estudo).send(estudo)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.status(201).json(estudo);
    },

    async obterEstudo(req, res) {
        //const estudo = ;

        await Estudo.find({nickname: req.params.nickname})
            .then(estudo=>{
                res.status(201).json(estudo).send(estudo)
            }).catch( error=>{
                console.error(error);
                
            });
        //return res.json(estudo);
    },

    async atualizarEstudo(req, res) {
        // const estudo = ;

        await Estudo.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(estudo=>{
                res.status(201).json(estudo).send(estudo)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.json(estudo);
    },
    async atualizarEstudoByNick(req, res){
        const user = await User.find({nickname: req.params.nickname});
        //const updated = ;
        await Estudo.findByIdAndUpdate(user[0]._id, req.body, {new: true})
            .then(estudo=>{
                res.status(201).json(estudo).send(estudo)
            }).catch( error=>{
                console.error(error);
                
            })
        //return res.json(updated);
    },

    async removerEstudo(req, res) {
        //const estudo = ;
        await Estudo.findByIdAndRemove(req.params.id)
            .then(estudo=>{
                res.status(201).json(estudo).send(estudo)
            }).catch( error=>{
                console.error(error);
                
            });
        //return res.send(estudo);

    }
}    