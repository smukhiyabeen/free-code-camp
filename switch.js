
/* -----------------Basic switch statement--------------------------------------------------------------------------------------*/

function switchOfStuff(val) {
    var answer = "";
      switch (val) {
        case "a":
          answer = "apple"
          break;
        case "b":
          answer = "bird";
          break;
        case "c":
          answer = "cat";
          break;
        default:
          answer = "stuff"
      }
    return answer;  
  }
console.log(switchOfStuff(1));
  
/* -----------------Multiple cases having one output--------------------------------------------------------------------------------------*/

function sequentialSizes(val) {
var answer = "";
switch(val) {
    case 1:
    case 2:
    case 3:
    answer ="Low"
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid"
    break;
    case 7:
    case 8:
    case 9:
    answer = "High"
    break;
}

return answer;  
}
console.log(sequentialSizes(1));

/* -----------------Replacing if else with switch statement --------------------------------------------------------------------------------------*/
 
function chainToSwitch(val) {
  var answer = "";

  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;  
  }
  
  return answer;  
}

// Change this value to test
chainToSwitch(7);
