let lista = document.querySelectorAll(".si");

lista.forEach((celdaSi)=>{
    celdaSi.addEventListener("click",(e)=>{ // e = objetoEvent, que contiene la informacion sobre el evento
        let identificador = e.target.id; // e lo guardas en un identificador
        alert("Has hecho clic en: "+identificador);
    })
});



let tabla=document.getElementsByTagName("table")[0]; // selecciona las etiquetas de tabla y elige la 1ª
// estoy recibiedno una lista, aunque solo haya un elemento o ninguno
let boton = document.getElementById("boton"); // selecciona el boton y lo guardo en una variable


boton.addEventListener("click", function() {
    nuevaFila(tabla);
})
/* function nuevaFila(tabla){ //definir una funcion que añade una nueva fila a la tabla que le pasemos por parámetro
    let tblBody = tabla.firstElementChild; // selecciona el primero hijo elemento, el tbody. aunque no este en el html !!!
    let numCeldas = tblBody.firstElementChild.children.length; // los children son los tr. su valor es 3

    let hilera = document.createElement("tr"); // crear nueva fila

    for (let j = 0; j <= numCeldas-1; j++) { // bucle for mientras el numero sea 2 (3-1)
      let celda = document.createElement("td");

      if(Math.random()>=0.5) textoCelda=document.createTextNode("si"); // crear numero aleatorio
      // mayor que 5 = si; menor = no
      else textoCelda=document.createTextNode("NO");

      celda.appendChild(textoCelda); // a la celda (td) se le añade un nodo hijo, el texto
      celda.id=`n${tblBody.children.length*numCeldas+j}`;
      // cant. de filas * num celdas + j (la posicion en la que estoy)
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera); // añadir la nueva fila tbody
}
*/



// A y B)
// no se le pude pasar una instruccion o la funcion, hay que pasarle la definicon de la funcion
boton.addEventListener("click", ()=>{nuevaFila(tabla)});

// C Y D)
boton.addEventListener("click", ponerEvento);

function ponerEvento() {
    let tblBody = tabla.firstElementChild;

    // 3
    let numFilas = tblBody.children.length;

    // 4, las columnas
    let numCeldasFila = tblBody.children[0].children.length;

    // 5
    let ultimaFilaTabla = tblBody.lastElementChild;

    // 6
    let celdasFila = ultimaFilaTabla.children;

    // 7 y 8
    // lo que devuelve children se comporta como un array, PERO NO LO ES
    // con children no se puede utilizar el forEach para recorrerlo, se haria con un for "tradicional"
    // Respuesta: no, porque es una HTMLCollection

    // 9
    for (let i = 0; i < celdasFila.length; i++) {

        // celdasFila[i].firstElementChild.value;
        if (celdasFila[i].textContent === "si") {
            
            sFila[i].addEventListener("click", (objetoEvent)=>{alert("El id es: " + objetoEvent.target.id)})
        }
    }
}
