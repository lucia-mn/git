//document.forms["myForm"].addEventListener("submit", validateForm);

function validarFormulario(e) {
    // e.preventDefault();
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");

    } else {
        // document.forms[0].submit();
        document.forms["myForm"].submit();
    }
}

window.onload = function() {
    document.getElementById("boton").addEventListener("click", validarFormulario);
}

// document.getElementById("boton").addEventListener("click", validarFormulario);
