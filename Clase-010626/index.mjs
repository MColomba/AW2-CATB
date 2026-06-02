import express from 'express'
import './inyect.env.mjs'
import rutasProductos from './modulos/productos/rutas.productos.mjs'

const PUERTO = process.env.PUERTO || 3000

const app = express()
app.use(express.json())
app.use('/api/v1', rutasProductos)

app.listen(PUERTO)