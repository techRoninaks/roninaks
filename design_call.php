<?php
require "init.php";
$sql_query =  "SELECT * FROM `design_gallery` ORDER BY `id` DESC";
$result = mysqli_query($con,$sql_query);
    $response = array();
    $data = array();
    $success = "unsuccessful";
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $data[$count]= array("id"=>$row[0],"title"=>$row[1],"image"=>$row[2]);
        $count++;
    }
    $response= array("response"=>$success,"data"=>$data); 
    echo json_encode($data);
    

?>
