/**
 * Cálculo do troco
 * @author Bruno Henrique 
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')

// variáveis
let troco, valorPago, total 

// entrada
total = Number (input.question("Digite o valor total da compra: "))
valorPago = Number (input.question("Digite o valor que o cliente pagou: "))
 

// processamento
troco = (valorPago - total) 

// saída 
console.log(`O valor que receberá de troco é: R$ ${troco.toFixed(2)}`)
