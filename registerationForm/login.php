<?php
    include("database.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Signup</title>
    <link rel="stylesheet" href="styles.css" type="text/css"></link>
</head>
<body>
    
        <div>
        <h1>Welcome!!</h1>
            <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
                <label >Username:</label>
                <input type="text" name="username"><br><br>
                <label>Password:</label>
                <input type="password" name="password"><br><br>
                <input type="submit" name="submit" value="Login" class="button"><br>
            </form><br>
            <a href="signup.php">New user? Sign up here!</a> <br><br>
        </div>
    
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
        try{
            // $hash = password_hash($password,PASSWORD_DEFAULT);
            $sql = "SELECT password from `user` WHERE user= '$username'";
            $passwordInDb = mysqli_query($conn,$sql);
            // $passwordInDb = password_hash($password,PASSWORD_DEFAULT);
            foreach($passwordInDb as $p){
                
                    if(password_verify($password,$p["password"])){
                        // $verify = password_verify($p["password"], $hash);    
                        header("Location:last.html");
                    }
                    else{
                        echo "Incorrect password!";
                        // echo password_hash("",PASSWORD_DEFAULT);
                    }
            }
            // 
            // echo "Registered Successfully!";
        }
        
        catch( mysqli_sql_exception){
            echo "Username already exists!";
        }
       }


    }
   mysqli_close($conn);
?>