<?php 
    $file = "singles.txt";
    $msg = "";
    $matches = [];
    $name = $_GET['name'];
    echo $name;

    if(file_exists($file)){
        $users = file($file, FILE_IGNORE_NEW_LINES);
        $currentUser = null;

        //goes through all users
        foreach ($users as $user) {
            $userData = explode(",", $user); //split each user data into array
            
            //check if user name is the same
            if (strcasecmp($userData[0], $name) == 0) {
                $currentUser = [
                    "name" => trim($userData[0]),
                    "gender" => trim($userData[1]),
                    "age" => (int)trim($userData[2]),
                    "personality" => trim($userData[3]),
                    "os" => trim($userData[4]),
                    "minAge" => (int)trim($userData[5]),
                    "maxAge" => (int)trim($userData[6])
                ];
                
                break;
            }
        }

        if(!$currentUser){
            $msg = "<br> You need to signup to view matches <a href='signup.php'>Signup here</a><br>";
        }else{
            $msg = "<br>Hello " . $currentUser["name"] . "! Here are your matches: <br><br>";

            foreach ($users as $user) {
                $userData = explode(",", $user);
                if (strcasecmp($userData[0], $name) == 0) continue; //skips user

                $match = [
                    "name" => trim($userData[0]),
                    "gender" => trim($userData[1]),
                    "age" => (int)trim($userData[2]),
                    "personality" => trim($userData[3]),
                    "os" => trim($userData[4]),
                    "minAge" => (int)trim($userData[5]),
                    "maxAge" => (int)trim($userData[6])
                ];

                if(
                    $match["gender"] !== $currentUser["gender"] && //opposite gender
                    $match["age"] >= $currentUser["minAge"] && $match["age"] <= $currentUser["maxAge"] && //age compatibility
                    $currentUser["age"] >= $match["minAge"] && $currentUser["age"] <= $match["maxAge"] && 
                    $match["os"] === $currentUser["os"] //matching OS
                ){
                    //checks personality based on type letters
                    $commonLetters = 0;
                    for ($i = 0; $i < 4; $i++) {
                        if ($match["personality"][$i] === $currentUser["personality"][$i]) {
                            $commonLetters++;
                        }
                    }

                    if ($commonLetters > 0) {
                        $matches[] = $match;
                    }
                }
            }
            echo "<br>";
            echo count($matches);
        }

        if(!empty($matches)){
            foreach($matches as $match){
                $msg .= "
                    <img src= 'user.jpg'><br>

                    <b> {$match['name']}</b>

                    <ul>
                        <li>gender: {$match['gender']}</li>
                        <li>age: {$match['age']}</li>
                        <li>personality: {$match['personality']}</li>
                        <li>OS: {$match['os']}</li>
                    </ul><br><br>

                ";
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nerdluv</title>
</head>
<body>
    <header>
        <h1>NerdLuv tm</h1>
        <p>where meek geeks meet</p>
    </header>

    <main>
        <?php echo $msg; ?>
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