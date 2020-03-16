window.onload= function() {

let time = document.createElement('div'); //Поле "Время и события"
time.className = "alert";
let day = document.createElement('div'); //Поле "День"
let Iday=1; //Счетчик дней
let Stime=''; //Текст выводимый пользователю
let logStime=''; //Только время прихода Васи
let stats=[];  //лог игры
let clicktime = 0; //Задержка перед ответом
let start = new Date; //Начало нового дня (для таймера)
let end = new Date; //Конец нового дня (для таймера)
let AllStrList;   //Список всех стратегий (индекс - название). Тип "Объект"
let strobject;    //Объект, в котором лежат все стратегии (по индексам), AllStrategies и UsedStrategies
let UsedStrList; //Используемы стратегии
let $divbtn = $('#btns'); //Блок кнопок
let infarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //Массив влияний по дням

$.getJSON('strategies.json', function(json) {  //Получение файла strategies.json
   AllStrList = json.AllStrategies;
   strobject = json;
   UsedStrList = json.UsedStrategies;

   timedown = parseInt(json.timezone[0]); //Нижняя граница времени прихода
   if (isNaN(timedown)) {
       timedown = 840;
   }

       timeup = parseInt(json.timezone[1]); //Верхняя граница времени прихода
   if (isNaN(timeup)) {
       timeup = 920;
   }

        range = parseInt(json.timerange[0]); //Диапазон, в котором может прийти Вася без влияний
    if (isNaN(range)) {
        range = 20;
    }

   if (strobject.OnlyYou.length>0){     //Проверка на наличие уникально используемой стратегии
       UsedStrList = strobject.OnlyYou;
   }
/*    console.log(AllStrList);
    console.log(UsedStrList);
    console.log(strobject);*/
    strategy_generation();  //Создание кнопок
    NewDay();  //Начинаем первый день
});

function strategy_generation(){   //Задаем стратегию игры
    str = Math.floor(Math.random() * (UsedStrList.length)-0,00001); //Выбор случайной стратегии
    // console.log(str);
    strname = AllStrList[UsedStrList[str]];   //Имя стратегии
    strbtns = strobject[UsedStrList[str]];   //Кнопки
    for (let i=0; i<strbtns.length; i++){  //Цикл создания кнопок
        let button = $('<button></button>');
        button.attr('value', strbtns[i][0]);
        //console.log(strbtns[i][0]);
        button.click(function(){    //Влияние кнопки
            influence = strbtns[i][1].split(',');
            for (let j = 0; j<influence.length; j++){
                infarray[Iday+j]+=parseInt(influence[j]);
            }
            NewDay(strbtns[i][0]);
        });
        if (strbtns[i][2]!=''){
        btntext = '<img width="50px" src="'+strbtns[i][2]+'"> '+strbtns[i][0];
        } else {
            btntext = strbtns[i][0];
        }

        button.html(btntext);
        $divbtn.append(button);
    }
}

function random_time(){
  
    let random_number=0;
    let itime=900;  //Время начала урока (9:00)
    let max=range+infarray[Iday]; //Максимальное время прихода, относительно начала урока
    let min=-range+infarray[Iday]; //Минимальное время прихода
    let delay='';

  random_number = Math.random()*(max-min)+min; //Генерируем время прихода Васи

     if (random_number<0){          //Если Вася приходит заранее
         if (random_number>-1){random_number=-1;}
         itime=itime-40+random_number%60;
         if (itime<timedown){
             itime = timedown;
         }
         delay=', придя раньше на '+Math.round(860-itime).toFixed(0)+' минут';
     }
     else {             //Если Вася опаздывает
         itime=itime+random_number%60;
         if (itime>timeup){
             itime = timeup;
         }
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

     if (itime>=1200){ //Выход за все логичные пределы
         logStime='Не пришел';
         Stime="Сегодня Вася не пришел в школу"
     }
     if (itime<600){
        logStime='Не уходил'
        Stime = "Сегодня Вася ночевал в школе, чтобы не опоздать на урок"
     }
}


function NewDay(Saction){   //Функция нового дня
    if (Iday>1){
        end = new Date;
        clicktime=end-start;
    stats.push([Iday-1, logStime, Saction, Math.floor(clicktime/10)]); //Записываем данные о прошлом дне
}
    random_time();  //генерируем время прихода

     if (Iday==1){             //Создаем блоки div с нужной информацией
     time.innerHTML = Stime+'<br>Как Вы поступите?<br>(Выберите один из вариантов)';
     day.innerHTML = '<strong>День '+Iday+'</strong>';}

     else if (Iday>=30){ //Финальный день
        end = new Date;
        clicktime=end-start; 
        stats.push([Iday, logStime, 'Завершить', Math.floor(clicktime/10)]); 
        time.innerHTML = 'Вчера Вы выбрали: '+Saction+'<br>'+Stime+'<br><br>Конец игры';
     day.innerHTML = '<strong>День '+Iday+'</strong>';

     let endbtn = $('<button></button>'); //создаем кнопку завершения
     let endtext=document.createTextNode('Завершить');
     endbtn.append(endtext);
     endbtn.css('width', "200px");
     let logactions=[];  //создаем переменную стратегии и кнопок

     logactions.push(str); //узнаем номер стратегии
     
     for (let i=0; i<strbtns.length; i++){  //узнаем названия кнопок и удаляем их
     logactions.push($divbtn.children()[0].value);
     $divbtn.children()[0].remove()
     }
     $divbtn.append(endbtn); //добавляем кнопку "Завершить"
     endbtn.click(function(){
      let jstats =JSON.stringify(stats);
      let jactions = JSON.stringify(logactions);
       localStorage.setItem('stats', jstats);
       localStorage.setItem('actions', jactions);
    document.location.href='feedback_truant.php';
     });}

     else {time.innerHTML = 'Вчера Вы выбрали: '+Saction+'<br>'+Stime+'<br>Как Вы поступите?<br>';
     day.innerHTML = '<strong>День '+Iday+'</strong>';}         
     
     document.body.prepend(day);  //Выводим блоки с информацией на страницу
     day.after(time);
     start = new Date;
     Iday=Iday+1; //Увеличиваем счетчик дня
}


}