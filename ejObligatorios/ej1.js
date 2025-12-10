
        // a - d)
        // establecemos las variables iniciales
        let nombre = "lucia";
        let edad = 22;
        let esEstudiante = true;
        const pi = 3.14159;

        // e)
        // creamos los arrays, uno con let y otro con const
        let colores = ["rojo", "verde", "azul"];
        const colores2 = ["rojo", "verde", "azul"];

        // f)
        // creamos el objeto con los tres atributos
        const informacionPersonal = {
        nombre: nombre,
        edad: edad,
        esEstudiante: esEstudiante
        };

        // g)
        // imprimir por consola los atributos del objeto
        console.log ("nombre: " + informacionPersonal.nombre);
        console.log ("edad: " + informacionPersonal.edad);
        console.log ("es estudiante: " + informacionPersonal.esEstudiante);

        // h)
        // cambio de la variable edad
        edad = edad + 5;

        // i)
        // cambio de los array de colores
        colores[0] = "naranja";
        colores2[0] = "naranja";

        // j)
        // por consola sí que salen los cambios
        console.log(colores);
        console.log(colores2);

        // k)
        /* no deja porque pi es constante y no se puede cambiar el valor de una constante
        sale error en la consola */
        //pi = 3.14;

        // l)
        //no da ningún problema
        let numeroMagico;    
        numeroMagico = 9;    

        // m)
        /* no se puede porque las constantes tienen que tener un valor predefinido
        por consola dice que la variable se tiene que inicializar */
        //const numeroMagico2;
        numeroMagico2 = 9;

        // n)
        // sí que se puede ya que colores es una variable tipo let
        colores = ["violeta", "púrpura", "añil"];

        // o)
        // no se puede ya que hemos utilizado const y no let para colores2
        //colores2 = ["violeta", "púrpura", "añil"];