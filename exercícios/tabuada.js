/**
 * Tabuada
 * @author Bruno Henrique
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')

// variável
let valor

console.clear()
console.log("___Tabuada___")
valor = Number(input.question("Digite o valor da tabuada: "))
for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
}
