let number = parseInt(prompt("Please enter a number: "));

for (let i=1; i<=number; i++) {
    let output = "";
    if (i % 3 == 0) {
        output += "Fizz";
    } 
    if (i % 5 == 0) {
        output += "Buzz";
    } 
    if (i%3 && i%5) {
        output += i;
    }
    console.log(output)
}
