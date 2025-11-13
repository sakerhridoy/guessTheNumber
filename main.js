function guessTheNumber(difficulty) {
  let randomNumber;
  let attempts = 0;
  let maxAttempts;
  let range;

  switch (difficulty) {
    case 'easy':
      maxAttempts = 5;
      range = 10;
      break;
    case 'medium':
      maxAttempts = 7;
      range = 100;
      break;
    case 'hard':
      maxAttempts = 10;
      range = 1000;
      break;

    default:
      console.error('Invalid difficulty! Please choose easy, medium, or hard.');
    return
  }
  randomNumber = Math.floor(Math.random() * range) + 1;
  console.log(randomNumber);

  while (attempts < maxAttempts) {
    let guess = parseInt(
      prompt(
        `Guess a number between 1 and ${range}. You have ${
          maxAttempts - attempts
        } attempts left:`
      )
    );
    if (isNaN(guess)) {
      alert('Please enter a valid number!');
      continue;
    }

    attempts++;

    if (guess === randomNumber) {
      alert(`🎉 Correct! You guessed the number in ${attempts} attempt(s)!`);
      return;
    } else if (guess < randomNumber) {
      alert('Too low! Try again.');
    } else {
      alert('Too high! Try again.');
    }
  }
}



let difficulty = prompt('Choose difficulty (easy, medium, hard)').toLowerCase();
guessTheNumber(difficulty);