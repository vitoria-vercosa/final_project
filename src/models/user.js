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
        curso: {            
            type: String,
            required: true},
        dataNasc: {            
            type: String,
            required: true},
        DDD: {            
            type: Number,
            required: true},
        telefone:{            
            type: Number,
            required: true}        

    }
);

module.exports = mongoose.model('User', UserSchema);