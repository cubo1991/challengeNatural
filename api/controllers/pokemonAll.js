const controller = {}
const axios = require('axios');

controller.index = (req, res) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 21;
    const offSet = (page - 1) * limit;

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`)
    .then(response => {
      let results = response.data.results;
     
      let promises = results.map(pokemon => {
            return axios.get(pokemon.url)
            .then(response => {
                
                console.log(pokemon.name)
                               
                return {
                    name: pokemon.name,
                    data: response.data
                };
            })
            .catch(error => {
                console.error(error);
            });
      });

      Promise.all(promises)
      .then(pokemons => {
         
          res.send(pokemons);
      })
      .catch(error => {
          console.error(error);
      });
    })
    .catch(error => {
      console.error(error);
    });
};

module.exports = controller
