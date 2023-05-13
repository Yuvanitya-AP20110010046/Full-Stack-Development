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
    <h1>Sign Up</h1>
    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
        <label>Username:</label>
        <input type="text" name="username"><br><br>
        <label>Password:</label>
        <input type="password" name="password"><br><br>
        <label>Re enter the Password:</label>
        <input type="password" name="password1"><br><br>
        <input type="submit" name="submit" value="Register" class="button"><br>
    </form><br>
    <a href="login.php">Already registered? Login here!</a> <br><br>
</body>
</html>

<?php
    if($_SERVER["REQUEST_METHOD"] =="POST"){
       $username = filter_input(INPUT_POST,"username",FILTER_SANITIZE_SPECIAL_CHARS);
       $password = filter_input(INPUT_POST,"password",FILTER_SANITIZE_SPECIAL_CHARS);
       $password_1 = filter_input(INPUT_POST,"password1",FILTER_SANITIZE_SPECIAL_CHARS);
       if(empty($username)){
        echo "Please enter a username!!";
       }
       elseif(empty($password)){
        echo "Please enter a password!!";
       }
       elseif($password!=$password_1){
        echo "Password mismatch.Enter password again!";
       }
       else{
        $password = password_hash($password,PASSWORD_DEFAULT);
        try{
            $sql = "INSERT INTO user (user,password)
                VALUES ('$username','$password')";
            mysqli_query($conn,$sql);

            header("Location:last.html");
        }
        
        catch( mysqli_sql_exception){
            echo "Username already exists!";
        }
       }


    }
   mysqli_close($conn);
?>
