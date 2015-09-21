function Dice(sides){
	this.sides = sides;
}

Dice.prototype.roll = function () {
  	var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  	return randomNumber;
}

var d6 = new Dice(6);
var d20 = new Dice(20);

console.log(d6.roll === d20.roll);