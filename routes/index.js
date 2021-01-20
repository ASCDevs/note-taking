const noteRoutes = require('./note_routes');

module.exports = function(app, db){
    noteRoutes(app, db);
    //Outros grupos de rotas podem vir aqui futuramente
}

