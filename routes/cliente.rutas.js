const express = require('express');
const {crearCliente, obtenerCliente, actualizarCliente} = require('../controllers/cliente.controller');

const router = express.Router();

/**
 * @description Crear un nuevo cliente
 * @method POST /
*/
router.post('/', crearCliente);

/**
 * @description Obtener clientes
 * @method GET /
*/
router.get('/', obtenerCliente);

/**
 * @description Actualizar cliente
 * @method PATCH /
*/
router.patch('/', actualizarCliente);


module.exports = {
     rutas: router
}