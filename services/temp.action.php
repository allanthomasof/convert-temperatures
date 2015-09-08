<?php
require 'TEMPService.class.php';

$number = $_GET['number'];
$opc = $_GET['opc'];
$value = 0.0;

$value = TEMPService::getValue($number, $opc);

//sleep (1);

echo $value;
?>