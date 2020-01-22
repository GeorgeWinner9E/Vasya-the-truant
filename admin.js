window.onload= function() {

    

    var $table = $('#strpanel');
    var $add = $('#addbtn');
    $add.click(function AddRow() {
    var $Row = $($table[0].insertRow());

    for (let i=0; i<3; i++){
    let    $Cell = $($Row[0].insertCell());
    let $input = $('<input type="text">');
    $Cell.append($input);}

    let    $Cell = $($Row[0].insertCell());
    let $delbtn = $('<input type="button">');
    $delbtn.click(function DelRow() {
            $table[0].deleteRow($(this).closest("tr").index());
        })
    $Cell.append($delbtn);

    })


}