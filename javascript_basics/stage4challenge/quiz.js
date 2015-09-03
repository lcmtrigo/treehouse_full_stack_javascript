/*
	Multiple question quiz
	09/03/15
	These are all troll questions
*/

var correctAnswers = 0;

// 1.
var answer1 = prompt('If you have 3 apples and I take one of them, calculate the mass of the sun.');
if (parseInt(answer1) === 1738) {
	correctAnswers += 1;
	document.write('<p>1. Correct</p>');
} else {
	document.write('<p>1. Incorrect</p>');
}

// 2.
var answer2 = prompt('Do not answer this question');
if (answer2.toUpperCase() === 'OK') {
	correctAnswers += 1;
	document.write('<p>2. Correct</p>');
} else {
	document.write('<p>2. Incorrect</p>');
}

// 3.
var answer3 = prompt('What is the best worst programming language (hint: ruby)');
if (answer3.toUpperCase() === 'PHP') {
	correctAnswers += 1;
	document.write('<p>3. Correct</p>');
} else {
	document.write('<p>3. Incorrect</p>');
}

// 4.
var answer4 = prompt('How do I shot web?');
if (answer4.toUpperCase() === 'LOL IDK') {
	correctAnswers += 1;
	document.write('<p>4. Correct</p>');
} else {
	document.write('<p>4. Incorrect</p>');
}

// 5.
var answer5 = prompt('ayy lmao');
if (answer5.toUpperCase() === 'DANK MEMES') {
	correctAnswers += 1;
	document.write('<p>5. Correct</p>');
} else {
	document.write('<p>5. Incorrect</p>');
}

// tell the player how many they got right and what they won
if (correctAnswers === 5) {
	document.write('<h2>You got ' + correctAnswers + '/5 answers correct!</h2>');
	document.write('<p>Your prize: A GOOOOOLD CROWWNNN</p>');
} else if (correctAnswers >= 3) {
	document.write('<h2>You got ' + correctAnswers + '/5 answers correct!</h2>');
	document.write('<p>Your prize: A silver crown! Horay!</p>');
} else if (correctAnswers >= 1) {
	document.write('<h2>You got ' + correctAnswers + '/5 answers correct!</h2>');
	document.write('<p>Your prize: A bronze crown. </p>');
} else {
	document.write('<h2>You got ' + correctAnswers + '/5 answers correct!</h2>');
	document.write('<p>No crown for you. Better luck next time.</p>');
}



