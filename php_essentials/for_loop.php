<!DOCTYPE html>
<html>
<body>

<?php
function triangle($x){
	for($i = 0; $i <= $x; $i++){
      for($j = 0; $j <= $i; $j++){
          echo "*";
      }
    echo "<br>";
	}
}

triangle(20);

?> 

</body>
</html>
