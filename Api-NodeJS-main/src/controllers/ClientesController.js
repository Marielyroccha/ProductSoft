const database = require('../database/connection')

class ClientesController {
    novoCliente(request, response){
        const {nome, nomefantasia, cpf, endereco} = request.body
            
        console.log(nome, nomefantasia, cpf, endereco);

        database.insert({nome,nomefantasia,cpf,endereco}).table("clientes").then(data=>{
            console.log(data);
            response.json({message:"Cliente criado com sucesso!"})
        }).catch(error=>{
            console.log(error);
        })
    }

    listarCliente(request, response){
        database.select("*").table("clientes").then(client=>{
            console.log(client);
            response.json(client)
        }).catch(error=>{
            console.log(error);
        })
    }

    buscarUmCliente(request, response){
        const id = request.params.id;

        database.select("*").table("clientes").where({id:id}).then(umaTarefa=>{
            console.log(id);
            response.json(umaTarefa)
        }).catch(error=>{
            console.log(error);
            response.json({message:"ID não encontrado!"})
        })
    }

    deletarCliente(request, response){
        const id = request.params.id

        database.delete("*").table("clientes").where({id:id}).then(client=>{
            console.log(client);
            response.json(client)
        }).catch(error=>{
            console.log(error);
        })
    }

    atualizaCliente(request, response){
        const id = request.params.id;
        const {nome, nomefantasia, cpf, endereco} = request.body;

        database.where({id:id}).update({nome:nome, nomefantasia:nomefantasia, cpf:cpf, endereco:endereco}).table("clientes").then(atualizar=>{
            console.log(atualizar);
            response.json({message:"Cliente atualizado com sucesso!"})
        }).catch(error=>{
            console.log(error);
        })
    }
}

module.exports = new ClientesController()