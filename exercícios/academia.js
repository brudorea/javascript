/**
 * Ficha de um aluno de academia 
 * @author Bruno Henrique 
 */

// variáveis
let nome
let idade
let peso
let altura
let vip
let fcm
let imc

console.clear()

// entrada de dados
nome = "Bruno Henrique"
idade = 27
peso = 68.7
altura = 1.73
vip = true

//processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// saída
console.log("Ficha do aluno")
console.log("___________________________")
console.log(`Nome : ${nome}`)
console.log(`Idade : ${idade}`)
console.log(`Peso : ${peso}`)
console.log(`Altura : ${altura}`)
console.log(`VIP : ${vip}`)
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
