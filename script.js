'use strict';
var randomNumber = Math.trunc(Math.random() * 20) + 1;
var highScore = 0;
var scoreElement = Number(document.querySelector('.score').textContent);
// console.log(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    scoreElement--;
    document.querySelector('.score').textContent = scoreElement;

    if (scoreElement > highScore) {
      highScore = scoreElement;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (scoreElement <= 1) {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    document.querySelector('.score').textContent = 0;
  } else if (guess > randomNumber) {
    document.querySelector('.message').textContent =
      guess - 2 > randomNumber ? '📉 Too high!' : '📉 Lil High';
    scoreElement--;
    console.log(scoreElement);
    document.querySelector('.score').textContent = scoreElement;
  } else if (guess < randomNumber) {
    document.querySelector('.message').textContent =
      guess + 2 < randomNumber ? '📈 Too low!' : '📈 Lil low';
    scoreElement--;
    document.querySelector('.score').textContent = scoreElement;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  scoreElement = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
