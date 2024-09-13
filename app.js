const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/Post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(function(){
        console.log("Cadastrado com sucesso")
        res.send("Cadastrado com sucesso")
    })
})
app.get("/", function(req, res){
    res.render("primeira_pagina")
})
app.get("/consulta", function(req, res){
    post.findAll().then(function(posts){
        res.render("consultar.handlebars", {posts: posts})
    })
})
app.get("editar", function(req, res){
    
})
app.get("/segunda", function(req, res){
    res.render("segunda_pagina")
})
app.listen(8081, function(){
    console.log("Servidor funfando")
})

