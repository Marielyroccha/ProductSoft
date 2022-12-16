import { usuarioService } from "../service/usuario-service.js"

const formulario =  document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value
    const senha = evento.target.querySelector('[data-senha]').value

    usuarioService.cadastraUsuario(nome, email, senha)
    .then (() => {
        console.log(nome, email, senha);
        window.location.href = '../telas/cadastro_concluido.html'
    })
})