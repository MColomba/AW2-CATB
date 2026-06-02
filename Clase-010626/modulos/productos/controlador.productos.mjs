import * as modelo from './modelo.productos.mjs'

export async function obtenerProductos(req, res){
    const productos = await modelo.obtenerProductos()
    // const vista = vista.obtenerProductos(productos) //<------- reestructuramos los datos
    res.json(productos)
}

export async function agregarProducto(req, res) {
    const datos = req.body
    const productos = await modelo.agregarProducto(datos)
    
}