<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Perform basic form validation
    if (empty($email) || empty($password)) {
        echo "Please enter both email and password.";
        include 'rough.html'; // Replace with the filename of your registration form
        exit();
    }

    //database connection
    $conn = new mysqli('localhost', 'root', '', 'nec');
    if ($conn->connect_error) {
        die('connection failed: ' . $conn->connect_error);
    }

    // Password hashing
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Prepare and execute the query
    $stmt = $conn->prepare("INSERT INTO spdg (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $hashedPassword);
    $stmt->execute();

    echo "Registration successful....";
    include 'b.html';

    $stmt->close();
    $conn->close();
    exit();
}
?>
