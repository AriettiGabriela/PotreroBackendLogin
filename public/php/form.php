<?php
$userok = "admin";
$passok = 1234;

$user = $_POST["user"];
$pass = $_POST["pass"];

if ($user == $userok && $pass == $passok) {
    header("location:https://www.pokemon.com/el");
} else {
    header("location:../../index.html?error=1");
}
