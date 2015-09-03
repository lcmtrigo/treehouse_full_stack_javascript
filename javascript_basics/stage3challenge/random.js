var num1 = prompt('Enter a lower number limit');
var bottomNumber = parseInt(num1);
var num2 = prompt('Enter a higher number limit (must be greater than the first)');
var topNumber = parseInt(num2);
var randomNum = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
document.write('<p>A random number between ' + num1 + ' & ' + num2 + ' is ' + randomNum + '</p>');