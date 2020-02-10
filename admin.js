window.onload= function() {

    let AllStrList;   //Список всех стратегий (индекс - название). Тип "Объект"
    let UsedStrList;
    let strobject;    //Объект, в котором лежат все стратегии (по индексам), AllStrategies и UsedStrategies
    let $strlist = $('#strlist'); //Выпадающий список с названиями стратегий
    let $table = $('#strpanel'); //Таблица отображения параметров конкретной стратегии
    let $add = $('#addbtn');  //Кнопка добавления строки в таблицу
    let $delall = $('#delallbtn'); //Кнопка удаления строки в таблице
    let $straddbtn = $('#straddbtn'); //Кнопка добавления стратегии
    let $strdelbtn = $('#strdelbtn'); //Кнопка удаления стратегии
    let $strsavebtn = $('#strsavebtn'); //Кнопка перезаписи файла Strategies.json
    let $btnname = $('#btnname'); //Поле ввода имени стратегии
    let $Use = $('#Use');
    let $Cancel = $('#Cancel');

    function changename(newname){  //Изменить имя стратегии
        if (newname!=null){
        $('#strlist option:selected').html(newname);
        SaveStrategy()}
    }

    function AddRow() {  //Добавить строку в таблицу
        let $Row = $($table[0].insertRow());
        for (let i=0; i<3; i++){
            let    $Cell = $($Row[0].insertCell());
            let $input = $('<input type="text">');
            $Cell.append($input);}

        let $Cell = $($Row[0].insertCell());
        let $delbtn = $('<input type="button" value="X">');
        $delbtn.click(function DelRow() {
            $table[0].deleteRow($(this).closest("tr").index());
        })
        $Cell.append($delbtn);
    }

    function cleartable(){          //Очистить таблицу
        $("#strpanel tr:not(:has(th))").remove();
    }

    function loadstr() {            //Показать параметры сохраненной стратегии
        cleartable();
        let chosenone = strobject[$strlist.val()];
        for (let i=0; i<Object.keys(chosenone).length; i++){
            AddRow();
            for (let j=0; j<3; j++) {
                $($($table.children().children()[i+1]).children()[j]).children("input")[0].value = chosenone[i][j];
            }}
        if (UsedStrList.indexOf($strlist.val())!=-1){
            $Use.prop('checked', true);
        }
        else {
            $Use.prop('checked', false);
        }
    }

    function addstr() {  //Добавить новую стратегию
        cleartable();
        $Use.prop('checked', false);
        let $str =  $('<option value="'+$strlist.children().length+'">Новая стратегия</option>');
        $strlist.append($str);
        $str.prop('selected', true);
        AddRow();
        SaveStrategy();
    }

    function delstr() { //Удалить текущую стратегию (Базовую удалить нельзя, но можно переименовать)
        if  ($strlist.val()!=0) {
            //cleartable();
            if (UsedStrList.indexOf($strlist.val())!=-1) {
                UsedStrList.splice(UsedStrList.indexOf($strlist.val()), 1);}
            for (i=0; i<UsedStrList.length; i++){
                if (UsedStrList[i]>$strlist.val()){
                    UsedStrList[i]=(UsedStrList[i]-1).toString();
                }
            };
            /*UsedStrList.forEach(function (item) {
            if (item>$strlist.val()){
                item-=1;
            }});*/
            AllStrList.splice($strlist.val(), 1);
            delete strobject[$strlist.val()];
            for (let i=parseInt($strlist.val()); i<$strlist.children().length; i++){
                $('option[value="'+i+'"]').val($('option[value="'+i+'"]').val()-1);
                strobject[i] = strobject[i+1];
            };

            $('#strlist option:selected').remove();
            $('#strlist option:first').prop('selected', true);
            loadstr();
        } else {alert('Невозможно удалить базовую стратегию')};

    }

    function SaveStrategy(){ //Переписать переменную strobject
        //changename();
        let index = $strlist.val();
        AllStrList[index] = $('#strlist option:selected').html();
        let strbtns = {}; //объект, содержащий строки таблицы (не ячейки)
        for (let i=0; i<$("#strpanel tr:not(:has(th))").length; i++) {
            let btnparam = [];
            for (let j = 0; j<3; j++) {
                btnparam.push($($($table.children().children()[i + 1]).children()[j]).children("input")[0].value);
            }
            strbtns[i] = btnparam;
        };
        strobject[index] = strbtns;
    }

    function SaveToJSON(){  //Переписать файл strategies.json
        if (confirm('Вы уверены, что хотите сохранить изменения? \n Отменить действие невозможно')){
        SaveStrategy();
        $.ajax({
            url:"savestr.php",
            success: function (get) {
                //alert (int);
            },
            method: "POST",
            data: {str: strobject}
        });}
    }

    function Cancel(){
        $strlist.empty();
        $.getJSON('strategies.json', function(json) {  //Получение файла strategies.json
            AllStrList = json.AllStrategies;
            UsedStrList = json.UsedStrategies;
            strobject = json;
            for (let i=0; i<Object.keys(AllStrList).length; i++) {
                let $str = $('<option value="'+i+'">'+AllStrList[i]+'</option>');
                $strlist.append($str);
            }
            loadstr();
        });
    }

    $.getJSON('strategies.json', function(json) {  //Получение файла strategies.json
        AllStrList = json.AllStrategies;
        UsedStrList = json.UsedStrategies;
        strobject = json;
        for (let i=0; i<Object.keys(AllStrList).length; i++) {
            let $str = $('<option value="'+i+'">'+AllStrList[i]+'</option>');
            $strlist.append($str);
        }
        loadstr();
    });

    $strlist.change(loadstr);  //Реакция на выбор нового элемента
    $add.click(AddRow);     //Добавление строки на клик
    $delall.click(cleartable);  //Очищение таблицы на клик (Нужно ли оно, если есть удаление стратегии?)
    $straddbtn.click(addstr);   //Добавление стратегии на клик
    $strdelbtn.click(delstr);   //Удаление стратегии на клик
    $strsavebtn.click(SaveToJSON);  //Сохранение изменений и перезапись файла json на клик
    $Use.click(function(){
        if ($(this).is(':checked')){
            UsedStrList.push($strlist.val());
            console.log(UsedStrList);
        } else {
            if (UsedStrList.indexOf($strlist.val())!=-1) {
                UsedStrList.splice(UsedStrList.indexOf($strlist.val()), 1);
            }
        }
    });
    $btnname.click(function () {
    changename(prompt("Введите новое имя", $('#strlist option:selected').html()))
    });
    $Cancel.click(function () {
    if (confirm('Вы уверены, что хотите сбросить все изменения?')){
       Cancel();
    }
    });

}