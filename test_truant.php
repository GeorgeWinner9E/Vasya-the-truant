<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"  href="test_truant_style.css">
<title>Прогульщик Вася</title>
  <style>
   body {
    background: lightblue; /* Цвет фона */
    /* color: #fc0; /* Цвет текста */
   }
  </style>
</head>
<?php
session_start();

if (isset($_SESSION['day'])){
$_SESSION['day']=$_SESSION['day']+1;
}
else {$_SESSION['day']=1;}

if ($_SESSION['day']>30){
  $_SESSION['day']=1;
}


if (!(($_POST['punish']!=666) or isset($_POST['reward']) or isset($_POST['nothing'])) && ($_SESSION['day']!=1)){
$_SESSION['day']=$_SESSION['day']-1;
}

if (isset($_POST['punish'])){
  //sql1
  echo 'oh, no';
}
if (isset($_POST['reward'])){
  //sql1
  echo 'thx';
}
if (isset($_POST['nothing'])){
  //sql1
  echo 'aaaa';
}


//header('Location:test_truant.php');

echo $_SESSION['day'];
echo " день";
$time=rand(880, 920);
if ($time<900){
  $time=$time-40;
}
$time="$time";
echo "<br>$time[0]:$time[1]$time[2]";

if ($_SESSION['day']<30){
 echo'<form action="test_truant.php" method="POST">
    <div class=container>
    <button name="punish">Наказать</button>
    <button name="reward">Поощрить</button>
    <button name="nothing">Ничего не делать</button>
    </div>
    </form>';}
    else{echo'<form>
      <div class=container>
      <button formaction="anketa_truant.php" name="end">Завершить</button>
      </div>
      </form>';}
    //<script src="test_truant_script.js"></script>
?>


</html>