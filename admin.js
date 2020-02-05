window.onload= function() {

    let AllStrList;   //Список всех стратегий (индекс - название). Тип "Объект"
    let strobject;    //Объект, в котором лежат все стратегии (по индексам), AllStrategies и UsedStrategies
    let $strlist = $('#strlist'); //Выпадающий список с названиями стратегий
    let $table = $('#strpanel'); //Таблица отображения параметров конкретной стратегии
    let $add = $('#addbtn');  //Кнопка добавления строки в таблицу
    let $delall = $('#delallbtn'); //Кнопка удаления строки в таблице
    let $straddbtn = $('#straddbtn'); //Кнопка добавления стратегии
    let $strdelbtn = $('#strdelbtn'); //Кнопка удаления стратегии
    let $strsavebtn = $('#strsavebtn'); //Кнопка перезаписи файла Strategies.json
    let $strname = $('#strname'); //Поле ввода имени стратегии

    function changename(){  //Изменить имя стратегии
        $('#strlist option:selected').html($strname.val());
        SaveStrategy();
    }
    $strname.keypress(function (e) {   //Реагировать на Enter при вводе имени стратегии
        if (e.which==13){
            changename();
        }
    })

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
        $strname.val($('#strlist option:selected').html());
        for (let i=0; i<Object.keys(chosenone).length; i++){
            AddRow();
            for (let j=0; j<3; j++) {
                $($($table.children().children()[i+1]).children()[j]).children("input")[0].value = chosenone[i][j];
            }}
    }

    function addstr() {  //Добавить новую стратегию
        cleartable();
        let $str =  $('<option value="'+$strlist.children().length+'">Новая стратегия</option>');
        $strlist.append($str);
        $str.prop('selected', true);
        //$strname.val($('#strlist option:selected').html());
        $strname.val("");
        AddRow();
        SaveStrategy();
    }

    function delstr() { //Удалить текущую стратегию (Базовую удалить нельзя, но можно переименовать)
        if  ($strlist.val()!=0) {
            //cleartable();
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
        SaveStrategy();
        $.ajax({
            url:"savestr.php",
            success: function (get) {
                //alert (int);
            },
            method: "POST",
            data: {str: strobject}
        });
    }


    $.getJSON('strategies.json', function(json) {  //Получение файла strategies.json
        AllStrList = json.AllStrategies;
        strobject = json;
        for (let i=0; i<Object.keys(AllStrList).length; i++) {
            let $str = $('<option value="'+i+'">'+AllStrList[i]+'</option>');
            $strlist.append($str);
        }
        loadstr();
    });

    function NotWorking(){ //Пустая функция для проверки работы вызова функции
        alert('В разработке');
    }

    $strlist.change(loadstr);  //Реакция на выбор нового элемента
    $add.click(AddRow);     //Добавление строки на клик
    $delall.click(cleartable);  //Очищение таблицы на клик (Нужно ли оно, если есть удаление стратегии?)
    $straddbtn.click(addstr);   //Добавление стратегии на клик
    $strdelbtn.click(delstr);   //Удаление стратегии на клик
    $strsavebtn.click(SaveToJSON);  //Сохранение изменений и перезапись файла json на клик

}