<html>
<head>
<title>Прогульщик Вася</title>
<meta charset="UTF-8">
<style>
   body {
    background: lightblue; /* Цвет фона */
    /* color: #fc0; /* Цвет текста */
   }

   textarea{
    resize: none;
    height: 150px;
   }
  </style>
</head>




<form action="end_truant.php">

<fieldset> <legend>Ваш пол* </legend> 
<input type='radio' name="gender" value='1' required>Мужчина 
<input type='radio' name="gender" value='2'>Женщина
<input type='radio' name="gender" value='3'>Другое
</fieldset>

<p>
Ваша дата рождения* <br>
<input type="date" id="date" name="date" required>
</p>

<p>
Ваше образование* <br>
<select name="questioner_education" size="1" required><
 <option value=""></option> 
 <option value="education0">Общее</option>
 <option value="education1">Дошкольное</option>
 <option value="education2">Начальное</option>
 <option value="education3">Среднее</option>
 <option value="education4">Среднее специальное</option>
 <option value="education5">Высшее</option>
 </select>
</p>
 <p>
Здесь Вы можете оставить дополнительные комментарии о влиянии действий и ходе игры<br>
<textarea name="comment" cols="60" raws="50" wrap="on" >
</textarea>
</p>
<input type="submit" name="send" value="Завершить">

</form>


</html>