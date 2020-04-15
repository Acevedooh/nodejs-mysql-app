const express = require('express');
const morgan = require('morgan');
///initializations
//cons { hola} = from('')
const app = express();

//settings
//prueba

app.set('port', process.env.app || 4000);


// Middlewares : son funciones que se ejecuta cuando un usuario envia una peticion 

app.use(morgan('dev'));

// Global Variables

// Routes


// Public


// Starting the server

app.listen(app.get('port'), () => {

   console.log('server on port', app.get('port'));

});