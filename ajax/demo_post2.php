<?php
// Verificar si llegan los parámetros
if (empty($_POST['fname']) || empty($_POST['lname'])) {

    // Enviar código de error 400 (Bad Request)
    http_response_code(400);

    // Mensaje al cliente
    echo "Error: faltan parámetros fname o lname";
    exit;
}

// Si todo está bien, responder correctamente
$fname = htmlspecialchars($_POST['fname']);
$lname = htmlspecialchars($_POST['lname']);

echo "Hola, recibí tus datos:<br>";
echo "Nombre: $fname<br>";
echo "Apellido: $lname";
?>
