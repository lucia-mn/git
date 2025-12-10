function validarFormulario() {

    let valido = true;

    // Limpiar errores previos
    // .error son los spans, que tienen la clase .error
    // querySlectorAll siempre me devuelve una lista, que puedo recorrer como si fuera un array
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    // le quitamos la clase de .error-input
    document.querySelectorAll(".error-input").forEach(e => e.classList.remove("error-input"));

    // --- Validación Nombre ---
    const nombre = document.getElementById("nombre");
    if (nombre.value.trim().length < 3) {
        valido = false;
        nombre.classList.add("error-input");
        document.getElementById("errorNombre").textContent = "Introduce al menos 3 caracteres.";
    }

    // --- Validación Email ---
    const email = document.getElementById("email");
    const expEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!expEmail.test(email.value.trim())) {
        valido = false;
        email.classList.add("error-input");
        document.getElementById("errorEmail").textContent = "Email no válido.";
    }

    // --- Validación Edad ---
    const edad = document.getElementById("edad");
    const numEdad = parseInt(edad.value);
    if (isNaN(numEdad) || numEdad < 18 || numEdad > 99) {
        valido = false;
        edad.classList.add("error-input");
        document.getElementById("errorEdad").textContent = "Edad entre 18 y 99.";
    }

    // --- Validación Género ---
    // hacerlo con un for "tradicional"
    const genero = document.querySelector("input[name='genero']:checked");
    if (!genero) {
        valido = false;
        document.getElementById("errorGenero").textContent = "Selecciona un género.";
    }

    // --- Validación Aficiones ---
    const aficionesSeleccionadas = document.querySelectorAll("input[name='aficiones']:checked");
    if (aficionesSeleccionadas.length === 0) {
        valido = false;
        document.getElementById("errorAficiones").textContent = "Selecciona al menos una afición.";
    }

    // --- Validación Ciudad ---
    const ciudad = document.getElementById("ciudad");
    if (ciudad.value === "") {
        valido = false;
        ciudad.classList.add("error-input");
        document.getElementById("errorCiudad").textContent = "Selecciona una ciudad.";
    }

    // Si es válido, permitir envío
    if (valido) {
        alert("Formulario enviado correctamente");
    }

    return valido; // Importante: true → envía, false → bloquea
}
