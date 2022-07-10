//imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()


// Config json response
app.use(express.json())


// Models
const User = require('./models/User')

// Abrir rota publica
app.get('/', (req,res) =>{
    res.status(200).json({msg: "TERRANNO"})
})


// Registrar Usuario/Validação
app.post('/auth/register', async(req, res) => {
        const{ name, email, password, confirmpassword } = req.body
        
        //validação
        if(!name){
            return res.status(422).json({ msg: "O nome é obrigatorio"})
        }
        if(!email){
            return res.status(422).json({ msg: "O email é obrigatorio"})
        }
        if(!password){
            return res.status(422).json({ msg: "A senha é obrigatoria"})
        }
        if(password !== confirmpassword){
            return res.status(422).json({ msg: "A confirmação de senha não confere"})
        }
        
        //Checar se o usuario ja existe (verificação pelo email)
        const userExists = await User.findOne({email:email})
        
        if(userExists){
            return res.status(422).json({ msg: "Email ja existe, por favor insira outro email"})
        }

        // criar senha / segurança
        const salt = await bcrypt.genSalt(12) //
        const passwordHash = await bcrypt.hash(password, salt)

        // criar Usuario // instanciando nova classe
        const user = new User({
            name,
            email,
            password: passwordHash
        })

        //Caso aconteça algum erro no servidor, sugestão criar um arquivo log para salvar os erros e monitorar depois

        try{
            await user.save()

            res.status(201).json({ msg: 'Usuario criado com sucesso!'}) //resposta caso de certo
        }catch(error){
            console.log(error)

            res
            .status(500)
            .json({
                msg: 'Ocorreu um erro no servidor, tente novamente em alguns instantes'
            })
        }

})


//Login user
app.post("/auth/login", async(req, res) => {
    const{email, password} = req.body
    
    //validações
    if(!email){
        return res.status(422).json({ msg: "O email é obrigatorio"})
    }
    if(!password){
        return res.status(422).json({ msg: "A senha não confere"})
    }

    //Checar se o usuario ja existe (verificação pelo email)
    const user = await User.findOne({email:email})
        
    if(!user){
        return res.status(422).json({ msg: "Usuario não existe"})
    }

    //checar senha
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword){
        return res.status(422).json({msg: 'Senha invalida!'})
    }

    try{
        const secret = process.env.SECRET
        const token = jwt.sign({
            id: user._id,
        },
        secret,        
        )

        res.status(200).json({msg: 'Autenticação realizad com sucesso', token})

    }catch{
        console.log(error)

        res
        .status(500)
        .json({
            msg: 'Ocorreu um erro no servidor, tente novamente em alguns instantes'
    })
  }
})

//Private Route 

app.get("/user/:id",checkToken, async(req, res) => {
    const id = req.params.id

    //checar se user existe
    const user = await User.findById(id, '-password')

    if(!user){
        return res.status(404).json({msg: 'Usuário não encontrado'})
    }
    res.status(200).json({user})
})

function checkToken(req, res, next){

    const authHeader = req.headers['autorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(404).json({msg: 'Acesso negado'})
    }

    try{

        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()
    }catch(error){
        res.status(400).json({msg: "Token invalido! "})
    }
}

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


