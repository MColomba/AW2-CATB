import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

try{
    const server = http.createServer(async(request, response) => {
        if(request.method === 'GET'){
            if(request.url === '/usuarios'){
                //1-Fetch
                const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
                const usuarios = await respuesta.json();
                
                //2-Escribir JSON
                const ruta = path.resolve('usuarios.json')
                const datosJson = JSON.stringify(usuarios, null, 4)
                await fsp.writeFile(ruta, datosJson)

                //3-Leer JSON
                const usuariosLocal = await fsp.readFile(ruta, 'utf-8')
                
                //4-Envio al cliente
                response.method = 200
                return response.end(usuariosLocal)
            }
            /*
            if(request.url === '/usuarios/filtrados'){
            }
            */
        }
        //Fallback
        response.statusCode = 404;
        response.end('Recurso no encontrado')
    })
    server.listen(3000, () => {
    console.log('Server running in http://localhost:3000')
    });
}catch(error){
    console.log('Error')
}