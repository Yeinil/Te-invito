$(document).ready(function() {
    $('#rsvp-form').on('submit', function(e) {
        e.preventDefault();
        var name = $('#name').val();
        if (name) {
            alert('¡Gracias por confirmar tu asistencia, ' + name + '!');
            $('#rsvp-form')[0].reset();
        } else {
            alert('Por favor, introduce tu nombre.');
        }
    });
});