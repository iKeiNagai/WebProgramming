<!DOCTYPE html>
<html>
<body>

<?php

//50% chance of biting
function isBitten(){
	$prob=rand(0,100);
	if($prob >= 50){
    	return 1;
     }else{
     	return 0;
     }
}

if (isBitten()){
	echo "Charlie bit your finger!";
}else{
	echo "Charlie did not bit your finger!";
}

?>
 
</body>
</html>