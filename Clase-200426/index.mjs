import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

try {
    const server = http.createServer(async (request, response) => {
        if (request.method === 'GET') {
            if (request.url === '/usuarios') {
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
            if (request.url === '/usuarios/filtrados') {
                // 1 - Leer el archivo guardado
                const ruta = path.resolve('usuarios.json')

                let usuariosLocal
                try {
                    usuariosLocal = await fsp.readFile(ruta, 'utf-8')
                } catch (error) {
                    response.statusCode = 404
                    return response.end('Archivo no encontrado. Ejecutá primero la ruta /usuarios para generarlo.')
                }

                // 2 - Convertir a objeto JS y filtrar ID menor a 10
                const usuarios = JSON.parse(usuariosLocal)
                const usuariosFiltrados = usuarios.filter(usuario => usuario.id < 10)

                response.statusCode = 200
                return response.end(JSON.stringify(usuariosFiltrados, null, 4))
            }
        }
        //Fallback
        response.statusCode = 404;
        response.end('Recurso no encontrado')
    })
    server.listen(3000, () => {
        console.log('Server running in http://localhost:3000')
    });
} catch (error) {
    console.log('Error')
}