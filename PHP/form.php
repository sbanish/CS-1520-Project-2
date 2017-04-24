<?php
	$connect = new mysqli ('localhost', 'root', 'root', 'form') or die ('could not connect');
	
	if ($connect -> connect_error)
	{
		die('connection failed');
	} echo "connection successful";
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$sql = "INSERT INTO forminfo VALUES ('$name', '$email', '$message')";
	
	if ($connect -> query ($sql) == TRUE)
	{
		echo "<br> information has been added";
		$information = fopen("form.txt", "a");
		$info = "Name: " . "$name" . " \r\nEmail: " . "$email" . "\r\nMessage: " . "$message";
		fwrite($information, $info);
	}
	else
	{
		echo "error"; 	
	}

	$sql->close();
?>