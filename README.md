<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Dicee</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster" rel="stylesheet">

  </head>
  <body>

    <div class="container">
      <h1>Refresh Me</h1>

      <div class="dice">
        <p>RISHABH</p>
        <img class="img1" src="dice6.png">
      </div>

      <div class="dice">
        <p>BHAVISHYA</p>
        <img class="img2" src="dice6.png">
      </div>

    </div>

  <script src="index.js"></script>
  </body>

  <footer>
    designed by: Rishabh Patidar
  </footer>
</html>
var rishabh=Math.floor(Math.random()*6)+1;

var randomImage = "dice" + rishabh + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var bhavishya=Math.floor(Math.random()*6)+1;

var randomImage2 = "dice" + bhavishya + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(rishabh>bhavishya)
{
    document.querySelector("h1").innerHTML="Rishabh wins.";
}
else if(bhavishya>rishabh)
{
    document.querySelector("h1").innerHTML="Bhavishya wins.";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}
