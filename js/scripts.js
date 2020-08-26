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

Players.prototype.playerSwitch = function (finalTurnScore) {
  console.log("This is the play function: " + finalTurnScore);
  if (this.players[0].active === true) {
    this.players[0].active = false;
    this.players[1].active = true;
    this.players[0].totalScore += finalTurnScore;
  } else {
    this.players[1].active = false;
    this.players[0].active = true;
    this.players[1].totalScore += finalTurnScore;
    alert(this.pl)
  }
}

// Score Logic ---------

let turnTotal = 0;

function turnScore(diceRoll) {
  if (diceRoll === 1) {
    return turnTotal = 0;
  }
  else {
    return turnTotal += diceRoll;
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
  let finalTurnScore;
  $("button#roll-btn").click(function () {
    let diceRoll = dice.roll();
    console.log("rolled: " + diceRoll);
    finalTurnScore = turnScore(diceRoll);
    console.log("Turn Score: " + finalTurnScore);
    if (diceRoll === 1) {
      players.playerSwitch(finalTurnScore);
    }
    console.log(players);
  });
  $("button#hold-btn").click(function () {
    players.playerSwitch(finalTurnScore);
    turnTotal = 0;
    finalTurnScore = 0;
  });
});