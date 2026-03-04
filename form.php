<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "tour_website";
// Database connection
$conn = mysqli_connect($server,$username,$password,$dbname);

// // Database connection
// $conn = mysqli_connect('localhost', 'root', '', 'tour_website');

// // Check connection
// if ($conn->connect_error) {
//     echo("Connection failed: " . $conn->connect_error);
// }
// //-------Check if the form is submitted-------
// if ($_SERVER["REQUEST_METHOD"] == "GET") {
//     // Collect form data
//     $fullName = $_GET['full-name'];
//     $email = $_GET['email-address'];
//     $phone = $_GET['phone-number'];
//     $package = $_GET['preferred-package'];
//     $message = $_GET['message'];

//     //-------Validate the data--------
//     if (empty($fullName) || empty($email) || empty($phone)) {
//         echo "Please fill in all the required fields.";
//         exit;
//     }

//     // Display the collected data (for testing purposes)
//     $sql = "INSERT INTO enquire (fullName, email, phoneNumber, preferredPackage, message) VALUE ('$fullName', '$email', '$phone', '$package', '$message')";
    
//     if(mysqli_query($conn,$sql)) {
//         echo("<h3>Record inserted successfully</h3>");
//        }
//        else{
//         echo("Error".mysqli_connect_error($conn));
//        }
       
//         //close the connection
//         mysqli_close($conn);
       
// } 

// else {
//     echo "Form not submitted correctly.";
// }

if(!$conn){
    die("failed".mysqli_connect_error());

}else{
    echo"connectd succesfull";
}

$fullname =$_POST['name'];
$email =$_POST['email'];
$phone =$_POST['phone'];
$package =$_POST['package'];
$message =$_POST['message'];

$sql = "INSERT INTO enquire(fullName, email, phoneNumber, preferredPackage, message) VALUES ('$fullname','$email','$phone','$package','$message')";

if(mysqli_query($conn,$sql)){
   echo("inserted");
}else{
    echo("error".mysqli_error($conn));
}
mysqli_close($conn);
    ?>