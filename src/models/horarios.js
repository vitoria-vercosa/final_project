const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/athena', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const HorariosSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        segunda: {
            type: Number,
            required: true
        },
        terca: {
            type: Number,
            required: true
        },
        quarta: {
            type: Number,
            required: true
        },
        quinta: {
            type: Number,
            required: true
        },
        sexta: {
            type: Number,
            required: true
        },
        sabado: {
            type: Number,
            required: true
        },
        domingo: {
            type: Number,
            required: true
        }     

    }
);

module.exports = mongoose.model('Horarios', HorariosSchema);