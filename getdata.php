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
$query = "SELECT * FROM респонденты JOIN `игры респондентов` ON `Индекс респондента` = респонденты.индекс";
$result = mysqli_query($link, $query);
if (!$result){
    echo mysqli_error($link);
}


header("Content-Type: application/force-download");
header("Content-Type: application/octet-stream");
header("Content-Type: application/download");
header("Content-Disposition: attachment;filename=\"export_table.csv\"");
header("Content-Transfer-Encoding: binary");
header("Pragma: public");
header("Expires: 0");
header("Cache-Control: max-age=0, no-cache, must-revalidate, proxy-revalidate, post-check=0, pre-check=0");
header("Cache-Control: private",false);

$output = fopen('data.csv', 'w+');

//fputcsv($output, array('ID','Column1','Column2','Column3'));

while ($row = mysqli_fetch_assoc($result))
{
    fputcsv($output, $row);
}

fclose($output);
mysqli_free_result($result);
mysqli_close($link);