const controller = {}
const axios = require('axios');

controller.index = async (req, res) => {
    let id = req.params.id
  
    try {
        let pokemon = []
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    



                pokemon  = {
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
                    sprite: response.data.sprites.other.home.front_default,
                    ability: response.data.abilities.map((ability)=>{
                        return ability.ability.name;                   
                    }),
                    weight: response.data.weight,
                    height: response.data.height,
                };
      
  res.send(pokemon);
    } catch (error) {
        console.error(error);
    }
};

module.exports = controller;
