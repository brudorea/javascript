/**
 * Desafio Carro
 * @author Bruno Henrique
 */

console.clear()

// Criando a classe modelo
class Carro {
    // Atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }

    // Métodos
    criarCarro() {
        console.log("-----------------------------------")
        console.log("   _______ ")
        console.log("  /|_||_\\`.__")
        console.log(" (  _    _ _ \\ ")
        console.log("=`-(_)--(_)-'")
        console.log("-----------------------------------")
        console.log(`Carro de ${this.cor}`)
        console.log(`Ano: ${this.ano}`)
    }

    ligar() {
        console.log(`□ □ □ □ Carro de ${this.cor} ligado!`)
    }

    acelerar() {
        console.log("□ □ □ □ Carro se locomovendo!")
    }

    desligar() {
        console.log("□ □ □ □ Carro desligado!")
    }
}

// Herança
class Aviao extends Carro {
    // Atributos
    constructor(ano, cor, envergadura) {
        super(ano, cor) // Herança
        this.envergadura = envergadura
    }

    // Método 
    criarAviao() {
        console.log("-------------------------------------------")
        console.log("       __|__")
        console.log("  ------(_)------")
        console.log("   __|__|__|__|__")
        console.log(`Aviao ${this.cor}`)
        console.log(`Ano: ${this.ano}`)
        console.log("-------------------------------------------")
    }

    acelerar() {
        console.log("□ □ □ □ # Decolar!")
    }
    // Método para aterrissar o avião
    aterrissar() {

        console.log("._._._._._._._._._._._._._._._._._._._.")
        console.log("□ □ □ □ ☀ Aterrissar!")
    }

}
console.log("--------inicio")
//Instanciando (Criando) um objeto.
const carro1 = new Carro("1978", "vermelho")
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.desligar()

const carro2 = new Carro("2024", "azul")
carro2.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.desligar()


const aviao1 = new Aviao("2018", "Branco", 30)
aviao1.criarAviao()
aviao1.acelerar()
aviao1.aterrissar()


