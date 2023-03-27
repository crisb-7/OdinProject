// Numbers in Javascript

// ------ Numeric strings -------
let a = "10";
let b = "2";
let c = a**b;   // This DOES NOT work with + operator since there is string concatenation
alert(c)

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

