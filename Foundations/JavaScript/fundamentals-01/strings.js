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


/* --------------- JavaScript String Methods ------------------
All string methods return a new string. They don't modify the original string.
Strings are immutable: Strings cannot be changed, only replaced.

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

// ------------- Extracting String Parts ---------------

// Slice
let text = "Dog, cat, bird";
console.log(text.slice(5,8))    // start position, and end position (end excluded); counts positions from zero

text = "Apple, Banana, Kiwi";
let part = text.slice(7);       // Second position defaults to end of string
console.log(part);              // "Banana, Kiwi"

part = text.slice(-10);          // negative parameters start at the end of the string
console.log(part);

// Substring

part = text.substring(7, 13);    // Similar to slice, doesn't accept negative values, it treats them as zero
console.log(part);

// Substr

part = text.substr(7, 6);    // Second parameter is the length of the extracted string. Negative first param starts from end of string.
console.log(part);

// ---------------- Replacing String Content -------------

// Replace
text = "Please visit IBM!";
newText = text.replace("IBM", "Improvency");    // Returns a new string (doesn't change the string it's called on). Case sensitive. It replaces only the first match
console.log(newText);

// Regular expression to make it case insensitive
newText = text.replace(/MICROSOFT/i, "W3Schools");      // Regex are written without quotes
// To replace all matches, use a regular expression with a /g flag (global match):

// Replace All

text = "I love cats. Cats are very easy to love. Cats are very popular";
text.replaceAll("Cats","Dogs");
text.replaceAll("cats","dogs");
console.log(text);

// Specify a regular expression instead of a string to be replaced.
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
console.log(text);

// Converting to Upper and Lower Case

text = "Hello World!";
upper = text.toUpperCase();
console.log(upper);
lower = text.toLowerCase();
console.log(lower);

// --------- Concatenate method -------------
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

// ------- Trim method ---------

text1 = "      Hello World!      ";
text2 = text1.trim();
console.log(text2);

// trimStart() and trimEnd() work the same as trim but only for the start or the end of the string.

// ------- Padding -------------
// Add a string at the beginning or end of a string
text = "5";
padded = text.padStart(4,"0");
console.log(padded);

// ------------- Extracting String Characters -----------------

// charAt()
text = "HELLO WORLD";
char = text.charAt(0);
console.log(char);

// charCodeAt() - Returns the unicode of the character at a specified index in a string

// Property access to characters (more Pythonic)
char = text[1];
console.log(char);

/*
Property access might be a little unpredictable:
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
*/