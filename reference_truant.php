<html>

<head>
<link rel="stylesheet"  href="truant_style.css">
<meta charset="UTF-8">
<title>Прогульщик Вася</title>
  <style>
   body {
    font-size: 20px;
    background: lightblue; /* Цвет фона */
    /* color: #fc0; /* Цвет текста  */  
   }
  </style>

</head>
<body>

<?php
$string = file_get_contents("strategies.json");
$data = json_decode($string);
echo nl2br($data->Agreement);
?>

<form>
<button formaction="start_truant.php" name="start">></button>
</form>

</body>

</html>