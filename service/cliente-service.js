
const listaClientes = () => {                             
    // return fetch (`http://localhost:3000/profile`)
    return fetch (`http://localhost:4000/client`)
    .then (resposta => {
        if(resposta.ok) {
            return resposta.json()
        } else {
            throw new Error('Não foi possivel listar os clientes! ')
        }
    })
}

const criaCliente = (nome, nomefantasia, cpf, endereco) => {
    return fetch (`http://localhost:4000/novoCliente`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            nomefantasia: nomefantasia,
            cpf: cpf,
            endereco: endereco
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json
        } else {
            throw new Error('Não foi possivel Cadastrar os clientes! ')
        }
    })

}

const removeCliente = (id) => {
    return fetch (`http://localhost:4000/client/${id}`, {
        method: 'DELETE'
    }).then ( resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possivel Excluir o cliente! ')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch (`http://localhost:4000/client/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        } else {
            throw new Error('Não foi possivel detalhar os clientes! ')
        }
    })
}

const atualizaCliente = (id, nome, nomefantasia, cpf, endereco) => {
    return fetch (`http://localhost:4000/atualizar/tarefa/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify ({
            nome: nome,
            nomefantasia: nomefantasia,
            cpf: cpf,
            endereco: endereco
        }) 
    }) 
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        } else {
            throw new Error('Não foi possivel atualizar o cliente! ')
        }
    })

}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

