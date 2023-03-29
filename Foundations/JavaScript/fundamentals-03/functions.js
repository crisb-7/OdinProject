// JavaScript Functions

// Syntax
function myFunction(lol) {
    console.log(lol);
}

// Function declaration is hoisted, so one can call the function before declaring it without issues.
myFunction("This is my first function. Yay!");   // Calling the function.

// Anonymous Function
(function () {
    alert('hello'); // Note it doesn't have a name.
})
// This is function expression and are not hoisted. Watch out!
/*
A more concrete example of anonymous functions:
textBox.addEventListener('keydown', function(event) {
  console.log(`You pressed "${event.key}".`);
});
*/

// Arrow functions
// textBox.addEventListener('keydown', (event) => {
//     console.log(`You pressed "${event.key}".`);
// });

// For one-line functions, one can ommit curly brackets, and ommit return statement
// textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));

// For only one parameter, one can ommit parentheses
// textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));

// When no return statement is specified in a function, undefined is returned.
// Multiple assignment from function return values is not supported in JavaScript
// If there are no arguments, parentheses are empty, but they must be present:

/*
Difference between a parameter and an argument

- Parameter: variable listed inside the parentheses in the function declaration (it’s a declaration time term).
- Argument: value that is passed to the function when it is called (it’s a call time term).
*/

// Assigning a Function Expression (anonymous function) to a variable????
let sayHello = function() {
    alert( "Hello" );
};
// Yep, apparently that's possible in JavaScript. Woah.

// In JavaScript, a FUNCTION IS A VALUE
// Always use parentheses when calling a function, or else you'll be referencing the function value, e.g
function sayHi() {
    alert( "Hello" );
}  
alert( sayHi ); // shows the function code

// Look at this wicked shiiiii

function hiya() {   // (1) create
    alert( "Heyyyyyyyyy" );
}
 
let func = hiya;    // (2) copy
  
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

// Some more WICKED COOL shiiiiiiii
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}  
function showOk() {
    alert( "You agreed." );
}
  
function showCancel() {
    alert( "You canceled the execution." );
}
  
// functions showOk, showCancel are passed as arguments to ask; 
ask("Do you agree?", showOk, showCancel);
/*
yes() and no() actually call the functions at execution since the value of the function (the code string) was passed as an argument for yes and no. This is called a callback
The arguments showOk and showCancel of ask are called callback functions.
Note that the callback functions can be re-written as anonymous functions, more in the spirit of JavaScript
*/

