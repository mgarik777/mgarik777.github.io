<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$DB_name = 'my_resume';

$connection = new mysqli($servername,$username,$password,$DB_name);

if ($connection -> connect_error) {
    echo 'Sxal ban ka'. ' '. mysqli_connect_error();
}
?>