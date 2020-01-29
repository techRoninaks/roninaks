<?php
 require "init.php";

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$date = $_POST['date'];
$targetfolder = "upload/Resume/";
$targetfolder = $targetfolder . $name.".pdf" ;

if(move_uploaded_file($_FILES['my_file']['tmp_name'], $targetfolder))

 {

//  echo "The file ". basename( $_FILES['my_file']['name']). " is uploaded";

 }

 else {

//  echo "Problem uploading file";

 }

$sql_query= "INSERT INTO `careers`(`name`,`phone`,`email`,`dob`,`pdf`)VALUES('$name','$phone','$email','$date','$targetfolder')";
$result1 = mysqli_query($con,$sql_query);

// if (($_FILES['my_file']['name']!="")){
//     // Where the file is going to be stored
//      $target_dir = "../";
//      $file = $_FILES['my_file']['name'];
//      $path = pathinfo($file);
//      $filename = $path['filename'];
//      $ext = $path['extension'];
//      echo $file;
//      $temp_name = $_FILES['my_file']['tmp_name'];
//      $path_filename_ext = $target_dir.$filename.".".$ext;
     
//     // Check if file already exists
//     if (file_exists($path_filename_ext)) {
//      echo "Sorry, file already exists.";
//      }else{
//      move_uploaded_file($temp_name,$path_filename_ext);
//      echo "Congratulations! File Uploaded Successfully.";
//      }
//     }


// echo $sql_query;
//   echo "$targetfolder";
// echo $sql_query;

if($result1){
    echo "success";
}
else
    echo "failed";

    



?>