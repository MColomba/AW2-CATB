import express from 'express'
import * as controlador from './controlador.productos.mjs'

const rutasProductos = express.Router()

// Modulo productos
// GET /api/v1/productos
rutasProductos.get('/productos',controlador.obtenerProductos)

// GET /api/v1/productos/:id
// rutasProductos.get('/productos/:id',)

// POST /api/v1/productos
rutasProductos.post('/productos', controlador.agregarProducto)

// PUT /api/v1/productos/:id
// rutasProductos.put('/productos/:id',)

// DELETE /api/v1/producto/:id
// rutasProductos.delete('/producto/:id',)

export default rutasProductos