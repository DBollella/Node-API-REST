const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.listen(port, function(){
    console.log(`BACKEND está funcionando na porta ${port}.`)
});


server.use(function(req,rest,next){
    console.log("meu middleware 1");
    next()
});

server.use(function(req,rest,next){
    console.log("meu middleware 2");
    rest.send("Funcionou novamente!!!");  
});