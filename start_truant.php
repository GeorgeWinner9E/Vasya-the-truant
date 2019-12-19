<html>

<head>
<link rel="stylesheet"  href="truant_style.css">
<meta charset="UTF-8">
<title>Прогульщик Вася</title>
  <style>
   body {
    background: lightblue; /* Цвет фона */
    /* color: #fc0; /* Цвет текста  */
    font-size: 25px;  
   }
  </style>

</head>
<body>

<?php
$mysql['host']="127.0.0.1";
$mysql['username']="root";
$mysql['password']="usbw";
$mysql['database']="notestat";
$mysql['port']=NULL; 
$mysql['socket']=NULL;

$link= new mysqli($mysql['host'],$mysql['username'],$mysql['password'], $mysql['database'])
    or die('Не удалось соединиться: ' . mysql_error());
//header('Location:Vasya-the-truant/test_truant.php');  <script src="Vasya-the-truant/truant_script.js"></script>
?>



<form>
<div class=container>
  <p>Вы - учитель в школе. Ученик Вася постоянно опаздывает на Ваши уроки. <br>
   Вы можете влиять на Васю различными методами в течении 30 дней. <br> 
   Ваша цель - понять, как Ваши действия влияют на время прихода Васи</a>.</p>
</div>
<button formaction="test_truant.php" name="start">Начать</button>
</form>



</body>

</html>