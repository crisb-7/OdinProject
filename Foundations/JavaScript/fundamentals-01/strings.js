// Escaping characters
const escaped = 'I\'m ready to learn more JavaScript';
console.log(escaped);

// String concatenation
let name = "Armando";
let greeting = `Hello, ${name}`;    // template literal string concatenation - expressions can be used (5*3)
console.log(greeting);

greeting = "Hello";
name = "Chris";
console.log(greeting + ", " + name); // Concatenation using +

// Multiline strings
let noName = `This is the first line.
This, however, is the second line`;
let multiline = "This is not a template literal \nbut I can also produce multiline strings :)"
console.log(noName);
console.log(multiline);


// --------------- JavaScript String Methods ------------------

/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/

// String length

let stringLength = "asdfghjklqwepitu29835";
console.log(stringLength.length);

// Extracting String Parts - Slice
let text = "Dog, cat, bird";
console.log(text.slice(5,8)) // start position, and end position (end excluded)
