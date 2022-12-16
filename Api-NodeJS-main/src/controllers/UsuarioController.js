const database = require('../database/connection')

class UsuarioController {


    listarUsuario(request, response){
        database.select("*").table("usuarios").then(user=>{
            console.log(user);
            response.json(user)
        }).catch(error=>{
            console.log(error);
        })
    }

    cadastraUsuario(request, response){
        const {nome, email, senha} = request.body
            
        console.log(nome, email, senha);

        database.insert({nome,email,senha}).table("usuarios").then(data=>{
            console.log(data);
            response.json({message:"Usuario criado com sucesso!"})
        }).catch(error=>{
            console.log(error);
        })
    }
}

module.exports = new UsuarioController()