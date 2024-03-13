const controller = {}
const axios = require('axios');

controller.index = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 21;
        const offSet = (page - 1) * limit;

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`);
        let results = response.data.results;

        let promises = results.map(async pokemon => {
            try {
                const response = await axios.get(pokemon.url);
                console.log(pokemon.name);
                return {
                    id: response.data.id,
                    name: response.data.name,
                    types: response.data.types,                   
                    stats: response.data.stats,
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
