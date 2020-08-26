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
// Player Select Logic --------
Players.prototype.playerSelect = function () {
  if (this.players[1].active = true) {
    return true;
  } else {
    return false;
  }
}

// Score Logic ---------

Players.prototype.turnScore = function (diceRoll) {

  if (diceRoll === 1) {
    return "false" + (this)
  }
}

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
  console.log(players);
  $("button#roll-btn").click(function () {
    let diceRoll = dice.roll();
    console.log("rolled: " + diceRoll);
    console.log(players.playerSelect());

  });
});