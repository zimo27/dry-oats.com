<?php
    echo "<html>";
    echo "<head>";
    echo "<meta http-equiv='Cache-Control' content='no-cache' />";
    echo "<meta http-equiv='Content-Type' content='text/html' />";
    echo "<title>General Request PHP</title>";
    echo "</head>";
    echo "<body>";
    echo "<h1 align=center>General Request Echo</h1>";
    echo "<hr/>";
    echo "<h2>Environment Variables</h2>";
    echo "<ul>";
    echo "<p><b>HTTP Protocol: </b>" . $_SERVER['REQUEST_SCHEME'] . "</p>";
    echo "<p><b>HTTP Method: </b>" . $_SERVER['REQUEST_METHOD'] . "</p>";
    echo "<p><b>Query String: </b>" . $_SERVER['QUERY_STRING'] . "</p>";
    echo "</ul>";
    echo "</body>";
    echo "</html>";
?>
