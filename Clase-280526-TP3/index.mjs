import express from 'express'
import rutasProductos from './modulos/productos/rutas.productos.mjs'

const PUERTO = 3000

const app = express()

app.use('/api/v1', rutasProductos)

app.listen(PUERTO)