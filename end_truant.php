<html>

<head>
<link rel="stylesheet"  href="Vasya-the-truant/truant_style.css">
<meta charset="UTF-8">
<title>Спасибо за участие</title>
  <style>
   body {
    background: lightblue; /* Цвет фона */
    /* color: #fc0; /* Цвет текста  */  
   }
  </style>

</head>
<body>


<div class=container>
  <p>Спасибо за участие</a>.</p>
</div>

<?php
session_start();
for ($i=1; $i<30; $i++){
echo $_SESSION['actions'][$i];
echo '<br>';
}
?>



</body>

</html>