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

<fieldset>
<legend>Эффективность наказания:</legend>
  <input type="radio" id="punishgood" name="punishrating" value="1" required />
  <label for="punishgood" title="good">Положительное влияние</label>
  <input type="radio" id="punishbad" name="punishrating" value="-1" />
  <label for="punishbad" title="bad">Отрицательное влияние</label>
  <input type="radio" id="punishnothing" name="punishrating" value="0" />
  <label for="punishnothing" title="nothing">Никакого влияния</label>
</fieldset>

<fieldset>
<legend>Эффективность поощрения:</legend>
  <input type="radio" id="rewardgood" name="rewardrating" value="1" required />
  <label for="rewardgood" title="good">Положительное влияние</label>
  <input type="radio" id="rewardbad" name="rewardrating" value="-1" />
  <label for="rewardbad" title="bad">Отрицательное влияние</label>
  <input type="radio" id="rewardnothing" name="rewardrating" value="0" />
  <label for="rewardnothing" title="nothing">Никакого влияния</label>
</fieldset>

<fieldset>
<legend>Эффективность ничегонеделания:</legend>
  <input type="radio" id="nothinggood" name="nothingrating" value="1" required />
  <label for="nothinggood" title="good">Положительное влияние</label>
  <input type="radio" id="nothingbad" name="nothingrating" value="-1" />
  <label for="nothingbad" title="bad">Отрицательное влияние</label>
  <input type="radio" id="nothingnothing" name="nothingrating" value="0" />
  <label for="nothingnothing" title="nothing">Никакого влияния</label>
</fieldset>

<fieldset> <legend>Ваш пол </legend> 
<input type='radio' name="gender" value='1' required>Мужчина 
<input type='radio' name="gender" value='2'>Женщина
<input type='radio' name="gender" value='3'>Другое
</fieldset>
<p>
Ваша дата рождения <br>
<input type="date" id="date" name="date" required>
</P>
<p>
Ваше образование <br>
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
Оставте отзыв, общие впеталения <br>
<textarea name="comment" cols="50" raws="20" wrap="on" >
</textarea>
</p>
<input type="submit" name="send" value="Завершить">

</form>


</html>