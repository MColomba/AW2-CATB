import pool from '../../conexion.db.mjs'

// obtener los datos
export async function obtenerProductos(){
    const resultado = await pool.query('SELECT * FROM componentes')
    return resultado.rows
}

export async function agregarProducto(datos) {
    //const {producto, precio} = datos
    //await pool.query('INSERT INTO componentes(category, name, cpuSocket, cpuChipset, ramDdr, coolerHeight, m2Format, m2Key, psuFormat, gpuPcie, gpuLenght, mbFormat) VALUES($1,$2)')
    //const resultado = await pool.query('INSERT INTO productos(producto, precio) VALUES($1,$2)' RETURNING id, [producto, precio])
    //return resultado.rows
}