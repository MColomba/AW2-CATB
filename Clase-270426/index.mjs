import express from 'express'

const puerto = 3000
const app = express()

//Middleware(peticion, respuesta, funcion a ejecutar)
function middleware1(req, res, next){
    console.log('Se ejecuto el middleware')
    if(true){
        res.send('terminado en middleware1')
    }else{
        next()
    }
}

app.use(express.static('front'))

//use se ejecuta en todas las rutas
//app.use(middleware1)

//use se ejecuta desde la ruta que esta definida en adelante
//use se ejecuta solo en /saludo/dia
app.use('/saludo/dia', middleware1)

app.get('/', (req, res)=>{
    console.log('algo')
    res.send('Bienvenidos')
})

//Primero llega la peticion, se ejecuta el middleware y despues entra al callback
//Pueden haber todos los necesarios entre medio y se ejecutan de izquierda a derecha
/*
app.get('/saludo', middleware1, (req, res)=>{
    console.log('algo')
    res.send('Bienvenidos')
})
    */
app.get('/saludo', (req, res)=>{
    console.log('algo')
    res.send('Bienvenidos')
})

app.get('/saludo/dia', (req, res)=>{
    console.log('algo')
    res.send('Bienvenidos')
})

app.listen(puerto, ()=>{
    console.log(`http://localhost:${puerto}`)
})