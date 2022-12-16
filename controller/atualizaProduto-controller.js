import { ProdutoService } from '../service/produto-service.js';    

( async () => {
    const pegaUrl = new URL(window.location)
    
    const id = pegaUrl.searchParams.get('id')
    
    const inputDescricao = document.querySelector('[data-descricao]')
    const inputcdbarras = document.querySelector('[data-cdbarras]')
    const inputValorVenda = document.querySelector('[data-valorvenda]')
    const inputPesoBruto = document.querySelector('[data-pesobruto]')
    const inputPesoLiquido = document.querySelector('[data-pesoliquido]')
    
    try{
        const dados = await ProdutoService.buscarUmProduto(id)
            inputDescricao.value = dados[0].descricao
            inputcdbarras.value = dados[0].cdbarras
            inputValorVenda.value = dados[0].valorvenda 
            inputPesoBruto.value = dados[0].pesobruto 
            inputPesoLiquido.value = dados[0].pesoliquido 
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        try {
            await ProdutoService.atualizaProduto(id, inputDescricao.value, inputcdbarras.value, inputValorVenda.value, inputPesoBruto.value, inputPesoLiquido.value)
            window.location.href = "../telas/edicaoProduto_concluida.html"
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    })
})()
