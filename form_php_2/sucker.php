<!DOCTYPE html>
<html>
<body>

<h1>THANKS, sucker!</h1>

<p>Your information has been recorded</p>

<dl>
    <dt>Name</dt>
    <dd><?php print $_POST['name'] ?></dd>

    <dt>Section</dt>
    
    <dd><?php print $_POST['section'] ?></dd>

    <dt>Credit Card</dt>
    <dd><?php print $_POST['cc'] ?> (<?php print $_POST['typecc'] ?>)</dd>
</dl>

<?php
    $name = $_POST['name'];
    $section = $_POST['section'];
    $cc = $_POST['cc'];
    $typecc = $_POST['typecc'];

    $data = "$name;$section;$cc;$typecc" . PHP_EOL;
    file_put_contents("suckers.html", $data, FILE_APPEND);  //set permissions 
?>

<pre>
<?php 
    $file_content = file_get_contents("suckers.html");
    echo $file_content;
?>
</pre>

<?php  ?>

</body>
</html>