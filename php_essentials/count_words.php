<!DOCTYPE html>
<html>
<body>

<?php


function countWords($string) {
    $wordsArray = str_word_count($string, 1); // 1: returns array of all words 

    //counts occurrences of each word in array
    $wordCount = array_count_values($wordsArray); 

    foreach($wordCount as $word => $count){
    	echo "$word : $count <br>";
    }
    

}

countWords("Hello Hello Hello World");

?> 

</body>
</html>