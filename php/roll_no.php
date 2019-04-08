<?php
		$nameErr=$name="";
		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			if (empty($_POST["rno"])){
				   $nameErr = "Name is required";
				   echo $nameErr; 
			}
			else{
				test_input($_POST["rno"]);
			}
		}
		function test_input($data){
			$name_arr= explode("-",$data);
			$val=$name_arr[2];
			if($val=='732')
				echo 'Your Department is CIVIL';
			elseif($val=='733')
				echo 'Your Department is CSE';
			elseif($val=='734')
				echo 'Your Department is ECE';
			elseif($val=='735')
				echo 'Your Department is EEE';
			elseif($val=='736')
				echo 'Your Department is MECH';
			elseif($val=='737')
				echo 'Your Department is IT';
			else
				echo 'Invalid input';
				
		}
?>
