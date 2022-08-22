<?php
session_start();
?>

<?php
session_unset();
session_destroy();
?>

<?php echo '<html><head><title>PHP Session Destroyed</title></head>
	<body><h1 align=center>Session Destroyed</h1>
      <hr/>'; ?>
<?php      
print "<a href=\"/php-cgiform.html\">Back to the PHP CGI Form</a><br />";
print "<a href=\"/cgi-bin/php-session-1.php\">Back to Page 1</a><br />";
print "<a href=\"/cgi-bin/php-session-2.php\">Back to Page 2</a>"; ?>
<?php echo '</body>' ?>
<?php echo '</html>' ?> 
