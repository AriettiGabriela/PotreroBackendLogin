<?php
$usercontrol = "cualquiera";
$passcontrol = 5705638;

$usernew = $_POST["usernew"];
$passnew = $_POST["passnew"];

if ($usernew != $usercontrol && $passnew != $passcontrol) {
    header("location:../../index.html?error=2");
}
