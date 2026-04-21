import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

//También llamado 'app'
const server = http.createServer((request, response) => {

    if (request.method === 'GET') {
        if (request.url === '/') {de
            response.statusCode = 200;
            return response.end('We are in root route'); //Nunca puede ponerse el end 2 veces en un mismo ámbito. Por eso se pone el 'return'
        };

        if (request.url === '/users') {
            response.statusCode = 200;
            return response.end('You are in users route'); //Nunca puede ponerse el end 2 veces en un mismo ámbito. Por eso se pone el 'return'
        } 
    }
    //Fallback
    response.statusCode = 404;
    response.end('Route not found') 
})
server.listen(3000, () => {
    console.log('Server running in http://localhost:3000')
});