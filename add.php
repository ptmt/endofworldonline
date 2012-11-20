<?php 
if (isset($_GET['email'])) {
    file_put_contents(__DIR__ . "emails.txt", $_GET['email'] . "\n", FILE_APPEND);
    header("location: http://" . $_SERVER['HTTP_HOST'] . "?message=success");
}