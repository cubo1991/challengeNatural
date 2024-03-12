const express = require('express');
const routes = require('./routes/index.js');
const morgan = require('morgan');

const server = express();
const PORT = process.env.PORT || 3000;

//middlewares
server.use(morgan('dev'));
server.use(express.json())

//Routes
server.use('/api', routes)



server.get('/', (req, res) => {
    res.send('Hello World');
}
);

server.use((req,res) => { 

    res.status(404).send('No existe la página');
})

server.listen(PORT);
console.log(`Server is running on port ${PORT}` );
