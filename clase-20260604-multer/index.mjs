import express from 'express'
import multer from 'multer'
import { nanoid } from 'nanoid'
import mime from 'mime-types'
const PUERTO = 3000

const app = express()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './archivos')
  },
  filename: function (req, file, cb) {
    const nuevoNombre = nanoid() + '.' + mime.extension(file.mimetype)
    cb(null, nuevoNombre)
  }
})

const subirArchivo = multer({
    storage: storage
    //dest: './archivos'
})
const gestionArchivo = subirArchivo.single('archivo')

app.use('/admin', express.static('./front-web'))
app.use('/archivos', express.static('./archivos'))

app.post('/subir-archivo', (req, res) => {
    gestionArchivo(req, res, (error) => {
        if (error) return res.status(500).json({ error: 'Error en el servidor' })
        console.log(req.file)
        return res.json({ mensaje: 'Registro Recibido' })
    })
})

app.listen(PUERTO)