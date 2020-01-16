
var time = document.createElement('div'); //Поле "Время и события"
time.className = "alert";
var day = document.createElement('div'); //Поле "День"
var Iday=1; //Счетчик дней
var Stime=''; //Текст выводимый пользователю
var logStime=''; //Только время прихода Васи
var stats=[];  //лог игры
var buttons = document.querySelectorAll("button"); //Все кнопки
var clicktime = 0;
var start = new Date;
var end = new Date;

function strategy_generation(value, action, image){

}

function random_time(influence=0){
  
    let random_number=0;
    let itime=900;  //Время начала урока (9:00)
    let max=20+influence; //Максимальное время прихода, относительно начала урока 
    let min=-20+influence; //Минимальное время прихода
    let delay='';  

  random_number = Math.random()*(max-min)+min; //Генерируем время прихода Васи 
     itime = 900+parseInt(random_number/60)*100;
     if (random_number<0){
         if (random_number>-1){random_number=-1;}
         itime=itime-40+random_number%60;
         delay=', придя раньше на '+Math.round(860-itime).toFixed(0)+' минут';
     }
     else {
         itime=itime+random_number%60;
         if (itime>=901){
         delay=', опоздав на '+Math.round(itime-900).toFixed(0)+' минут';
         }
         else {delay=', опоздав на несколько секунд';}
        }
     logStime=itime.toFixed(0);
     if (itime>=1000){
     logStime=logStime[0]+logStime[1]+':'+logStime[2]+logStime[3];
     Stime='Сегодня Вася пришел в <strong>'+logStime+'</strong>'+delay;}
     else {
       logStime=logStime[0]+':'+logStime[1]+logStime[2];
       Stime='Сегодня Вася пришел в <strong>'+logStime+'</strong>'+delay;}

     if (itime>=1200){
         logStime='Не пришел';
         Stime="Сегодня Вася не пришел в школу"
     }
     if (itime<600){
        logStime='Не уходил'
        Stime = "Сегодня Вася ночевал в школе, чтобы не опоздать на урок"
     }
}


function NewDay(Saction, influence=0){   //Функция нового дня    
    if (Iday>1){
        end = new Date;
        clicktime=end-start;
    stats.push([Iday-1, logStime, Saction, Math.floor(clicktime/10)]); //Записываем данные о прошлом дне
}
    random_time(influence);

     if (Iday==1){             //Создаем блоки div с нужной информацией
     time.innerHTML = Stime+'<br>Как Вы поступите?<br>(Выберите один из вариантов)';
     day.innerHTML = '<strong>День '+Iday+'</strong>';}

     else if (Iday>=30){ //Финальный день 
        end = new Date;
        clicktime=end-start; 
        stats.push([Iday, logStime, 'Завершить', Math.floor(clicktime/10)]); 
        time.innerHTML = 'Вчера Вы выбрали: '+Saction+'<br>'+Stime+'<br><br>Конец игры';
     day.innerHTML = '<strong>День '+Iday+'</strong>';

    let buttonsdiv=buttons[0].parentNode; //Находим блок, где лежат кнопки
    let endbtn=document.createElement('button'); //создаем кнопку завершения
        endbtn.style.width=200;
    let endtext=document.createTextNode('Завершить');
     endbtn.appendChild(endtext);

     let logactions=[];  //создаем переменную стратегии и кнопок

     logactions.push(document.querySelector('.data-php').getAttribute('data-strategy')); //узнаем номер стратегии
     
     for (let i=0; i<buttons.length; i++){  //узнаем названия кнопок и удаляем их
     logactions.push(buttons[i].value);
     buttons[i].remove();
     }
     buttonsdiv.appendChild(endbtn); //добавляем кнопку "Завершить"
     endbtn.onclick=function(){
      let jstats =JSON.stringify(stats);
      let jactions = JSON.stringify(logactions);
       localStorage.setItem('stats', jstats);
       localStorage.setItem('actions', jactions);
    document.location.href='feedback_truant.php';
     }}

     else {time.innerHTML = 'Вчера Вы выбрали: '+Saction+'<br>'+Stime+'<br>Как Вы поступите?<br>';
     day.innerHTML = '<strong>День '+Iday+'</strong>';}         
     
     document.body.prepend(day);  //Выводим блоки с информацией на страницу
     day.after(time);
     start = new Date;
     Iday=Iday+1; //Увеличиваем счетчик дня
}

NewDay();

