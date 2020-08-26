// let player1 = {score: 0,
//     active: true}; 
// let player2 = {score: 0,
//     active: false};





// Player Business Logic --------

function Players() {
  this.players = [];
}

Players.prototype.addPlayer = function (player) {
  this.players.push(player);
}

// Players Business Logic --------

function Player(totalScore, turnScore, active) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.active = active;
}

// Player Change Logic

// function changePlayer() {
//   if 
// }
// Score Logic ---------

function turnScore(diceRoll) {
  if (diceRoll === 1) {
    changePlayer;
    return "false" + (player1.turnScore = 0);
  }
  else {
    return this.player1 += diceRoll;
  }
}

// Dice Roll Logic ---------
let dice = {
  sides: 6,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

// User Interface Logic ---------

$(document).ready(function () {
  let players = new Players();
  let player1 = new Player(0, 0, true);
  let player2 = new Player(0, 0, false);
  players.addPlayer(player1);
  players.addPlayer(player2);
  $("button#roll-btn").click(function () {
    let diceRoll = dice.roll();
    console.log("rolled: " + diceRoll);
    console.log(players.activePlayer);
    console.log(players[2]);
  });
});

// let players = new Players();

// $(document).ready(function() {
//   let player1 = 0;
//   let player2 = 0;
//   players.addPlayer(player1);
//   players.addPlayer(player2);
//   console.log(players);
//   $("button#roll-btn").click(function () {
//     let diceRoll = dice.roll();
//     console.log(players.turnScore(diceRoll));
//   });
// });