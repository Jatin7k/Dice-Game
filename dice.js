var randomnumber1 = Math.floor(Math.random() * 6 + 1);
// var randomimage1 = "/Dicee game/images/"+ "dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", "/Dicee game/images/dice" + randomnumber1 + ".png");

var randomnumber2 = Math.floor(Math.random() * 6 + 1);
var randomimage2 = "/Dicee game/images/"+ "dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimage2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}