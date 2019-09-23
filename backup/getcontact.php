 <?php
        require "init.php";
        

         $sql_query =  "SELECT * FROM `data` ";
         $result = mysqli_query($con,$sql_query);
         $response = array();
    
        while($rows = mysqli_fetch_array($result)){
            
            $row=mysqli_fetch_assoc($result);
            echo $row["name"] .":". $row["number"].":".$row["title"].":".$row["details"];
            
        }
        if($count == 0){
            $response = array("response"=>$success);
        }
?> 