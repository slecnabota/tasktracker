<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input1 = $_POST["input1"];
    $input2 = $_POST["input2"];

    $to = 'akbotamold@gmail.com';
    $subject = 'New submission';
    $message = "Name: $input1\nPhone: $input2";
    $headers = 'From: tasktracker@example.com';

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Email sending failed";
    }
}
?>
