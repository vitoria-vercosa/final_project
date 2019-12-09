const http = require('http');
const mongoConnect = require('./src/util/athena').mongoConnect;
var app = require('./src/config/express')();

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server escutando na porta '+app.get('port'));
});