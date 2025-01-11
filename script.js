"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("⛔ No Number!");
    // document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayNumber(secretNumber);
    // document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#FA8072";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage("📈 Too High!");
      //   document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      displayScore(score);
      //   document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      //   document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage("📉 Too Low!");
      //   document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      displayScore(score);
      //   document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      //   document.querySelector(".message").textContent = "💥 You lost the game!";
      displayScore(0);
      //   document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayScore(score);
  //   document.querySelector(".score").textContent = score;
  displayNumber("?");
  //   document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
