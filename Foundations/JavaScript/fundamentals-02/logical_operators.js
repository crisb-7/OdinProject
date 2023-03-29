let a = true;
let b = false;

// -------------- OR logical operator ---------------
let result = a || b;
console.log(result);

/* 
Evaluates left to right. Converts each operand into boolean; if true, it returns the original value of that operand.
If all operands turn out to be false, it returns the last operand (original value). 
It stops after finding the first "truthy" value. Doesn't evaluate anything past that.
*/
// Multiple OR comparison
console.log( 1 || 0 ); // Returns 1 since 1 is truthy

console.log( null || 1 ); // Returns 1 since 1 is the first truthy value
console.log( null || 0 || 1 ); // Same here

console.log( undefined || null || 0 ); // Returns 0 since they're all falsy - returns last value.

console.log(""||"hi"); // Returns "hi" - Empty strings have falsy values, and strings and numbers have truthy values.

// ---------- AND logical operator  -------------

/*
Evaluation behavior is almost the same as OR operator. The difference is that AND returns the first falsy value.
*/

result = a && b;    // Returns true if both operands are truthy
console.log( 1 && 5 ); // Returns 5
console.log( null && 5 ); // Returns null
console.log( 1 && 2 && null && 3 ); // Also returns null (first falsy value)
console.log( 1 && 2 && 3 ); // When all values are truthy, the last value is returned (Returns 3)

// -------------- NOT logical operator --------------
/*
Converts operand to boolean, and returns its inverse.
*/

result = !1;
console.log(result);    // Returns false since 1 is truthy --> inverse of true is false (duh).

result = !0; 
console.log(result);    // Returns true since 0 is falsy --> inverse of false is true (duh x2).

// Double NOT can be used to convert a value into boolean (kinda unnecessary tbh), can just use Boolean(result)?
result = "hi";
console.log(!!result);

// ----------- Ternary Operator ----------
/* Pseudocode:
condition ? run this code : run this code instead
*/

let isBirthday = true;
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";