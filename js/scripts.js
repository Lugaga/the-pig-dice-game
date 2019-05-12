function ThePigDicePlayer(pigDicePlayerName, rollPigDicePoints, accumulatedRollDicePoints) {
  this.pigDicePlayerName = pigDicePlayerName;
  this.rollPigDicePoints = rollPigDicePoints;
  this.accumulatedRollDicePoints = accumulatedRollDicePoints;
}
ThePigDicePlayer.prototype.roll = function() {
  var diceNumber = Math.floor(Math.random() * 6) ;
  if (diceNumber === 1) {
    this.rollPigDicePoints = 0;
  } else {
    this.rollPigDicePoints = this.rollPigDicePoints + diceNumber;
  };
  return diceNumber;
}
ThePigDicePlayer.prototype.score = function() {
  this.accumulatedRollDicePoints = this.rollPigDicePoints + this.accumulatedRollDicePoints;
  this.rollPigDicePoints = 0;
}
$(function() {
  var ThePigDicePlayers = [];
  $("form#initialize-pig-dice-player").submit(function(event) {
    event.preventDefault();
    $(".the-pig-dice-game").show();
    $(".hide-this-form").hide();

    var pigDicePlayerOneName = $("input#pig-dice-player-one-name").val();
    var pigDicePlayerTwoName = $("input#pig-dice-player-two-name").val();

    var pl1 = new ThePigDicePlayer(pigDicePlayerOneName, 0, 0)
    var pl2 = new ThePigDicePlayer(pigDicePlayerTwoName, 0, 0)
    ThePigDicePlayers.push(pl1);
    ThePigDicePlayers.push(pl2);
    $(".pig-dice-player-one-name").text(pl1.pigDicePlayerName);
    $(".accumulated-player-one-points").html("<span class='accumulated-player-one-points'>" 
    + pl1.accumulatedRollDicePoints + "</span>");

    $("button#pig-dice-player-one-roll-dice-submit").click(function(event) {
      event.preventDefault();
      var pl1DiceNumber = pl1.roll();
      if (pl1DiceNumber === 1) {
        $(".pig-dice-player-one").hide();
        $(".pig-dice-player-two").show();
        $(".pig-dice-player-one-roll-dice-notification").show();
      }
      $(".pig-dice-player-one-roll-dyce").text(pl1DiceNumber);
      $(".pig-dice-player-one-points").text(pl1.rollPigDicePoints);
      $(".pig-dice-player-two-roll-dice-notification").hide();
    });
    $(".pig-dice-player-two-name").text(pl2.pigDicePlayerName);
    $(".accumulated-player-two-points").html("<span class='accumulated-player-two-points'>" 
    + pl2.accumulatedRollDicePoints + "</span>");

    $("button#pig-dice-player-two-roll-dice-submit").click(function(event) {
      event.preventDefault();
      var pl2DiceNumber = pl2.roll();
      if (pl2DiceNumber === 1) {
        $(".pig-dice-player-two").hide();
        $(".pig-dice-player-one").show();
        $(".pig-dice-player-two-roll-dice-notification").show();
        $(".pig-dice-player-one-roll-dice-notification").hide();
      }
      $(".pig-dice-player-two-roll-dyce").text(pl2DiceNumber);
      $(".pig-dice-player-two-points").text(pl2.rollPigDicePoints);
    });
    $("button#pig-dice-player-one-hold-points").click(function(event) {
      event.preventDefault();
      pl1.score();
      $(".accumulated-player-two-points").text(pl1.accumulatedRollDicePoints);
      $(".pig-dice-player-one-roll-dyce").text("");
      $(".pig-dice-player-one-points").text("");
      if (pl1.accumulatedRollDicePoints >= 100) {
        $(".the-pig-dice-game").hide();
        $(".pig-dice-player-one-win").show();
      } else {
        $(".pig-dice-player-one").hide();
        $(".pig-dice-player-two").show();
        $(".pig-dice-player-two-roll-dice-notification").hide();
      }
    });
    $("button#pig-dice-player-two-hold-points").click(function(event) {
      event.preventDefault();
      pl2.score();
      $(".accumulated-player-two-points").text(pl2.accumulatedRollDicePoints);
      $(".pig-dice-player-two-roll-dyce").text("");
      $(".pig-dice-player-two-points").text("");
      if (pl2.accumulatedRollDicePoints >= 100) {
        $(".the-pig-dice-game").hide();
        $(".pig-dice-player-two-win").show();
      } else {
        $(".pig-dice-player-one").show();
        $(".pig-dice-player-two").hide();
        $(".pig-dice-player-one-roll-dice-notification").hide();
      }
    });
  });
});
