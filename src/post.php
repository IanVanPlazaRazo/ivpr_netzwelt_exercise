<?php

$url = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn';

$data = array(
    'username' => 'foo',
    'password' => 'bar'
);

$data_string = json_encode($data);

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string)
));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($httpCode == 200) {
    echo "Request successful. Response:\n" . $response;
} else {
    echo "Request failed. HTTP Code: " . $httpCode . "\nResponse:\n" . $response;
}

curl_close($ch);