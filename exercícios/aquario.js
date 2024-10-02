/**
 * Cálculo do volume de um áquario 
 * @author Bruno Henrique
 */

const input = require ('readline-sync')

// variáveis 
let comprimento, largura, altura, volume 

console.clear()
console.log("Cálculo do volme de um aquário")

// entrada 
comprimento = Number(input.question("Digite o comprimento em cm: "))
largura = Number(input.question("Digite a largura em cm: "))
altura = Number(input.question("Digite a altura em cm: "))

// processamento
volume = (comprimento * largura * altura) / 1000

// saida
console.log(`Volume do aquário: ${volume.toFixed(2)} litros`)
