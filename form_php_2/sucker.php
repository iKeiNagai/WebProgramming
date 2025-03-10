<!DOCTYPE html>
<html>
<body>
<?php
    $name = $_POST['name'];
    $section = $_POST['section'];
    $cc = $_POST['cc'];
    $typecc = $_POST['typecc'];

    if(!empty($name) and !empty($section) and !empty($cc) and !empty($typecc)){
        echo "<h1>THANKS, sucker!</h1>";

        echo "<p>Your information has been recorded</p>";

        echo "<dl>";

        echo "<dt>Name</dt>";
        echo "<dd> print". $name . "</dd>";

        echo "<dt>Section</dt>";  
        echo "<dd>". $section . "</dd>";

        echo "<dt>Credit Card</dt>";
        echo "<dd>" . $cc . "(" . $typecc .")</dd>";

        echo "</dl>";

        $data = "$name;$section;$cc;$typecc" . PHP_EOL;
        file_put_contents("suckers.html", $data, FILE_APPEND);  //set permissions 

        echo "<p>Here are all the suckers who have submitted here</p>";
        echo "<pre>";

        $file_content = file_get_contents("suckers.html");
        echo $file_content;

        echo "</pre>";

    }else{
        echo "<h1>Sorry</h1>";
        echo "<p> You did not fill out the form completely.";
        echo '<a href="buy_form.html">Try again?</a>';
    }
?>
<?php  ?>

</body>
</html>