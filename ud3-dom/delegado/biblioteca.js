function nuevaFila(tabla){
    
    let tblBody = tabla.firstElementChild;
    let numCeldas = tblBody.firstElementChild.children.length;

    let hilera = document.createElement("tr");

    for (let j = 1; j <= numCeldas; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      let celda = document.createElement("td");
      if(Math.random()>=0.5) textoCelda=document.createTextNode("si");
      else textoCelda=document.createTextNode("NO");
      celda.appendChild(textoCelda);
      celda.id=`n${tblBody.children.length*numCeldas+j}`;
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);

}