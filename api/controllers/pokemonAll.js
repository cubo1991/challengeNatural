const controller = {}
const axios = require('axios');

controller.index = async (req, res) => {
    try {
        //Constantes y variables que nos ayudan a determinar partes del codigo.
        const page = req.params.index ;
        const limit =  18;
        const offSet = (page - 1) * limit;
        const maxPage = 56
        //Verificamos si la página que se quiere visualizar existe. De no hacerlo, damos por finalizado el proceso con un mensaje de error.
        if(page < maxPage){
        //Realizamos la petición GET para obtener la lista de pokemon, limitando la cantidad de elemenos que se visualizan.
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`);
        let results = response.data.results;
      
        //Obtenemos todos los datos que necesitamos y los formateamos para solo captar los datos que necesitamos.
        let promises = results.map(async pokemon => {
            try {
                const response = await axios.get(pokemon.url);
                
                return {
                    id: response.data.id,
                    name: response.data.name,
                    types: response.data.types.map((type) =>{
                        return type.type.name;
                    }
                    ),                   
                    stats: response.data.stats.map((stat)=>{
                        return {
                            name: stat.stat.name,
                            value: stat.base_stat
                        }
                    
                    }),
                    sprite: response.data.sprites.other.home.front_default
                };
            } catch (error) {
                res.status(404).send(error.message);
            }
        });
       
        let pokemons = await Promise.all(promises);
       
        
            res.send(pokemons);
        } else{
            throw new Error("The page that you are looking for doesn't exist")
        }
        
    } catch (error) {
            res.status(404).send(error.message);    
    }
};

module.exports = controller;
