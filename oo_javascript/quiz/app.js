// Create Questions
var questions = [
	new Question("Who was the first president of the United States?", 
		["George Washington", "Thomas Jefferson"],
		"George Washington"),
	new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?",
		["42", "ayy lmao"],
		"ayy lmao")
];

// Create Quiz
var quiz = new Quiz(questions);

// Display Quiz
QuizUI.displayNext();