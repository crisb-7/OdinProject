function firstToUpper(text) {
    text = text.toLowerCase();
    text = text.replace(text.substring(0, 1), text.substring(0, 1).toUpperCase());
    return text;
}

function print(output) {
    console.log(firstToUpper(output));
}

print("lowercase");

print("UPPERCASE");

print("BoTh");