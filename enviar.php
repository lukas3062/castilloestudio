<?php
  $destino= "castillo.3062@gmail.com";
  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];
  $mensaje = $_POST["mensaje"];
  $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;

  $headers= "From:" .$_POST['castillo.3062@gmail.com']. "\r\n".
            "Reply-To:" .$_POST['castillo.3062@gmail.com']. "\r\n".
            "X-Mailer: PHP/" .phpversion();

  mail($destino, "contacto", $contenido, $headers);
  echo header('location:index.html');
 ?>
