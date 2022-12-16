
const listaProduto = () => {                             
    return fetch (`http://localhost:4000/produto`)
    .then (resposta => {
        if(resposta.ok) {
            return resposta.json()
        } else {
            throw new Error('Não foi possivel listar os Produtos! ')
        }
    })
}

const criaProduto = (descricao, cdbarras, valorvenda, pesobruto, pesoliquido) => {
    return fetch (`http://localhost:4000/novoProduto`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            descricao: descricao,
            cdbarras: cdbarras,
            valorvenda: valorvenda,
            pesobruto: pesobruto,
            pesoliquido: pesoliquido
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json
        } else {
            throw new Error('Não foi possivel Cadastrar o Produto! ')
        }
    })

}

const deletarProduto = (id) => {
    return fetch (`http://localhost:4000/produto/${id}`, {
        method: 'DELETE'
    }).then ( resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possivel Excluir o Produto! ')
        }
    })
}

const buscarUmProduto = (id) => {
    return fetch (`http://localhost:4000/produto/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        } else {
            throw new Error('Não foi possivel detalhar o produto! ')
        }
    })
}

const atualizaProduto = (id, descricao, cdbarras, valorvenda, pesobruto, pesoliquido) => {
    return fetch (`http://localhost:4000/atualizar/produto/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify ({
            descricao: descricao,
            cdbarras: cdbarras,
            valorvenda: valorvenda,
            pesobruto: pesobruto,
            pesoliquido: pesoliquido
        }) 
    }) 
    .then( resposta => {
        if(resposta.ok){
            console.log('entrou');
            return resposta.json()
        } else {
            throw new Error('Não foi possivel atualizar o Produto! ')
        }
    })

}

export const ProdutoService = {
    listaProduto,
    criaProduto,
    deletarProduto,
    buscarUmProduto,
    atualizaProduto
}

