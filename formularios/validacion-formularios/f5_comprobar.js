document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("enviar").addEventListener("click", function(){

        if (!validarNombre()) return;
        if (!validarApellido()) return;

        document.getElementById("formulario").submit();
    });

});

