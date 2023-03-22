const form = document.getElementById('form-deposito'); 

function validaCampo (campoA, campoB) {
    if (parseInt.campoA.value < parseInt.campoB.value) { 
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB'); 

    if (validaCampo) {
        alert('Muito obrigado! Seu dinheiro foi depositado!'); 
    } else {
        alert('O valor do deposito para a Conta B tem que ser maior do que a Casa A! Tente novamente com outro valor!'); 
    }
})

console.log(form); 

