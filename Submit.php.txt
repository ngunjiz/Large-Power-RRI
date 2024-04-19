<?php
// Database connection
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$region = $_POST['region'];
$county = $_POST['county'];
$customerName = $_POST['customerName'];
$meterNumber = $_POST['meterNumber'];
$meteringType = implode(", ", $_POST['meteringType']);
$sealsAvailable = $_POST['sealsAvailable'];
$sealSerialNumber = $_POST['sealSerialNumber'];
$readingAvailable = $_POST['readingAvailable'];

// Insert data into database
$sql = "INSERT INTO your_table (region, county, customer_name, meter_number, metering_type, seals_available) VALUES ('$region', '$county', '$customerName', '$meterNumber', '$meteringType', '$sealsAvailable', '$sealSerialNumber', '$readingAvailable)';

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
