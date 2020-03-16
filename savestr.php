<?php
if (isset($_POST['str'])){
$JSON = $_POST['str'];
file_put_contents('strategies.json',json_encode($JSON));}