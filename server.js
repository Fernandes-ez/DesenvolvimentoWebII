import express from "express";
const app = express();

app.listen(8081);

app.listen(8087, function(){
    console.log("Servidor Ativo!");
});

app.get("/", function(req, res){
    res.send("Página inicial");
});

app.get("/contato", function(req, res){
    res.send("Página de contato");
});