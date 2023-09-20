function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playCraps() {
    const die1 = getRandomNumber(1, 6);
    const die2 = getRandomNumber(1, 6);
    const sum = die1 + die2;
    const outputElement = document.getElementById("output");
    const diceImage1 = document.getElementById("diceImage1");
    const diceImage2 = document.getElementById("diceImage2");
    const rollSound = document.getElementById("rollSound");

    // Update dice images
    diceImage1.src = `dice-${die1}.png`;
    diceImage2.src = `dice-${die2}.png`;

    // Play roll sound
    rollSound.play();

    if (sum === 7 || sum === 11) {
        outputElement.innerHTML = "CRAPS – You lose!";
    } else if (die1 === die2) {
        outputElement.innerHTML = "You won!";
    } else {
        outputElement.innerHTML = "You pushed!";
    }
}

document.getElementById("playButton").addEventListener("click", playCraps);

