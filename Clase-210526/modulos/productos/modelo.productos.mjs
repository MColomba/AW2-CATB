import pool from '../../conexion.db.mjs'

// obtener los datos
export async function obtenerProductos(){
    const resultado = await pool.query('SELECT * FROM productos')
    return resultado.rows
}

export function obtenerProductoPorId(){
    
}