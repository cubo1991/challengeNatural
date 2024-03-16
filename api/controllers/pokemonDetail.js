const controller = {}
const axios = require('axios');

controller.index = async (req, res) => {
    let id = req.params.id
  
    try {
        //Realizamos la peticion GET pasando como id el param que recibimos
        let pokemon = []
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

            //No traemos toda la data, filtramos solo que vamos a mandar al front
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
        //En caso de ingresar un id erroneo, envía el error y el correspondiente mensaje
        res.status(404).send(`There is no Pokemon with the ID ${id}. Please enter a valid Pokemon ID.`
        );
    }
};

module.exports = controller;
