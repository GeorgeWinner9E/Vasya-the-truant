let actions = JSON.parse(localStorage.getItem('actions')); //возвращаем массив действий с прошлой страницы

if (actions==''){
    alert("Ошибка. Данные не были загружены. Возможно, сервер временно недоступен или были использованы кнопки \"Назад\", \"Обновить\" или \"Вперед\". Вы будете перенаправлены на первую страницу.");
    document.location.href='reference_truant.php';
}

let  mainform = document.getElementById('main');  //Главная форма
let divs = []; //Массив блоков оценки

for (let i=1; i<actions.length; i++){
    divs[i]=document.createElement('fieldset'); //создаем блок
mainform.appendChild(divs[i]);

let legend = document.createElement('legend');
legend.appendChild(document.createTextNode('Оцените эффективность действия \"'+actions[i]+'\"'));
divs[i].appendChild(legend);

    var new_text=document.createTextNode(1);
    divs[i].appendChild(new_text);
for (let j=1; j<11; j++){   //заполняем блок кнопками голосования
    let new_rate=document.createElement('input');
    new_rate.name=i;
    new_rate.required=true;
    new_rate.type='radio';
    new_rate.value=j;
    new_rate.onchange = function(){
        actions[new_rate.name]=new_rate.value;
    }
    divs[i].appendChild(new_rate);
}
var new_text=document.createTextNode(10);
    divs[i].appendChild(new_text);
}

let endbtn=document.createElement('button'); //создаем кнопку завершения
        endbtn.style.width=200;
    let endtext=document.createTextNode('Завершить');
     endbtn.appendChild(endtext);
     endbtn.onclick=function() {
           let jactions = JSON.stringify(actions);
           localStorage.setItem('rated_actions', jactions); //преобразуем массив действий с оценками
     }
mainform.appendChild(endbtn);
