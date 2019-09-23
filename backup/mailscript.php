<?php
$to = "info@globehost.in";
$subject = "Test mail";
$message = "Hello! This is a simple email message.";
$from = " nihalpradeep@roninaks.com ";
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "Mail Sent.";
?>
