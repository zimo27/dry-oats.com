<?PHP
  header('Cache-Control: no-cache');
?>
<html>
<head>
  <title>Environment Variables</title>
</head>
<body><h1 align="center">Environment Variables</h1>
<hr>
<?PHP
$envs = $_SERVER;
foreach($envs as $key=>$value){
        echo "<b>" .$key. " :</b>" .$value. "</br>";
}
?>
</body>
</html>

