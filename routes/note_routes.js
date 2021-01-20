module.exports = function (app, db){
    //GERAL
    app.get('/notes',(req, res)=>{
        db.query('select * from nota',(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send(result);
        })
    })

    //CREATE
    app.post('/notes',(req, res)=>{
    
        const nota = `insert into nota(title,body) values ('${req.body.title}','${req.body.body}')`;

        db.query(nota,(err,result)=>{
            if (err) throw err;
            console.log("Dados do body inseridos");
            res.send("Ok")
        })
    })

    //READ
    app.get('/notes/:id',(req, res) => {
        const busca = `select * from nota where id = ${req.params.id}`;
        db.query(busca,(err, result)=>{
            if(err) throw err;
            console.log(result)
            res.send(result)
        })
    })
    
    //UPDATE
    app.put('/notes/:id',(req, res)=>{
        //fazer tratamento para atualização de campo
        const atualiza = `update nota set title = '${req.body.title}', body='${req.body.body}' where id = ${req.params.id}`;
        
        db.query(atualiza,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send("Dados atualizados" )
        })
        
    })

    //DELETE
    app.delete('/notes/:id',(req,res)=>{
        const del = `delete from nota where id = ${req.params.id}`;
        db.query(del,(err, result)=>{
            if(err) throw err;
            console.log("Resgistro deletado");
            res.send("Registro deletado");
        })
    })

};