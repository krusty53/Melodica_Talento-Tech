<?php
require 'C:\Talento Tech\Melodica_Talento-Tech/php/vendor/autoload.php';

use GuzzleHttp\Client;

$baseUrl = 'https://api.smtp2go.com/v3/';
$endpoint = 'email/send';
$url = $baseUrl . $endpoint;

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];

$data = [
    'sender' => 'grupochance.com',
    'to' => [$email],
    'subject' => 'Confirmación de Registro',
    'text_body' => "Hola $nombre $apellido,\n\n"
                . "Gracias por registrarte. Hemos enviado esta confirmación a tu correo electrónico:\n\n"
                . "$email\n\n",
];

$client = new Client();
$response = $client->request('POST', $url, [
    'headers' => [
        'Authorization' => 'Bearer api-E5ADE679B03447C683509FDD5CF13C02'
    ],
    'json' => $data
]);

if ($response->getStatusCode() == 200) {
    echo '¡Mensaje enviado correctamente! Revisa tu correo para confirmar tu registro.';
} else {
    echo 'Mensaje no pudo ser enviado. Error: ' . $response->getBody();
}
?>