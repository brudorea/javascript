/**
 * Fundamentos da POO 
 * Encapsulamento (segurança)
 * @author Bruno Henrique
 */

console.clear() // Limpa o console para facilitar a visualização da execução do programa.

class User { // Declara a classe 'User' que representa um usuário no sistema.
    // Atributos
    constructor(login, senha) { // Método construtor para inicializar os atributos de um usuário.
        this.login = login // Inicializa o atributo público 'login' com o valor recebido.
        // Encapsulamento (O "_" indica que a variável é privada, apenas acessível indiretamente).
        let _senha = senha // Define a variável privada '_senha', não acessível diretamente fora da classe.
        this.getSenha = () => _senha // Define um método getter para permitir a leitura da senha.
        this.setSenha = (novaSenha) => _senha = novaSenha // Define um método setter para permitir a modificação da senha.
    }

    // Método
    logar() { // Método para verificar e exibir as credenciais do usuário.
        console.log("_________________________________") // Exibe um separador no console.
        console.log(`Usuário ${this.login}`) // Exibe o login do usuário.
        console.log(`Senha ${this.getSenha()}`) // Exibe a senha do usuário (usando o método getter).
        if (this.login === 'admin' && this.getSenha() === '123@senac') { // Verifica se o login e a senha correspondem às credenciais corretas.
            console.log("Usuário autenticado") // Exibe uma mensagem de sucesso caso as credenciais sejam válidas.
        } else { // Caso contrário:
            console.log("Usuário e/ou senha inválido(s)") // Exibe uma mensagem de erro.
        }
    }
}

/**** Sistema  ****/
// Criando um novo usuário

const user1 = new User("admin", "1234") // Cria uma instância da classe 'User' com login "admin" e senha "1234".
user1.logar() // Chama o método 'logar()' para verificar as credenciais do usuário 'user1' (as credenciais não são válidas ainda).
user1.setSenha("123@senac") // Altera a senha do usuário para "123@senac" usando o método setter.
user1.logar() // Chama novamente o método 'logar()' para verificar as credenciais (agora válidas).
