import jwt from 'jsonwebtoken'

const payload = {
    usuario: 'Matias',
    rol: 0
}

//Sign
jwt.sign(payload, 'secretkey', {expiresIn: '1h'}, (error, token)=>{
    if (error){
        return console.log(error)
    }
    console.log(token)

    jwt.verify(token, 'secretkey', (error, payload)=>{
        if(error){
            return console.log(error)
        }
        console.log(payload)
    })
})

//Verify