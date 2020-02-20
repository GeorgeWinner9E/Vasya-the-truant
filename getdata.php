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
$query = "SELECT `Индекс респондента`,Пол, Возраст, Образование, Стратегия, `Действие 1`, `Действие 2`, `Действие 3`, Комментарий, День, `Время прихода`, Действие, `Время ответа` FROM респонденты JOIN `игры респондентов`
		ON `Индекс респондента` = респонденты.индекс";
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
    echo $row['Индекс респондента'];
/*    if ($del == true){
        unset($row['Пол']);
        unset($row['Возраст']);
        unset($row['Образование']);
        unset($row['Стратегия']);
        unset($row['Действие 1']);
        unset($row['Действие 2']);
        unset($row['Действие 3']);
        unset($row['Комментарий']);
    }*/

    $send = iconv('utf-8', 'windows-1251', implode(',', $row));;

    fputcsv($output, explode(',', $send));

}

fclose($output);

mysqli_free_result($result);
mysqli_close($link);