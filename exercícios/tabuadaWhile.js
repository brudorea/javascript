/**
 *  Tabuada usando a estrutura While
 * @author Bruno Henrique 
 */

const input = require('readline-sync')
let valor
let i = 1 // apoio a lógica e laço while

console.clear()
console.log("Tabuada while")

valor = Number(input.question("Digite o valor da tabuada: "))

while (i < 11) {
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}
