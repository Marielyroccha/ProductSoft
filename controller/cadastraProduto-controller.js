import { ProdutoService } from "../service/produto-service.js"

const formulario =  document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault()
    const descricao = evento.target.querySelector('[data-descricao]').value
    const cdbarras = evento.target.querySelector('[data-cdbarras]').value
    const valorvenda = evento.target.querySelector('[data-valorvenda]').value
    const pesobruto = evento.target.querySelector('[data-pesobruto]').value
    const pesoliquido = evento.target.querySelector('[data-pesoliquido]').value


    ProdutoService.criaProduto(descricao, cdbarras, valorvenda, pesobruto, pesoliquido)
    .then (() => {
        window.location.href = '../telas/cadastroProduto_concluido.html'
    })
})