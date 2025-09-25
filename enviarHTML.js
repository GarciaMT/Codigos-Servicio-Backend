// Codigo del JavaScript que conecta con HTML
const formulario = document.getElementById('form');

formulario.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageBox = document.getElementById('message-box');

    messageBox.textContent = 'Enviando...';
    messageBox.className = '';

    try {
        // Enviar datos al backend con Axios
        const response = await axios.post('http://localhost:3500/usuario/add', {
            nombre,
            email,
            password
        });

        messageBox.textContent = response.data.message;
        console.log(response.data);

    } catch (error) {
        console.error('Error al enviar los datos:', error);

        if (error.response) {
            messageBox.textContent = 'Error: ' + (error.response.data.error || 'No se pudo registrar el usuario.');
        } else if (error.request) {
            messageBox.textContent = 'Error: No hay respuesta del servidor.';
        } else {
            messageBox.textContent = 'Error: ' + error.message;
        }

        messageBox.className = 'error';
    }
});
