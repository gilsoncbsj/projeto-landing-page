let nomeFormulario = document.getElementById("nome");
let idadeFormulario = document.getElementById("idade");
let emailFormulario = document.getElementById("email");
let telefoneFormulario = document.getElementById("telefone");

const enviar = () => {
    // Obtendo os valores dos campos de formulário
let nome = nomeFormulario.value;
let idade = idadeFormulario.value;
let email = emailFormulario.value;
let telefone = telefoneFormulario.value;

    // Verificando se o nome foi digitado
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

document.addEventListener("DOMContentLoaded", function() {
    
    let botaoEnviar = document.getElementById("enviar");
    botaoEnviar.addEventListener("click", enviar);
});
