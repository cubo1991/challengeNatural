
const morgan = require('morgan');


const morganMiddleware = (server) =>{
   
    return server.use(morgan('dev'));
}

module.exports = morganMiddleware;