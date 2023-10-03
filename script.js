"use strict";
const secNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else if (guess === secNum) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#999033";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.color = "#00ffff";
    document.querySelector(".number").textContent = secNum;
  } else if (guess > secNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOu Lost......";
    }
  } else if (guess < secNum) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // score = 20;
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.color = "#333";
  document.querySelector("body").style.backgroundColor = "#222";
  // document.querySelector(".again").textContent = "Too Low";
});
