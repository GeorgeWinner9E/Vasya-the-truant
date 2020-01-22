window.onload= function() {

    let stratslist;
    let strats;
    let $strlist = $('#strlist');
    let $table = $('#strpanel');
    let $add = $('#addbtn');

    $.getJSON('strategies.json', function(json) {
        stratslist = json.AllStrategies;
        strats = json;
        for (let i=0; i<Object.keys(stratslist).length; i++) {
            let $str = $('<option value="'+i+'">'+stratslist[i]+'</option>');
            $strlist.append($str);
        }

        loadstr();
    });

    $add.click(AddRow);

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



    function loadstr() {
        let chosenone = strats[$strlist.val()];
        for (let i=0; i<Object.keys(chosenone).length; i++){
            AddRow();
            for (let j=0; j<3; j++) {
                $table.children().children().children()[j].children("input").value = chosenone[i][j];


            }}
    }

}