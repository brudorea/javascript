/**
 * Data automática no rodapé
 * @author Bruno Henrique 
 */

function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year:  'numeric',
        month: 'long',
        day: 'numeric'
    }
    return data.toLocaleDateString('pt-BR', options)
}

// a linha abaixo insere na tag <p> identificada como dataAtual o retorno da função
document.getElementById('dataAtual').innerHTML = obterData()