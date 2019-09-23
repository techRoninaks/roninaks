<?php
$temp = file_get_contents("https://yun.kujiale.com/design/3FO4KN8LVH2W/show");
$final = str_replace("aeditech", "avinash", $temp);
$filename = "3FO4KN8LVH2W.html";
file_put_contents($filename, $final);
?>