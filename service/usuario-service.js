

const listarUsuario = () => {                            
    return fetch (`http://localhost:4000/user`)
    .then (resposta => {
        if(resposta.ok) {
            return resposta.json()
        } else {
            throw new Error('Não foi possivel listar os Usuários! ')
        }
    })
}

const cadastraUsuario = (nome, email, senha) => {
    return fetch (`http://localhost:4000/novoUsuario`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json
        } else {
            throw new Error('Não foi possivel Cadastrar o Usuário! ')
        }
    })

}


export const usuarioService = {
    cadastraUsuario,
    listarUsuario
}

