<?PHP
  header('Cache-Control: no-cache');
?>
<html>
<head>
<title>Hello, Php!</title>
</head>
<body>

<p><h1 align="center">Hello World from your friends at dry oats</h1></p>
<?PHP

$date = date('l, Y-m-d H:i:s');
$address = $_SERVER['HTTP_CLIENT_IP'] ? $_SERVER['HTTP_CLIENT_IP'] : ($_SERVER['HTTP_X_FORWARDED_FOR'] ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);

echo "<p>Current Time: " .$date. "</p>";
echo "<p>Your IP Address: " .$address. "</p>";
?>
