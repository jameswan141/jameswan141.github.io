<script>
function city() {
  var x = document.getElementsByClassName("mayor");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>



document.getElementById("demo").innerHTML = "Hello World!";



document.getElementById('myImage').src="picture.gif"



document.getElementById("demo").style.fontSize = "30px";



document.getElementById("demo").style.display = "none";



document.getElementById("demo").style.display = "block";



<script>
document.getElementById("demo").innerHTML = "The second use of script.";
</script>



<!DOCTYPE html>
<html>
<head>
<script>
function changeParagraph() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h1>Demo JavaScript in head section.</h1>

<p id="demo">A paragraph</p>
<button type="button" onclick="changeParagraph()">It works</button>

</body>
</html>