/**
 * Cálculo do consumo de água 
 * @author Bruno Henrique 
 */

// importar biblioteca
const input = require('readline-sync')

//variáveis
let consumo, peso

//limpar a tela antes de uma nova entrada
console.clear()

//entrada
peso = Number(input.question("Digite o seu peso em KG: "))

//processamento - fórmula para o cálculo do código
consumo = peso * 0.035 // (35 ml de água por cada kg)

//saída - resultado do processamento
console.log(`Consumo diário de água(ML) deve ser: ${consumo.toFixed(3)}`) //toFixed para deixar limitado à 3 caracteres de ml