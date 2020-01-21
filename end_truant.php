<html>

<head>
<!--<link rel="stylesheet"  href="Vasya-the-truant/truant_style.css">-->
<meta charset="UTF-8">
<title>Спасибо за участие</title>
  <style>
   body {
    background: lightblue; /* Цвет фона */
    /* color: #fc0; /* Цвет текста  */  
    font-size:100px;
    text-align:center;
   }
  </style>

</head>
<body>


<div class=container>
  <p>Спасибо за участие!</a></p>
</div>

<?php

if (isset($_POST['log'])) $log = $_POST['log'];
else die;
if (isset($_POST['gender'])) $gender = $_POST['gender'];
else die;
if (isset($_POST['age'])) $age = $_POST['age'];
else die;
if (isset($_POST['education'])) $education = $_POST['education'];
else die;
if (isset($_POST['strategy'])) $strategy = $_POST['strategy'];
else die;
if (isset($_POST['actions'])) $actions = $_POST['actions'];
else die;
if (isset($_POST['comment'])) $comment = $_POST['comment'];

$alog=explode(",", $log);
$aacts=explode(",", $actions);


$mysql['host']="127.0.0.1";
$mysql['username']="root";
$mysql['password']="usbw";
$mysql['database']="vasya";
$mysql['port']=NULL; 
$mysql['socket']=NULL;

$link= new mysqli($mysql['host'],$mysql['username'],$mysql['password'], $mysql['database'])
or die('Не удалось соединиться: ' . mysqli_error());

mysqli_query($link, "SET NAMES 'utf8'");
$query = "INSERT INTO `респонденты` (`Пол`, `Возраст`, `Образование`, `Стратегия`, `Действие 1`, `Действие 2`, `Действие 3`, `Комментарий`) VALUES ('$gender', '$age', '$education', '$strategy', '$aacts[0]', '$aacts[1]', '$aacts[2]', '$comment')";
mysqli_query($link, $query);

$id=mysqli_insert_id($link);

for ($i=0; $i<30; $i++){
$j=4*$i;
$k=1+4*$i;
$l=2+4*$i;
$m=3+4*$i;
$query = "INSERT INTO `игры респондентов`  
(`Индекс респондента`, `День`, `Время прихода`, `Действие`, `Время ответа`) VALUES ('$id', '$alog[$j]', '$alog[$k]', '$alog[$l]', '$alog[$m]')";
mysqli_query($link, $query);}

mysqli_close($link);
header("Location: end_truant.php");

?>
</body>
</html>