// Wait in line queue
function nextInLine(arr, item) {

    arr.push(item); // Adds passed in item to passed in array
    var removedItem = arr.shift(); // Removes first item in the passed in array and stores it to removedItem variable
    return removedItem; // return removedItem
  }

  var testArr = [1,2,3,4,5];
  console.log("Before: " + JSON.stringify(testArr));
  console.log("Removed:", nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));