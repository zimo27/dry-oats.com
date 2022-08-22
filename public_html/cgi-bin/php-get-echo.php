<?PHP
  header('Cache-Control: no-cache');
?>
<html>
<head>
  <title>GET Query String</title>
</head>
<body><h1 align="center">GET query string</h1>
<b>query string:</b>

<?PHP
$query = $_SERVER['QUERY_STRING'];
echo "$query <br/><hr/>";
$qlist = explode('&', $query);

foreach($qlist as $q){
  $eql = explode('=', $q);
  echo "$eql[0] = ";
  if(count($eql) > 1){
    echo "$eql[1] </br>";
  }
}
?>
