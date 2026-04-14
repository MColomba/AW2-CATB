import fsp from 'node:fs/promises';
import path from 'node:path'
import { json } from 'node:stream/consumers';

//1-Leer desde un endpoint -> fetch
//1.1-Adaptar datos

//2-Escribir datos en un archivo local JSON

//3-Leer los datos del archivo guardado

try{
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    const usuarios = await respuesta.json()

    const usuariosModif = usuarios.map((usuario)=>{     
        const usuarioModif = {
            id : usuario.id,
            email : usuario.email, 
            name : usuario.name
        }
        return usuarioModif
    })
    
    const ruta = path.resolve('usuarios.json')
    const datosJson = JSON.stringify(usuariosModif, null, 4)
    await fsp.writeFile(ruta, datosJson)

    const usuariosLocal = await fsp.readFile(ruta, 'utf-8')
    console.log(usuariosLocal)
}catch(error){
    console.log(error)
}