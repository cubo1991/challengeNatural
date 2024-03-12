const controller = {}
const axios = require('axios');

controller.index = (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
      let results = response.data.results;
     
      let pokemons = results.map(pokemon => {
            return {
                nombre: pokemon.name,
                url: pokemon.url
            };
      })

      console.log(pokemons);
      res.send(pokemons);
    })
    .catch(error => {
      console.error(error);
    });
};

module.exports = controller
