import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (id, nome, nomefantasia, cpf, endereco) => {                           
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${id}</td>
            <td>${nome}</td>
            <td>${nomefantasia}</td>
            <td>${cpf}</td>
            <td>${endereco}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>`

        
        linhaNovoCliente.innerHTML = conteudo
        linhaNovoCliente.dataset.id = id

        return linhaNovoCliente
        console.log(linhaNovoCliente);
}

const tabela = document.querySelector('[data-tabela]')      

tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if (ehBotaoDeletar) {
        try {
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

const render = async () => {
    try {
        const listaClientes = await clienteService.listaClientes()
            listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.id, elemento.nome, elemento.nomefantasia, elemento.cpf, elemento.endereco)) 
        })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()