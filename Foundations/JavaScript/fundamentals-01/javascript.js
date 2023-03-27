console.log("Second Hello World!")

// -------------- I. Variables ---------------

let message;    // Declare a variable

message = "Hello";  // Assing a value to the variable

let cat = "Red"; // Declare and assign value to a variable simultaenously.

var old_message = "Hello from the past";    // var is used instead of let in order scripts. They're not the same, but very similar

message = "World!";     // Value changed. Old data removed from the variable ("box")
// repeated 'let' leads to an error yntaxError: 'message' has already been declared

let hello = 'Hello world!';

// copy 'Hello world' from hello into message
message = hello;

// alert(message);     // Shows variable content as an alert.

/*
Variables Notes

A variable is a “named storage” or “storage containers” for data. Imagine it as a labeled “box” for data.

There are two limitations on variable names in JavaScript:
1. The name must contain only letters, digits, or the symbols $ and _.
2. The first character must not be a digit. 

camelCase is often used in naming variables
let, class, return, and function are reserved.
Case matters, apple =/= Apple
*/

// ------- II. Constants ----------

const myBirthday = "07.10.2000";    // Can't reassign the constant, TypeError: Assignment to constant 

const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
// alert(color); // #FF7F00

/*
A constant is only an unchanging variable.

Constants are often named using capital letters and underscores when the value is known prior to execution
*/
