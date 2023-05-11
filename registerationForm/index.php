<?php
    include("database.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome!!</h1>
    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
        <label>Username:</label>
        <input type="text" name="username"><br><br>
        <label>Password:</label>
        <input type="password" name="password"><br><br>
        <input type="submit" name="submit" value="Register"><br>
    </form>
</body>
</html>

<?php
    if($_SERVER["REQUEST_METHOD"] =="POST"){
       $username = filter_input(INPUT_POST,"username",FILTER_SANITIZE_SPECIAL_CHARS);
       $password = filter_input(INPUT_POST,"password",FILTER_SANITIZE_SPECIAL_CHARS);
       if(empty($username)){
        echo "Please enter a username!!";
       }
       elseif(empty($password)){
        echo "Please enter a password!!";
       }
       else{


        $hash = password_hash($password,PASSWORD_DEFAULT);
        try{
            $sql = "INSERT INTO user (user,password)
                VALUES ('$username','$password')";
            mysqli_query($conn,$sql);

            echo "Registered Successfully!";
        }
        
        catch( mysqli_sql_exception){
            echo "Username already exists!";
        }
       }


    }
   mysqli_close($conn);
?>