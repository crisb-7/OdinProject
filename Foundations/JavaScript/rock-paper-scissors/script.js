console.log("Rock, Paper, Scissors!");
console.log(round("Scissors"))

function round(choice) {
    choice = choiceToInt(choice);
    let computerChoie = getComputerChoice();
    let resultMatrix = [[-1, 0, 1], [1, -1, 0], [0, 1, -1]]; // Win - 1, Lose - 0, Tie - (-1)
    // console.log(resultMatrix[0][0])
    let result = resultMatrix[choice][computerChoie];
    switch (result) {
        case 1:
            console.log("You win!");
            break;
        case 0:
            console.log("You lose!");
            break;
        case -1:
            console.log("It's a tie!")
            break;
    }
}

function getComputerChoice() {
    number = randomInt(1, 3);     // Rock - 0, Paper - 1, Scissors - 2
    return number;
}

function standardizeInput(choice) {
    choice = choice.toLowerCase().replace(choice.substring(0, 1), choice.substring(0, 1).toUpperCase());
    return choice;
}

function choiceToInt(choice) {
    switch (choice) {
        case "Rock":
            return 0
        case "Paper":
            return 1
        case "Scissors":
            return 1
    }
}

function randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

/*
choice = Rock
Paper       Scissors
-Lose       -Win

choice = Paper
Rock       Scissors
-Lose       -Win

choice = Scissors
Rock       Paper
-Lose       -Win
*/