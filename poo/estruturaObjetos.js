/**
 * Estrutura de dados - Objetos
 * @author Bruno Henrique
 */

console.clear()

const funcionario1 = {}
console.log(typeof(funcionario1))
// Adicionar dados e estrutura
funcionario1.nome = "Bruno"
funcionario1.cargo = "Estudante"
funcionario1.email = "bruno@senac.com.br"
funcionario1.salario = 10000
funcionario1.insta = "@bhd"
// Listar os dados da estrutura
console.log(funcionario1)
console.log(funcionario1.cargo)
// Modificar os dados da estrutura
funcionario1.nome = "Bruno Henrique"
console.log(funcionario1)
// Excluir dados da estrutura 
delete funcionario1.insta 
console.log(funcionario1)

const funcionario2 = {
    nome: "Taylor Swift",
    cargo: "cantora e compositora",
    email: "theerastour@ts.com",
    salario: 2000000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Palco The Eras",
    cidade: "Harrisburg",
    estado: "Pensilvania"
}

console.log(endereco1)

const funcionario3 = {
    nome: "Naruto Uzumaki",
    cargo: "Hokage",
    email: "admhokage@konoha.com",
    salario: 40000,
    ...endereco1
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Mikasa Arckerman",
    cargo: "Guerreira",
    email: "muralhasadm@attackontitan.com",
    salario: 7000,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Homem Imaginário",
    cargo: "Síndico",
    email: "homem@invisivel.com.br",
    salario: 1500,
    armadura: {
        versao: "Mark II",
        ano: 2022,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("📣")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() // Executar a função interna da estrutura