const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/athena', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        nome: {
            type: String,
            required: true
        },
        conteudo: {
            nome : {
                type: String,
                required: true
            },
            dificuldade: {
                type: Number,
                required: true
            }
        }       

    }
);

module.exports = mongoose.model('Disciplina', DisciplinaSchema);