// Business Logic -------
function Players() {
  this.players = [];
}


Players.prototype.addPlayer = function(player) {
  this.players.push(player)
}

// Dice Roll Logic -------

let dice = {
  sides: 6,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

// User Interface Logic ---------
let players = new Players();

$(document).ready(function() {
  let player1 = 0;
  let player2 = 0;
  players.addPlayer(player1);
  players.addPlayer(player2);
  console.log(players);
  $("button#roll-btn").click(function () {
    console.log(dice.roll());
  });
});