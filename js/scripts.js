// Player Business Logic --------

function Players() {
  this.players = [];
}
Players.prototype.addPlayer = function (player) {
  this.players.push(player);
}

// Players Business Logic --------

function Player(totalScore, active, computer) {
  this.totalScore = totalScore;
  this.active = active;
  this.computer = computer;
}

// Player Select Logic --------

Players.prototype.playerSwitch = function (finalTurnScore) {

  if (this.players[0].active === true) {
    this.players[0].active = false;
    this.players[1].active = true;
    this.players[0].totalScore += finalTurnScore;
    if (this.players[0].totalScore >= 50) {
      winner("Player 1");
    }

    $("#activePlayer2").addClass("activePlayer");
    $("#activePlayer1").removeClass("activePlayer");
    $("#player1-output").text(this.players[0].totalScore);
    $("#player2-output").text(this.players[1].totalScore);


  } else if (this.players[1].active === true && this.players[1].computer === false) {
    console.log("PLAYER 2 IS ACTIVATED");
    this.players[1].active = false;
    this.players[0].active = true;
    this.players[1].totalScore += finalTurnScore;
    if (this.players[1].totalScore >= 50) {
      winner("Player 2");
    }
    $("#activePlayer1").addClass("activePlayer");
    $("#activePlayer2").removeClass("activePlayer");
    $("#player1-output").text(this.players[0].totalScore);
    $("#player2-output").text(this.players[1].totalScore);

    // Computer logic 

  } else {
    console.log("Has reached computer else statement");
    let computerFinalTurnScore = computerScoreCalc();
    this.players[1].active = false;
    this.players[0].active = true;
    this.players[1].totalScore += computerFinalTurnScore;
    if (this.players[1].totalScore >= 50) {
      winner("Player 2(Computer Wins)");
    }
    players.playerSwitch(finalTurnScore);
    $("#activePlayer1").addClass("activePlayer");
    $("#activePlayer2").removeClass("activePlayer");
    $("#player1-output").text(this.players[0].totalScore);
    $("#player2-output").text(this.players[1].totalScore);

  }
}

// Computer Player Logic --------

function computerScoreCalc() {
  turnTotal = 0;
  for (let i = 0; i < 5; i++) {
    let compDiceRoll = dice.roll();
    $("#computerRoll").append(compDiceRoll + " ");
    if (compDiceRoll === 1) {
      turnTotal = 0;
      return turnTotal;
    }
    turnTotal += compDiceRoll;
  }
  return turnTotal;
}

// Winner Logic ---------

function winner(winner) {
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

function diceImage(diceRoll) {
  let img = document.createElement("img/dice" + diceRoll);
}

// User Interface Logic ---------

let players = new Players();

$(document).ready(function () {
  $("#activePlayer1").addClass("activePlayer");
  let player1 = new Player(0, true, false);
  let player2 = new Player(0, false, false);
  players.addPlayer(player1);
  players.addPlayer(player2);
  let finalTurnScore;

  // Roll Button Logic ----------

  $("button#roll-btn").click(function () {
    let diceRoll = dice.roll();
    $(".diceimg").html("<img src='img/dice" + diceRoll + ".png' width='50px'>");
    finalTurnScore = turnScore(diceRoll);
    $("#computerRoll").html("The computer rolled: ");
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
    $("#computerName").text("COMPUTER SCORE");
    players.players[1].computer = true;
    players.players[0].active = false;
    console.log("Computer has been set to " + players.players[1].computer);
  })
});



// '$("#dice' + diceRoll + ').show();'


//$("#dice" + diceRoll + """).hide();

