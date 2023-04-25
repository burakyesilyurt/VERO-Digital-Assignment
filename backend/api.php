<?php
include "./getAccessKey.php";
include "./getData.php";
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$access_token = getAccessKey();
$data = api($access_token);



echo json_encode($data);
