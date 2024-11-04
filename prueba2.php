<?php

// Datos del correo electrónico
$data = [
    "sender" => "cespindola@grupochance.com",  // Tu dirección de correo de envío
    "to" => ["krustyclow53@gmail.com"],       // Destinatarios
    "subject" => "hola",                      // Asunto del correo
    "text_body" => "prueba"                   // Cuerpo del mensaje en texto plano
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
        "X-Smtp2go-Api-Key: api-E5ADE679B03447C683509FDD5CF13C02" // Tu clave API
    ],
    // Especificar la ruta al archivo cacert.pem
    CURLOPT_CAINFO => __DIR__ . "/cacert.pem",  // Ruta a tu archivo cacert.pem
]);

// Ejecutamos la solicitud y obtenemos la respuesta
$response = curl_exec($curl);

// Verificamos si hubo algún error
if (curl_errno($curl)) {
    echo 'Error: ' . curl_error($curl);  // Imprime el error si ocurre
} else {
    echo $response;  // Imprime la respuesta del servidor
}

// Cerramos la sesión cURL
curl_close($curl);

?>