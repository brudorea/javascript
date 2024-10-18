/**
 * Voto eleitoral 
 * @author Bruno Henrique 
 */


const color = require('colors')

// variáveis
let idade

console.clear()
console.log("Verificar a obrigatoriedade de votar")

//entrada
idade = Number(input.question("Por favor, digite a sua idade: "))

//processamento 

if (idade < 16) {
    console.log("PROIBIDO votar!".red)
} else if (idade === 17 || idade === 16 || idade > 71) {
    console.log("Voto facultativo!".yellow)
} else {
    console.log("Voto OBRIGATÓRIO!".green)
}
