<?php
$mysql['host']="127.0.0.1";
$mysql['username']="root";
$mysql['password']="usbw";
$mysql['database']="vasya";
$mysql['port']=NULL;
$mysql['socket']=NULL;

$link= new mysqli($mysql['host'],$mysql['username'],$mysql['password'], $mysql['database'])
or die('Не удалось соединиться: ' . mysqli_error());
mysqli_query($link, "SET NAMES 'utf8'");
$query = "TRUNCATE TABLE `респонденты`";
mysqli_query($link, $query);
$query = "TRUNCATE TABLE `игры респондентов`";
mysqli_query($link, $query);
mysqli_close($link);