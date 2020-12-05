<?php
require("PHPMailerAutoload.php");

$mail = new PHPMailer();

$mail->IsSMTP();  // telling the class to use SMTP
$mail->SMTPAuth = true;
//$mail->SMTPDebug = 3;

//$mail->Host = gethostbyname('smtp.gmail.com');
$mail->Host = "smtp.gmail.com"; // SMTP server
$mail->Username = 'eric@appinchina.co';
$mail->Password = 'Goericgo';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->From = 'eric@appinchina.co';
$mail->FromName = 'Eric Appinchina';

$mail->addReplyTo('eric@appinchina.co', 'Reply Address');
$mail->addAddress('erictjitra@gmail.com', 'Eric Tjitra');
$mail->addAddress('erictjitra@yahoo.com', 'Eric Tjitra');

$mail->isHTML(true);
$mail->addAttachment('../images/uber.png','uber.png');


$mail->Subject = 'Test New';
$mail->Body = '<p>This is the body of an email!</p><p>This is a new paragraph</p><strong>And this is bolded</strong>';
$mail->AltBody = 'This is the body of an email!';


//var_dump($mail->send());


if(!$mail->Send()) {
  echo 'Message was not sent.';
  echo '<br />' . 'Mailer error:'  . $mail->ErrorInfo;
} else {
  echo 'Message has been sent.';
}


?>