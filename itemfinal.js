//
// item.js
//

// item prototype


function item(_name, _id, _description) {
   this.name      = _name;
   this.id        = _id;
   this.description   = _description;
        
   
   this.toString = function() {
      var retVal = "";
      retVal = "[item]"                               + "\n" + 
               "name:" + this.name                    + "\n" +
               "description:" + this.description      + "\n";
               
      return retVal;
   }   
}
         

 function initializeItems() { 
    allItems[0] = new item("first clue, note", "id", "You need to find the letter opener to open the note and read the first clue.");
    allItems[1] = new item("second clue, note2", "id",  "read the note, it will help you win...the note says to go to your starting location!");
    allItems[2] = new item("thing1, letter opener", "id", "you will need this letter opener to read the notes you find");
    allItems[3] = new item("thing2, knife", "id", "you will need to use this knife to break the nest to retrieve the second clue.");
}   

