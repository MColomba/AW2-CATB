import express from 'express'

const PUERTO = 3000

const app = express()

async function middleware1(req, res, next){
    try{
        const codigoReq = Number(req.params.codigo)

        const respuesta = await fetch('http://localhost:4321/usuario')
        const usuario = await respuesta.json()
        const codigoRes = usuario.codigo

        if(codigoReq === codigoRes){
            next()
        }else{
            res.status(400).json({mensaje:'El código es incorrecto'})
        }
    }catch(error){
        console.log(error)
    }
    
}

app.get('/:codigo', middleware1, (req, res)=>{
    res.status(200).json({mensaje:'El código es correcto'})
})

app.listen(PUERTO);