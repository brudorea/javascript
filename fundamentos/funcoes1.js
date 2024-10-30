/**
 * Estudo das funções simples
 * @author Bruno Henrique
 */

hello()
// função literal
function hello() {
    console.log("Hello function")
}
console.log(typeof(hello))

// função atribuida
// funções atribuidas precisam ser criadas no ínicio do código (antes da chamada da função)
const hello2 = function() {
    console.log("hello2 function")
}
hello2()
console.log(typeof(hello2))

//Arrow function (forma simplificada de criar uma função atribuida)
const hello3 = () => {
    console.log("hello3 function")
}
hello3()
console.log(typeof(hello3))

//Arrow function mais simplificada (neste caso, só é possível executar uma linha de código)
const hello4 = _ => console.log("hello4 function")
hello4()
console.log(typeof(hello4))
