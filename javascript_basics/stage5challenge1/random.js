function getRandom(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
}
var min = parseInt(prompt("Enter the min number: "));
var max = parseInt(prompt("Enter the max number: "));
alert(getRandom(min, max));

