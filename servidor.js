const config = require('./configuracion');
const express = require('express');
const bodyParser = require('body-parser');

const clienteRutas = require('./routes/cliente.rutas');

var app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended:false}) );

//Rutas Cliente
app.use('/cliente', clienteRutas.rutas);

app.listen( config.SERVER_PORT );
console.log( `La aplicación está escuchando en http://localhost:${config.SERVER_PORT}`);