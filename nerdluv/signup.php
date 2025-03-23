<?php
$file = "singles.txt";
$msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $gender = $_POST['gender'];
    $age = $_POST['age'];
    $personality = $_POST['perso'];
    $os = $_POST['os'];
    $age_min = $_POST['age-min'];
    $age_max = $_POST['age-max'];

    if (!empty($name) && !empty($gender) && !empty($age) && !empty($personality) && !empty($os) && !empty($age_min) && !empty($age_max)) {
        //read file to check if user exists
        if (file_exists($file)) {
            $users = file($file, FILE_IGNORE_NEW_LINES); //read file into an array
            
            //goes through all users
            foreach ($users as $user) {
                $userData = explode(",", $user); //split each user data into array
                
                //check if user name is the same
                if (strcasecmp($userData[0], $name) == 0) {
                    $msg = "<span style='color:red;'>User already exists!</span>";
                    break;
                }
            }

            if (empty($msg)) {
                $newUser = "$name,$gender,$age,$personality,$os,$age_min,$age_max\n";
                file_put_contents($file, $newUser, FILE_APPEND);

                $msg = "<span style='color:green;'><br><br> Signup successful! <a href='matches.php'>Login here</a><br>";
            }
        }

    } else {
        $msg = "<span style='color:red;'>Please fill in all fields.</span>";
    }

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NerdLuv</title>
</head>
<body>
    <header>
        <h1>NerdLuv tm</h1>
        <p>where meek geeks meet</p>
    </header>

    <main>
        <p>New User Signup:</p>
        <form action="" method="POST">
            <label for="name">Name: </label>
            <input type="text" name="name" required><br>
            
            Gender:
            <label for="male">Male</label>
            <input type="radio" name="gender" value="M">

            <label for="female">Female</label>
            <input type="radio" name="gender" value="F"><br>


            <label for="age">age: </label>
            <input type="number" name="age" min="18" required><br>

            <label for="perso">personality: </label>
            <input type="text" name="perso" required><span><a href="lol.php">(Don't know your type?)</a></span><br>

            <label for="os">Favorite OS:</label>
            <select name="os">
                <option value="Windows">Windows</option>
                <option value="Linux">linux</option>
                <option value="Mac OS">Mac OS</option>
            </select><br>

            <label>Seeking age: </label>
            <input type="number" name="age-min" min="18" required>
            <span>to</span>
            <input type="number" name="age-max" min="18" required><br>

            <input type="submit" value="Submit">
            <?php echo $msg; ?>
        </form>
    </main>

    <footer>
        <p>This page is for single nerds to meet and date each other! Type in <br>
            your personal information and wait for the nerdly luv to begin!<br>
            Thank you for using our site.<br>
            <br>
            Result and page (C) Copyright NerdLuv Inc.<br>
        </p>
    </footer>
</body>
</html>