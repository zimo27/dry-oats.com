<?php echo '<html><head><title>POST Request Echo</title></head>
	<body><h1 align=center>POST Request Echo</h1>
  	<hr/>'; ?>
 <?php
 echo '<ul>'; ?> 
 <?php foreach($_POST as $key_name => $key_value) {
     print '<li> <b>'.$key_name.': </b>'. $key_value . '</li>'; }?>

 <?php echo '</ul>'; ?> 
