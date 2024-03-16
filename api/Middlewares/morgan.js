//Middleware que nos permite registrar información sobre las solicitudes HTTP entrantes al servidor.
const morgan = require('morgan');


const morganMiddleware = (server) =>{
   
    return server.use(morgan('dev'));
}

module.exports = morganMiddleware;