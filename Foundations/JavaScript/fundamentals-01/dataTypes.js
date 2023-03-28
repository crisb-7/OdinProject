// This JavaScript file contains the summary of the basic datatypes
// JavaScript is dynamically typed: datatypes exist but variables aren't bounded to them, e.g.
let cat = "nip";
cat = 365;

// ----------- Number ---------------
let n = 5;
n = 83.53; // Number type - integer and floating point

// --------------- BigInt -------------
// Integer bigger than (2^53 -1) = 9007199254740991; they aren't accurate at that size

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

let bigInt = 987592357235793495273451046916n;
console.log(bigInt);
console.log(typeof bigInt);
// ------------ String ----------------
// Double quotes and single quotes are basically the same. 
// Backtick quotes - extended functionality --> embed variables and expressions into a string by wrapping them in ${…}
let dq = "Double quotes are better";
let sq = "Nah, single quotes, baby";
let backtick = `Embed another: ${dq}`;
console.log(backtick);

// ------------ Boolean -----------
let isThisTrue = true;
let isThisFalse = false;
let comparisonBoolean = 4 > 1;
console.log(comparisonBoolean);

// ------------- Null value ----------
// Special value which represents “nothing”, “empty” or “value unknown”.

let banana = null;

// --------- Undefined --------
// It means "value has not been assigned"

let xd
console.log(xd); // shows "undefined"
xd = undefined;     // manually assign undefined

// ------------ Object and Symbol ---------
// Object - Non-primitive: often used to store collections of data and more complex entities.
// Symbol - unique identifier for an object

// ------------ typeof Operator -----------
// Returns the type of the operand - it's an operator, not a function!

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"

typeof null // "object" - null is not an object, this result is a JavaScript error

typeof alert // "function"
