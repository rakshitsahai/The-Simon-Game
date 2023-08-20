const gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[nextSequence()];
    gamePattern.push(randomChosenColour);
}

