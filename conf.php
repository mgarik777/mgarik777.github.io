<?php

$mail_settings_dev = [
    'host' => 'smtp.mailtrap.io',
    'auth' => true,
    'port' => 2525,
    'username' => 'my.resume.final@gmail.com',
    'password' => 'nzvztqwdfgjzyklw',
    'secure' => null,
    'charset' => 'UTF-8',
    'from' => 'my.resume.final@gmail.com',
    'name' => 'WebForMyself',
    'is_html' => true,
];

$mail_settings_prod = [
    'host' => 'smtp.gmail.com',
    'auth' => true,
    'port' => 465, // 587
    'username' => 'my.resume.final@gmail.com',
    'password' => 'nzvztqwdfgjzyklw',
    'secure' => 'ssl', // tls
    'charset' => 'UTF-8',
    'from' => 'my.resume.final@gmail.com',
    'name' => 'WebForMyself',
    'is_html' => true,
];
