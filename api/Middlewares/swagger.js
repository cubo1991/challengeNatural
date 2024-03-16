const path = require("path")
const pokemonAll = require("../swagger/pokemonAll.json");
const pokemonDetail = require("../swagger/pokemonDetail.json");
const pokemonQuery = require("../swagger/pokemonQuery.json");


const swaggerSpec = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: "Pokedex API",
        version: "1.0.0",
      },
      paths: {
        ...pokemonAll,
        ...pokemonDetail,
        ...pokemonQuery,
      },
      servers: [
        {
          url: "http://localhost:3001"
        }
      ]
    },
    apis: [`${path.join(__dirname, "../routes/*.js")}`]
  }
  
/** * La función `swagger` configura la documentación de Swagger para un servidor utilizando la URL
 * especificada, la interfaz de usuario de Swagger, el documento JS de Swagger y el servidor.
 */
const swagger = (url, swaggerUI, swaggerJsDoc, server) =>{
    return server.use(url, swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
}


module.exports = swagger;