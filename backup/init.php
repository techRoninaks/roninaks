<?php

    header("Access-Control-Allow-Origin: *");    
    $db_name = "roninaks_temp";
    $user_name = "roninaks_temp";
    $user_pass = "qwerty1";
    $server_name = "localhost";

    $con = mysqli_connect($server_name,$user_name,$user_pass,$db_name);
    $success = "Hello";
    
    if(!$con)
    {
        // echo json_encode(array("response"=>"Cannot connect to database. ".mysqli_connect_error()));
    }
    else
    {

    }
?>