/**
 * Uso do color-scheme para modificar o tema (claro-escuro)
 * Uso do "local storange" para armazenamento no banco de dados no navegador
 * @author Bruno Henrique 
 */

const html = document.querySelector('html')
// Uso do banco de dados do navegador
const tema = localStorage.getItem('mode') 

// Capturar e implementar a preferência do usuário (light ou dark)
if (tema === "light") {

}

function light() {
    html.style.setProperty("color-scheme", "light")
    localStorage.setItem("tema", "light")
}

function dark() {
    html.style.setProperty("color-scheme", "dark")
    localStorage.setItem("tema", "dark")
}

function auto() {
    html.style.setProperty("color-scheme", "light dark")  
    localStorage.removeItem("tema")  
}
