<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;

// Datos del correo y configuración SMTP
{
    "sender": "cespindola@grupochance.com",
    "to": ["krustyclow53@gmail.com"],
    "subject": "hola",
    "text_body": "prueba"
}

$smtpServer = 'mail.smtp2go.com';
$smtpPort = 2525; // Ajusta según tu configuración
$username = 'cespindola@grupochance.com';
$password = 'Krusty1408';

// Crea una instancia del cliente Guzzle con configuración SMTP
$client = new Client([
    'verify' => false,  // Deshabilita la verificación SSL temporalmente (NO recomendado)
    'http_errors' => false, // No lanzar errores HTTP (temporalmente)
    'auth' => [$username, $password],
]);

$data = [
    'from' => 'cespindola@grupochance.com',
    'to' => [$to],
    'subject' => $subject,
    'text_body' => $body,
];

// URL global de la API de SMTP2GO
$url = 'https://api.smtp2go.com/v3/email/send';

// Realiza la petición POST a la API de SMTP2GO
$response = $client->request('POST', $url, [
    'json' => $data
]);

if ($response->getStatusCode() >= 200 && $response->getStatusCode() < 300) {
    echo '¡Correo enviado correctamente!';
} else {
    echo 'Error al enviar el correo: ' . $response->getBody();
}