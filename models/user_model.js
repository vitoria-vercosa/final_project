const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/athena', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        nickname: {            
            type: String,
            required: true},
        email: {            
            type: String,
            required: true},
        senha: {            
            type: String,
            required: true},
        dataNasc: {            
            type: String,
            required: true
        },
        horasSegunda: {
            type: Number,
            required:true
        },        
        horasTerca: {
            type: Number,
            required:true
        },        
        horasQuarta: {
            type: Number,
            required:true
        },
        horasQuinta: {
            type: Number,
            required:true
        },
        horasSexta: {
            type: Number,
            required:true
        },
        horasSabado: {
            type: Number,
            required:true
        },
        horasDomingo: {
            type: Number,
            required:true
        }
    }
);

module.exports = mongoose.model('User', UserSchema);