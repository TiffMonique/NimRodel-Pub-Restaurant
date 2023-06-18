function showForm(formId) {
    $('#' + formId).toggle();
}

// Resto del código...

$('#contact-form').on('submit', function (event) {
    event.preventDefault();

    const nombre = $('#nombre').val();
    const correo = $('#correo').val();
    const thankYouMessage = 'Muchas gracias ' + nombre + ', hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ' + correo + '.';
    alert(thankYouMessage);

    $('#contact-form')[0].reset();
});

$('#reservation-form').on('submit', function (event) {
    event.preventDefault();

    const nombre = $('#nombre').val();
    const correo = $('#correo2').val();
    const cantidad = $('#cantidad').val();

    const thankYouMessage = 'Estimado: ' + nombre + 'agradecemos por reservar con nosotros. Hemos registrado  ' + cantidad + ' asistentes. Se ha enviado el codigo de confirmacion al correo' + correo + ' Gracias por preferirnos';
    alert(thankYouMessage);

    $('#reservation-form')[0].reset();
});
