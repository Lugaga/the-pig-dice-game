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