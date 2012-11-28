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
         

  
  item0 =   new item("first clue, note", "use the letter opener to open the note and read the first clue.");
  item1=    new item("second clue, note2", "read the note, it will help you win.");
  item2 =   new item("thing1, stamp",  "you will need this letter opener to read the notes you find");
  item3 =   new item("thing2, knife", "you will need to use this knife to break the nest to retrieve the second clue.");
  
  allItems[0] = item0;
  allItems[1] = item1;
  allItems[2] = item2;
  allItems[3] = item3; 
  
