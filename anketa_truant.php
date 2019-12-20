<html>
<head>
<title>Прогульщик Вася</title>
<meta charset="UTF-8">
<style>
   body {
    background: lightblue; /* Цвет фона */
    /* color: #fc0; /* Цвет текста */
   }

   
   .required{
        color:red;
    }

   textarea{
    resize: none;
    height: 150px;
   }
  </style>
</head>


<form id='final' action="end_truant.php" method='POST'>

<fieldset> <legend>Ваш пол<span class='required'>*<span> </legend> 
<input type='radio' name="gender" value='Мужчина' required>Мужчина 
<input type='radio' name="gender" value='Женщина'>Женщина
<input type='radio' name="gender" value='Другое'>Другое
</fieldset>

<p>
Ваша дата рождения<span class='required'>*<span> <br>
<input type="date" id="date" name="date" required>
</p>

<p>
Ваше образование<span class='required'>*<span> <br>
<select name="education" size="1" required><
 <option value=""></option> 
 <option value="общее">Общее</option>
 <option value="дошкольное">Дошкольное</option>
 <option value="начальное">Начальное</option>
 <option value="среднее">Среднее</option>
 <option value="среднее специальное">Среднее специальное</option>
 <option value="высшее">Высшее</option>
 </select>
</p>
 <p>
Здесь Вы можете оставить дополнительные комментарии о влиянии действий и ходе игры<br>
<textarea name="comment" cols="60" raws="50" wrap="on" >
</textarea>
</p>
<input type="submit" name="send" value="Завершить" >

</form>

<script>
let actions = JSON.parse(localStorage.getItem('rated_actions')); 
let log = JSON.parse(localStorage.getItem('stats'));
let strategydata=document.createElement('input');
let actionsdata=document.createElement('input');
let logdata=document.createElement('input');
let send=document.getElementById('final');

strategydata.name='strategy';
strategydata.value=actions[0];
strategydata.type='hidden';
actions.shift();
actionsdata.name='actions';
actionsdata.type='hidden';
actionsdata.value=actions;
logdata.name='log';
logdata.type='hidden';
logdata.value=log;

send.appendChild(strategydata);
send.appendChild(actionsdata);
send.appendChild(logdata);
</script>


</html>