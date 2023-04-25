<?php
function getAccessKey()
{

  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_URL => 'https://api.baubuddy.de/index.php/login',
    CURLOPT_HTTPHEADER => array(
      'Authorization: Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz',
      'Content-Type: application/json'
    ),
    CURLOPT_POSTFIELDS => json_encode(array(
      'username' => '365',
      'password' => '1'
    )),
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_SSL_VERIFYPEER => false
  ));

  $response = curl_exec($curl);
  curl_close($curl);


  if ($response === false) {
    echo 'cURL error: ' . curl_error($curl);
    return curl_error($curl);
  } else {

    $data = json_decode($response, true);
    return $access_token = $data['oauth']['access_token'];
  }
}
