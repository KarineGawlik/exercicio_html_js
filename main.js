const form = document.getElementById('form-deposito'); 
const btn = document.getElementById('btn-depsitar'); 

function validaCampo (campoA, campoB) {
    if (parseInt.campoA < parseInt.campoB) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB'); 
    const mensagemSucesso = `Muito obrigado! </br> Seu dinheiro foi depositado com sucesso! </br> R$${campoA.value},00 para a Conta A e R$${campoB.value},00 para a conta B.`
    const errorMessage = `O valor do depósito para a conta B deve ser maior do que para a conta A.  </br> Por favor, insira outro valor!`
    if (!validaCampo) {
        const containerErrorMessage = document.querySelector('.error-message'); 
        containerErrorMessage.innerHTML = errorMessage; 
        containerErrorMessage.style.display = 'block'
        campoA.value = ''; 
        campoB.value = ''; 

    } else {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso; 
        containerMensagemSucesso.style.display = 'block';
        campoA.value = ''; 
        campoB.value = ''; 
    }
})

console.log(form);