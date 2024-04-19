<?php
// Database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Fetch data from database
$sql = "SELECT * FROM your_table";
$result = $conn->query($sql);

// Check if there are results
if ($result->num_rows > 0) {
    // Define file name
    $filename = "entries." . date('Ymd') . ".xls";
    // Set headers for Excel file
    header("Content-Type: application/vnd.ms-excel");
    header("Content-Disposition: attachment; filename=\"$filename\"");
    // Start Excel file content
    $output = fopen("php://output", "w");
    // Output column headers
    fputcsv($output, array('Region', 'County', 'Customer Name', 'Meter Number', 'Metering Type', 'Seals Available'));
    // Loop through results and output data
    while($row = $result->fetch_assoc()) {
        fputcsv($output, $row);
    }
    // Close file pointer
    fclose($output);
} else {
    echo "No entries found";
}
// Close connection
$conn->close();
?>
