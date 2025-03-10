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
    <dd><?php print $_POST['cc'] ?> (<?php print $_POST['typecc'] ?>)</dd></dd>
</dl>

<?php  ?>


</body>
</html>