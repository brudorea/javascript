/**
 * PDV
 * @author Bruno Henrique
 */

const input = require(`readline-sync`)

// variáveis 
let total, desconto, totalDesconto, valorPago, valorDesconto ,troco

console.clear()

console.log("   ___  ___  _  __")
console.log("  / _ \\/ _ \ | //")
console.log(" / ___/ // / |/ /")
console.log("/_/  /____/|___/")
console.log("")

// entrada 1
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor total do desconto em %: "))

// processamento 1
valorDesconto = total - (desconto * total) / 100

// processamento 2
totalDesconto = total - valorDesconto

// saída 1
console.log("")
console.log("-----------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log("")

// entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

// processamento 3
troco = valorPago - totalDesconto

// saída 2
console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)
console.log("-----------------------------")


                

                



