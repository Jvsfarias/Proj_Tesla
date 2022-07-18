//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

// Config json response
app.use(express.json());

// Config cors
app.use(cors());

// Models
const User = require("./models/User");

// Abrir rota publica
app.get("/", (req, res) => {
  res.status(200).json({ msg: "TERRANNO" });
});

// Registrar Usuario/Validação
app.post("/auth/register/:id", checkAdm, async (req, res) => {
  const { username, password, confirmpassword, adm } = req.body;

  //validação
  if (!username) {
    return res.status(422).json({ msg: "O usuário é obrigatorio" });
  }
  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatoria" });
  }
  if (password !== confirmpassword) {
    return res.status(422).json({ msg: "A confirmação de senha não confere" });
  }

  //Checar se o usuario ja existe (verificação pelo username)
  const userExists = await User.findOne({ username: username });

  if (userExists) {
    return res
      .status(422)
      .json({ msg: "Usuário ja existe, por favor insira outro." });
  }

  // criar senha / segurança
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  // criar Usuario // instanciando nova classe
  const user = new User({
    username,
    password: passwordHash,
    adm,
  });

  //Caso aconteça algum erro no servidor, sugestão criar um arquivo log para salvar os erros e monitorar depois

  try {
    await user.save();

    res.status(201).json({ msg: "Usuario criado com sucesso!" }); //resposta caso de certo
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Ocorreu um erro no servidor, tente novamente em alguns instantes",
    });
  }
});

//Private Route adm
async function checkAdm(req, res, next) {
  const id = req.params.id;
  const adm = await User.findById(id, "-password");
  if (!adm.adm) {
    return res.status(400).json({ msg: "Acesso negado" });
  } else {
    next();
  }
}

//Login user
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;

  //validações
  if (!username) {
    return res.status(422).json({ msg: "O usuário é obrigatorio!" });
  }
  if (!password) {
    return res.status(422).json({ msg: "Usuario ou senha não confere!" });
  }

  //Checar se o usuario ja existe (verificação pelo email)
  const user = await User.findOne({ username: username });

  if (!user) {
    return res.status(422).json({ msg: "Usuario ou senha não confere!" });
  }

  //checar senha
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ msg: "Usuario ou senha não confere!" });
  }

  try {
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );
    const userResp = { username: user.username, id: user._id, adm: user.adm };

    res
      .status(200)
      .json({ msg: "Autenticação realizada com sucesso", token, userResp });
  } catch {
    console.log(error);

    res.status(500).json({
      msg: "Ocorreu um erro no servidor, tente novamente em alguns instantes",
    });
  }
});

//Private Route

app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  //checar se user existe
  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }
  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(404).json({ msg: "Acesso negado" });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (error) {
    res.status(400).json({ msg: "Token invalido! " });
  }
}

// Credenciais
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.csmqyq4.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3001);
    console.log("Conectado");
  })
  .catch((err) => console.log(err));
