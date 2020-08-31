//generate random number for first dice
var randomNumber1 = (Math.floor(Math.random()*6)+1);
//format the generated number as per the names of the images for dice, i.e. dice1.png,dice2.png.....dice6.png
var randomDice = "dice"+randomNumber1+".png";
//since the images are located in a folder, to make them look like dynamic
var randomDiceSrc = "images/"+randomDice;

 var image1 = document.getElementsByClassName("dice-img")[0];
 image1.setAttribute("src", randomDiceSrc);

 var randomNumber2 = (Math.floor(Math.random()*6)+1);
 var randomDice2 = "dice"+randomNumber2+".png";
 var randomDiceSrc2 = "images/"+randomDice2;
 var image2 = document.getElementsByClassName("dice-img")[1];
image2.setAttribute("src", randomDiceSrc2);

if(randomNumber1 > randomNumber2){
document.getElementById("print").innerHTML = "<h2>Player 1 is the Winner</h2>";
}
else if (randomNumber1 < randomNumber2) {
  document.getElementById("print").innerHTML = "<h2>Player 2 is the Winner</h2>";
}
else {
  document.getElementById("print").innerHTML = "<h2><bold>DRAW!!</bold></h2>";
}
