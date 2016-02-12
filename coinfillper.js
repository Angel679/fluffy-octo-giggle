
    var decision;
var loosePoints=  1;
var Points =  1;
var PointsGiven = document.getElementById("PointsGiven");
var Coinflip = Math.random();
//Gives me a "random number"
var roundCount = 1;
    /* Get round paragraph. */
 var   round = document.getElementById("round");
 var   outcome = document.getElementById("outcome");
  var  coin = document.getElementsByTagName("img")[0];
function coinFlip() {
     ++roundCount;
     //adds a 1 to roundcount
var Choice = prompt("Do you choose Heads or Tails?");
//UserChoice asks question
var Coinflip = Math.random();
if (Choice === "Heads"){
    //If the user choose heads as an answer
    if (Coinflip < 0.5) {
        //the user was correct, and a pop up would appear with the coin changing image
         ++Points
         decision="Heads";
         coin.setAttribute("src", "http://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-head.jpg");
        var result = alert("The coin landed on heads. You Win!");
    }
    else { ++loosePoints
    //however if the answer was tails, user choose heads, then the user looses
          decision="Tails";
         coin.setAttribute("src", "http://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-tail.jpg");
        var result = alert("The coin landed on tails. You Lose!");
    }
}
else {

    if (Coinflip < 0.5) {
        ++loosePoints
        //same as above however this time if the user chooses tails, or anyother word besides heads, and lands on heads you loose
         coin.setAttribute("src", "http://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-head.jpg");
    decision="Heads";
    //decision doesn't matter its just for show, for the user can see after the popup
        var result = alert("The coin landed on heads. You Lose!");
    }
    else {
        //same as before, user chooses tails and equals tails you win
        ++Points
           decision="Tails";
               coin.setAttribute("src", "http://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-tail.jpg");
        var result = alert("The coin landed on tails. You Win!");
    }
}
 {
//  else{
//      if (coinToss < 0.05) {
//           coin.setAttribute("src", "http://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-tail.jpg");
//       var result = alert("The Coin was was thrown to the wind, then was runned over by a car, the rain sweeped it down to the sewers, got to the ocean, ends up in countryside, and some random guy shoots it with a shotgun for fun!");
//      }
outcome.innerHTML = "Landed on " + decision + "!";
//this is what I ment for "show" its just for the user to see
    round.innerHTML = "Round " + roundCount;
    //When you click the coin everytime it adds 1 to the roundCount so the user can see
    PointsGiven.innerHTML = "Points"  + '&nbsp' + loosePoints;
    //not working properly
    PointsGiven.innerHTML = "Points"  + '&nbsp' +  Points;
    //everytime when the user acuratly gueses the user earns 1 point

}}
 coin.onclick = function () {
    coinFlip();
    //this is what starts the process, when you click 
};