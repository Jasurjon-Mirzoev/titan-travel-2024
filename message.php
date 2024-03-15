<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="images/LOGO TITAN TRAVEL.PNG" type="image/png">
  <title>Booking</title>
</head>
<body>
  
</body>
</html>
<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbanme = "bookings";
$conn = new mysqli($servername,$username,$password,$dbanme);


if($conn->connect_error){
  die("Connection Failed:" .$conn->connect_error);

}

//Handle form submission
if($_SERVER["REQUEST_METHOD"] == "POST"){
  
  $email = $_POST['email'];
  $message =$_POST['message'];
  

  //prepare and execute the database insertion 
  $sql = "INSERT INTO `message`(`email`, `message`) VALUES ('$email','$message')";

  if($conn->query($sql) == TRUE){
    
    echo " Succecfully Send,we will contact you within 12 hours";

  }else{
    
    echo "Error:" .$sql . "<br>" .$conn->error;
  }
   

}
$conn->close();
 

?>