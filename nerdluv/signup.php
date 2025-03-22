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
            <input type="radio" name="gender">

            <label for="female">Female</label>
            <input type="radio" name="gender"><br>


            <label for="age">age: </label>
            <input type="text" name="age" required><br>

            <label for="perso">personality: </label>
            <input type="text" name="perso" required><span><a href="lol.php">(Don't know your type?)</a></span><br>

            <label for="os">Favorite OS:</label>
            <select name="os">
                <option value="windows">Windows</option>
                <option value="linux">linux</option>
                <option value="mac">Mac OS</option>
            </select><br>

            <label>Seeking age: </label>
            <input type="number" name="age-min" min="18" required>
            <span>to</span>
            <input type="number" name="age-max" min="18" required><br>

            <input type="submit" value="Submit">
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