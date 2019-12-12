const User = require("../models/user_model.js")

module.exports = {

    async listaUser(req, res) {
        await User.find({})
        .then(users=>{
            //return users
            res.status(200).json(users).send(users)
        }).catch(
            error => console.error(error.stack)
        );
        
    },
    async index(req, res) {
        const { page = 1 } = req.query;
        const user = await User.paginate({}, { page, limit: 10 });
        return res.json(user);
    },

    async inserirUser(req, res) {
        //const user = await User.create(req.body);
        const user = req.body;
        const { nome, nickname, dataNasc, senha, email, horasSegunda,horasTerca,horasQuarta,horasQuinta,horasSexta,horasSabado,horasDomingo, contDisciplina } = req.body;
        const userExists = await User.findOne({nickname})
        if(!userExists){
            var dados ={
                'nick' : nickname,
                'contDisciplina' : contDisciplina
            }
            await User.create({
                nome, 
                nickname, 
                dataNasc, 
                senha, 
                email, 
                horasSegunda,
                horasTerca,
                horasQuarta,
                horasQuinta,
                horasSexta,
                horasSabado,
                horasDomingo
            })
                .then(user =>{
                    //res.status(201).json(user)
                    res.render('cadastroDisciplina.ejs',{dados})
                }).catch( error=>
                    console.error(error.stack)
                );
        
        }else{
            res.send('Este nick ja existe <a href="/cadastro">Voltar a para a tela de cadastro</a>')
        }

        
        //return res.status(201).json(user);
    },

    async obterUser(req, res) {
         //const user = await User.findById(req.query.id);
        //const user = 
        await User.find({nickname: req.params.nickname})
            .then(users => {
                res.status(200).json(users)
            }).catch( error =>
                console.error(error.stack)
            );
        //return res.json(user);
    },

    async atualizarUser(req, res) {
        //const user = await User.find({nickname: req.params.nickname});
        //const user = ;
        await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(user => {
                res.status().json(user);
            }).catch( error =>
                console.error(error)
            );
        //return res.json(user);
    },
    async atualizarUserByNick(req, res){
        const user = await User.find({nickname: req.params.nickname});
        //const updated = ;
        await User.findByIdAndUpdate(user[0]._id, req.body, {new: true})
            .then(user =>{
                res.status(201).json(user).send(user);
            }).catch(error=>{
                console.error(error);
                res.status(304);
            });
        //return res.json(updated);
    },

    async removerUser(req, res) {
        //const user = ;
        await User.findByIdAndRemove(req.params.id)
            .then(user=> {
                res.status(201).json(user).send(user)
            }).catch(error =>
                console.error(error)
            );
        //return res.send(user);

        // await User.findByIdAndRemove(req.params.id);
        // return res.send();
    },
    async deleteUser(req,res) {
        const user = await User.find({nickname: req.params.nickname});

        //const deleted = ;

        await User.findByIdAndRemove(user[0]._id)
            .then(deleted=>{
                res.status().json(deleted).send(deleted)
            }).catch(error =>
                console.error(error)
            )
        return res.send(deleted);
    },

    cadastraUser(req, res){
        res.render("Cadastro.ejs");
    }

}