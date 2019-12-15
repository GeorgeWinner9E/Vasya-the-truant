

//Шаблон: var buttonname = document.getElementsByTagName('button')['имя кнопки на странице html']
var punishbutton = document.getElementsByTagName('button')['punish']; //установка соответствия между кнопками на странице и кодом js
var rewardbutton = document.getElementsByTagName('button')['reward'];
var nothingbutton = document.getElementsByTagName('button')['nothing'];

var time = document.createElement('div'); //Поле "Время и события"
time.className = "alert";
var day = document.createElement('div'); //Поле "День"
var Iday=1; //Счетчик дней
var max=20; //Максимальное время опоздания
var min=-20; //Минимальное время опоздания (По умолчанию отрицательно)


function NewDay(Saction){   //Функция нового дня
    let random_number = 0;
    let itime=900;
    let stime = '900';
    random_number = Math.random()*(max-min)+min; //Генерируем время прихода Васи 
     itime = 900+random_number;
     if (itime<900){
         itime=itime-40;
     }
     stime = itime.toString();

     if (Iday==1){             //Создаем блоки div с нужной информацией
     time.innerHTML = 'Сегодня Вася пришел в <strong>'+stime[0]+':'+stime[1]+stime[2]+'</strong><br>Как Вы поступите?<br>(Выберите один из вариантов)';
     day.innerHTML = '<strong>День '+Iday+'</strong>';}
     else{
     time.innerHTML = 'Вчера Вы выбрали: '+Saction+'<br>Сегодня Вася пришел в <strong>'+stime[0]+':'+stime[1]+stime[2]+'</strong><br>Как Вы поступите?<br>';
     day.innerHTML = '<strong>День '+Iday+'</strong>';}         
     
     document.body.prepend(day);  //Выводим информацию на страницу
     day.after(time);

     Iday=Iday+1; //увеличиваем счетчик дня

}

NewDay();
  
/*Функции для действий ползователя 
Шаблон
buttonname.onclick = function(){  //В value должно быть название действия на русском
    NewDay(buttonname.value);  //value необходимо задавать при создании кнопки в test_truant.php  
}*/

punishbutton.onclick = function() {
    NewDay(punishbutton.value);
};

rewardbutton.onclick = function() {
    /*if (Iday==31){
        window.close("test_truant.php");
    window.open("anketa_truant.php");
    }*/
     NewDay(rewardbutton.value);
  };

nothingbutton.onclick = function() {
    NewDay(nothingbutton.value);
};
