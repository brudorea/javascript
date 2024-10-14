/**
 * EXERCÍCIO - Calculo do álcool x gasolina 
 * @author Bruno Henrique 
 */

const input = require('readline-sync')

let alcool, gasolina

console.clear()
console.log("Cálculo do álcool x gasolina")

alcool = Number (input.question("Digite o valor do Alcool (L): R$"))
gasolina = Number (input.question("Digite o valor da Gasolina (L): R$"))

 
if (alcool < 0.7 * gasolina ) {
    console.log("Abastecer com alcool")
} else {
    console.log("Abastecer com gasolina")
}

console.log(alcool/gasolina)