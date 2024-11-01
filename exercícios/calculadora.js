/**
 * Desenvolvimento de uma calculadora
 * @author Bruno Henrique 
 */

const input = require ('readline-sync')

let a, b, opcao

do {
console.clear()
console.log(" _____     _         _       _             ")
console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")
console.log("Calculadora")

a = Number(input.question("Digite o primeiro numero: "))
b = Number(input.question("Digite o segundo numero: "))

console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Calcular a %")

opcao = Number(input.question("Digite a opcao desejada: "))


switch (opcao) {
    case 1: 
        somar (a, b)
        break
    case 2: 
        subtrair (a, b)
        break    
    case 3: 
        multiplicação (a, b)
        break    
    case 4:
        dividir (a, b)
        break    
    case 5:
        porcentagem (a, b)
        break
    default: 
        console.log("Opcao inválida")
        break;
}
 

// Funções simples não atribuidas
function somar (a, b) {
    return console.log(`A soma de: ${a} + ${b} = ${a + b}`)
}

function subtrair (a, b) {
    return console.log(`A subtração de: ${a} - ${b} = ${a - b}`)
}

function multiplicação (a, b) {
    return console.log(`A multiplicação de: ${a} * ${b} = ${a * b}`)
}

function dividir (a, b) {
    return console.log(`A divisão de: ${a} / ${b} = ${a / b}`)
}

function porcentagem (a, b) {
    return console.log(`A porcentagem de: ${a} % ${b} = ${(a * b) /100}`)
 
} opcao = input.question("Deseja jogar novamente (s/n) ")

} while (opcao === "s") 








 

