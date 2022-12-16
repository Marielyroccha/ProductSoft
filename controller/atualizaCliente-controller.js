import { clienteService } from '../service/cliente-service.js';    

( async () => {
    const pegaUrl = new URL(window.location)
    
    const id = pegaUrl.searchParams.get('id')
    
    const inputNome = document.querySelector('[data-nome]')
    const inputNomeFantasia = document.querySelector('[data-nomefantasia]')
    const inputCpf = document.querySelector('[data-cpf]')
    const inputEndereco = document.querySelector('[data-endereco]')
    
    try{
        const dados = await clienteService.detalhaCliente(id)
            inputNome.value = dados[0].nome
            inputNomeFantasia.value = dados[0].nomefantasia
            inputCpf.value = dados[0].cpf 
            inputEndereco.value = dados[0].endereco 
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        try {
            await clienteService.atualizaCliente(id, inputNome.value, inputNomeFantasia.value, inputCpf.value, inputEndereco.value)
            window.location.href = "../telas/edicao_concluida.html"
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    })
})()
