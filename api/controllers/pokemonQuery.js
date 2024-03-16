const controller = {}
const axios = require('axios');





controller.index = async (req, res) => {
    let query =  req.query.query

    let queryResult; 
    try {
        //Declaramos las constante que vamos a usar para el proceso: la lista de tipos y los pokemons
        const typeResponse = await axios.get('https://pokeapi.co/api/v2/type/');
        let types = typeResponse.data.results;

        const pokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1008');
        let results = pokemonResponse.data.results;
        let allPokemons = [];

        //Busca si el valor de la query es un type
        let encontrado = types.some(objeto => objeto.name === query);
        
        //Trae todo los pokemon para buscarlos por tipo
        let promises = results.map(async pokemon => {
            try {
                const response = await axios.get(pokemon.url);
                allPokemons = [...allPokemons, {
                    id: response.data.id,
                    name: response.data.name,
                    types: response.data.types,
                  
                }];
                               
            } catch (error) {
                res.status(404).send(error.message);
            }
        });

        await Promise.all(promises).then(async() => {
            //Si el query es un type, filtra todo los pokemon que tengan ese type
            if (encontrado) {
                let pokemonfiltered = allPokemons.filter((pokemon) => {
                    return pokemon.types.some((type) => {
                        return type.type.name === query.toLowerCase();
                    });
                }).map((pokemon) => {
                    return {
                        id: pokemon.id,
                        name: pokemon.name
                    };
                });
               
                if(pokemonfiltered.length === 0){
                    throw new Error(`No Pokemon of ${query} type was found`);
                }
                queryResult = pokemonfiltered;


            } else {
            //Si no tiene el type, busca al pokemon en cuestión    
                try {
                    const qLowerCase = query.toLowerCase()
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${qLowerCase}`)
                    pokemon = { id: response.data.id,
                        name: response.data.name,}
                    queryResult = pokemon
                } catch (error) {
                     //Si no existe el pokemon, da un mensaje de error
                     res.status(404).send(`The Pokemon ${query} could not be found`);
                    console.error(`Error while fetching the Pokemon data: ${error.message}`);
                    
                }
            }
           
            res.send(queryResult)
        }).catch(error => {
           // En este caso, si no existe el tipo de pokemon buscado, da un mensaje de error
            if(queryResult === undefined){
               return res.status(404).send(error.message);            
            }         
            res.status(500).send(error.message);
        });



    } catch (error) {
        console.error(error.message);
    }
};

module.exports = controller