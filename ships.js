const location1 = 2;
const location2 = 3;
const location3 = 4;
let hits = 0;
let guesses = 0;
let guess;
let isSunk = false;

while (isSunk === false) {
    guess = prompt('where is the ship??')
    if (guess < 0 || guess > 6) {
        prompt(`it's wrong number, give an another`);
    } else {
        guesses = guesses + 1;
        if (guess === location1 || guess === location2 || location3) {
            alert('nice!!')
            hits = hits + 1;
            if (hits === 3) {
                isSunk = true;
                alert('you won the game')
            }
        }
    }
}