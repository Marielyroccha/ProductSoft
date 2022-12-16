import { clienteService } from "../service/cliente-service.js"

const formulario =  document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const nomefantasia = evento.target.querySelector('[data-nomefantasia]').value
    const cpf = evento.target.querySelector('[data-cpf]').value
    const endereco = evento.target.querySelector('[data-endereco]').value

    clienteService.criaCliente(nome, nomefantasia, cpf, endereco)
    .then (() => {
        window.location.href = '../telas/cadastro_concluido.html'
    })
})