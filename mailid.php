<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="images/LOGO TITAN TRAVEL.PNG" type="image/png">
  <title>Titan Travel</title>
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
  $place = $_POST['place'];
  $howmany = $_POST['howmany'];
  $departure = $_POST['departure'];
  $return = $_POST['return'];


  //prepare and execute the database insertion 
  $sql = "INSERT INTO `bookingid`(`name`, `email`, `whatsapp`, `place`, `howmany`, `departure`, `return`) VALUES ('$name','$email','$whatsapp','$place','$howmany','$departure','$return')";

  if($conn->query($sql) == TRUE){
    echo " Booking Succecfully, We will contact you within 12 hours ";

  }else{
    echo "Error:" .$sql . "<br>" .$conn->error;
  }
   

}
$conn->close();
?>