// Player Business Logic --------

function Players() {
  this.players = [];
}
Players.prototype.addPlayer = function (player) {
  this.players.push(player);
}

// Players Business Logic --------

function Player(totalScore, active) {
  this.totalScore = totalScore;
  this.active = active;
}

// Player Select Logic --------

Players.prototype.playerSwitch = function (finalTurnScore) {
  console.log("This is the play function: " + finalTurnScore);
  if (this.players[0].active === true) {
    this.players[0].active = false;
    this.players[1].active = true;
    this.players[0].totalScore += finalTurnScore;
    if (this.players[0].totalScore >= 100) {
      winner("Player 1");
    }
    $("#activePlayer2").addClass("activePlayer");
    $("#activePlayer1").removeClass("activePlayer");
    $("#player1-output").text(this.players[0].totalScore);
    $("#player2-output").text(this.players[1].totalScore);
  } else {
    this.players[1].active = false;
    this.players[0].active = true;
    this.players[1].totalScore += finalTurnScore;
    if (this.players[1].totalScore >= 100) {
      winner("Player 2");
    }
    $("#activePlayer1").addClass("activePlayer");
    $("#activePlayer2").removeClass("activePlayer");
    $("#player1-output").text(this.players[0].totalScore);
    $("#player2-output").text(this.players[1].totalScore);
  }
}

// Computer Player Logic ------



// Winner Logic ---------

function winner (winner) {
  $(".endgame").empty();
  $(".congrats").text(winner + " wins!");
  $(".show").show(400);
  $("#reset").click(function () {
    location.reload();
  });
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
  $("#activePlayer1").addClass("activePlayer");
  let players = new Players();
  let player1 = new Player(0, true);
  let player2 = new Player(0, false);
  players.addPlayer(player1);
  players.addPlayer(player2);
  let finalTurnScore;

    // Roll Button Logic ----------

  $("button#roll-btn").click(function () {
    let diceRoll = dice.roll();
    finalTurnScore = turnScore(diceRoll);
    if (diceRoll === 1) {
      players.playerSwitch(finalTurnScore);
    }
    $("#dice-roll").text(diceRoll);
    $("#turn-total").text(finalTurnScore);
  });

    //  Hold Button Logic ----------

  $("button#hold-btn").click(function () {
    if (isNaN(finalTurnScore)) {
      turnTotal = 0;
      finalTurnScore = 0;
      players.playerSwitch(finalTurnScore);
    } else {
    players.playerSwitch(finalTurnScore);
    turnTotal = 0;
    finalTurnScore = 0;
    $("#dice-roll").text("0");
    $("#turn-total").text("0");
    }
  });

  $("button#computer-btn").click(function () {
    $(".show-computer").show();
  }
});