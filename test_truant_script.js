// начальное состояние кнопки — не кликнута
// javascript здесь нашёл и выбрал элемент кнопки
var killbutton = document.getElementsByTagName('button')[0];
var savebutton = document.getElementsByTagName('button')[1];
var nothingbutton = document.getElementsByTagName('button')[2];
var time = document.createElement('div');
var day = document.createElement('div');
var n=1;
var max=20;
var min=-20;
var itime=900;
var stime = '900';
var random_number = 0;

time.className = "alert";

random_number = Math.random()*(max-min)+min; 
     itime = 900+random_number;
     if (itime<900){
         itime=itime-40;
     }
     stime = itime.toString();

     time.innerHTML = stime[0]+':'+stime[1]+stime[2];
     day.innerHTML = '<strong>День '+n+'</strong>';
     n=n+1;
     
     document.body.prepend(time);
     time.after(day);

savebutton.onclick = function() {
      
     random_number = Math.random()*(max-min)+min; 
     itime = 900+random_number;
     if (itime<900){
         itime=itime-40;
     }
     stime = itime.toString();

     time.innerHTML = stime[0]+':'+stime[1]+stime[2];
     day.innerHTML = '<strong>День '+n+'</strong>';
     n=n+1;
     
     document.body.prepend(time);
     time.after(day);

  };
  
killbutton.onclick = function() {
    
    random_number = Math.random()*(max-min)+min;
    itime = 900+random_number;
    if (itime<900){
        itime=itime-40;
    }
    stime = itime.toString();

    time.innerHTML = stime[0]+':'+stime[1]+stime[2];
    day.innerHTML = '<strong>День '+n+'</strong>';
    n=n+1;
    document.body.prepend(time);
    time.after(day);
};

nothingbutton.onclick = function() {
    random_number = Math.random()*(max-min)+min;
    itime = 900+random_number;
    if (itime<900){
        itime=itime-40;
    }
    stime = itime.toString();

    time.innerHTML = stime[0]+':'+stime[1]+stime[2];
    day.innerHTML = '<strong>День '+n+'</strong>';
    n=n+1;
    document.body.prepend(time);
    time.after(day);
};
