//imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()


// Config json response
app.use(express.json())

// Abrir rota publica
app.get('/', (req,res) =>{
    res.status(200).json({msg: "TERRANNO"})
})


// Registrar Usuario
app.post('/auth/register', async(req, res) => {
        const{ name, email, password, confirmpassword } = req.body
        
        //validação
        if(!name){
            return res.status(422).json({ msg: "O nome é obrigatorio"})
        }
    }
)

// Credenciais 
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS


mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.csmqyq4.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
    app.listen(3000)
    console.log('Conectado')
})
.catch((err) => console.log(err))


