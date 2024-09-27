/**
 * Input de dados via terminal
 * Uso do pacote(ou biblioteca) read-line-sync
 * @author Bruno Henrique
 */

// importa o pacote
const input = require('readline-sync')

let nome 

console.clear()

nome = input.question("Digite seu nome: ")
console.log(`Hello ${nome}`)

