<?php
        require "init.php";//needed for connection with database
        
        
        if(!isset($_SERVER['HTTP_REFERER'])){
            // redirect them to your desired location
            header('location:../index.php');
            exit;
        }

         $sql_query =  "SELECT * FROM headings;";//SQL command
         $result = mysqli_query($con,$sql_query);
         $response = array();
         
        if($rows = mysqli_fetch_array($result)){
        
            echo $rows[0] .":".$rows[1];//returning results 
        }
?> 