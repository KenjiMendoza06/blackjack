let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let thirdCard = 8;

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? 😃";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  cardEl.textContent = "Cards: " + firstCard + ", " + secondCard;
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  sum += thirdCard;
  startGame();
  cardEl.textContent =
    "Cards: " + firstCard + ", " + secondCard + ", " + thirdCard;
}
