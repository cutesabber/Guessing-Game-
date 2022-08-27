function GuessingGame() {
    const random = Math.floor(Math.random() * 10) + 1;
    let guess = parseInt(prompt('Guess a number from 1-10'))
    while (guess !== random) {
      guess = parseInt(prompt('Guess a number from 1-10'))
    } 
    if(guess == random) {
      console.log('you have guessed the number');6
    }
    } GuessingGame()