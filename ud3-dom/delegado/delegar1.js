const tabla = document.querySelector("table");

tabla.addEventListener("click", (event) => {

    const celda = event.target;
    if (celda.tagName === "TD") {

        const texto = celda.textContent.trim().toUpperCase();

        if (texto === "SÍ") {
        alert("Estás en " + celda.id);
        }
    }
});


// document.getElementById("n1").addEventListener("click",()=>alert("nodo 1"));
// document.getElementById("n5").addEventListener("click",()=>alert("nodo 5"));
// document.getElementById("n9").addEventListener("click",()=>alert("nodo 9"));