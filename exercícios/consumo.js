/**
 * EXERCÍCIO - Calculo da consumo de combustível
 * @author Bruno Henrique 
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')

// variáveis
let distancia, litros, media

console.clear()
console.log("Cálculo do consumo de combustível")

// entrada 
// No console, entradas(input) númericas precisam ser convertidas com uso do método Number() 
distancia = Number (input.question("Digite a distancia percorrida(KM): "))
litros = Number (input.question("Digite a quantidade de combustivel consumido(L): "))


// processamento
media = distancia / litros 

// saída 
console.log(`A média de litros consumida é: ${media.toFixed(1)} Km/l`)



