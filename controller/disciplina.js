const Disciplina = require("../models/disciplina.js");
const User = require("../models/user_model.js");

module.exports = {

    async listaDisciplina(req, res) {
        // const disciplina = ;
        await Disciplina.find({})
            .then(disciplina=>{
                res.status(200).json(disciplina).send(disciplina)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.status(200).json(disciplina).send(disciplina);
    },
    async index(req, res) {
        const { page = 1 } = req.query;
        const disciplina = await Disciplina.paginate({}, { page, limit: 10 });
        return res.json(disciplina);
    },

    async inserirDisciplina(req, res) {
        // const disciplina = ;
        const nickname = req.query.nick; 
        const contDisciplina = req.query.contDisci;
        var dados ={
            'nick' : nickname,
            'contDisciplina' : contDisciplina - 1
        }
        const body = req.body;
        const disciplina = req.body.disciplina;
        var list = Object.entries(body);
        var conteudos = [];
        var horas = [];
    	const user = await User.findOne({nickname: nickname});
        const disc = await Disciplina.find({user_id : user._id});

        var cont;
        for (let i=1; i<list.length; i++){
            conteudos.push(list[i][1]);
            horas.push(0)
        }


        await Disciplina.create({
            user_id: user._id,
            nome: disciplina,
            conteudo: conteudos,
            horas: horas
        })
        .then(disciplina=>{
            //res.status(201).json(disciplina).send(disciplina)
            if(dados.contDisciplina == 0){
                
                return res.render("Home.ejs",{user,disc});
            }else{
                res.render('cadastroDisciplina.ejs',{dados});
            }
        }).catch( error=>{
            console.error(error);
            
        })

        // return res.status(201).json(disciplina);
    },

    async obterDisciplina(req, res) {
        // const disciplina = ;
        await Disciplina.find({nickname: req.params.nickname}) 
            .then(disciplina=>{
                res.status(200).json(disciplina).send(disciplina)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.json(disciplina);
    },
    async obterDisciplinaByName(req, res) {
        const user = await User.find({user_id: req.params.user_id});
        // const disciplina = ;
        await Disciplina.find({nome: req.params.nome, user_id: user[0]._id})
            .then(disciplina=>{
                res.status(200).json(disciplina).send(disciplina)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.json(disciplina);
    },
    async disciplinasByUser(req, res) {
        // const disciplina = ;
        await Disciplina.find({user_id: req.params.user_id})
            .then(disciplinas=>{
                res.status(200).json(disciplinas).send(disciplinas)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.json(disciplina);
    },

    async atualizarDisciplina(req, res) {
        // const disciplina = ;
        await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(disciplina=>{
                res.status(200).json(disciplina).send(disciplina)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.json(disciplina);
    },
    async atualizarDisciplinaByNick(req, res){
        const user = await User.find({nickname: req.params.nickname});
        // const updated = ;
        await Disciplina.findByIdAndUpdate(user[0]._id, req.body, {new: true})
            .then(disciplina=>{
                res.status(200).json(disciplina).send(disciplina)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.json(updated);
    },

    async removerDisciplina(req, res) {
        // const disciplina = ;
        await Disciplina.findByIdAndRemove(req.params.id)
            .then(disciplina=>{
                res.status(200).json(disciplina).send(disciplina)
            }).catch( error=>{
                console.error(error);
                
            })
        // return res.send(disciplina);

    },

    async obterConteudos(req, res){
        const disciplina = await Disciplina.findOne({_id:req.query.id});

        for (conteudo in disciplina.conteudo){
            if(conteudo.nome == req.query.nome){
                res.send(conteudo).json(conteudo)
            }
        }
    },

    async atualizarConteudo(req, res){
        const disciplina = await Disciplina.findOne({_id:req.query.id});
        const novo = req.body
        var conteudoIndex
        for (let i =0; i<= disciplina.conteudo.length ; i++){
            if( disciplina.conteudo[i].nome == req.query.nome ){
                disciplina.conteudo[i].nome = novo.nome;
                disciplina.conteudo[i].nivel = novo.nivel;
                conteudoIndex = i;

            }
        }
        await Disciplina.findByIdAndUpdate(req.query.id, disciplina, {new: true})
        .then(disciplina=>{
            res.status(200).json(disciplina.conteudo[conteudoIndex]).send(disciplina.conteudo[conteudoIndex])
        }).catch( error=>{
            console.error(error);
            
        })
    },
    async removerConteudo(req, res){
        const disciplina = await Disciplina.findOne({_id:req.query.id});
        const novo = req.body
        for (let i =0; i<= disciplina.conteudo.length ; i++){
            if( disciplina.conteudo[i].nome == req.query.nome ){
                disciplina.conteudo = disciplina.conteudo.splice(i,1);
            }
        }
        await Disciplina.findByIdAndUpdate(req.query.id, disciplina, {new: true})
        .then(disciplina=>{
            res.status(200).json(disciplina).send(disciplina)
        }).catch( error=>{
            console.error(error);
            
        })
    },
    async adicionarTempoEstudo(req,res){
        var segundosEstudados;
        console.log(req.body.segundos)
        const disciplina = await Disciplina.findOne({nome:req.body.nomeDisciplina});
        for(let j = 0; j < disciplina.conteudo.length;j++){
            if(disciplina.conteudo[j] == req.body.nomeConteudo){
                if(req.body.hora > 0){
                    segundosEstudados += req.body.hora*3600;
                }
                if(req.body.minuto > 0){
                    segundosEstudados += req.body.minuto*60;
                }
                if(req.body.segundo > 0){
                    segundosEstudados += req.body.segundo;
                }
                disciplina.horas[j] += segundosEstudados; 
            }
        }
        await Disciplina.findByIdAndUpdate({_id : disciplina._id}, disciplina, {new: true})
        .then(disciplina=>{
            res.status(200).json(disciplina).send(disciplina)
        }).catch( error=>{
            console.error(error);
            
        })
    }
}    