/**
 * Desafio Carro + Avião
 * @author Bruno Henrique
 */

console.clear() // Limpa o console antes de executar o código para melhor visualização.

// Criando a classe modelo
class Carro {
    // Atributos
    constructor(ano, cor) { // Método construtor que inicializa os atributos 'ano' e 'cor' do carro.
        this.ano = ano // Atributo 'ano' do carro.
        this.cor = cor // Atributo 'cor' do carro.
    }

    // Métodos
    criarCarro() { // Método para exibir no console a representação do carro e suas características.
        console.log("-----------------------------------")
        console.log("   _______ ")
        console.log("  /|_||_\\`.__")
        console.log(" (  _    _ _ \\ ")
        console.log("=`-(_)--(_)-'")
        console.log("-----------------------------------")
        console.log(`Carro de ${this.cor}`) // Exibe a cor do carro.
        console.log(`Ano: ${this.ano}`) // Exibe o ano do carro.
    }

    ligar() { // Método para simular ligar o carro.
        console.log(`□ □ □ □ Carro de ${this.cor} ligado!`)
    }

    acelerar() { // Método para simular o movimento do carro.
        console.log("□ □ □ □ Carro se locomovendo!")
    }

    desligar() { // Método para simular desligar o carro.
        console.log("□ □ □ □ Carro desligado!")
    }
}

// Herança
class Aviao extends Carro { // A classe Aviao herda os atributos e métodos da classe Carro.
    // Atributos
    constructor(ano, cor, envergadura) { // Método construtor que inicializa os atributos 'ano', 'cor' e 'envergadura' do avião.
        super(ano, cor) // Chama o construtor da classe 'Carro' para inicializar 'ano' e 'cor'.
        this.envergadura = envergadura // Atributo adicional exclusivo da classe Aviao.
    }

    // Método 
    criarAviao() { // Método para exibir no console a representação do avião e suas características.
        console.log("-------------------------------------------")
        console.log("       __|__")
        console.log("  ------(_)------")
        console.log("   __|__|__|__|__")
        console.log(`Aviao ${this.cor}`) // Exibe a cor do avião.
        console.log(`Ano: ${this.ano}`) // Exibe o ano do avião.
        console.log(`Envergadura: ${this.envergadura}`) // Exibe a envergadura do avião.
        console.log("-------------------------------------------")
    }

    acelerar() { // Método para simular o movimento do avião (sobrescreve o método da classe Carro).
        console.log("□ □ □ □ # Decolar!")
    }

    aterrissar() { // Método exclusivo para simular o avião aterrissando.
        console.log("._._._._._._._._._._._._._._._._._._._.")
        console.log("□ □ □ □ ☀ Aterrissar!")
    }
}

console.log("--------inicio") // Exibe no console o início da execução do programa.

// Instanciando (Criando) um objeto.
const carro1 = new Carro("1978", "vermelho") // Cria uma instância da classe Carro com ano "1978" e cor "vermelho".
carro1.criarCarro() // Chama o método para criar e exibir as características do carro.
carro1.ligar() // Chama o método para ligar o carro.
carro1.acelerar() // Chama o método para acelerar o carro.
carro1.desligar() // Chama o método para desligar o carro.

const carro2 = new Carro("2024", "azul") // Cria outra instância da classe Carro com ano "2024" e cor "azul".
carro2.criarCarro() // Exibe as características do carro.
carro1.ligar() // Liga o carro (nota: o carro1 é ligado novamente, o carro2 não é usado corretamente aqui).
carro1.acelerar() // Acelera o carro1 novamente.
carro1.desligar() // Desliga o carro1 novamente.

const aviao1 = new Aviao("2018", "Branco", 30) // Cria uma instância da classe Aviao com ano "2018", cor "Branco" e envergadura "30".
aviao1.criarAviao() // Chama o método para criar e exibir as características do avião.
aviao1.acelerar() // Chama o método para decolar o avião.
aviao1.aterrissar() // Chama o método para aterrissar o avião.
