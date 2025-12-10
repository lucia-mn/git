document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        let valido = true;

        // errores
        const errores = document.getElementById("errores");
        errores.innerHTML = "";
        document.querySelectorAll(".error").forEach(e => e.textContent = "");
        document.querySelectorAll(".error-input").forEach(e => e.classList.remove("error-input"));

        // nombre
        const nombre = document.getElementById("nombre");
        if (nombre.value.trim().length < 3) {
            valido = false;
            nombre.classList.add("error-input");
            errores.innerHTML += "el nombe tiene que tener minimo tres caracteres";  
        }

        // ap.
        const apellidos = document.getElementById("apellidos");
        if (apellidos.value.trim().length < 3) {
            valido = false;
            apellidos.classList.add("error-input");
            errores.innerHTML += "el apellido tiene que tener minimo tres caracteres";
        }

        // edad
        const edad = document.getElementById("edad");
        const numEdad = parseInt(edad.value);
        if (isNaN(numEdad) || numEdad < 18 || numEdad > 100) {
            valido = false;
            edad.classList.add("error-input");
            errores.innerHTML += "la edad va de 18 a 100";
        }

        // nif
        const nif = document.getElementById("nif");
        const expNif = /^[0-9]{8}-[A-Za-z]$/;
        if (!expNif.test(nif.value.trim())) {
            valido = false;
            nif.classList.add("error-input");
            errores.innerHTML += "el formato es: (12345678-A)";
        }

        // email
        const email = document.getElementById("email");
        const expEmail = /^[^@\s]+@[^@\s]+\.[A-Za-z]{2,}$/;
        if (!expEmail.test(email.value.trim())) {
            valido = false;
            email.classList.add("error-input");
            errores.innerHTML += "email mal introducido";
        }

        // provincia
        const provincia = document.getElementById("provincia");
        if (provincia.value === "0") {
            valido = false;
            provincia.classList.add("error-input");
            errores.innerHTML += "selecciona una provincia";
        }

        // fecha
        const fecha = document.getElementById("fecha");
        const expFecha = /^\d{2}(\/|-)\d{2}(\/|-)\d{4}$/;
        if (!expFecha.test(fecha.value.trim())) {
            valido = false;
            fecha.classList.add("error-input");
            errores.innerHTML += "fecha: dd/mm/aaaa o dd-mm-aaaa";
        }

        // tel.
        const telefono = document.getElementById("telefono");
        const expTelefono = /^\d{9}$/;
        if (!expTelefono.test(telefono.value.trim())) {
            valido = false;
            telefono.classList.add("error-input");
            errores.innerHTML += "tel. con 9 digitos";
        }

        // hora
        const hora = document.getElementById("hora");
        const expHora = /^\d{2}:\d{2}$/;
        if (!expHora.test(hora.value.trim())) {
            valido = false;
            hora.classList.add("error-input");
            errores.innerHTML += "hora con formato hh:mm";
        }

        if (valido) {
            formulario.submit();
        }

    });
});
