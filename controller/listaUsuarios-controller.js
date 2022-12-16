import { usuarioService } from "../service/usuario-service.js";

const criaNovaLinha = (email, senha) => {                           
    const linhaNovoUsuario = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${id}</td>
            <td>${email}</td>
            <td>${senha}</td>`

        
        linhaNovoUsuario.innerHTML = conteudo
        linhaNovoUsuario.dataset.id = id

        return linhaNovoUsuario
        console.log(linhaNovoUsuario);
}

const tabela = document.querySelector('[data-tabela]')      

const render = async () => {
    try {
        const listarUsuario = await usuarioService.listarUsuario()
            listarUsuario.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.id, elemento.email, elemento.senha)) 
        })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()