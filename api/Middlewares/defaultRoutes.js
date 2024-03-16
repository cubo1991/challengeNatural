

const noPage= (server) =>{
   
    return server.use((req,res) => { 

        res.status(404).send('There is no page');
    })
}

module.exports = noPage;