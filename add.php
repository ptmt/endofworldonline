<?php 
if (isset($_GET['email'])) 
    file_put_contents(__DIR__ . "emails.txt", $_GET['email'], FILE_APPEND);