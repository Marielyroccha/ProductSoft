const database = require('../database/connection')

class ProdutoController {
    criaProduto(request, response){
        const {descricao, cdbarras, valorvenda, pesobruto, pesoliquido} = request.body
            
        console.log(descricao, cdbarras, valorvenda, pesobruto, pesoliquido);

        database.insert({descricao, cdbarras, valorvenda, pesobruto, pesoliquido}).table("produtos").then(data=>{
            console.log(data);
            response.json({message:"Produto criado com sucesso!"})
        }).catch(error=>{
            console.log(error);
        })
    }

    listaProduto(request, response){
        database.select("*").table("produtos").then(produto=>{
            console.log(produto);
            response.json(produto)
        }).catch(error=>{
            console.log(error);
        })
    }

    buscarUmProduto(request, response){
        const id = request.params.id;

        database.select("*").table("produtos").where({id:id}).then(umProduto=>{
            console.log(id);
            response.json(umProduto)
        }).catch(error=>{
            console.log(error);
            response.json({message:"ID não encontrado!"})
        })
    }

    deletarProduto(request, response){
        const id = request.params.id

        database.delete("*").table("produtos").where({id:id}).then(produto=>{
            console.log(produto);
            response.json(produto)
        }).catch(error=>{
            console.log(error);
        })
    }

    atualizaProduto(request, response){
        const id = request.params.id;
        const {descricao, cdbarras, valorvenda, pesobruto, pesoliquido} = request.body;

        database.where({id:id}).update({descricao:descricao, cdbarras:cdbarras, valorvenda:valorvenda, pesobruto:pesobruto, pesoliquido:pesoliquido}).table("produtos").then(atualizar=>{
            console.log(atualizar);
            response.json({message:"Produto atualizado com sucesso!"})
        }).catch(error=>{
            console.log(error);
        })
    }
}

module.exports = new ProdutoController()