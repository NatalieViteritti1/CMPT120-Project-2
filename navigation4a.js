        var NORTH= 1;
        var SOUTH= 2;
        var EAST= 3;
        var WEST= 4;
        var currentLocation= 0;
       
        function showscore () {
               alert (score);
        }
        function move (direction){
            if (direction===NORTH){
              if (currentLocation=== 7){
                  currentLocation=5;
                  updateDisplay("You swam across the lake and reached the tallest tree in the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }else if (currentLocation=== 5){
                  currentLocation=3;
                  updateDisplay("You are near the lake.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }else if (currentLocation===3){
                  currentLocation=0;
                  updateDisplay("You are in the center of the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocation===0){
                   currentLocation=1;
                   updateDisplay("You have found the cave.");
                   document.getElementById("btnNorth").disabled = false;
                   document.getElementById("btnSouth").disabled = false;
                   document.getElementById("btnEast").disabled = true;
                   document.getElementById("btnWest").disabled = true;
              }else if (currentLocation===1){
                  currentLocation=6;
                  updateDisplay("You saw people coming towards the cave, so you run toward the mountain.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }
                updateDisplay("moving north");
            }else if (direction===SOUTH){
                if (currentLocation=== 6){
                  currentLocation=1;
                  updateDisplay("You have found the cave.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }else if (currentLocation=== 1){
                  currentLocation=0;
                  updateDisplay("You are in the center of the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocation===0){
                  currentLocation=3;
                  updateDisplay("You are near the lake.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = true;
              }else if (currentLocation===3){
                   currentLocation=5;
                   updateDisplay("You swam across the lake and reached the tallest tree in the forest.");
                   document.getElementById("btnNorth").disabled = false;
                   document.getElementById("btnSouth").disabled = false;
                   document.getElementById("btnEast").disabled = true;
                   document.getElementById("btnWest").disabled = true;
              }else if (currentLocation===5){
                   currentLocation=7;
                   updateDisplay("You climbed up the tree and found a bird's nest with the last clue.");
                   document.getElementById("btnNorth").disabled = false;
                   document.getElementById("btnSouth").disabled = true;
                   document.getElementById("btnEast").disabled = true;
                   document.getElementById("btnWest").disabled = true;
              }
                updateDisplay("moving south");
            }else if (direction===EAST){
                if (currentLocation===9){
                  currentLocation=4;
                  updateDisplay("You are now on the beach.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;     
              }else if (currentLocation=== 4){
                  currentLocation=0;
                  updateDisplay("You are in the center of the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
                  
              }else if (currentLocation===0){
                  currentLocation=2;
                  updateDisplay("You have found the first clue behind the heart-shaped rock.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocation===2){
                  currentLocation=8;
                  updateDisplay("You walk towards the boardwalk.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = true;
                  document.getElementById("btnWest").disabled = false;
              }
                updateDisplay("moving east");
            }else if (direction===WEST){
                if (currentLocation=== 8){
                  currentLocation=2;
                  updateDisplay("You have found the first clue behind the heart-shaped rock.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocation=== 2){
                  currentLocation=0;
                  updateDisplay("You are in the center of the forest.");
                  document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocation===0){
                  currentLocation=4;
                  updateDisplay("You are now on the beach.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
              }else if (currentLocation===4){
                  currentLocation=9;
                  updateDisplay("You have found the boardwalk.");
                  document.getElementById("btnNorth").disabled = true;
                  document.getElementById("btnSouth").disabled = true;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = true;
              }
                updateDisplay("moving west")
            }else {
                updateDisplay("Error. Unknown direction: " + direction);
            }
            displayNewLocation();
         }

function displayNewLocation(){
     switch (currentLocation) {
	case 0: location0(); break;
        case 1: location1(); break;
	case 2: location2(); break;
	case 3: location3(); break;
	case 4: location4(); break;
	case 5: location5(); break;
	case 6: location6(); break;
	case 7: location7(); break;
	case 8: location8(); break;
	case 9: location9(); break;
	default: updateDisplay("Invalid currentLocation value: " + currentLocation + "This should never happen");
  }
 } 
