const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/athena', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const RevisaoSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        disciplina_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        conteudo_nome: {            
            type: String,
            required: true
        },
        tempoDecorrido: {            
            type: String,
            required: true
        },
        tempoEsperado: {            
            type: String,
            required: true
        }     
    }
);

module.exports = mongoose.model('Revisao', RevisaoSchema);