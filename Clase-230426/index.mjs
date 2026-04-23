import express from 'express'

//defino el puerto
const puerto = 5122

//instancia de servidor express
const app = express()

//(peticion, respuesta) siempre toma ese orden
const obtenerCosas = (req, res)=>{
    res.set('content-type', 'text/html')
    res.status(200)
    res.end('<h1>Hola Express</h1>')
}

//Get en raiz
app.get('/', obtenerCosas)

//Get en /Saludo
app.get('/Saludo', (req, res)=>{
    res.set('content-type', 'text/html')
    res.status(200)
    res.end('<h1>Buenas desde la pc de al lado</h1>')
})

//Post en raiz
app.post('/', (req, res)=>{
    res.status(200)
    res.end('Hola Mundo')
})

app.listen(puerto, ()=>{
    console.log(`http://localhost:${puerto}`)
})