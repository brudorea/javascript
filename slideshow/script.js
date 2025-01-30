/**
 * Slide show
 * @author Bruno Henrique 
 */

// array(vetor) de imagens
let slides = ["banner1.jpg","banner2.jpg","banner3.jpg"]
let intervalo = 3000 //(3000ms = 1s (1s por imagem))
let indice = 0 // apoio a lógica (indice do array)

//console.log(typeof(slides))//

// Função para troca das imagens
function show() {
    // Capturar o id de banner
    const slide = document.getElementById('slide')

    // Efeito de entrada
    // A estrutura abaixo verifica se foi atribuido a classe (.slideOut) ao identificador #slide
    if(slide.classList.contains('slideOut')) {
        slide.classList.remove('slideOut')
    }
    slide.classList.add('slideIn')

    // Troca de imagem
    setTimeout(() => {
        // soma 1 ao indice do vetor
        indice++
        // se o último slide do vetor for atingido, voltar para o 0
        if (indice >= slides.length) {
            indice = 0
        }
        // substituir a imagem no documento html pela proxima imagem do vetor(img/slides[0] (img/slides[1] (img/slides[2])
        slide.scr = img/${slides[indice]}

    },1000) // Ajuste que se deve sincronizar com css

    // Efeito de saída
    if(slide.classList.contains('slideIn')) {
        slide.classList.remove('slideIn')
    }
    slide.classList.add('slideOut')

    // Intervalo para próxima execução (loop infinito)
    setTimeout(show, intervalo)
}

// executar a função ao iniciar o documento js
show()
