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
$query = "SELECT `игры респондентов`.Индекс, `Индекс респондента`,Пол, Возраст, Образование, Стратегия, `Действие 1`, `Действие 2`, `Действие 3`, `Действие 4`, `Действие 5`, `Действие 6`,`Действие 7`, `Действие 8`, `Действие 9`, `Действие 10`, Комментарий, День, `Время прихода`, Действие, `Время ответа` FROM респонденты JOIN `игры респондентов`
		ON `Индекс респондента` = респонденты.Индекс GROUP BY `Индекс респондента`,`игры респондентов`.Индекс, День";
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
$send = '';
$i = 0;
$before = -1;
$now = 0;
$flist = file_get_contents('strategies.json');
$list = json_decode($flist,TRUE);
if (isset($list['OnlyYou'][0])){
 $actcount = count($list[$list['OnlyYou'][0]]);
}
else {
    $actcount = count($list[$list['UsedStrategies'][0]]);
}
$headacts = '';
for ($i = 1; $i<=$actcount; $i++){
    $headacts .= "Действие $i, ";
}
$header = iconv('utf-8', 'windows-1251', "ID, Пол, Возраст, Образование, Стратегия, $headacts Комментарий, День, Время прихода, Выбранное действие, Время ответа");

fputcsv($output, explode(',', $header));
while ($row = mysqli_fetch_assoc($result))
{
    unset($row['Индекс']);

    $row['Комментарий'] = str_replace(array("\r\n", "\r", "\n"), ' ', $row['Комментарий']);
    $row['Комментарий'] = str_replace(array(";"), '.', $row['Комментарий']);
    $row['Комментарий'] = str_replace(array(","), '‚', $row['Комментарий']);
    $now = $row['Индекс респондента'];
    if (($now!=$before) and ($before!=-1)){
        fputcsv($output, explode(',', $send));
        $send = '';
        $before = $row['Индекс респондента'];

        for ($acts = $actcount+1; $acts<11; $acts++){
            $clear = 'Действие ';
            $clear .= $acts;
            unset ($row[$clear]);
        }


    }
    else {
        if ($before!=-1) {
            $before = $row['Индекс респондента'];
            unset($row['Пол']);
            unset($row['Возраст']);
            unset($row['Образование']);
            unset($row['Стратегия']);
            for ($acts = 1; $acts<11; $acts++){
                $clear = 'Действие ';
                $clear .= $acts;
                unset ($row[$clear]);
            }
            unset($row['Комментарий']);
            unset($row['Индекс респондента']);
        } else {$before = $row['Индекс респондента'];
            for ($acts = $actcount+1; $acts<11; $acts++){
                $clear = 'Действие ';
                $clear .= $acts;
                unset ($row[$clear]);
            }
        }
    }
    $i++;
//  echo implode(',', $row);
//  echo "\n";

    $send .= iconv('utf-8', 'windows-1251', implode(',', $row));
    $send .=',';
}
fputcsv($output, explode(',', $send));

fclose($output);

mysqli_free_result($result);
mysqli_close($link);