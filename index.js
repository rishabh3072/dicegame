var rishabh=Math.floor(Math.random()*6)+1;

var randomImage = "dice" + rishabh + ".png";
var randImgSrc = "images/" + randomImage;
document.querySelectorAll("img")[0].setAttribute("src", randImgSrc);

var bhavishya=Math.floor(Math.random()*6)+1;

var randomImage2 = "dice" + bhavishya + ".png";
var randImgSrc2 = "images/" + randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randImgSrc2);

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
