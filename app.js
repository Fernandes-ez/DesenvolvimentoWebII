console.log("Teste de log")

var n1 = 10

console.log(n1)

var n2 = 3

console.log(n1+n2)

if(n1 <= 10){
    console.log("N1 é menor igual a 10")
}else{
    console.log("N1 é maior que 10")
}
var soma = require("./operacoes/soma.js")

console.log("Soma = "+soma(10,10))

var subtracao = require("./operacoes/soma.js")

console.log("Subtração = "+subtracao(100,10))

var multiplicacao = require("./operacoes/soma.js")

console.log("Multiplicação = "+multiplicacao(100,10))

var divisao = require("./operacoes/soma.js")

console.log("Divisão = "+divisao(100,10))

