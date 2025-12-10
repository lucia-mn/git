



function validarFormulario(){
    if (!validarNombre()) return false;
    if (!validarApellido()) return false;

    return true;
}

function validarNombre(){
    let fname = document.getElementById('fname').value;
    if (fname.length == 0) {
        alert('No has escrito nada en el nombre');
        return false;
    }
    
    let er = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(n+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    if (!er.test(fname)) return false;

    return true;
}

function validarApellido(){
    let lname = document.getElementById('lname').value;
    if (lname.length == 0) {
        alert('No has escrito nada en el apellido');
        return false;
    }
    
    let er = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(n+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    if (!er.test(lname)) return false;

    return true;
}