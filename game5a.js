//game4a.js

var moveCount=0;
var playerHasItem0= false;
var playerHasItem1= false;
var playerHasItem2= false;
var playerHasItem3= false;

var totalInventory = " ";
var inventoryNumber = 0;


function init() {
     loca();
     updateDisplay(locale0);
     item();
     updateDisplay(item0);

     

}

/*function displayInventory() {
     var msg= "Inventory: ";
      
     if (playerHasItem1 && playerHasItem3) {
        msg= msg + "item1.description" + "item3.description";
     }
     if (playerHasItem2 && playerHasItem4) {
        msg= msg + "item2.description" + "item4.description";
     }
  updateDisplay(msg);
} 
*/

/*function displayInventory() {
     var msg= "Inventory: ";
     if (locale===2){
         if (playerHasItem1 && playerHasItem3) {
             msg= msg + "item1.description" + "item3.description";
     } else {
          updateDisplay("You have no items.");
     }
   }
    if (locale===7){
         if (playerHasItem2 && playerHasItem4) {
            msg= msg + "item2.description" + "item4.description";
         } else {
            updateDisplay("You have no items.");
         }
     }
     
  updateDisplay(msg);
} 
*/

function notake() {
var msg = "Nothing to take.";
updateText(msg);
}


function take() {
   switch(currentLocation) {
     case 1:
       if (playerHasItem3) {
          updateText("You took the knife");
          inventoryNumber = inventoryNumber + 1;
          totalInventory = totalInventory + "knife";
          playerHasItem4 = false;
       } else {
           notake();
}
break;
    case 2:
       if (playerHasItem0) {
          updateText("You took the note");
          inventoryNumber = inventoryNumber + 1;
          totalInventory = totalInventory + " n" + "note";
          playerHasItem1 = false;
       } else {
          notake();
}
break;
    case 5:
       if (playerHasItem2) {
         updateText("You took the stamp ");
         inventoryNumber = inventoryNumber + 1;
         totalInventory = totalInventory + " n" + "stamp";
         playerHasItem2 = false;
       } else {
          notake();
}
break;
    case 7:
      if (playerHasItem1) {
         updateText("You took the other note");
         inventoryNumber = inventoryNumber + 1;
         totalInventory = totalInventory + " n" + "other note";
         playerHasItem1 = false;
      } else {
         notake();
}
break;
     default:
        updateDisplay("There is nothing to take");
     break;
   }
}










function displayInventory() {
  if (inventoryNumber == 0) {
      updateDisplay("There are no items in your inventory.");
   } else {
      updateText("Inventory:" + " " + totalInventory);
   }
}






function help() {
   var msg= "Need help? Keep in mind that you need to find two clues to win! You can go North, South, East, or West, depending on your location.";
   updateDisplay(msg);
} 
