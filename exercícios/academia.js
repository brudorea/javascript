/**
 * App calculadora de saúde
 * @author Bruno Henrique 
 */

const input = require('readline-sync')
const color = require('colors')

// variáveis
let nome, idade, peso, altura, fcm, imc, consumo

// limpar a tela
console.clear()

// banner 
console.log(" _    _            _ _   _        _____      _            _       _".magenta)             
console.log("| |  | |          | | | | |      / ____|    | |          | |     | |".red)            
console.log("| |__| | ___  __ _| | |_| |__   | |     __ _| | ___ _   _| | __ _| |_ ___  _ __ ".green)
console.log("|  __  |/ _ \\/ _` | | __| '_ \\  | |    / _` | |/ __| | | | |/ _` | __/ _ \\| '__|".yellow)
console.log("| |  | |  __/ (_| | | |_| | | | | |___| (_| | | (__| |_| | | (_| | || (_) | |".cyan)
console.log("|_|  |_|\\___|\\__,_|_|\\__|_| |_|  \\_____\\__,_|_|\\___|\\__,_|_|\\__,_|\\__\\___/|_|".magenta)        
              
console.log("")

// entrada de dados
nome = input.question("Digite seu nome: ")
idade = Number(input.question("Digite sua idade: "))
peso = Number(input.question("Digite seu peso em KG: "))
altura = Number(input.question("Digite sua altura em metros: "))

//processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso *0.035

// saída
console.log("Ficha do aluno")
console.log("___________________________")
console.log(`Nome : ${nome}`)
console.log(`Idade : ${idade}`)
console.log(`Peso : ${peso}`)
console.log(`Altura : ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

//tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc < 25) {
    console.log("Peso normal (Parabens!)")
} else if (imc < 30) {
    console.log("Levemente acima do peso")
} else if (imc < 35) {
    console.log("Obesidade Grau I")
} else if (imc < 40) {
    console.log("Obesidade Grau II (Severa)")
} else {
    console.log("Obesidade Grau III (Mórbida)")
}

//Consumo de água
console.log(`Consumir por dia: ${consumo.toFixed(3)}`)