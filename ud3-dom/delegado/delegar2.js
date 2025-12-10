
document.querySelectorAll(".si");

const si = document.querySelectorAll(".si");

// B)
// el foreach pasa una celda, el indice y el cuerpo del array
// en este cado necesitamos el índice
// necesitas una definicion de funcion antes del alert
/*
si.forEach((celda, indice) => {

    celda.addEventListener("click", ()=> alert("Has hehco click en el sí :) en el número: " + (indice + 1)));
});
*/

// al foreach se le crea una definicion de funcion
// los parametros son el elemento y el indice


// C)
// event = es un objeto que se pasa como parametro SIEMPRE
// acceder con el objetoEvent al target
si.forEach((celda, indice) => {

    celda.addEventListener("click", (objectoEvent)=> alert("Has hehco click en el sí :) con el id: " + objectoEvent.target.id));
});




