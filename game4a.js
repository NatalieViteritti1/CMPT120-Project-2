//game4a.js

var moveCount=0;
var playerHasFirstClue= false;
var playerHasSecondClue= false;
var playerHasThirdClue= false;


function init() {
    location0();

}

function displayInventory() {
     var msg= "Inventory: ";
     if (playerHasFirstClue) {
        msg= msg + "firstClue";
     }
     if (playerHasSecondClue) {
        msg= msg + "secondClue";
     }
  updateDisplay(msg);
} 

function help() {
   var msg= "Need help? Keep in mind that you need to find two clues to win! You can go North, South, East, or West, depending on your location.";
   updateDisplay(msg);
} 