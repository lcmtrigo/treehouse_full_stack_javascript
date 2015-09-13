var message = '';
var student; 
var search;
var searchResults = [];

function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function getStudentReport(results) {
	var report;
	for(var i = 0; i < results.length; i += 1) {
		student = results[i];
		report += '<h2>Student: ' + student.name + '</h2>';
		report += '<p>Track: ' + student.track + '</p>';
		report += '<p>Points: ' + student.points + '</p>';
		report += '<p>Achievements: ' + student.achievements + '</p>';
	}
	return report;
}

while(true) {
	search = prompt('Search student records: type a name or type "quit" to end');
	if (search === null || search.toLowerCase() === 'quit') {
		break; 
	} else {
		message = "<p>Sorry. We couldn't find a student with that name.</p>";
		print(message);
	}
	for(var i = 0; i < students.length; i += 1) {
		student = students[i];
		if(student.name.toLowerCase() === search.toLowerCase()) {
			searchResults.push(student);
		} 
	}
	message = getStudentReport(searchResults);
	print(message);
}



