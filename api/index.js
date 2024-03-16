const express = require('express');
const routes = require('./routes/index.js');


const morganMiddleware = require('./Middlewares/morgan.js');
const ExpressJson = require('./Middlewares/ExpressJson.js');
const router = require('./Middlewares/Router.js');
const noPage = require('./Middlewares/defaultRoutes.js');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swagger = require('./Middlewares/swagger.js');

//settings
const server = express();
const PORT =  3001;

//middlewares
morganMiddleware(server)
ExpressJson(server, express)
swagger('/apiDoc', swaggerUi, swaggerJsDoc, server)



//Router
router(server, '/api', routes)



//noPage route
noPage(server)

//server listening
server.listen(PORT);
console.log(`Server is running on port ${PORT}` );
