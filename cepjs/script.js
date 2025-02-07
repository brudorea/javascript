function buscarEndereco() {
    let cep = document.getElementById('cep').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            document.getElementById('logradouro').value = dados.logradouro
            document.getElementById('bairro').value = dados.bairro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('uf').value = dados.uf;
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error));
}

function validarCPF(input) {
    var cpf = input.value.replace(/\D/g, ''); // Remove tudo o que não é número
   
    // Verifica se o CPF tem 11 dígitos e se não é uma sequência de números iguais (ex: 11111111111)
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        input.setCustomValidity("CPF inválido!"); // Mensagem para CPF inválido
        return false;
    }}


// Função para validar o CPF

    // Validação do CPF com o algoritmo
    var soma = 0;
    var resto;
    
    // Validação do primeiro dígito verificador
    for (var i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
        alert("CPF inválido. O primeiro dígito verificador não é válido.");
        return false;
    }

    soma = 0;
    // Validação do segundo dígito verificador
    for (var i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
        alert("CPF inválido. O segundo dígito verificador não é válido.");
        return false;
    }

    alert("CPF válido!");
    return true;

