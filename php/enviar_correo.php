PHP
<?php

// Require PHPMailer library
require '/vendor/autoload.php';

// Process form data
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$password = $_POST['password']; // Remember to hash this before storing!

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

// Configure SMTP settings for your provider (SMTP2GO)
$mail->isSMTP();
$mail->Host = 'mail.smtp2go.com';  // Use your SMTP server address
$mail->Port = 2525;                 // Port may vary (try others if 2525 doesn't work)
$mail->SMTPSecure = '';             // TLS/SSL may be optional, check with SMTP2GO

// Check for authentication requirement by SMTP2GO
if (/* SMTP2GO requires authentication */) {
    $mail->SMTPAuth = true;
    $mail->Username = 'grupochance.com';  // Replace with your SMTP username
    $mail->Password = 'Wsv1FeFYUogZN1X9';   // Replace with your SMTP password
}

// Set email sender and recipient (using the submitted email)
$mail->setFrom('grupochance.com', 'Registration System'); // Adjust sender name
$mail->addAddress($email); // Only add the email address

// Set email subject and body
$mail->Subject = 'Confirmación de Registro';
$mail->Body = "Hola $nombre $apellido,\n\n"
            . "Gracias por registrarte. Hemos enviado esta confirmación a tu correo electrónico:\n\n"
            . "$email\n\n";
$mail->isHTML(false);

// Send the email
if (!$mail->send()) {
  echo 'Mensaje no pudo ser enviado. Error: ' . $mail->ErrorInfo;
} else {
  echo '¡Mensaje enviado correctamente! Revisa tu correo para confirmar tu registro.';
}

?>