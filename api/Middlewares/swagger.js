const path = require("path")
const pokemonAll = require("../swagger/pokemonAll.json");

const swaggerSpec ={
    definition:{
        openapi: '3.0.0',
        info:{
            title: "Pokedex API",
            version: "1.0.0",
        },
        paths: 
            pokemonAll,
           
        
        servers:[
            {
                url: "http://localhost:3001"
            }
        ]
    },
    apis: [`${path.join(__dirname, "../routes/*.js")}`]
}
const swagger = (url, swaggerUI, swaggerJsDoc, server) =>{
    return server.use(url, swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
}


module.exports = swagger;