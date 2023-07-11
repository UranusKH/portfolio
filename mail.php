<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$findus= $_POST['find-us'];
$message= $_POST['message'];
$to = "	khochang@dropwhere.com";
$subject = "Mail From website";
$txt =" Name = ". $name . "\r\n Email = " . $email . "\r\n How did you find us? = " . $findus . "\r\n Message = " . $message;
$headers = "From: noreply@dropwhere.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>

