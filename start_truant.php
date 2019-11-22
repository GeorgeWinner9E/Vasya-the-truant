<html>

<head>
<link rel="stylesheet" type="text/css" href="truant_style.css">
</head>


<?php

if( isset( $_POST['Start'] ) )  #при нажатии кнопки перейти к тесту
        include 'test_truant.php'


?>




<datalist id="rangeList1">
<option value="-5" label="-5">
<option value="0" label="0">
<option value="5" label="5">
</datalist>

<input type="range" min="-5" max="5" list="rangeList1">


</br>


<div class="container">
<div>
    <p>Вася постоянно опаздывает. Взаимодействуй с ним и смотри че происходит</p>
    <p>Жмакай старт если фсё понял</a>.</p>
    <form method="POST">
    <input type="submit" name="Start" value="Начать" />
    </form>

</div>

</div>
    



</html>