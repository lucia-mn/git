document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("formulario").addEventListener("submit", function(evento){

        evento.preventDefault();

        if (!validarNombre()) return;
        if (!validarApellido()) return;

        document.getElementById("formulario").submit();
    });

});


