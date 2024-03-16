//Middleware que maneja rutas que no entran en la lógica principal del enroutado

const noPage= (server) =>{
   
    return server.use((req,res) => { 

        res.status(404).send('There is no page');
    })
}

module.exports = noPage;