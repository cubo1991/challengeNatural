const controller = {}
const axios = require('axios');

controller.index = async (req, res) => {
    try {
        const page = req.params.index ;
        const limit =  18;
        const offSet = (page - 1) * limit;
         console.log(req.params)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`);
        let results = response.data.results;

        let promises = results.map(async pokemon => {
            try {
                const response = await axios.get(pokemon.url);
                console.log(pokemon.name);
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
                console.error(error);
            }
        });

        let pokemons = await Promise.all(promises);
        res.send(pokemons);
    } catch (error) {
        console.error(error);
    }
};

module.exports = controller;
