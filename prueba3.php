<?php

// Verificamos si se recibieron los datos por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibimos los datos del formulario tal cual se enviaron
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];

    // Datos del correo electrónico
    $data = [
        "sender" => "cespindola@grupochance.com",  // Tu dirección de correo
        "to" => [$email],  // El email ingresado por el usuario
        "subject" => "Bienvenido a Melodica",  // Asunto del correo
        "text_body" => "Hola $nombre $apellido, \n\nTe has registrado exitosamente en Melodica. ¡Bienvenido!"  // Cuerpo del correo
    ];

    // Convertimos los datos a formato JSON
    $jsonData = json_encode($data);

    // Configuramos la solicitud cURL
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => "https://api.smtp2go.com/v3/email/send",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $jsonData,
        CURLOPT_HTTPHEADER => [
            "Content-Type: application/json",
            "X-Smtp2go-Api-Key: api-E5ADE679B03447C683509FDD5CF13C02"  // Tu clave API
        ],
        CURLOPT_CAINFO => __DIR__ . "/cacert.pem",  // Ruta a tu archivo cacert.pem
    ]);

    // Ejecutamos la solicitud y obtenemos la respuesta
    $response = curl_exec($curl);

    // Verificamos si hubo algún error
    if (curl_errno($curl)) {
        echo 'Error: ' . curl_error($curl);  // Imprime el error si ocurre
    } else {
        echo "Correo enviado a $email. Respuesta del servidor: " . $response;
    }

    // Cerramos la sesión cURL
    curl_close($curl);
} else {
    echo "Método no permitido.";
}

?>