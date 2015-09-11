var questions = [
	['What planet do we live in?', 'earth'],
	['Which country is the Vatican located?', 'italy'],
	['What is my favourite colour?', 'blue']
];
var questionsRight = [];
var questionsWrong = [];
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

function printResults(list) {
	var resultsHTML = '<ol>';
	for(var i = 0; i < list.length; i += 1) {
		resultsHTML += '<li>' + list[i] + '</li>';
	}
	resultsHTML += '</ol>';
	print(resultsHTML);
}

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = prompt(questions[i][0]);
	response.toLowerCase();
	if (response === answer) {
		questionsRight.push(question);
	} else {
		questionsWrong.push(question);
	}
}

print('<h1>You got ' + questionsRight.length + ' question(s) right.</h1>');
printResults(questionsRight);
print('<h1>You got ' + questionsWrong.length + ' question(s) wrong.</h1>');
printResults(questionsWrong);
