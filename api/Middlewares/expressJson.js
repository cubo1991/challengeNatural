//Middleware que nos permite poder visualizar el formato json de las respuestas



const ExpressJson= (server,express) =>{
   
    return server.use(express.json());
}

module.exports = ExpressJson;