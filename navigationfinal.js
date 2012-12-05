        var NORTH= 0;
        var SOUTH= 1;
        var EAST=  2;
        var WEST=  3;
        var currentLocation= 0;
        
        var allLocations = new Array();
        var allItems= new Array(); 
       
    var nav = [ 
                [1, 3, 2, 4  ], 
                [6, 0, -1, -1],
                [-1, -1, 8, 0],
                [0, 5, -1, -1],
                [-1, -1, 0, 9],
                [3, 7, -1, -1],
                [-1, 1, -1, -1],
                [5, -1, -1, -1],
                [-1, -1, -1, 2],
                [-1, -1, 4, -1],
                [-1, -1, -1, -1]
                                  ]
    
    
    function displayArray(array2display) {
         for (var i=0; i < array2display.length; i++){
             updateDisplay(i + ":" + array2display[i]);
         }
    }
    
    function move(direction) {
        // displayArray(nav);
        moveCount= moveCount+ 1;
        
        var newLocation = nav [currentLocation][direction];
        if (newLocation !== -1) {
           if (newLocation === 0 && hasAllItems()) {
              updateDisplay("You have won!");
              currentLocation= 10;
              updateNavButtons () ;
              printScore ();
           } else {
              currentLocation = newLocation;
              visitLocation () ;
              displayNewLocation();
              updateNavButtons ();
           }
        } else {
            updateDisplay("You cannot go that way.");
        }
    }
       
   function updateNavButtons () {
       if (nav[currentLocation][NORTH]>=0) { 
         document.getElementById("btnNorth").disabled= false;
       } else {
         document.getElementById("btnNorth").disabled= true;
       }
       if (nav[currentLocation][SOUTH]>=0) { 
         document.getElementById("btnSouth").disabled= false;
       } else {
         document.getElementById("btnSouth").disabled= true;
       }
       if (nav[currentLocation][EAST]>=0) { 
         document.getElementById("btnEast").disabled= false;
       } else {
         document.getElementById("btnEast").disabled= true;
       }
       if (nav[currentLocation][WEST]>=0) { 
         document.getElementById("btnWest").disabled= false;
       } else {
         document.getElementById("btnWest").disabled= true;
       }
}
 
    function displayNewLocation(){
        updateDisplay(allLocations[currentLocation].description);
        /*
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
        */
    } 