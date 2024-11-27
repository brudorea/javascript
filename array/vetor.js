/**
 * Estrutura de dados 
 * Array
 * @author Bruno Henrique
 */
//                 [0]     [1]     [2]     [3]     [4]
let alunosEM1 = ["Tania","Pedro","Maria","João","Viviane"]

console.clear()
console.log(typeof(alunosEM1))
console.log(alunosEM1)
// O comando abaixo identifica o número de elementos de um vetor
console.log(alunosEM1.length)
// O comando abaixo exibe o índice do array associado ao elemento
console.table(alunosEM1) // Gerar a tabela da turma
console.log(alunosEM1[2]) // Aqui você escolhe qual aluno vai aparecer através do []
// O comando abaixo adiciona um elemento ao vetor 
alunosEM1.push("Jorge") // Adicionar outro aluno a lista
console.table(alunosEM1)
// Para alterar um elemento do vetor, é necessário usar o índice 
alunosEM1[3] = "Joãozinho" // Modificar um nome que já está na lista
console.table(alunosEM1)
// O comando abaixo remove um elemento do vetor
alunosEM1.pop() // Esse comando remove o último elemento da lista
console.table(alunosEM1)
// Removendo um elemento específico sem alterar o índice, neste caso, é necessário fornecer o índice do elemento a ser excluído
delete alunosEM1[1]
console.table(alunosEM1)

