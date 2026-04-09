import fsp from 'node:fs/promises'
import path from 'node:path'

try
{
    const ruta = path.join('./texto.txt')
    await fsp.writeFile(ruta, 'hello')
    const content = await fsp.readFile(ruta, 'utf-8')
    console.log(content)
}
catch(error)
{
    console.log('Error')
}