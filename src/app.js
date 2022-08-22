let totalPrize = 0;
let counter = 1
let prize = {
    firstAttempt: 100,
    secondAttempt: 50,
    thirdAttempt: 25,
}
let initialNumber;

function getRandomNumber() {
    let max = 9;
    let min = 0;
    return Math.floor(Math.random() * (max - min) + min);
}

function questionForPlayer() {
    let ask = confirm('Do you want to play the game?');
    if (ask === true) {
        initialNumber = getRandomNumber()
        console.log(initialNumber);
        
        startGame()
    } else {
        alert('You did not become a billionaire, but can.')
        questionForPlayer()
    }
}
questionForPlayer()

function startGame() {
    let userNumber = parseInt(prompt('Enter number from 0 to 8' + `\nAttempt: ${counter} \n` + `Total attempt: 3`))
    if (!userNumber) {
        alert(`Thank you for your participation. Your prize is: ${totalPrize} $`)
        counter = 1
        totalPrize = 0
        questionForPlayer()
    }
    let result = checkResult(userNumber, initialNumber)
    if (result) {
        alert(`Congratulation, you won! Your prize is ${totalPrize} $`)
        counter = 1
        totalPrize = 0
        questionForPlayer()
    } else {
        startGame()
    }
}

function reward(attemptNum) {
    if (attemptNum === 1) {
        return totalPrize += prize.firstAttempt
    } else if (attemptNum === 2) {
        return totalPrize += prize.secondAttempt
    } else if (attemptNum === 3) {
        return totalPrize += prize.thirdAttempt
    }
}

function checkResult(userNum, etalonNum) {
    if (userNum === etalonNum) {
        return reward(counter)
    } else if (counter === 3) {
        alert(`Thank you for your participation. Your prize is: ${totalPrize} $`)
        counter = 1
        totalPrize = 0
        questionForPlayer()
    } else {
        counter++
    }
}