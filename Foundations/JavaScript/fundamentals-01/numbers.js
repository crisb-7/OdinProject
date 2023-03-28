// Numbers in Javascript

// ------ Numeric strings -------
let a = "10";
let b = "2";
let c = a**b;   // This DOES NOT work with + operator since there is string concatenation
// alert(c)

// ----------- Not a number -------------

let nullValue = NaN;
let x = 100 / "Apple";    // Arithmetic with non-numeric string results in NaN

isNaN(x);                 // Global javascript function for checking NaNs

let z = nullValue + x;    // Operations with NaNs result in NaNs

let e = NaN;
let d = "5";
let f = e + d;          // Concatenation with NaNs

typeof NaN;             // NaN is a number!

// -------------- Infinity -------------

let cat = Infinity;

// Execute until Infinity
/*
let myNumber = 2;
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
*/

// Division by zero yields Infinity
let dog =  2 / 0;
let bam = -2 / 0;

// Infinity is also a number
typeof Infinity;

// ------- Hexadecimals -------

let hex = 0xFF;         // JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
/*
By default, JavaScript displays numbers as base 10 decimals.
Use toString() method to change base 2 to base 36.
Hexadecimal - base 16. 
Decimal - base 10. 
Octal - base 8. 
Binary - base 2.
*/

// JS Numbers as Objects

// Normally JavaScript numbers are primitive values created from literals
let num = 123;

// They can also be defined as objects. DO NOT do this unless you know what you're doing
// Creating them as objects complicates matters and slows exectuion speed; also, comparison operators (== and ===) break down.
let otherNum = new Number(123);

// === is strict equality comparison operator. !== is strict inequality

// ------------ Rounding Numbers -------------

let uglyDecimal = 13.5735345;
let roundedNumber = uglyDecimal.toFixed(2);
// alert(roundedNumber);

// Convert String to Number
let stringToNumber = "27";
stringToNumber = Number(stringToNumber) + 3;
alert(stringToNumber);


/*
-------------- Unary, Binary, Operand ---------------

- Operand: what operators are applied to (ex. in 5*3 there are 2 operands, the 5 and the 3)
- Unary operator: an operator that has only one operand.
- Binary operator: yep, you guessed it; an operator that has two operands.

*/

let oneOperand = 1;
oneOperand = -oneOperand // negation reverses the sign of a number, unary operator

let firstOperand = 1, secondOperand = 3;
console.log(firstOperand - secondOperand); // Binary operator, it has two operands.