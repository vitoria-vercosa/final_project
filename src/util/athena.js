const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

// setando as informações do banco
const url = 'mongodb://localhost:27017';
const dbName = 'athena';

// conectando ao banco usando as informações acima
const mongoConnect = callback => {
    MongoClient.connect(url, {useUnifiedTopology:true, useNewUrlParser: true})
        .then(client => {
            console.log("Mongo connected");

            _db = client.db(dbName);

            callback(_db);
        })
        .catch(err =>{
            console.log(err);
            throw err;
        })
};

// verificando se o banco foi criado corretamente ou nn
const getDB = () => {
    if(_db){
        return _db;
    }
    throw 'No Database found';
}

exports.mongoConnect = mongoConnect;
exports.getDB        = getDB;