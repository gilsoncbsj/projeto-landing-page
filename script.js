document.addEventListener("DOMContentLoaded", function() {
    let nomeFormulario = document.getElementById("nome");
    let idadeFormulario = document.getElementById("idade");
    let emailFormulario = document.getElementById("email");
    let telefoneFormulario = document.getElementById("telefone");

    const enviar = () => {
        
        let nome = nomeFormulario.value;
        let idade = idadeFormulario.value;
        let email = emailFormulario.value;
        let telefone = telefoneFormulario.value;

        if (nome === "") {
                alert("Nome não identificado. Por favor, conferir");
                return;
        } else if (idade === "") {
            alert("Idade não identificada. Por favor, conferir.")
        } else if (email === "") {
            alert("Email não identificado. Por favor, conferir.")
        } else if (telefone === "") {
            alert("Telefone não identificado. Por favor, conferir.")                
        } else { 
            alert(`${nome} entraremos em contato pelo email ${email}`)
            nomeFormulario.value = "";
            idadeFormulario.value = "";
            emailFormulario.value = "";
            telefoneFormulario.value = "";
        }
    }

    let botaoEnviar = document.getElementById("enviar");
    botaoEnviar.addEventListener("click", enviar);
});
