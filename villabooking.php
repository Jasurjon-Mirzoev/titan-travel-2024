<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="images/titanvilla3.png" type="image/png">
  <title>Titan Villa</title>
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
  $name = $_POST["name"];
  $email = $_POST['email'];
  $whatsapp = $_POST['whatsapp'];
  $room = $_POST['room'];
  $kids = $_POST['kids'];
  $checkin = $_POST['checkin'];
  $checkout = $_POST['checkout'];


  //prepare and execute the database insertion 
  $sql = "INSERT INTO `villabooking`(`name`, `email`, `whatsapp`, `room`, `kids`, `checkin`, `checkout`) VALUES ('$name','$email','$whatsapp','$room','$kids','$checkin','$checkout')";

  if($conn->query($sql) == TRUE){
    echo " Booking Succecfully, We will contact you within 12 hours ";

  }else{
    echo "Error:" .$sql . "<br>" .$conn->error;
  }
   

}
$conn->close();
?>