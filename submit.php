<?php
$host = "localhost"; 
$dbname = "website";
$username = "root"; 
$password = ""; 


$conn = new mysqli($host, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];


$sql = "INSERT INTO contact (Name, email, message) VALUES ('$name', '$email', '$msg')";

if ($conn->query($sql) === TRUE) {
    echo "Submitted Successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
