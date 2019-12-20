<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"  href="test_truant_style.css">
<title>Прогульщик Вася</title>
  <style>
   body {
    background: lightblue; /* Цвет фона */
    /* color: #fc0; /* Цвет текста */
    font-size: 30px;
   }

  
  </style>
</head>
<body>

<?php

  $AllStrategies=array(0, 1, 2, /*3, 4*/); //Здесь должны быть указаны номера всех стратегий
//$strategy=$AllStrategies[array_rand($AllStrategies, 1)]; //Выбор из всех стратегий 
$strategy=0; //Только стандартная стратегия

//Васи

/*Шаблон 
if ($strategy==strategy_number){  //необходимо добавить номер стратегии в массив $AllStrategies
  echo "<div id='buttonsdiv' value='strategy_number' class='container'>
  <button name='button_name0' value='Действие0' OnClick='NewDay(buttons[0].value, Влияние действия (прибавляется к времени прихода, по умолчанию 0)'>Название действия</button>
  <button name='button_name1' value='Действие1' OnClick='NewDay(buttons[1].value, Влияние действия)'>Название действия</button>
  </div>";}  */

if ($strategy==0){   //Вася рандомный
echo "<div class='container'>
<button name='punish' value='Наказать' OnClick='NewDay(buttons[0].value)'><img width=20  src='https://sc01.alicdn.com/kf/HTB1lLpcOjDpK1RjSZFrq6y78VXaE/bullwhip-bdsm-signal-single-tail-long-whip.jpg'> Наказать</button>
<button name='reward' value='Поощрить' OnClick='NewDay(buttons[1].value)'><img width=20  src='https://img1.freepng.ru/20180323/dqq/kisspng-gold-medal-olympic-medal-clip-art-golden-cup-5ab5a60f5a8812.1500798115218539673708.jpg'> Поощрить</button>
<button name='nothing' value='Ничего не делать' OnClick='NewDay(buttons[2].value)'><img width=20 src='https://c7.hotpng.com/preview/661/444/1011/american-red-cross-computer-icons-christian-cross-clip-art-big-red-cliparts-thumbnail.jpg'> Ничего не делать</button>
</div>";}

if ($strategy==1){   //Вася боящийся
  echo "<div class='container'>
<button name='punish' value='Наказать' OnClick='NewDay(buttons[0].value, -10)'><img width=20  src='https://sc01.alicdn.com/kf/HTB1lLpcOjDpK1RjSZFrq6y78VXaE/bullwhip-bdsm-signal-single-tail-long-whip.jpg'> Наказать</button>
<button name='reward' value='Поощрить' OnClick='NewDay(buttons[1].value)'><img width=20  src='https://img1.freepng.ru/20180323/dqq/kisspng-gold-medal-olympic-medal-clip-art-golden-cup-5ab5a60f5a8812.1500798115218539673708.jpg'> Поощрить</button>
<button name='nothing' value='Ничего не делать' OnClick='NewDay(buttons[2].value)'><img width=20 src='https://c7.hotpng.com/preview/661/444/1011/american-red-cross-computer-icons-christian-cross-clip-art-big-red-cliparts-thumbnail.jpg'> Ничего не делать</button>
</div>";}

if ($strategy==2){   //Вася задабривающийся
  echo "<div class='container'>
<button name='punish' value='Наказать' OnClick='NewDay(buttons[0].value)'><img width=20  src='https://sc01.alicdn.com/kf/HTB1lLpcOjDpK1RjSZFrq6y78VXaE/bullwhip-bdsm-signal-single-tail-long-whip.jpg'> Наказать</button>
<button name='reward' value='Поощрить' OnClick='NewDay(buttons[1].value, -10)'><img width=20  src='https://img1.freepng.ru/20180323/dqq/kisspng-gold-medal-olympic-medal-clip-art-golden-cup-5ab5a60f5a8812.1500798115218539673708.jpg'> Поощрить</button>
<button name='nothing' value='Ничего не делать' OnClick='NewDay(buttons[2].value)'><img width=20 src='https://c7.hotpng.com/preview/661/444/1011/american-red-cross-computer-icons-christian-cross-clip-art-big-red-cliparts-thumbnail.jpg'> Ничего не делать</button>
</div>";}

if ($strategy==3){   //Вася исправляющийся с течением времени
  echo "<div class='container'>
<button name='punish' value='Наказать' OnClick='NewDay(buttons[0].value, -(Iday*2) )'><img width=20  src='https://sc01.alicdn.com/kf/HTB1lLpcOjDpK1RjSZFrq6y78VXaE/bullwhip-bdsm-signal-single-tail-long-whip.jpg'> Наказать</button>
<button name='reward' value='Поощрить' OnClick='NewDay(buttons[1].value, -(Iday*2) )'><img width=20  src='https://img1.freepng.ru/20180323/dqq/kisspng-gold-medal-olympic-medal-clip-art-golden-cup-5ab5a60f5a8812.1500798115218539673708.jpg'> Поощрить</button>
<button name='nothing' value='Ничего не делать' OnClick='NewDay(buttons[2].value, -(Iday*2) )'><img width=20 src='https://c7.hotpng.com/preview/661/444/1011/american-red-cross-computer-icons-christian-cross-clip-art-big-red-cliparts-thumbnail.jpg'> Ничего не делать</button>
</div>";}

if ($strategy==4){   //Вася иправляющийся по четным дням
  echo "<div class='container'>
<button name='punish' value='Наказать' OnClick='NewDay(buttons[0].value, -20*Math.pow(-1, Iday) )'><img width=20  src='https://sc01.alicdn.com/kf/HTB1lLpcOjDpK1RjSZFrq6y78VXaE/bullwhip-bdsm-signal-single-tail-long-whip.jpg'> Наказать</button>
<button name='reward' value='Поощрить' OnClick='NewDay(buttons[1].value, -20*Math.pow(-1, Iday) )'><img width=20  src='https://img1.freepng.ru/20180323/dqq/kisspng-gold-medal-olympic-medal-clip-art-golden-cup-5ab5a60f5a8812.1500798115218539673708.jpg'> Поощрить</button>
<button name='nothing' value='Ничего не делать' OnClick='NewDay(buttons[2].value, -20*Math.pow(-1, Iday) )'><img width=20 src='https://c7.hotpng.com/preview/661/444/1011/american-red-cross-computer-icons-christian-cross-clip-art-big-red-cliparts-thumbnail.jpg'> Ничего не делать</button>
</div>";}

?>

<div class='data-php' data-strategy="<?=$strategy; ?>"></div>
<script src="test_truant_script.js"></script>


</body>

</html>