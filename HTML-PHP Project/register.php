<?php

 $con = mysqli_connect('localhost','root','');
 
 if(!$con)
 {
   echo 'Not connected';
 }
 
 if(!mysqli_select_db($con, 'photography'))
 {
   echo 'Database not selected';
 }
 
 $firstname = $_POST['firstname'];
 $lastname = $_POST['lastname'];
 $email = $_POST['email'];
 $subject = $_POST['subject'];
 $message = $_POST['message'];
 
 $sql = "INSERT INTO contact(firstname,lastname,email,subject,message) VALUES ('$firstname','$lastname','$email','$subject','$message')";
 
 if(!mysqli_query($con,$sql)){
   echo 'not inserted';
 }
 
 else
 {
        echo '<script language="javascript">';
        echo 'alert("We will get back to you shortly"); window.location.href="index.html"';
        echo '</script>';
 }
  ?>