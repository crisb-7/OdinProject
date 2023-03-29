/* I already know flow control, so this will focus only on syntax 
and other particular properties of JavaScript that aren't on Python?
*/
let condition = true;

// if statement
if (condition) {
    console.log("This if was executed");
}

// else statement
condition = false;

if (condition) {
    console.log("Second if was executed");
} else {
    console.log("Else was executed");
}

// if else statement
condition2 = true;

if (condition) {
    console.log("Lol");
} else if (condition2) {
    console.log("Else if was executed");
} else {
    console.log("Lol xd");
}

// Switch statements

switch (expression) {
    case "Sunny":
      console.log("run this code");
      break;
  
    case "Rainy":
      console.log("run this code instead");
      break;
  
    // include as many cases as you like
  
    default:
      console.log("actually, just run this code");
  }