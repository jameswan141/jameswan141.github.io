<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Number Guessing Game</title>

	<style>
		html {
	font-family: sans-serif;
	}
	
		body {
	width: 50%;
	max-width: 75px;
	min-width: 450px;
	margin: 0 auto;
	}
	</style>
</head>

<body>
<h1>Guessing Game</h1>

<p>I have selected a random number between 1 - 10.
Try to guess it.</p>

<div class="form">
	<label for="Field">Enter a guess: </label>
	<input type = "text" id = "Field" class = "Field">
	<input type = "submit" value = "Submit"
		class = "guessSubmit" id = "submitguess">
</div>

<script type = "text/javascript">

	var y = Math.floor(Math.random() * 10 + 1);
	
	var guess = 1;
	
	document.getElementById("submitguess").onclick = function(){
	
var x = document.getElementById("Field").value;

if(x == y)
{	
	alert("Congratulations! You guessed the right number in "
			+ guess + " guesses!");
}
else if(x > y) 
{	
	guess++;
	alert("Sorry! The number is smaller.");
}
else
{
	guess++;
	alert("Sorry! The number is greater.")
}
}
</script>
</body>
</html>					