<?php
 
 $name = $_POST['nom'];
 $phone = $_POST['phone'];
 $site = $_POST['site'];
 $email = $_POST['email'];
 $msg = $_POST['msg'];

 if(!empty($email) && !empty($msg)){
    if(filter_var($email,FILTER_VALIDATE_EMAIL)){
        $receiver = "istatasila7@gamil.com";
        $subject = "From: <$receiver>";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nSite: $site\nMessage: $msg\nRegard,\n$name";
        $sender = "From: $email";
        if(mail($receiver,$subject,$body,$sender)){
            echo "Your Message Hs been sent!";
        }else{
            echo "Sorry We cant send This Message";
        };
    }else{
        echo "Email adresse Not Valid";
    };
 }else {
    echo "Email and Message Field Are REQUIRED";
 };

?>