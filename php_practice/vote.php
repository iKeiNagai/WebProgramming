<!DOCTYPE html>
<html>
<body>

<?php

$age = 20;

function eligibleToVote($age){
	if ($age <= 18) {
  	echo "You are not eligible";
	}else{
    	echo"You are eligible";
    }
}

eligibleToVote($age)
?>
 
</body>
</html>