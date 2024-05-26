document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    // Crear el cuerpo del correo
    const emailBody = `
        Nombre Real: ${name}\n
        E-mail: ${email}\n
        Teléfono: ${phone}
    `;

    // Enviar el correo
    window.location.href = `mailto:ligadiamanteoficial@gmail.com?subject=Registro de Quiniela&body=${encodeURIComponent(emailBody)}`;

    // Mostrar el enlace de WhatsApp
    document.getElementById('whatsapp-link').style.display = 'block';
});
