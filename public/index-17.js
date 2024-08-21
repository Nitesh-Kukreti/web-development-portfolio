// alert("startr")
var randomNumber1 = Math.random();
var randomNumber2 = Math.random();

randomNumber1 = (Math.floor(randomNumber1*6)+1);
randomNumber2 = (Math.floor(randomNumber2*6)+1);

var randomDiceImage1 = "../assets/images/" + "17-dice" + randomNumber1 + ".png";
var randomDiceImage2 = "../assets/images/" + "17-dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img");

image1[0].setAttribute( "src" , randomDiceImage1 );
image1[1].setAttribute( "src" , randomDiceImage2 );

if (randomDiceImage1 > randomDiceImage2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (randomDiceImage1 < randomDiceImage2){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "draw";
}