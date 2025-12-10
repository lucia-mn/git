let tabla=document.getElementsByTagName("table")[0];

let boton = document.getElementById("boton");


tabla.addEventListener("click",mensaje);


function mensaje(e){ 
        if(e.target.innerHTML=="si") alert("Celda positiva con id: "+e.target.id);
}

boton.addEventListener("click", function() {
    nuevaFila(tabla);
})