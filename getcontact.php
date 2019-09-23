 <?php
        require "init.php";//needed for connection with database
        

        if(!isset($_SERVER['HTTP_REFERER'])){
            // redirect them to your desired location
            header('location:../index.php');
            exit;
        }
         $sql_query =  "SELECT * FROM `data` ";//SQL command
         $result = mysqli_query($con,$sql_query);
         $response = array();
    
        while($row=mysqli_fetch_assoc($result)){
            echo $row["name"] .":". $row["number"].":".$row["title"].":".$row["details"];//returning results 
        }
        if($count == 0){
            $response = array("response"=>$success);
        }
?> 