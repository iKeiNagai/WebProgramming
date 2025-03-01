<!DOCTYPE html>
<html>
<body>

<?php


function remove_all($string, $character) {
	echo "complete string :$string <br>";
    echo "character is: $character<br>";
    echo "<br>";
    
    echo "without character: ";

    //strplit convert string to array
    foreach(str_split($string) as $strchar){
    	if($strchar !== $character){ 
        	echo $strchar;
        }
    }


}

remove_all("Summer is here!", "e")

?> 

</body>
</html>