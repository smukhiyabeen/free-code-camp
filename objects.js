/* -------------- Accessing objects with bracket notation ----------------------------------------- */

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    // Change this line
  console.log(entreeValue, drinkValue)


/* -------------- Lookup the value of an object with a function - bracket notation ----------------------------------------- */

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("charlie"));


/* -------------- Lookup the value of an object - bracket notation ----------------------------------------- */

var someObj = {
  propName: "Subarna"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); 
console.log(someObj[someProp]); 