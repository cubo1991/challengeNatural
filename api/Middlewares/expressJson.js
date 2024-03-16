



const ExpressJson= (server,express) =>{
   
    return server.use(express.json());
}

module.exports = ExpressJson;