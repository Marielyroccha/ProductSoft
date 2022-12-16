import { usuarioService } from "../service/usuario-service.js";

const render = async () => {
    try {                
            const submitButton = document.querySelector('.botao')
            const listarUsuario = await usuarioService.listarUsuario()
                
            listarUsuario.forEach((elemento, index) => {
                    
                const emailInput = document.querySelector('[data-email]')
                const senhaInput = document.querySelector('[data-senha]')
                    
                    submitButton.addEventListener ("click", async (e)  => {
                        
                        const emailValue = emailInput.value 
                        const senhaValue = senhaInput.value
                    
                        if(elemento.email == emailValue && elemento.senha == senhaValue){
                            window.location.href = '../telas/logado.html'
                            e.preventDefault()
                        }
                }) 
            })
        }

        catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
}

render()