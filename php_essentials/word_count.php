<!DOCTYPE html>
<html>
<body>

<?php


function word_count($string) {
    $wordCount = str_word_count($string);
    echo $wordCount;

}

word_count("hello, how are you?");


?> 

</body>
</html>