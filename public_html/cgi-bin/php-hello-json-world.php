<?PHP
  header('Cache-Control: no-cache');
  header('Content-type: application/json');

$date = date('l, Y-m-d H:i:s');

$address = $_SERVER['HTTP_CLIENT_IP'] ? $_SERVER['HTTP_CLIENT_IP'] : ($_SERVER['HTTP_X_FORWARDED_FOR'] ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);

$myObj->message = "Generated with PHP";
$myObj->date = $date;
$myObj->IP_address = $address;

$myJSON = json_encode($myObj);

echo $myJSON;

?>
