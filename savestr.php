<meta charset="UTF-8">
<?php
$JSON = $_POST['str'];
file_put_contents('strategies.json',json_encode($JSON));
?>