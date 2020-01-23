window.onload= function() {

    let stratslist;
    let strats;
    let $strlist = $('#strlist');
    let $table = $('#strpanel');
    let $add = $('#addbtn');
    let $delall = $('#delallbtn');
    let $straddbtn = $('#straddbtn');
    let $strdelbtn = $('#strdelbtn');
    let $strsavebtn = $('#strsavebtn');


    function AddRow() {
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

    function cleartable(){
        $("#strpanel tr:not(:has(th))").remove();
    }

    function loadstr() {
        cleartable();
        let chosenone = strats[$strlist.val()];
        for (let i=0; i<Object.keys(chosenone).length; i++){
            AddRow();
            for (let j=0; j<3; j++) {
                //alert(chosenone[i][j]);
                $($($table.children().children()[i+1]).children()[j]).children("input")[0].value = chosenone[i][j];

            }}
    }

    function addstr() {
        cleartable();
        let $str =  $('<option value="'+$strlist.children().length+'">Новая стратегия</option>');
        $strlist.append($str);
        $str.attr('selected', 'selected');
        AddRow();
    }

    function delstr() {
        cleartable();
        let $str =  $('<option value="'+$strlist.children().length+'">Новая стратегия</option>');
        $strlist.append($str);
    }

    $.getJSON('strategies.json', function(json) {
        stratslist = json.AllStrategies;
        strats = json;
        for (let i=0; i<Object.keys(stratslist).length; i++) {
            let $str = $('<option value="'+i+'">'+stratslist[i]+'</option>');
            $strlist.append($str);
        }

        loadstr();
    });

    function NotWorking(){
        alert('В разработке');
    }

    $strlist.change(loadstr);
    $add.click(AddRow);
    $delall.click(cleartable);
    $straddbtn.click(addstr);
    $strdelbtn.click(NotWorking);
    $strsavebtn.click(NotWorking);

}