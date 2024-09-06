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
        nome: req.body.nome
    }).then(function(){
        console.log("Cadastrado com sucesso")
        res.send("Cadastrado com sucesso")
    })
})
app.get("/", function(req, res){
    res.render("primeira_pagina")
})
app.get("/segunda", function(req, res){
    res.render("segunda_pagina")
})
app.listen(8081, function(){
    console.log("Servidor funfando")
})

