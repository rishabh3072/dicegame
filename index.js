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
