function buscarEndereco() {
    // Função para buscar o endereço com base no CEP inserido no formulário
    
    let cep = document.getElementById('cep').value;
    // Obtém o valor do campo de entrada do CEP
    
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`;
    // Constrói a URL para a API do ViaCEP com o CEP fornecido
    
    fetch(urlAPI)
        // Faz uma requisição HTTP GET para a URL da API
    
        .then(response => response.json())
        // Quando a resposta for recebida, converte a resposta para um objeto JSON
        
        .then(dados => {
            // Quando os dados forem recebidos, preenche os campos com os valores retornados
            
            document.getElementById('logradouro').value = dados.logradouro;
            // Preenche o campo "logradouro" com o valor retornado pela API
            
            document.getElementById('bairro').value = dados.bairro;
            // Preenche o campo "bairro" com o valor retornado pela API
            
            document.getElementById('cidade').value = dados.localidade;
            // Preenche o campo "cidade" com o valor retornado pela API
            
            document.getElementById('uf').value = dados.uf;
            // Preenche o campo "uf" com o valor retornado pela API
        })
        
        .catch(error => console.error('Erro ao buscar o endereço:', error));
        // Se ocorrer um erro na requisição, exibe uma mensagem de erro no console
}

function limparFormulario() {
    // Função para limpar o formulário de cadastro
    
    document.getElementById("cadastro").reset();
    // Limpa todos os campos do formulário, retornando aos valores iniciais
    
    document.getElementById("cpfErro").style.display = "none";
    // Esconde a mensagem de erro do CPF
    
    document.getElementById("mensagemSucesso").style.display = "none";
    // Esconde a mensagem de sucesso após a limpeza do formulário
}

function validarCPF() {
    // Função para validar o CPF
    
    let cpf = document.getElementById("cpf").value.replace(/\D/g, '');
    // Obtém o valor do CPF, removendo qualquer caractere não numérico (como pontos e traços)
    
    let cpfErro = document.getElementById("cpfErro");
    // Obtém o elemento HTML onde a mensagem de erro do CPF será exibida

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        // Verifica se o CPF tem exatamente 11 caracteres e se não é um número repetido (ex: 111.111.111.11)
        
        cpfErro.style.display = "block";
        // Exibe a mensagem de erro de CPF inválido
        
        return false;
        // Retorna false para indicar que o CPF não é válido
    }
    
    let soma = 0, resto;
    // Inicializa as variáveis para o cálculo do CPF
    
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    // Calcula a soma dos 9 primeiros dígitos do CPF, multiplicando por pesos decrescentes
    
    resto = (soma * 10) % 11;
    // Calcula o primeiro dígito verificador do CPF
    
    if (resto === 10 || resto === 11) resto = 0;
    // Se o resto for 10 ou 11, considera o dígito como 0
    
    if (resto !== parseInt(cpf.charAt(9))) {
        // Verifica se o primeiro dígito verificador calculado é igual ao dígito do CPF
        
        cpfErro.style.display = "block";
        // Exibe a mensagem de erro se o dígito verificador estiver incorreto
        
        return false;
        // Retorna false, indicando CPF inválido
    }
    
    soma = 0;
    // Reinicia a soma para calcular o segundo dígito verificador
    
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    // Calcula a soma dos 10 primeiros dígitos do CPF, multiplicando por pesos decrescentes
    
    resto = (soma * 10) % 11;
    // Calcula o segundo dígito verificador do CPF
    
    if (resto === 10 || resto === 11) resto = 0;
    // Se o resto for 10 ou 11, considera o dígito como 0
    
    if (resto !== parseInt(cpf.charAt(10))) {
        // Verifica se o segundo dígito verificador calculado é igual ao dígito do CPF
        
        cpfErro.style.display = "block";
        // Exibe a mensagem de erro se o segundo dígito verificador estiver incorreto
        
        return false;
        // Retorna false, indicando CPF inválido
    }
    
    cpfErro.style.display = "none";
    // Se o CPF for válido, esconde a mensagem de erro
    
    return true;
    // Retorna true, indicando que o CPF é válido
}

function validarFormulario(event) {
    // Função para validar o formulário antes de ser enviado
    
    event.preventDefault();
    // Impede o envio do formulário para realizar a validação primeiro
    
    let form = document.getElementById("cadastro");
    // Obtém o formulário com o id "cadastro"
    
    let inputs = form.querySelectorAll("input[required]");
    // Obtém todos os campos de entrada que são obrigatórios
    
    let valido = true;
    // Variável para armazenar o status de validação do formulário (inicialmente é válido)
    
    inputs.forEach(input => {
        // Para cada campo obrigatório do formulário...
        
        if (!input.value.trim()) {
            // Verifica se o campo está vazio (após remover espaços em branco)
            
            valido = false;
            // Se estiver vazio, o formulário não é válido
        }
    });

    if (!validarCPF()) {
        // Se o CPF não for válido, o formulário não é válido
        valido = false;
    }

    if (valido) {
        // Se o formulário for válido...
        
        document.getElementById("mensagemSucesso").style.display = "block";
        // Exibe a mensagem de sucesso indicando que o cadastro foi realizado
        
        form.reset();
        // Limpa o formulário após a validação bem-sucedida
    }
}
