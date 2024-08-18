document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
        this.reset(); // Limpa o formulário após o envio
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
