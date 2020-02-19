<html>

<head>
<link rel="stylesheet"  href="truant_style.css">
<meta charset="UTF-8">
<title>Прогульщик Вася</title>
  <style>
   body {
    background: lightblue; /* Цвет фона */
    /* color: #fc0; /* Цвет текста  */
    font-size: 30px;  
    
   }
  </style>

</head>
<body>

<form>
<div>
    <?php
    $string = file_get_contents("strategies.json");
    $data = json_decode($string);
    echo $data->Rules;
    ?>
</div>
<button formaction="test_truant.php">Начать</button>
</form>



</body>

</html>