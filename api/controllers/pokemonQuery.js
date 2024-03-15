const controller = {}
const axios = require('axios');





controller.index = async (req, res) => {
    let query =  req.query.query

    let queryResult; 
    try {
        const typeResponse = await axios.get('https://pokeapi.co/api/v2/type/');
        let types = typeResponse.data.results;

        const pokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1008');
        let results = pokemonResponse.data.results;
        let allPokemons = [];

        //Busca si el valor de la query es un type
        let encontrado = types.some(objeto => objeto.name === query);
        //Trae todo los pokemon para buscar por tipo
        let promises = results.map(async pokemon => {
            try {
                const response = await axios.get(pokemon.url);
                allPokemons = [...allPokemons, {
                    id: response.data.id,
                    name: response.data.name,
                    types: response.data.types,
                  
                }];
            } catch (error) {
                console.error(error);
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
                    console.error(`Error al obtener los datos del Pokémon: ${error.message}`);
                    queryResult = { error: `No se pudo encontrar el Pokémon ${query}` };
                }
            }
            res.send(queryResult)
        }).catch(error => {

            console.error(`Error al procesar las promesas: ${error.message}`);
            res.status(500).send({ error: 'Ocurrió un error al procesar tu solicitud.' });
        });



    } catch (error) {
        console.error(error);
    }
};

module.exports = controller