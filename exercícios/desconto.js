/**
 * Calculo desconto
 * @author Bruno Henrique 
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')

// variáveis 
let totalDesconto, total, desconto

// entrada
total, desconto 
total = Number (input.question("Digite o valor total da compra: "))
desconto = Number (input.question("Digite o valor do desconto em %: "))

// processamento
totalDesconto = total - ((desconto * total) / 100)

// saída 
totalDesconto
console.log(`O valor do desconto é: R$ ${totalDesconto.toFixed(2)}`)

