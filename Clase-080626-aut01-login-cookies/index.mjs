import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser'

const PUERTO = process.env.PUERTO || 4000;

////////////////
const credenciales = {
    usuario: 'admin',
    pass: 'pepelocote'
}
////////////////
const app = express();
app.use(cookieParser('misecreto'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

function chkCookies(req, res, next){
    const cookie = req.signedCookies['sesionId']
    if (cookie === '123'){
        return next()
    }
    else{
        //res.status(403).json({mensaje: 'Credenciales incorrectas'})
        res.redirect('/login')
    }
}

app.use('/admin', chkCookies, express.static('./fronts/front-admin'))
app.use('/login',express.static('./fronts/front-login'))
app.post('/autenticar', (req, res)=>{
    console.log(req.body)
    const {usuario, pass} = req.body
    if(credenciales.usuario === usuario && credenciales.pass === pass){
        res.cookie('sesionId', '123', {
            signed: true,
            sameSite: 'lax',
            httpOnly: true,
            secure: true
        })
        return res.redirect('/admin')
    }
    res.json({
        mensaje: 'Holordium'
    })
})


app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});

