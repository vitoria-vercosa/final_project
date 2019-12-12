const Revisao = require("../models/revisao.js");
const User = require("../models/user.js");

module.exports = {

    async listaRevisao(req, res) {
        // const revisao = ;

        await Revisao.find({})
            .then(revisao=>{
                res.status(201).json(revisao).send(revisao)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.status(200).json(estudo).send(estudo);
    },
    async index(req, res) {
        const { page = 1 } = req.query;
        const revisao = await Revisao.paginate({}, { page, limit: 10 });
        return res.json(revisao);
    },

    async inserirRevisao(req, res) {
        // const revisao = ;

        await Revisao.create(req.body)
            .then(revisao=>{
                res.status(201).json(revisao).send(revisao)
            }).catch( error=>{
                console.error(error);
                
            });
        // return res.status(201).json(revisao);
    },

    async obterRevisaoByNick(req, res) {
        // const revisao = ;
        const user = await User.find({nickname: req.params.nickname});

        await Revisao.find({user_id: user[0]._id})
            .then(revisao=>{
                res.status(201).json(revisao).send(revisao)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.json(revisao);
    },

    async atualizarRevisao(req, res) {
        // const revisao = await Revisao.findByIdAndUpdate(req.params.id, req.body, { new: true });
        await Revisao.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(revisao=>{
                res.status(201).json(revisao).send(revisao)
            }).catch( error=>{
                console.error(error);
                
            });
        // return res.json(revisao);
    },
    async atualizarRevisaoByNick(req, res){
        const user = await User.find({nickname: req.params.nickname});
        // const updated = ;
        await Revisao.findByIdAndUpdate(user[0]._id, req.body, {new: true})
            .then(revisao=>{
                res.status(201).json(revisao).send(revisao)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.json(updated);
    },

    async removerRevisao(req, res) {
        // const revisao = ;
        await Revisao.findByIdAndRemove(req.params.id)
            .then(revisao=>{
                res.status(201).json(revisao).send(revisao)
            }).catch( error=>{
                console.error(error);
                
            });
            // return res.send(revisao);
    }
}    