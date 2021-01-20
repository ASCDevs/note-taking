const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

const connection = mysql.createConnection(db);

connection.connect(function(err){
    if (err) throw err;
    console.log("DB Connected!");
});

/*
const insere = "insert into nota values ('Terceira Nota','Nota inserida pelo aplicativo')";
const consulta = "select * from nota";

connection.query(insere,(err,result)=>{
    if(err) throw err;
    console.log("Dados inseridos com sucesso!");
});

connection.query(consulta,(err,result)=>{
    if(err) throw err;
    console.log(result);
});*/

require('./routes')(app, connection);


app.listen(port,()=>{
    console.log(`Conectado na porta: ${port}`);
});
