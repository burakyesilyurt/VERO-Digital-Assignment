<?php

function api($access_token)
{
  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_URL => 'https://api.baubuddy.de/dev/index.php/v1/tasks/select/',
    CURLOPT_HTTPHEADER => array(
      'Authorization: Bearer ' . $access_token,
      'Content-Type: application/json'
    ),
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_SSL_VERIFYPEER => false
  ));


  $response = curl_exec($curl);
  curl_close($curl);


  if ($response === false) {
    echo 'cURL error: ' . curl_error($curl);
  } else {
    $data = json_decode($response, true);
    // echo "<pre>";
    // print_r($data);
    // echo "</pre>";
    return ($data);
  }
}
