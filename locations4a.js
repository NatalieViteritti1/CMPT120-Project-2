// locations4a.js

function location0(){
    if ((playerHasFirstClue) && (playerHasSecondClue)) {
       updateDisplay("Since you have found both clues, you have won!");
    } else if ((playerHasFirstClue) || (playerHasSecondClue)) {
       updateDisplay("You are one clue away from winning!");
    } else {
       updateDisplay("You are in the center of the forest.");
    }
}

function location1(){
    updateDisplay("You have found the cave.");
    updateDisplay("You look into the cave and see nothing but darkness.");
}

function location2(){
    updateDisplay("You have found the first clue behind the heart-shaped rock.");
    updateDisplay("The clue that you found behind the heart-shaped rock tells you to go to the tallest tree.");
    if (!playerHasFirstClue) {
       updateDisplay("You take the clue.")
       playerHasFirstClue= true;
    } else {
       updateDisplay("All you see behind the rock is moss.")
    }
} 

function location3(){
    updateDisplay("You are near the lake.");
    updateDisplay("You are so thirsty, so you fill up your canteen with lake water.");
}

function location4(){
    updateDisplay("You are now on the beach.");
    updateDisplay("You take a break from the game and tan on the beach.");
}

function location5(){
    updateDisplay("You swam across the lake and reached the tallest tree in the forest.");
    updateDisplay("You are soaking wet from swimming across the lake, but at least you have found the tallest tree.");
}

function location6(){
    updateDisplay("You saw people coming towards the cave, so you run toward the mountain.");
    updateDisplay("You pick up your pace out of fear and sprint to the mountain.");
}

function location7(){
    updateDisplay("You climbed up the tree and found a bird's nest with the last clue.");
    updateDisplay("You look into the bird's nest and see something.");
    if (!playerHasSecondClue) {
        updateDisplay("You take the clue.")
        updateDisplay("The clue tells you to walk to the center of the forest.")
        playerHasSecondClue=true;
        } else {
            updateDisplay("All you see in the nest is a blue egg.")
        }
}

function location8(){
    updateDisplay("You are headed towards the boardwalk.");
}

function location9(){
    updateDisplay("You have found the boardwalk.");
  
}