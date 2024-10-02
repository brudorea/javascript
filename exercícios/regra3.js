/**
 * EXERCÍCIO - Regra de 3
 * @author Bruno Henrique 
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')

// variáveis
let x, y, valor

console.clear()
console.log("Regra de 3")
console.log("x% de y = valor")

// entrada 
// No console, entradas(input) númericas precisam ser convertidas com uso do método Number() 
x = Number (input.question("Digite o valor de x: "))
y = Number (input.question("Digite o valor de y: "))


// processamento
valor = (x * y) / 100

// saída 
console.log(`O valor obtido é: ${x}% de ${y} = ${valor.toFixed(2)}`)

