
document.querySelector('.roll')
  .addEventListener('click', () => {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  player1Score ++;
  if (player1Score == 1) {
    document.querySelector("h3").innerHTML = "player 1 has " + player1Score + " point!";
  }
  else if (player1Score > 1) {
    document.querySelector("h3").innerHTML = "player 1 has " + player1Score + " points!";
  };
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  player2Score ++;
  if (player2Score == 1) {
    document.querySelector("h4").innerHTML = "player 2 has " + player2Score + " point!";
  }
  else if (player2Score > 1) {
    document.querySelector("h4").innerHTML = "player 2 has " + player2Score + " points!";
  };
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
});

document.querySelector('.Restart')
  .addEventListener('click', () => {
    window.location.reload(true);
});

var player1Score = 0;

var player2Score = 0;