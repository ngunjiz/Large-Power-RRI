<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>View Entries</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h2>View Entries</h2>
    <table>
      <thead>
        <tr>
          <th>Region</th>
          <th>County</th>
          <th>Customer Name</th>
          <th>Meter Number</th>
          <th>Metering Type</th>
          <th>Seals Available</th>
        </tr>
      </thead>
      <tbody>
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

        if ($result->num_rows > 0) {
          // Output data of each row
          while($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>".$row["region"]."</td>";
            echo "<td>".$row["county"]."</td>";
            echo "<td>".$row["customer_name"]."</td>";
            echo "<td>".$row["meter_number"]."</td>";
            echo "<td>".$row["metering_type"]."</td>";
            echo "<td>".$row["seals_available"]."</td>";
            echo "</tr>";
          }
        } else {
          echo "<tr><td colspan='6'>No entries found</td></tr>";
        }

        $conn->close();
        ?>
      </tbody>
    </table>
  </div>
</body>
</html>
