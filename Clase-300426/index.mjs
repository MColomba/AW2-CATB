import express from 'express'

const puerto = 3000
const app = express()

const productos = [
    {
        id: 1,
        nombre: 'Pantalon',
        precio: 5000
    },
    {
        id: 2,
        nombre: 'Remera',
        precio: 4000
    }
]

app.get('/', (req, res)=>{
    res.json({mensaje:"Bienvenido"})
})

app.get('/productos', (req, res)=>{
    res.json(productos)
})

app.get('/productos/:id', (req, res)=>{
    const id = Number(req.params.id)
    const productosFiltrados = productos.filter((producto)=>{
        return producto.id === id
    })
    
    res.json(productosFiltrados)
    //res.json({mensaje:"estoy en productos con id"})
})

app.get('/productos_d/:descuento', (req, res)=>{
    const descuento = Number(req.params.descuento)
    const productosDesc = productos.map((producto)=>{
        let descontar = producto.precio * (descuento/100)
        return {
            id : producto.id,
            nombre : producto.nombre,
            precio : producto.precio - descontar
        }
    })
    res.json(productosDesc)
})

app.listen(puerto, ()=>{
    console.log(`http://localhost:${puerto}`)
})