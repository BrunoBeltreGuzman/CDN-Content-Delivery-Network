

<?php

$myfile = fopen("index3.html", "r") or die("Unable to open file!");
echo fread($myfile, filesize("index3.html"));
fclose($myfile);
?>