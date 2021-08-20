const Cliente = require('../models/cliente')
const db = require('../bd');

const crearCliente = async (req, res) => {
     const {cedula, nombres, apellidos} = req.body;
     const cliente = new Cliente(cedula, nombres, apellidos);
     const insertQuery = 'INSERT INTO cliente (cedula, nombres, apellidos) VALUES ($1, $2, $3)'
     
     const respuesta = await db.query(insertQuery, [cliente.cedula, cliente.nombres, cliente.apellidos]);
     res.json({
          mensaje: 'Usuario registrado correctamente', 
          body: {
               cliente: {cedula, nombres, apellidos}
          }
     });
}

const obtenerCliente = async(req, res) => {
     const filtro = req.query.cedula;
     let resultado;

     if(filtro) {
          resultado = await db.query('SELECT * FROM cliente WHERE cedula = $1', [filtro]);
          return res.json(resultado.rows);
     }

     resultado = await db.query('SELECT * FROM cliente');
     res.json(resultado.rows);
}

const actualizarCliente = async (req, res) => {
     const {cedula, nombres, apellidos} = req.body;    
     const query = 'UPDATE cliente SET nombres=$2, apellidos=$3 WHERE cedula=$1'
     const resultado = await db.query(query, [cedula, nombres, apellidos]);

     if(resultado.rowCount === 0) return res.json({mensaje: `Usuario con cedula ${cedula} no encontrado`});

     res.json({mensaje: `Usuario con cedula ${cedula} actualizado correctamente`});
}

module.exports = {
     crearCliente,
     obtenerCliente,
     actualizarCliente
}