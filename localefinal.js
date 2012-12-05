//
// locale5.js
//

// locale prototype
function locale(_name, _id, _description, _item) {
   this.name      = _name;
   this.id     = _id;
   this.visited = false;
   this.description   = _description;
   this.item        = _item;      
   if (_item === undefined) {
      this.item = "You do not have any items.";   
   } else {
      this.item = _item;
   }
   
   this.toString = function() {
      var retVal = "";
      retVal =                       
               "name:" + this.name               + "\n" +
               "description:" + this.description + "\n" +
               "item:" + this.item               + "\n";
      return retVal;
   }   
}
         
function loca() {
  
  locale0 = new locale("locale 0",   "0",    "You are in the center of the forest.", "none");
  locale1 = new locale("locale 1", "1", "You have found the cave.", "none");
  locale2 = new locale("locale 2", "2", "You have found the first clue behind the heart-shaped rock.", "first clue");
  locale3 = new locale("locale 3", "3", "You are near the lake.", "none");
  locale4 = new locale("locale 4", "4", "You are now on the beach.", "none");
  locale5 = new locale("locale 5", "5", "You swam across the lake and reached the tallest tree in the forest. At the base of the tree lies a letter opener, so that you can finally open the first clue.", "none");
  locale6 = new locale("locale 6", "6", "You saw people coming towards the cave, so you run toward the mountain. But as you start running, you notice a knife on the ground.", "none");
  locale7 = new locale("locale 7", "7", "You climbed up the tree and found a bird's nest with the last clue.", "second clue");
  locale8 = new locale("locale 8", "8", "You are headed towards the boardwalk.", "none");
  locale9 = new locale("locale 9", "9", "You have found the boardwalk.", "none");

  allLocations[0] = locale0;
  allLocations[1] = locale1;
  allLocations[2] = locale2;
  allLocations[3] = locale3;
  allLocations[4] = locale4;
  allLocations[5] = locale5;
  allLocations[6] = locale6;
  allLocations[7] = locale7;
  allLocations[8] = locale8;
  allLocations[9] = locale9;
  
  
}

function location0(){
  updateDisplay(allLocations[0].description);
}

function location1(){
   if (playerHasItem3) {
      updateDisplay(allLocations[1].description + " " + allItems[3].description);
    } else {
      updateDisplay(allLocations[1].description);
    }
}

function location2(){
   if (playerHasItem0) {
      updateDisplay(allLocations[2].description + " " + allItems[0].description);
   } else {
      updateDisplay(allLocations[2].description);
   }
    
}

function location3(){
    updateDisplay(allLocations[3].description);
    
}

function location4(){
    updateDisplay(allLocations[4].description);
}

function location5(){
    if (playerHasItem2){
       updateDisplay(allLocations[5].description + " " + allItems[2].description);
    } else {
       updateDisplay(allLocations[5].description);
    }
}

function location6(){
    updateDisplay(allLocations[6].description);
}

function location7(){
    if (playerHasItem1){
       updateDisplay(allLocations[7].description + " " + allItems[1].description);
    } else {
       updateDisplay(allLocations[7].description);
    }
}
    

function location8(){
    updateDisplay(allLocations[8].description);
}

function location9(){
    updateDisplay(allLocations[9].description);
  
}
