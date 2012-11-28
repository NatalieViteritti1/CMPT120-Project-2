        var NORTH= 1;
        var SOUTH= 2;
        var EAST= 3;
        var WEST= 4;
        var currentLocation= 0;
        var currentLocale= 0;
       
        var allLocations = new Array();
        var allItems= new Array(); 
 
       
        function showscore () {
               alert (score);
        }
        function move (direction){
            if (direction===NORTH){
              if (currentLocale=== 7){
                  currentLocale=5;
                  playerHasItem3= false;
                  //updateDisplay("You swam across the lake and reached the tallest tree in the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }else if (currentLocale=== 5){
                  currentLocale=3;
                  //updateDisplay("You are near the lake.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }else if (currentLocale===3){
                  currentLocale=0;
                  //updateDisplay("You are in the center of the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocale===0){
                   currentLocale=1;
                   //updateDisplay("You have found the cave.");
                   document.getElementById("btnNorth").disabled = false;
                   document.getElementById("btnSouth").disabled = false;
                   document.getElementById("btnEast").disabled = true;
                   document.getElementById("btnWest").disabled = true;
              }else if (currentLocale===1){
                  currentLocale=6;
                  playerHasItem4= false;
                  //updateDisplay("You saw people coming towards the cave, so you run toward the mountain.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }
                updateDisplay("moving north");
            }else if (direction===SOUTH){
                if (currentLocale=== 6){
                  currentLocale=1;
                  //updateDisplay("You have found the cave.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }else if (currentLocale=== 1){
                  currentLocale=0;
                  //updateDisplay("You are in the center of the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocale===0){
                  currentLocale=3;
                  //updateDisplay("You are near the lake.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }else if (currentLocale===3){
                   currentLocale=5;
                   playerHasItem3= false;
                   //updateDisplay("You swam across the lake and reached the tallest tree in the forest.");
                   document.getElementById("btnNorth").disabled = false;
                   document.getElementById("btnSouth").disabled = false;
                   document.getElementById("btnEast").disabled = true;
                   document.getElementById("btnWest").disabled = true;
              }else if (currentLocale===5){
                   currentLocale=7;
                   playerHasItem2= false;
                   //updateDisplay("You climbed up the tree and found a bird's nest with the last clue.");
                   document.getElementById("btnNorth").disabled = false;
                   document.getElementById("btnSouth").disabled = true;
                   document.getElementById("btnEast").disabled = true;
                   document.getElementById("btnWest").disabled = true;
              }
                updateDisplay("moving south");
            }else if (direction===EAST){
                if (currentLocale===9){
                  currentLocale=4;
                  //updateDisplay("You are now on the beach.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;     
              }else if (currentLocale== 4){
                  currentLocale=0;
                  //updateDisplay("You are in the center of the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
                  
              }else if (currentLocale===0){
                  currentLocale=2;
                  playerHasItem1= false;
                  //updateDisplay("You have found the first clue behind the heart-shaped rock.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocale===2){
                  currentLocale=8;
                  //updateDisplay("You walk towards the boardwalk.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = false;
              }
                updateDisplay("moving east");
            }else if (direction===WEST){
                if (currentLocale=== 8){
                  currentLocale=2;
                  playerHasItem1= false;
                  //updateDisplay("You have found the first clue behind the heart-shaped rock.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocale=== 2){
                  currentLocale=0;
                  //updateDisplay("You are in the center of the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocale===0){
                  currentLocale=4;
                  //updateDisplay("You are now on the beach.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocale===4){
                  currentLocale=9;
                  //updateDisplay("You have found the boardwalk.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = true;
              }
                updateDisplay("moving west")
            }else {
                updateDisplay("Error. Unknown direction: " + direction);
            }
            displayNewLocale();
         }

function displayNewLocale(){     
     //updateDisplay(allLocations[currentLocale].description);
     
     switch (currentLocale) {
          case 0: updateDisplay(locale0.description); break;
          case 1: updateDisplay(locale1.description); break;
          case 2: updateDisplay(locale2.description); break;
          case 3: updateDisplay(locale3.description); break;
          case 4: updateDisplay(locale4.description); break;
          case 5: updateDisplay(locale5.description); break;
          case 6: updateDisplay(locale6.description); break;
          case 7: updateDisplay(locale7.description); break;
          case 8: updateDisplay(locale8.description); break;
          case 9: updateDisplay(locale9.description); break;
          default: updateDisplay("Invalid currentLocale value: " + currentLocale + "This should never happen");
     }
     
 } 

function displayItems() {
        var item1=note;
        var item2=note2;
        var item3=stamp;
        var item4=knife; 


     updateDisplay(allItems[currentItem].description);

}
     