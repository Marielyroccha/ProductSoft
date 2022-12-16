import { ProdutoService } from "../service/produto-service.js";

const criaNovaLinha = (id, descricao, cdbarras, valorvenda, pesobruto, pesoliquido) => {                           
    const linhaNovoProduto = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${id}</td>
            <td>${descricao}</td>
            <td>${cdbarras}</td>
            <td>${valorvenda}</td>
            <td>${pesobruto}</td>
            <td>${pesoliquido}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_produto.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>`

        
        linhaNovoProduto.innerHTML = conteudo
        linhaNovoProduto.dataset.id = id

        return linhaNovoProduto
}

const tabela = document.querySelector('[data-table]')      

tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if (ehBotaoDeletar) {
        try {
            const linhaProduto = evento.target.closest('[data-id]')
            let id = linhaProduto.dataset.id
            await ProdutoService.deletarProduto(id)
            linhaProduto.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

const render = async () => {
    try {
        const listaProduto = await ProdutoService.listaProduto()
            listaProduto.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.id, elemento.descricao, elemento.cdbarras, elemento.valorvenda, elemento.pesobruto, elemento.pesoliquido)) 
        })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()