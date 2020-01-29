<?php
    require "init.php";
    $sql_query =  "SELECT * FROM `projects` ORDER BY `projects`.`id` DESC";
    $result = mysqli_query($con,$sql_query);
    $response = array();
    $data = array();
    $success = "unsuccessful";
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $data[$count]= array("id"=>$row[0],"image"=>$row[1],"title"=>$row[2],"summary"=>$row[3]);
        $count++;
    }
    $response= array("response"=>$success,"data"=>$data); 
    echo json_encode($data);
    
?>
